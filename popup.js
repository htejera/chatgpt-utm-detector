const summary = document.querySelector("#summary");
const message = document.querySelector("#message");
const linkList = document.querySelector("#link-list");
const footer = document.querySelector("#footer");
const copyAllButton = document.querySelector("#copy-all");

let currentLinks = [];

async function copyText(text, button, successLabel = "Copied") {
  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = successLabel;
    button.classList.add("copied");

    setTimeout(() => {
      button.textContent = originalLabel;
      button.classList.remove("copied");
    }, 1200);
  } catch {
    button.textContent = "Could not copy";
  }
}

function createLinkItem(link) {
  const item = document.createElement("li");
  item.className = "link-item";

  const linkText = document.createElement("p");
  linkText.className = "link-text";
  linkText.textContent = link.text;

  const url = document.createElement("p");
  url.className = "url";
  url.textContent = link.url;
  url.title = link.url;

  const copyButton = document.createElement("button");
  copyButton.className = "copy-button";
  copyButton.type = "button";
  copyButton.textContent = "Copy link";
  copyButton.addEventListener("click", () => copyText(link.url, copyButton));

  item.append(linkText, url, copyButton);
  return item;
}

function render(links) {
  currentLinks = links;
  linkList.replaceChildren();

  if (links.length === 0) {
    summary.textContent = "No results";
    message.textContent = "This page contains no links with utm_source=chatgpt.com.";
    message.hidden = false;
    footer.hidden = true;
    return;
  }

  summary.textContent = `${links.length} link${links.length === 1 ? "" : "s"} found`;
  message.hidden = true;
  footer.hidden = false;

  for (const link of links) {
    linkList.append(createLinkItem(link));
  }
}

copyAllButton.addEventListener("click", () => {
  const urls = currentLinks.map((link) => link.url).join("\n");
  copyText(urls, copyAllButton, "All copied");
});

async function loadLinks() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.id) {
      throw new Error("No active tab");
    }

    const response = await chrome.tabs.sendMessage(tab.id, {
      type: "getChatgptUtmLinks"
    });

    render(Array.isArray(response?.links) ? response.links : []);
  } catch {
    summary.textContent = "Page unavailable";
    message.textContent = "Chrome does not allow this internal page to be scanned. Open a website and try again.";
    message.hidden = false;
    footer.hidden = true;
  }
}

loadLinks();
