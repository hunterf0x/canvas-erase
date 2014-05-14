/**
 * Created by hvaras on 13-05-14.
 */
$(function() {

    init();


        //Get the canvas & context
        //var canvas = $('#respondCanvas');
        //var ctx = canvas.get(0).getContext('2d');
        //var container = $(canvas).parent();

        //Run function when browser  resize
        $(window).resize( init );







    function init(){
        var canvas = document.getElementById('respondCanvas');
            var ctx = canvas.getContext('2d');
            //canvas.attr('width', $(container).width() ); //max width
            //canvas.attr('height', $(container).height() ); //max height

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

           /* ctx.fillStyle = "#DDDDDD"; //black
            ctx.fillRect( 0, 0, x, y); //fill the canvas

            var resizeText = "Canvas width: "+canvas.width()+"px";
            ctx.textAlign = "center";
            ctx.fillStyle = "#333333"; //white
            ctx.fillText(resizeText, (x/2), (y/2) );*/


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


        //Initial call
        //respondCanvas();



















});