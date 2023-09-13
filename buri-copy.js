chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    navigator.clipboard.writeText(request);

    resource_id = '/' + request.split('/').slice(5,13).join('/');
    console.log(resource_id);
    navigator.clipboard.writeText(resource_id);

    // sendResponse({
    //     value: request,
    // });
});
