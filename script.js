$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var flap = $(".flap");

    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        reset();
    });

    function open() {
        $(".heart").css("opacity", "0");
        envelope.addClass("open").removeClass("close");
        setTimeout(function() {
            $(".heart").css("opacity", "1");
        }, 715); 
    }

    function reset() {
        $(".heart").css("opacity", "0");
        envelope.addClass("close").removeClass("open");
        var video = document.getElementById('video');
        video.pause();
        video.currentTime = 0; 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    var playBtn = document.getElementById('open');

    playBtn.addEventListener('click', function() {
        video.play();
    });
});
