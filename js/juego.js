/**
 * Created by hvaras on 19-05-14.
 */

function initJuego(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var ios = navigator.userAgent.match(/(iPhone)|(iPod)/); // is iPhone

    function resizeCanvas() {
        if (ios) {
            // increase height to get rid off ios address bar
            $("#container").height($(window).height())
        }
        var width = $("#container").width();
        var height = $("#container").height();

        cheight = height; // subtract the fix height
        cwidth = width;

        // set canvas width and height
        $("#canvas").attr('width', cwidth);
        $("#canvas").attr('height', cheight);

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, cwidth, cheight);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, cwidth, cheight)

        //var img = new Image();
        var img = document.createElement('IMG');
        img.onload = function () {
            ctx.beginPath();
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

            ctx.closePath();
            ctx.globalCompositeOperation = 'destination-out';
        }
        img.src = "http://protected-mountain-3716.herokuapp.com/img/nieve1.jpeg";

        function drawPoint(pointX,pointY){
            var grd = ctx.createRadialGradient(pointX, pointY, 0, pointX, pointY, 50);
            grd.addColorStop(0, "rgba(255,255,255,.6)");
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.beginPath();
            ctx.arc(pointX,pointY,50,0,Math.PI*2,true);
            ctx.fill();
            ctx.closePath();
        }

        canvas.addEventListener('touchstart',function(e){
            drawPoint(e.touches[0].screenX,e.touches[0].screenY);
        },false);

        canvas.addEventListener('touchmove',function(e){
            e.preventDefault();
            drawPoint(e.touches[0].screenX,e.touches[0].screenY);
        },false);

    }

    function verificaOrientacion() {
        if (Math.abs(window.orientation) === 90) {
            // Landscape
            return true;
        } else {
            return false;
        }
    }

    function orientationChange() {
        if(verificaOrientacion()==true){
            /*var body = $("html, body");
            body.animate({scrollTop:0}, 'fast', 'swing');*/
            $.fn.custombox('close');
            $('.contenedor-full').hide();

        }else{
            $.fn.custombox(  {
                effect: 'fadein',
                url:'#modal-orientacion',
                escKey:false,
                open: function(){
                    $('.contenedor-full').show();
                }
                /*close: function () {
                    $('.contenedor-full').show();
                }*/
            });
        }
    }

    // Install resize and orientation change handlers. Note Android may firef both
    // resize and orientation changes when rotating.
    var resizeTimeout;
    $(window).resize(function() {
        clearTimeout(resizeTimeout);
        //resizeTimeout = setTimeout(resizeCanvas, 100);
    });


    var otimeout;
    window.onorientationchange = function() {
        clearTimeout(otimeout);
        otimeout = setTimeout(orientationChange, 150);
    }








    resizeCanvas();


}