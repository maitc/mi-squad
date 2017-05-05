

	function Squad(nombre, apellido, edad, hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;

}

var companiera1 = new Squad("Anayn", "Pavez"," 27 años", "Dibujar, Pastelería, Andar en bici.");
var companiera2 = new Squad("Muriel", "Bahamondes"," 25 años", "Fumar hierba, Jugar pool, Navegar por internet.");
var companiera3 = new Squad("Simona", "Ulloa","29 años", "Ver Netflix, Escuchar música, Tomar chela.");
var companiera4 = new Squad("Anaïs", "Figueroa","19 años", "Estar con la Amelia, Ver Netflix, Estar con mi pareja.");
var companiera5 = new Squad("Carolina", "Quintana","32 años", "Comer sushi, Acariciar a mis gatas, Patinar<3.");

var comp1 = document.getElementById("compa1");
compa1.innerHTML = "<strong>Nombre:</strong> " + companiera1.nombre + " " + companiera1.apellido + "<strong><br>Edad:</strong> " + companiera1.edad + "<strong><br>Hobbies:</strong> " + companiera1.hobbies;

var comp2 = document.getElementById("compa2");
compa2.innerHTML = "<strong>Nombre:</strong> " + companiera2.nombre + " " + companiera2.apellido + "<strong><br>Edad:</strong> " + companiera2.edad + "<strong><br>Hobbies:</strong> " + companiera2.hobbies;

var comp3 = document.getElementById("compa3");
compa3.innerHTML = "<strong>Nombre:</strong> " + companiera3.nombre + " " + companiera3.apellido + "<strong><br>Edad:</strong> " + companiera3.edad + "<strong><br>Hobbies:</strong> " + companiera3.hobbies;
3
var comp4 = document.getElementById("compa4");
compa4.innerHTML = "<strong>Nombre:</strong> " + companiera4.nombre + " " + companiera4.apellido + "<strong><br>Edad:</strong> " + companiera4.edad + "<strong><br>Hobbies:</strong> " + companiera4.hobbies;

var comp5 = document.getElementById("compa5");4
compa5.innerHTML = "<strong>Nombre:</strong> " + companiera5.nombre + " " + companiera5.apellido + "<strong><br>Edad:</strong> " + companiera5.edad + "<strong><br>Hobbies:</strong> " + companiera5.hobbies;

