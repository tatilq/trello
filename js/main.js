var isCreate = false;
var display = false;
var tablerosArray=[];
function crearTablero()
{

	var crearTab= document.getElementById('crearTab');
	if(!isCreate){//si aun no se ha creado lo creo
		
		crearTab.setAttribute("style", "block");
		
		var divCrear='<p>Crear Tablero</p><hr>'+
					'<label>Titulo</label>'+
					'<input type="text" id="inputTablero" name="" placeholder="<<nombre del tablero>>"><br>'+
					'<button id="btnCrearTab">Crear</button>';
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
	inputTablero.focus();	
}
function aniadirTablero()
{
	var isPaint=false;
	if(inputTablero.value!="")
	{
		sessionStorage.setItem('tablero',inputTablero.value);
		crearTab.style.display = 'none';
		for(var i=0;i<sessionStorage.length;i++)
		{
	        var tablero=sessionStorage.key(i);
	        var nombre=sessionStorage.getItem(tablero);
	        tablerosArray[i]=nombre;
	        listaTablero.innerHTML += '<li class="list-unstyled elemento" onclick="crearListas()" id="elemento"><small class="text-left">'+nombre+'</small></li>';
	    }
	    var li=document.getElementsByClassName("elemento");
	    var elemento=document.getElementById("elemento");
	    var long=li.length;
	    for(var i=0;i<long;i++)
	    {
	    	li[i].style.backgroundColor= colores();
	    }
	    inputTablero.value="";
	}
	else
	{
		alert("Ingresa un nombre para tu tablero");
	}
}
function colores()
{
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	return color;
}
function crearListas(evt)
{
	var mitablero=document.getElementById("mitablero");
	listaTablero.style.display="none";
	tituTab.style.display="none";
	mitablero.innerHTML='<ul class="listas list-unstyled"  id="listaTareas"><li><input type="text" class="form-control" id="inputLista" autofocus placeholder="Añadir una lista..."><br>'+
						'<button onclick="aniadirLista(event)">Guardar</button><span><a href="#" class="btn style="text-decoration:none;"> X</a></span></li></ul>';
	
}
function aniadirLista(evt)
{
	var inputLista=document.getElementById("inputLista");
	var listaTareas=document.getElementById("listaTareas");

	var inputLista=document.getElementById("inputLista");
	if(inputLista.value!="")
	{
		inputLista.focus();
		var lista='<ul class="listas list-unstyled"  id="listaTarjetas"><li><p><strong>'+inputLista.value+'</strong><p><input type="text" class="form-control" id="inputTarjeta" placeholder="Añadir una Tarjeta..."><br>'+
						'<button onclick="aniadirTarjeta(event)">Añadir</button><span><a href="" class="btn style="text-decoration:none;"> X</a></span></li></ul>';
		listaTareas.innerHTML+=lista;
	}

}
function aniadirTarjeta(evt)
{
	var inputTarjeta=document.getElementById("inputTarjeta");
	var listaTarjetas=document.getElementById("listaTarjetas");
	if(inputTarjeta.value!=0)
	{
		var tarjeta='<li><p><strong>'+inputTarjeta.value+'</strong><p><input type="text" class="form-control" id="inputTarjeta" placeholder="Añadir una Tarjeta..."><br>'+
						'<button onclick="aniadirTarjeta(event)">Añadir</button><span><a href="" class="btn style="text-decoration:none;"> X</a></span></li>';
	
		listaTarjetas.innerHTML=tarjeta;

	}
}

