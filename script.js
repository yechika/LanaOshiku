$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var flap = $(".flap");
    var motivationalText = $(".motivational-text"); 
  
    btn_open.click(function() {
        open();
        showMotivationalText(); 
    });
    btn_reset.click(function() {
        reset();
        hideMotivationalText(); 
    });
  
    function open() {
        $(".heart").css("opacity", "0");
        envelope.addClass("open").removeClass("close");
        var video = document.getElementById('video');
        video.play(); 
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
  
    
    function showMotivationalText() {
        motivationalText.removeClass("fade-out").addClass("fade-in").show(); 
    }
  
    function hideMotivationalText() {
        motivationalText.removeClass("fade-in").addClass("fade-out"); 
    }
});
