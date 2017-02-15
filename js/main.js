var isCreate = false;//
var display = false;



function crearTablero()
{

	var crearTab= document.getElementById('crearTab');
	if(!isCreate){//si aun no se ha creado lo creo
		
		crearTab.setAttribute("style", "block");
		
		var divCrear='<p class="text-center"><strong>Crear Tablero<strong></p><hr>'+
					'<label>Titulo</label><br>'+
					'<input type="text" id="inputTablero" name="" placeholder="  <<nombre del tablero>>"><br>'+
					'<button id="btnCrearTab">Crear Tablero</button>';
		crearTab.innerHTML= divCrear;	
		btnCrearTab.addEventListener('click',aniadirTablero);
		isCreate=true;
		
	}
	else
	{
		if(!display)
		{
			crearTab.style.display= "block";
			display=true;
		}
		else
		{
			crearTab.style.display= "none";
			display=false;
		}
	}

	
}
function aniadirTablero()
{
	//console.log(inputTablero.value);
	sessionStorage.setItem('tablero',inputTablero.value);
	crearTab.style.display = 'none';
	for(var i=0;i<sessionStorage.length;i++){
        var tablero=sessionStorage.key(i);
        var nombre=sessionStorage.getItem(tablero);
        listaTablero.innerHTML += '<li class="list-unstyled elemento" id="elemento"><small class="text-left">'+nombre+'</small></li>';
    }
    
    var color='#'+Math.floor(Math.random()*16777215).toString(16);
    var elemento=document.getElementById("elemento");
    elemento.style.backgroundColor= color;
    inputTablero.value="";
    inputTablero.focus();
}
function colores()
{
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	console.log(color);
	var colores=document.getElementById("colores");
	colores.style.backgroundColor= color;
}