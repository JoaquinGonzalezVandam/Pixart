var myPixelDraw ={
	colorPicked: 	0,
	cellColor:  	"#ecf0f1",
	defaultCells: 	30,
	coloring: 		false,

	init: function(container){
		this.container = container;
		var keys = Object.keys(this.fns);
		console.log(keys);
		for (var i = 0; i < keys.lenght; i++) {

		}
	},
	
	fns: {
		calcSize: function(cantidadCeldas){
			var tamañoDeseado = cantidadCeldas * cantidadCeldas;
			$("#container").empty();
			for (var i = 0; i < tamañoDeseado ; i++) {
					$("#container").append('<div class="cell" draggable></div>');
				}
			var totalAncho = parseInt($("#container").css("width"));
			var anchoCelda = totalAncho/cantidadCeldas;
			
			$(".cell").css({
				"width": 
			});
		},
		reSize: function(){
			console.log("reSize");
		},
		detectMouseUp: function(){
			console.log("detectMouseUp");
		},
		colorPalette: function(){
			console.log("colorPalette");
		},
		pickColor: function(){
			console.log("pickColor");
		},
		colorIt: function(){
			console.log("colorIt");
		},
		colorOnDrag: function(){
			console.log("colorOnDrag");
		},
		reset: function(){
			console.log("reset");
		},
		toggleBorders: function(){
			console.log("toggleBorders");
		},
		disableRightClick: function(){
			console.log("disableRightClick");
		},
		grabImage: function(){
			console.log("grabImage");
		},
	}
};
$(document).ready(function(){
	myPixelDraw.init($("#container"));
});
