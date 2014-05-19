/**
 * Created by hvaras on 13-05-14.
 */

$(function() {

    $('#jugar').on('click',function(e){
        e.preventDefault();
        $.when(verificaOrientacion()).then(function(resp){
            if(resp==true){
                activateFullscreen(document.documentElement);

                $('.contenedor-full').fadeOut('slow',function(){

                    $('#container').fadeIn('slow',initJuego());
                });
            }else{
                $.fn.custombox(  {
                    effect: 'fadein',
                    url:'#modal-orientacion'
                });
            }
        })
    });

    /*function hideURLbar() {
        if (window.location.hash.indexOf('#') == -1) {
            window.scrollTo(0, 1);
        }
    }

    if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);
    }*/

    function verificaOrientacion() {
        if (Math.abs(window.orientation) === 90) {
            // Landscape
           return true;
        } else {
            return false;
        }
    }


    function activateFullscreen(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    function fullScreenCancel() {
        if(document.requestFullScreen) {
            document.requestFullScreen();
        } else if(document .webkitRequestFullScreen ) {
            document.webkitRequestFullScreen();
        } else if(document .mozRequestFullScreen) {
            document.mozRequestFullScreen();
        }
    }

    var resizeTimeout;
    $(window).resize(function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 100);
    });

    window.onorientationchange = function() {
        setTimeout(orientationChange, 100);
    }

    function orientationChange() {
        if(verificaOrientacion()==true){

            /*var body = $("html, body");
            body.animate({scrollTop:0}, 'fast', 'swing');*/
            $.fn.custombox('close');
        }
    }


});