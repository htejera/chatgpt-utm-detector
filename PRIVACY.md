# Privacy Policy for ChatGPT UTM Detector

**Last updated:** August 12, 2026

## Overview

ChatGPT UTM Detector is a Chrome extension that detects links containing the URL parameter `utm_source=chatgpt.com`.

When at least one matching link is found, the extension changes its toolbar icon from gray to red. Users can click the icon to view the matching links and copy individual URLs or the complete list.

This privacy policy explains what information the extension accesses and how that information is handled.

## Data Access

### What data does the extension access?

The extension runs on HTTP and HTTPS webpages and examines hyperlinks contained in the current page.

Specifically, it may access:

* The destination URLs of HTML links (`<a href>`)
* The visible text associated with matching links
* Changes to links added or modified after the page loads
* The identifier of the active browser tab, solely to communicate with the extension popup

The extension only selects links whose `utm_source` URL parameter has the exact value `chatgpt.com`.

### Why is this data accessed?

This information is accessed exclusively to provide the extension’s single purpose:

* Detect links attributed to `chatgpt.com`
* Remove duplicate URLs from the results
* Update the toolbar icon when matching links are found
* Display matching URLs and their visible text in the extension popup
* Allow users to copy individual URLs or the complete list

The extension does not analyze the content of destination pages and does not follow or open detected links automatically.

## Data Collection and Storage

### Does the extension collect or store user data?

**No.** ChatGPT UTM Detector does not collect or permanently store user data.

The extension does not use:

* `localStorage`
* IndexedDB
* Cookies
* Chrome’s storage API
* Remote databases
* Analytics services
* Tracking technologies

Matching links are generated in memory when the page is scanned or when the user opens the extension popup. This information is discarded when it is no longer needed, such as when the page or tab is closed.

The extension does not create a browsing history or maintain a record of previously visited pages.

## Data Transmission

### Does the extension transmit data externally?

**No.** ChatGPT UTM Detector does not send webpage content, URLs, browsing activity, or personal information to the developer or any external server.

Communication between the webpage scanner, background service worker, and popup occurs locally through Chrome’s internal extension messaging system.

The extension does not make external network requests and does not communicate with ChatGPT, OpenAI, or any other third-party service.

## Clipboard Access

The extension can write detected URLs to the system clipboard when the user explicitly clicks:

* **Copy link**
* **Copy all**

The extension only writes the selected URLs to the clipboard. It does not read, inspect, collect, or transmit existing clipboard content.

## Third-Party Services

ChatGPT UTM Detector does not use any third-party services, APIs, analytics platforms, advertising networks, or external content providers.

Despite its name, the extension is not affiliated with, endorsed by, or operated by OpenAI. It only detects URLs containing the value `utm_source=chatgpt.com`.

## Personal Information

The extension does not intentionally collect:

* Names
* Email addresses
* Account credentials
* Search queries
* Browsing history
* Location information
* Financial information
* Authentication information
* Health information
* Personal communications
* Any other personally identifiable information

## Data Sharing and Sale

ChatGPT UTM Detector does not sell, rent, share, transfer, or disclose user data to third parties.

Because the extension does not collect or retain user data, no user data is available for sale or disclosure.

## User Rights

Because the extension does not collect or permanently store personal data, there is no stored user information to access, correct, export, or delete.

Users can stop all extension functionality at any time by disabling or uninstalling ChatGPT UTM Detector from Chrome.

## Permissions

The extension requires access to HTTP and HTTPS webpages so it can automatically detect matching links and update its toolbar icon before the user opens the popup.

This access is used exclusively for the functionality described in this policy.

Chrome does not allow the extension to inspect restricted internal pages, including pages such as `chrome://extensions/` and the Chrome Web Store.

## Security

All link analysis takes place locally in the user’s browser. The extension does not load remote scripts or transmit detected information to external systems.

Only URLs using the HTTP or HTTPS protocols are included in detection results.

## Changes to This Policy

Any changes to this privacy policy will be published in the extension’s GitHub repository. The **Last updated** date at the beginning of this document will be revised whenever material changes are made.

## Contact

For questions, concerns, or requests regarding this privacy policy, open an issue in the extension’s GitHub repository:

https://github.com/htejera/chatgpt-utm-detector/issues

## Compliance

ChatGPT UTM Detector is designed to comply with:

* Chrome Web Store User Data Policy
* General Data Protection Regulation (GDPR)
* California Consumer Privacy Act (CCPA)

The extension does not collect, store, sell, or transmit personal data.
