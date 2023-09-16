function sample_function() {
    console.log("sample function");
    let param = this.param;
    chrome.tabs.query( {active: true, currentWindow: true}, function(tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, param);
    });
}

// formのonlick()でなくスクリプト側からリスナーを設定する
// https://teratail.com/questions/116400
document.getElementById('sample_id').addEventListener('click', {handleEvent: sample_function, param: "aiueo"});

// window.onload = function() {
//     // console.log("lonload");
//     // alert("aaaaa") # OK
//     let param = this.param;
//     // chrome.tabs.query( {active: true, currentWindow: true}, function(tabs) {
//     //     // chrome.tabs.sendMessage(tabs[0].id, tabs[0].url, function(response) {
//     //     //     console.log("sendmessage")
//     //     // });
//     //     chrome.tabs.sendMessage(tabs[0].id, param);
//     //     // chrome.tabs.sendMessage(tabs[0].id, tabs[0].url);
//     // });

//     // chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
//     //     chrome.tabs.sendMessage(tabs[0].id, location.href, function(response) {
//     //         // console.log(response);
//     //     });
//     // });
// };

window.addEventListener('load',()=>{
    // alert("aaaaa")
    // console.log("bbbb")

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, tabs[0].url, function(response) {
            console.log(response);
            // alert(response.id)
            // navigator.clipboard.writeText(response.id);
            // こっちでも同じエラー
            // Uncaught (in promise) DOMException: Document is not focused.
        });
    });
});
