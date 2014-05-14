
<!DOCTYPE html>
<html>
<head>
    <title>Layout Example</title>

    <meta name = "viewport" content = "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style type="text/css">
        body,html
        {
            height: 100%;
            margin: 0;
            padding: 0;
            color: black;
        }

        #container
        {
            width: 100%;
            height: 100%;
            overflow: auto;
            background: blue;
        }

        #container canvas {
            vertical-align: top;
            display: block;
            overflow: auto;
        }

        #fix {
            background: yellow;
            height: 20px;
            tex-align: center;
        }
    </style>
</head>
<body>
<div id="container">
    <canvas id="canvas">
        HTML5 Canvas not supported.
    </canvas>
    <div id="fix">Some Text Here</div>
</div>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script type="text/javascript">
    $(function() { // document ready, resize container

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

            // write number of orientation changes and resize events
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText('Orientiation changes: '+oc, cwidth/2, cheight/2);
            ctx.fillText('Resize events: '+rc, cwidth/2, cheight/2 + 10);
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
    });
</script>
</body>
</html>
Status API Training Shop Blog About © 2014 GitHub, Inc. Terms Privacy Security Contact
