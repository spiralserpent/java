function iniciarGaleria(numeroImagenes){
	var url = "./img/";
	//var header = document.getElementById('header'); //arreglo[]
	var header = document.getElementsByClassName('myHeader') //siempre regresa un arreglo/array
	var nombres = [
		"nombre uno",
		"nombre dos",
		"nombre tres",
		"nombre cuatro",
		"nombre cinco",
		"nombre seis",
		"nombre siete",
		"nombre ocho",
		"nombre nueve",
		"nombre diez",
		"nombre once",
		"nombre doce"
	]; 
	for (var i = 0; i < numeroImagenes; i++) {
		var numImg = i+1;
        var create_img = document.createElement("img");
        create_img.src = url + numImg + ".jpg";
        create_img.alt = nombres[i];
        create_img.classList.add("imageStyle");
        header[0].appendChild(create_img);
    }
}