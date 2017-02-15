var isCreate = false;//
var display = false;
function crearTablero()
{

	var listaTableros= document.getElementById('listaTableros');
	if(!isCreate){//si aun no se ha creado lo creo
		
		listaTableros.setAttribute("style", "block");
		
		var divCrear='<p class="text-center"><strong>Crear Tablero<strong></p><hr>'+
					'<label>Titulo</label><br>'+
					'<input type="text" id="inputTablero" name="" placeholder="  <<nombre del tablero>>"><br>'+
					'<button id="btnCrearTab">Crear Tablero</button>';
		listaTableros.innerHTML= divCrear;
		inputTablero.focus();	
		btnCrearTab.addEventListener('click',aniadirTablero);
		isCreate=true;
		
	}
	else
	{
		if(!display)
		{
			listaTableros.style.display= "block";
			display=true;
		}
		else
		{
			listaTableros.style.display= "none";
			display=false;
		}
	}
	
}
function aniadirTablero()
{

}
