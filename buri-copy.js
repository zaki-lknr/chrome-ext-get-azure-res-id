chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    // navigator.clipboard.writeText(request);

    resource_id = '/' + request.split('/').slice(5,13).join('/');
    console.log(resource_id);
    // navigator.clipboard.writeText(resource_id);
    // ここでコピーしようとすると以下のエラーが出る
    //  Uncaught (in promise) DOMException: Document is not focused.

    sendResponse({
        value: request,
        id: resource_id
    });
    // responseは返さないとエラーが出る
    // Unchecked runtime.lastError: The message port closed before a response was received.
});
