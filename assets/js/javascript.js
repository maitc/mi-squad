function principal(){ 
	function Squad(nombre, apellido, edad, hobbies, comentario){
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.hobbies = hobbies;
		this.comentario = function(){
				var el = document.createElement("textarea");
				var cont = document.createTextNode(" ");
				el.appendChild(cont);
				el.setAttribute("cols", "35");
				el.setAttribute("rows", "5");	
				var padre = document.getElementById("imprimir");
				padre.appendChild(el);

		}
	}
var arrayS = [];

var companiera1 = new Squad("Anayn", "Pavez"," 27 años", ["Dibujar", "Pastelería", "Andar en bici"]);
var companiera2 = new Squad("Muriel", "Bahamondes"," 25 años", ["Fumar hierba", "Jugar pool", "Navegar por internet"]);
var companiera3 = new Squad("Simona", "Ulloa","29 años", ["Ver Netflix", "Escuchar música", "Tomar chela"]);
var companiera4 = new Squad("Anaïs", "Figueroa","19 años", ["Estar con la Amelia", "Ver Netflix", "Estar con mi pareja"]);
var companiera5 = new Squad("Carolina", "Quintana","32 años", ["Comer sushi", "Acariciar a mis gatas", "Patinar<3"]);


arrayS.push(companiera1);
arrayS.push(companiera2);
arrayS.push(companiera3);
arrayS.push(companiera4);
arrayS.push(companiera5);

	
	
arrayS.forEach(function(cv){
	var o = ("Nombre: " + cv.nombre + " " + cv.apellido + " Edad: " + cv.edad + " Hobbies: " + cv.comentario());
	var elemento = document.createElement("p");
	var contenido = document.createTextNode(o);
	elemento.appendChild(contenido);
	document.getElementById("imprimir").appendChild(elemento);
		
		cv.hobbies.forEach(function(e){
			var w = (e);
			var elemento = document.createElement("li");
			var contenido = document.createTextNode(w);
			elemento.appendChild(contenido);
			var padre = document.getElementById("imprimir");
			padre.appendChild(elemento);
			
			
		})
	})
}

principal();
