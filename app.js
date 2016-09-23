chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    sendResponse(controlVideo(request.args));
});

function controlVideo(command){
    var $video = $('video')[0];
    switch(command){
        case "medium_back_jump":
            $video.currentTime -= 5;
            return "successful " + command;
        case "medium_forward_jump":
            $video.currentTime += 5;
            return "successful " + command;
        case "long_back_jump":
            $video.currentTime -= 60;
            return "successful " + command;
        case "long_forward_jump":
            $video.currentTime += 60;
            return "successful " + command;
    }
}

