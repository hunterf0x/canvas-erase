
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		
		<style>
			p {position:absolute;top:0px;left:0px;width:400px;height:300px;}
			#c {position:absolute;top:0px;left:0px;}
		</style>
		
		
		
		<script type="text/javascript">
		function init() {
			var canvas = document.getElementById('c');
			var ctx = canvas.getContext('2d');

			var img = document.createElement('IMG');

			img.onload = function () {
			    ctx.beginPath();
			    ctx.drawImage(img, 0, 0);
			    ctx.closePath();    
			    ctx.globalCompositeOperation = 'destination-out';    
			}

			img.src = "http://dl.dropbox.com/u/12501653/FROST.png";
		
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

		</script>
	</head>
	<body onload="javascript:init();">
	<div>
	    <p>testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... testing... </p>
	    <canvas id="c" width="400" height="400"></canvas>
	</div>
	</body>
</html>
