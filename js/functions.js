/**
 * Created by hvaras on 13-05-14.
 */
$(function() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var rc = 0;  // resize counter
    var oc = 0;  // orientiation counter
    var ios = navigator.userAgent.match(/(iPhone)|(iPod)/); // is iPhone

    function orientationChange() {
        // inc orientation counter
        oc++;
    }
    function resizeCanvas() {
        // inc resize counter
        rc++;

        if (ios) {
            // increase height to get rid off ios address bar
            $("#container").height($(window).height() + 60)
        }

        var width = $("#container").width();
        var height = $("#container").height();

        cheight = height - 20; // subtract the fix height
        cwidth = width;

        // set canvas width and height
        $("#canvas").attr('width', cwidth);
        $("#canvas").attr('height', cheight)

        // hides the WebKit url bar
        if (ios) {
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 100);
        }
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, cwidth, cheight);
        ctx.fillStyle = 'black';
        ctx.fillRect(10, 10, cwidth - 20, cheight - 20)
        /*
        // write number of orientation changes and resize events
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText('Orientiation changes: '+oc, cwidth/2, cheight/2);
        ctx.fillText('Resize events: '+rc, cwidth/2, cheight/2 + 10);*/

        //var img = new Image();
        var img = document.createElement('IMG');
        img.onload = function () {
            ctx.beginPath();
            ctx.drawImage(img, 10, 10, img.width-20, img.height-20, 10, 10, canvas.width-20, canvas.height-20);
            ctx.closePath();
            ctx.globalCompositeOperation = 'destination-out';
        }

        img.src = "http://images.forwallpaper.com/files/thumbs/preview/8/84534__snow-frost-window_p.jpg";


    }









    // Install resize and orientation change handlers. Note Android may firef both
    // resize and orientation changes when rotating.
    var resizeTimeout;
    $(window).resize(function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 100);
    });
    resizeCanvas();

    var otimeout;
    window.onorientationchange = function() {
        clearTimeout(otimeout);
        otimeout = setTimeout(orientationChange, 50);
    }






       /* //Get the canvas & context
        var ctm = $('#respondCanvas');
        var ctx = ctm.get(0).getContext('2d');
        var container = $(ctm).parent();

        //Run function when browser  resize
        $(window).resize( init );







    function init(){
        //var canvas = document.getElementById('respondCanvas');
            //var ctx = canvas.getContext('2d');
            ctm.attr('width', $(container).width() ); //max width
            ctm.attr('height', $(container).height() ); //max height

            var img = document.createElement('IMG');
            img.onload = function () {
                ctx.beginPath();
                ctx.drawImage(img, 0, 0);
                ctx.closePath();
                ctx.globalCompositeOperation = 'destination-out';
            }

            img.src = "http://images.forwallpaper.com/files/thumbs/preview/8/84534__snow-frost-window_p.jpg";

            //Redraw & reposition content
            //var x = canvas.width();
            //var y = canvas.height();
            //ctx.font = "20px Calibri";

           *//* ctx.fillStyle = "#DDDDDD"; //black
            ctx.fillRect( 0, 0, x, y); //fill the canvas

            var resizeText = "Canvas width: "+canvas.width()+"px";
            ctx.textAlign = "center";
            ctx.fillStyle = "#333333"; //white
            ctx.fillText(resizeText, (x/2), (y/2) );*//*


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





        }
    window.addEventListener('touchstart',function(e){
        drawPoint(e.touches[0].screenX,e.touches[0].screenY);
    },false);

    window.addEventListener('touchmove',function(e){
        e.preventDefault();
        drawPoint(e.touches[0].screenX,e.touches[0].screenY);
    },false);


        //Initial call
        //respondCanvas();
    init();
*/


















});