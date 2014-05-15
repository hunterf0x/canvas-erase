/**
 * Created by hvaras on 13-05-14.
 */
$(function() {


    function hideURLbar() {
        if (window.location.hash.indexOf('#') == -1) {
            window.scrollTo(0, 1);
        }
    }

    if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {
        addEventListener("load", function() {
            setTimeout(hideURLbar, 0);
        }, false);
    }

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var rc = 0;  // resize counter
    var oc = 0;  // orientiation counter
    var ios = navigator.userAgent.match(/(iPhone)|(iPod)/); // is iPhone
    var orientationLabel;

    function orientationChange() {
        // inc orientation counter
        oc++;
        readDeviceOrientation();
    }
    function resizeCanvas() {

        // inc resize counter
        rc++;

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



        // hides the WebKit url bar
        if (ios) {
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 100);
        }
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, cwidth, cheight);
        ctx.fillStyle = 'black';
        ctx.fillRect(10, 10, cwidth - 20, cheight - 20)

        // write number of orientation changes and resize events
        /*ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Orientiation changes: '+orientationLabel + oc, cwidth/2, cheight/2);
        ctx.fillText('Resize events: '+rc, cwidth/2, cheight/2 + 10);*/

        //var img = new Image();
        var img = document.createElement('IMG');
        img.onload = function () {
            var ratio = 1;

            ctx.beginPath();
            ctx.drawImage(img, 10, 10, img.width-20, img.height-20, 10, 10, canvas.width-20, canvas.height-20);

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









    // Install resize and orientation change handlers. Note Android may firef both
    // resize and orientation changes when rotating.
    var resizeTimeout;
    $(window).resize(function() {
        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(resizeCanvas, 150);


    });
    readDeviceOrientation();
    resizeCanvas();



    var otimeout;
    window.onorientationchange = function() {
        clearTimeout(otimeout);
        otimeout = setTimeout(orientationChange, 100);
    }





    function readDeviceOrientation() {




        if (Math.abs(window.orientation) === 90) {
            // Landscape
            orientationLabel = "LANDSCAPE " + window.orientation;
        } else {
            // Portrait
            orientationLabel = "PORTRAIT " + window.orientation;
        }


    }























});