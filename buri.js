
// Wrap in an onInstalled callback in order to avoid unnecessary work
// every time the background script is run
chrome.runtime.onInstalled.addListener(function(details) {
    // Page actions are disabled by default and enabled on select tabs
    chrome.action.disable();

    // Clear all rules to ensure only our expected rules are set
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // Declare a rule to enable the action on example.com pages
        let exampleRule = {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: 'portal.azure.com'},
                })
            ],
            actions: [new chrome.declarativeContent.ShowAction()],
            // actions: [chrome.action.onClicked.addListener((tab) => {
            //     console.log("aaa")
            // })],
        };

        // // Finally, apply our new array of rules
        let rules = [exampleRule];
        chrome.declarativeContent.onPageChanged.addRules(rules);
    });
});


// chrome.tabs.onActivated.addListener( function(activeInfo){
//     chrome.tabs.get(activeInfo.tabId, function(tab){
//       setAction(tab.url);
//     });
//   });
  
//   chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
//     if (tab.active && change.url) {
//       setAction(change.url);
//     }
//   });
  
//   function setAction(url) {
//     console.log(url);
//     // chrome.action.setPopup({ popup: "" });
//     chrome.action.setPopup({ popup: "./buri-popup.html"})
//     chrome.action.onClicked.addListener(openGoogle);
//     // const pattern = /^https:\/\/portal.azure.com/;
//     // if (pattern.test(url)) {
//     //   chrome.action.setPopup({ popup: "./buri-popup.html"})
//     //   chrome.action.onClicked.removeListener(openGoogle);
//     // //   chrome.action.enable();
//     // } else {
//     //   chrome.action.setPopup({ popup: "" });
//     //   chrome.action.onClicked.addListener(openGoogle);
//     // //   chrome.action.disable();
//     // }
//   }
  
//   function openGoogle(tab) {
//     const newURL = 'https://www.google.com';
//     chrome.tabs.create({ url: newURL });
//   }
