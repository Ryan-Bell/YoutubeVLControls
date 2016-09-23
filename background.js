function doInCurrentTab(tabCallback) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]); }
    );
}

chrome.commands.onCommand.addListener(function(command){
    console.log("Command: ", command);
    doInCurrentTab(function(tab){
        chrome.tabs.sendMessage(tab.id, {args:command}, function(response){
            console.log(response);
        });
    });    
});
