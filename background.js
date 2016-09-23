//envokes the function param with the current active tab
function doInCurrentTab(tabCallback) {
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]); }
    );
}

//Listener for each of the registered commands in manifest
chrome.commands.onCommand.addListener(function(command){
    //send a message to the active tab with the command name and cb function 
    doInCurrentTab(function(tab){
        chrome.tabs.sendMessage(tab.id, {args:command}, function(response){
            //this get printed to the background page
            console.log(response);
        });
    });    
});
