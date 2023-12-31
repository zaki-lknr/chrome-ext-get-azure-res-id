var createProperties = {
    id: "buri azure",
    title: 'Get Azure Resource ID',
    contexts: ["all"],
    // documentUrlPatterns: [ '*://portal.azure.com/*', '*://*.portal.azure.net/*' ]  // これはフレームのURLなども厳密に見るのでNG(Azure Portalはフレーム使ってる)
    // documentUrlPatterns: [ 'https://github.com/*' ]
    //enabled: true,
};
//var target = /github.com/
var target = /portal.azure.com/

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
//     if (tab.url.match(target)) {
//         chrome.contextMenus.create(createProperties);
//     }
//     else {
//         chrome.contextMenus.remove("buri azure");
//     }
// });

chrome.tabs.onActivated.addListener(function(info){
    // 同一ウインドウでタブ切替たときに機能する
    console.log("onactivated")
    chrome.tabs.get(info.tabId,function(tab){
        if (tab.url.match(target)) {
            chrome.contextMenus.create(createProperties, () => chrome.runtime.lastError);
        }
        else {
            chrome.contextMenus.remove("buri azure", () => chrome.runtime.lastError);
            // chrome.contextMenus.update("buri azure", null); // NG
            // chrome.contextMenus.removeAll();  // まぁ動く (が、createはどうしようもない)
        }
    });
});
chrome.tabs.onUpdated.addListener(function(id,info,tab){
    // 同一タブでページ遷移した際に機能する
    console.log("onupdate")
    if(tab.active){
        if (tab.url.match(target)) {
            chrome.contextMenus.create(createProperties, () => chrome.runtime.lastError);
        }
        else {
            chrome.contextMenus.remove("buri azure", () => chrome.runtime.lastError);
        }
    }
});

chrome.windows.onFocusChanged.addListener(function(info){
    // ウインドウ切替によるアクティブページの変化
    chrome.tabs.query({'active': true, 'currentWindow': true}, tabs => {
        if (tabs[0].url.match(target)) {
            chrome.contextMenus.create(createProperties, () => chrome.runtime.lastError);
        }
        else {
            chrome.contextMenus.remove("buri azure", () => chrome.runtime.lastError);
        }
    });
});

// 非Azureが続くとduplicateになる

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // console.log("add listener");
    let current_url = tab.url;
    chrome.tabs.query({'active': true, 'currentWindow': true}, tabs => {
        chrome.tabs.sendMessage(tab.id, tab.url, function(response) {
            console.log(response);
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
