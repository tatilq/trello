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
	var isPaint=false;
	sessionStorage.setItem('tablero',inputTablero.value);
	crearTab.style.display = 'none';
	for(var i=0;i<sessionStorage.length;i++){
        var tablero=sessionStorage.key(i);
        var nombre=sessionStorage.getItem(tablero);
        listaTablero.innerHTML += '<li class="list-unstyled elemento" id="elemento"><small class="text-left">'+nombre+'</small></li>';
    }

    var li=document.getElementsByClassName("elemento");
    var elemento=document.getElementById("elemento");
    //var color='#'+Math.floor(Math.random()*16777215).toString(16);
    //console.log(li.length);
    var long=li.length;

    for(var i=0;i<long;i++)
    {
    	li[i].style.backgroundColor= colores();
    }

    elemento.addEventListener('click',crearTarjeta);
    inputTablero.value="";
    inputTablero.focus();
}
function colores()
{
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	
	return color;
}
function crearTarjeta()
{
	listaTablero.innerHTML="";
}