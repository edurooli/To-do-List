var inputT = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('addTarefa');
var main = document.getElementById('lista');
let contador = 0;
function addTarefa(){
  var valorIpt = inputT.value;
  
 ++contador;
 
  var novaTarefa = `<div class="tarefa" id="${contador}" ondblclick="trfFocada(${contador})">
  <button class="check" id="button_${contador}"onclick="marcarTarefa(${contador})">
  
      <img id="btn-img-${contador}"height="18px"src="img/square.png">
      
  </button>
    
    <p class="oq" id="text-${contador}"onclick="marcarTarefa(${contador})">${valorIpt}</p>
    
    
  <button class="delete" onclick="delTarefa(${contador})">
      <img src="img/noun-delete.png" height="30px">
  </button>
  
</div>`
  if((valorIpt !== "") && (valorIpt !== null) && (valorIpt !== undefined)){
    main.innerHTML += novaTarefa
  }
  inputT.value = ""
  inputT.focus();
}
function delTarefa(id){
  tirar = document.getElementById(id);
  tirar.remove();
}




function marcarTarefa(id){
  
  var trf = document.getElementById(id);
  var classe = trf.getAttribute('class');
  
  if(classe == "tarefa"){
    trf.classList.add('marked')
  var imgMark = document.querySelector('#btn-img-'+id);
  imgMark.src = 'img/mark.png'
  imgMark.style.height = '23px'
  }else{
    trf.classList.remove('marked')
var imgMark = document.querySelector('#btn-img-' + id);
imgMark.src = 'img/square.png'
imgMark.style.height = '18px'

  }
  
  
}

function focar(id){

var trfFocada = document.getElementById(id);
  trfFocada.style.padding = '60px'
  
}