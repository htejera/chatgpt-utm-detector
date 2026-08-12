const TARGET_PARAMETER = "utm_source";
const TARGET_VALUE = "chatgpt.com";
let scanTimer;

function getMatchingLinks() {
  const uniqueLinks = new Map();

  for (const anchor of document.querySelectorAll("a[href]")) {
    try {
      const url = new URL(anchor.href, document.baseURI);

      if (!['http:', 'https:'].includes(url.protocol)) {
        continue;
      }

      if (!url.searchParams.getAll(TARGET_PARAMETER).includes(TARGET_VALUE)) {
        continue;
      }

      if (!uniqueLinks.has(url.href)) {
        uniqueLinks.set(url.href, {
          url: url.href,
          text: anchor.innerText.trim().replace(/\s+/g, " ") || "No visible text"
        });
      }
    } catch {
      // Ignore href values that do not form a valid URL.
    }
  }

  return [...uniqueLinks.values()];
}

function reportCurrentState() {
  const links = getMatchingLinks();
  chrome.runtime.sendMessage({
    type: "chatgptUtmLinksUpdated",
    count: links.length
  }).catch(() => {
    // The extension may have been reloaded while this page remained open.
  });
}

function scheduleScan() {
  clearTimeout(scanTimer);
  scanTimer = setTimeout(reportCurrentState, 200);
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === "getChatgptUtmLinks") {
    sendResponse({ links: getMatchingLinks() });
  }
});

const observer = new MutationObserver(scheduleScan);
observer.observe(document.documentElement, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeFilter: ["href"]
});

reportCurrentState();
