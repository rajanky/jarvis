$(document).ready(function () {
    
    $('.text').textillate({
        loop:true,
        sync:true,
        in:{
            effect: "bonuceIn",
        },
        out:{
            effect: "bonuceOut",
        },
    })
});