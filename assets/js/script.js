// DATA INITIAL
//********************************************************************************************************** */

let btnCalc = document.querySelector('.calc');
let btnReset = document.querySelector('.reset');
let btnNext = document.querySelector('.next-nota');
let result = document.querySelector('.result');

let currentNota = document.querySelector('.current-nota-info');
let nextNota = 1;
let notas = [];
let nota = 0;

// EVENTS
//********************************************************************************************************** */
btnNext.addEventListener('click', ()=>{
  nota = parseInt(document.querySelector('#nota').value);
  if(nota>=0&&nota<=10) {
    nextNota++;
    currentNota.innerHTML = `<strong>NOTA - ${nextNota} -</strong>`;
    if(nextNota>4){
      currentNota.innerHTML = `<strong>Calcule a MÉDIA DO ALUNO</strong>`;
      btnNext.style.display = 'none';
      btnCalc.style.display = 'block';
      document.querySelector('#nota').style.display = 'none';
    }
    document.querySelector('#nota').focus();
    changeInfoNotas(nota);
  }else{
    document.querySelector('#nota').focus();
    document.querySelector('.info').innerText= 'Digite um número entre 0 e 10';
    document.querySelector('#nota').value='';
  }
})
btnCalc.addEventListener('click', ()=>{
  currentNota.innerHTML ='';
  let total = notas.reduce((accumulator,elem) => accumulator + elem,0);
  let media = total/notas.length;
  if(media>=6) {
    result.style.cssText =
      `
      display: block;
      background-color: #005F00;
      color: #FFF;
      `;
    result.innerText = `Aluno com aprovado com MÉDIA = ${media.toFixed(1)}`;
  } else if(media>=5&&media<6) {
    result.style.cssText =
      `
      display: block;
      background-color: #FFCC00;
      color: #000;
      `;
    result.innerText = `Aluno fará RECUPERAÇÃO devido a MÉDIA = ${media.toFixed(1)}`;
  } else {
    result.style.cssText =
      `
      display: block;
      background-color: #F00;
      color: #FFF;
      `;
    result.innerText = `Aluno ficou REPROVADO com a MÉDIA = ${media.toFixed(1)}`;
  }
  btnCalc.style.display = 'none';
});
btnReset.addEventListener('click', ()=>{
  nota = 0;
  notas = [];
  nextNota = 1;
  result.style.display = 'none';
  btnNext.style.display = 'block';
  document.querySelector('#nota').style.display = 'block';
  currentNota.innerHTML = `<strong>NOTA - ${nextNota} -</strong>`;
})

// FUNCTIONS
//********************************************************************************************************** */
function changeInfoNotas (nota) {
  notas.push(nota);
  document.querySelector('.info').innerText = '';
  document.querySelector('#nota').value='';
}