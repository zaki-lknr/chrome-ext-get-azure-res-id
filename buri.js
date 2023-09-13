var createProperties = {
    id: "buri azure",
    title: 'Get Azure Resource ID',
    contexts: ["all"]
};

// chrome.contextMenus.create({
//     "id": "buri azure", 
//     "title": "Get Azure Resource ID",
//     "contexts": ["all"]
// });
// // cannot create item with duplicate context menu id in extension エラーがたまに出る

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(createProperties);
});
// // 一応動くがどのサイトでも有効
// chrome.tabs.onCreated.addListener(function(tab) {
//     if (tab.url.match(/portal.azure.com/)) {
//         chrome.contextMenus.create(createProperties);
//     }
//     else {
//         chrome.contextMenus.remove("buri azure");
//     }
// });

// chrome.tabs.onActiveChanged.addListener(function(id,info){
//     chrome.tabs.get(id,function(tab){
//         if (tab.url.match(/portal.azure.com/)) {
//             chrome.contextMenus.create(createProperties);
//         }
//         else {
//             chrome.contextMenus.remove("buri azure");
//         }
//     });
// });
// chrome.tabs.onActivated.addListener(function(info){
//     chrome.tabs.get(info.tabId,function(tab){
//         if (tab.url.match(/portal.azure.com/)) {
//             chrome.contextMenus.create(createProperties);
//         }
//         else {
//             chrome.contextMenus.remove("buri azure");
//         }
//     });
// });
// chrome.tabs.onUpdated.addListener(function(id,info,tab){
//     if(tab.active){
//         if (tab.url.match(/portal.azure.com/)) {
//             chrome.contextMenus.create(createProperties);
//         }
//         else {
//             chrome.contextMenus.remove("buri azure");
//         }
//     }
// });
// // 非Azureが続くとduplicateになる

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // console.log("add listener");
    let current_url = tab.url;
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        chrome.tabs.sendMessage(tab.id, tab.url, function(response) {
            // console.log(response);
        });
    });
});

// function buriContextMenu(info, tab) {
//     let current_url = tab.url;
//     chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
//         chrome.tabs.sendMessage(tab.id, tab.url, function(response) {
//             // console.log(response);
//         });
//     });
// }
