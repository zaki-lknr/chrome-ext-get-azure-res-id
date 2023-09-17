function press_copy_button() {
    console.log("sample function");
    resource_id = document.getElementById('resource_id').value;
    // alert(resource_id);
    navigator.clipboard.writeText(resource_id);
}

// // formのonlick()でなくスクリプト側からリスナーを設定する
// // https://teratail.com/questions/116400
document.getElementById('copy').addEventListener('click', {handleEvent: press_copy_button});

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

    chrome.tabs.query({'active': true, 'currentWindow': true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, tabs[0].url, function(response) {
            console.log(response);
            // alert(response.id)
            navigator.clipboard.writeText(response.id);
            // こっちでも同じエラー
            // Uncaught (in promise) DOMException: Document is not focused.
            document.getElementById('resource_id').value = response.id;
            // document.getElementById("copy").focus();
            // document.getElementById('copy').click();
        });
    });
});
