// ==UserScript==
// @name Redirect to Duo Universal Prompt from Okta
// @namespace https://alexhedges.dev
// @match https://*.okta.com/app/*
// @version 1.0
// @description Press "Verify" automatically for you
// @icon https://www.google.com/s2/favicons?sz=64&domain=duosecurity.com
// @grant none
// @homepageURL https://github.com/aphedges/okta-duo-redirect
// @author Alex Hedges
// ==/UserScript==

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(() => {
  // Find the target node
  const submitButton = document.querySelector("input[type='submit']");

  // Only select this button, not any other submit buttons
  if (submitButton && submitButton.value === "Verify") {
    submitButton.click();
    // Disconnect observer
    return true;
  }
});

// Start observing the target node for configured mutations
observer.observe(document.body, config);
