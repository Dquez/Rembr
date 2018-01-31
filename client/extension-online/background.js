// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Global variables only exist for the life of the page, so they get reset
// each time the page is unloaded.
var counter = 1;

var lastTabId = -1;
function sendMessage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, "Background page started.");
  });
}

sendMessage();
chrome.browserAction.setBadgeText({text: "ON"});
console.log("Loaded.");

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
     if (msg.delayedResponse) {
      // Note: setTimeout itself does NOT keep the page awake. We return true
      // from the onMessage event handler, which keeps the message channel open -
      // in turn keeping the event page awake - until we call sendResponse.
      setTimeout(function() {
        sendResponse("Got your message.");
      }, 5000);
      return true;
    }
    else if(msg.message == "article" ) {
        // sendMessage();
        sendResponse("Article received page started.");
        ;
      }
    // If we don't return anything, the message channel will close, regardless
    // of whether we called sendResponse.
  });



// chrome.runtime.onSuspend.addListener(function() {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     // After the unload event listener runs, the page will unload, so any
//     // asynchronous callbacks will not fire.
//     alert("This does not show up.");
//   });
//   console.log("Unloading.");
//   chrome.browserAction.setBadgeText({text: ""});
//   chrome.tabs.sendMessage(lastTabId, "Background page unloaded.");
// });
