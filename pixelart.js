var myPixelDraw ={
	colorPicked: 	0,
	cellColor:  	"#ecf0f1",
	defaultCells: 	30,
	coloring: 		false,

	init: function(container){
		this.container = container;
		var keys = Object.keys(this.fns);

		for (var i = 0; i <10 ; i++) {
			this.fns[keys[i]]();
			
		}
	},
	
	fns: {
		calcSize: function(cantidadCeldas){
			if(cantidadCeldas == null){
				cantidadCeldas = myPixelDraw.defaultCells;	
			}
			var tamañoDeseado = cantidadCeldas * cantidadCeldas;
			$("#container").empty();
			for (var i = 0; i < tamañoDeseado ; i++) {
					$("#container").append('<div class="cell" draggable="true"></div>');
				}
			var totalAncho = parseInt($("#container").css("width"));
			var anchoCelda = totalAncho/cantidadCeldas;
			
			$(".cell").css({
				"width": anchoCelda + "px",
				"height": anchoCelda + "px",
				"background-color": "#ecf0f1",
				"outline": "#FFFFFF solid 1px",
				"cursor" : "pointer"
			});
		},
		reSize: function(val){
			this.calcSize(val);
		},
		detectMouseUp: function(){
			$(document).mouseup(function(){
				this.coloring = false;
			});
		},
		colorPalette: function(){
			$("#color-pick >*").each(function(index){
				var color = $(this).attr("class");
				$(this).css({
					"background-color" : color,
				});
			});
		},
		pickColor: function(){
			$("#color-pick div").click(function(){
				myPixelDraw.colorPicked = $(this).attr("class");
				$("#color-pick div.select").removeClass("select");
				$(this).addClass("select");
			});
		},
		colorIt: function(){
			$('#container .cell').mousedown(function(event) {
				var that = $(this);
				event.preventDefault();
    			switch (event.which) {
	        		case 1:
			            that.css({
			            	"background-color" : myPixelDraw.colorPicked
			            });
			            break;
			        case 3:
			            that.css({
			            	"background-color" : myPixelDraw.cellColor
			            });
			            break;
		    	}
			});
		},
		colorOnDrag: function(){
			$(document).mousemove(function(event){
				if (myPixelDraw.coloring=true) {
					var y = event.pageY;
					var x = event.pageX;
					document.elementFromPoint(x,y)
						switch (event.which) {
		        		case 1:
				            $(this).css({
				            	"background-color" : myPixelDraw.colorPicked
				            });
				            break;
				        case 3:
				        	$(this).css({
				            	"background-color" : myPixelDraw.cellColor
				            });
				            break;
			    	}
				}
			});
		},
		reset: function(){

		},
		toggleBorders: function(){

		},
		disableRightClick: function(){
			$("#container").contextmenu(function(){
				return false
			});
		},
		grabImage: function(){
			console.log("grabImage");
		},
	}
};
$(document).ready(function(){
	myPixelDraw.init($("#container"));
	$("#reset").click(function(){
		$(".cell").css({
			"background-color" : myPixelDraw.cellColor
		})
	});

	$("#toggle-border").click(function(){
				$(".cell").toggleClass("no-border");
			});

	$("#sizeit").click(function(){
		var valorInput = $("#resize").val();
		if (valorInput>50) {
			alert("ingrese un valor entre 0 y 50")
		}else{
			myPixelDraw.fns.reSize(valorInput);
		}
	});
});
