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
