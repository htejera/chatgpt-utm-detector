const ICONS = {
  inactive: {
    16: "icons/inactive-16.png",
    32: "icons/inactive-32.png",
    48: "icons/inactive-48.png",
    128: "icons/inactive-128.png"
  },
  detected: {
    16: "icons/detected-16.png",
    32: "icons/detected-32.png",
    48: "icons/detected-48.png",
    128: "icons/detected-128.png"
  }
};

function updateAction(tabId, count) {
  const detected = count > 0;

  chrome.action.setIcon({
    tabId,
    path: detected ? ICONS.detected : ICONS.inactive
  });

  chrome.action.setTitle({
    tabId,
    title: detected
      ? `${count} link${count === 1 ? "" : "s"} attributed to ChatGPT`
      : "No links attributed to ChatGPT detected"
  });
}

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message?.type !== "chatgptUtmLinksUpdated" || !sender.tab?.id) {
    return;
  }

  updateAction(sender.tab.id, Number(message.count) || 0);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "loading") {
    updateAction(tabId, 0);
  }
});
