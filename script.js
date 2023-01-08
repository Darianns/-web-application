

wsex.onclick=function(){if(!document.getElementById('img')){
var image=document.createElement('img');
image.id="img2";image.src="https://rd1.medgis.ru/uploads/3c/bf/d1/dd/3cbfd1dd909dae37fa3d1b6248c2b520de7a46e9.jpg";document.body.appendChild(image)}
}
msex.onclick=function(){if(!document.getElementById('img')){var image=document.createElement('img');
image.id="img1";image.src="https://oyla.xyz/uploads/oylaarticle/obesityimg3-1a90f85fb9.jpg";document.body.appendChild(image)}}

 /*калькулятр*/
const inputH = document.querySelector('#input-h')
const inputW = document.querySelector('#input-w')
const inputAge = document.querySelector('#input-age')
const button1 = document.querySelector('button')
const output1 = document.querySelector('#result1')
const output2 = document.querySelector('#result2')
const output3 = document.querySelector('#result3')
const output4 = document.querySelector('#result4')


function matchCost () {
    const h = Number(inputH.value)
    const w = Number(inputW.value)
    const age = Number(inputAge.value)

    if (!h || !w || !age) return
    const totalVolume = (h/ 100) 
    //if (!passenger) matchCost
    console.log(h)
    console.log(w)
    console.log(age)
    output1.innerHTML = (w /(totalVolume * totalVolume)).toFixed(2)
if ( output1.innerHTML<18.5)
 output2.innerHTML=('Недостаточная масса тела')
else if( output1.innerHTML>=18.5 && output1.innerHTML<24.9)
 output2.innerHTML=('Нормальная масса тела')
else if( output1.innerHTML>=25 && output1.innerHTML<29.9)
 output2.innerHTML=('Избыточная масса тела')
else if( output1.innerHTML>=30 && output1.innerHTML<34.9)
 output2.innerHTML=('Ожирение I степени')
else if( output1.innerHTML>=35 && output1.innerHTML<=40)
 output2.innerHTML=('Ожирение II степени')
else if( output1.innerHTML>40)
 output2.innerHTML=('Ожирение III степени')
else
output2.innerHTML=('Неверные данные')
 output3.innerHTML = (Math.round(h - (100 + (h - 100) / 10)))
output4.innerHTML = (('Рекомендуемая норма воды с вашим весом составляет ') + ( Math.round(w* 0.035))) + ( 'л')}
/* колькулятор закончен */


/* Дневник */

inputH.addEventListener('input', matchCost)
inputW.addEventListener('input', matchCost)
inputAge.addEventListener('input', matchCost)

const AddFoodBtn= document.getElementById('add_food_btn');
const food= document.getElementById('food');
const AddFood= document.querySelector('.add_food');

let menu;
!localStorage.menu ? menu=[] : menu= JSON.parse(localStorage.getItem('menu'));

function Task(diary){
    this.diary=diary;
    this.completed=false;
}

const createTeamplate = (task, index) =>{
    return `
    <div class="goals ${task.completed ? "cheked" : ''}">
        <div class="diary">${task.diary}</div>
        <div class="buttons">
            <input onclick="goalsComplete(${index})" class="btn_complete" type="checkbox" ${task.completed ? "cheked" : ''}>
            <button onclick="goalsDelete(${index})" class="btn_delete">Х</button>
        </div>
    </div>`
}

const htmllist= ()=>{
    AddFood.innerHTML = "";
if (menu.length > 0){
    menu.forEach((item, index) => {
        AddFood.innerHTML += createTeamplate(item, index);
        
    })
}
}

htmllist();

const updateMenu= ()=> {
    localStorage.setItem('menu', JSON.stringify(menu));
}

const goalsComplete= index =>{
    console.log(index);
    menu[index].completed=!menu[index].completed;
}

const goalsDelete= index =>{
    menu.splice(index,1);
    updateMenu();
    htmllist();

}
AddFoodBtn.addEventListener('click', () =>{
    menu.push(new Task(food.value));
    updateMenu();
    htmllist();
    food.value= '';

})
/* Дневник закончен */

/* Обратная связь*/
function openForm() {
    document.getElementById("btn_form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("btn_form").style.display = "none";
  }

  /* картинка */
  function openImg() {
    document.getElementById("btn_form").style.display = "block";
  }
  function closeImg() {
    document.getElementById("btn_form").style.display = "none";
  }


  /*проверка данных по цвету и считывание верных данных*/

  const form = document.forms["form"];

  const button = form.elements["button"];
  const inputArr=Array.from(form);
  const vallidInputArr=[];

  inputArr.forEach((a) =>{
      if (a.hasAttribute("data-reg")) {
        a.setAttribute("is-valid", "0");
        vallidInputArr.push(a);
    }
  });
console.log(vallidInputArr);

  button.addEventListener("click", buttonHendler);
form.addEventListener("input", inputHandler);

function inputHandler({target}){
  if (target.hasAttribute("data-reg")){
    inputCheck(target);
  }
}

function inputCheck(a){
  const inputValue= a.value;
  const  inputReg= a.getAttribute("data-reg");
  const reg= new RegExp(inputReg);
  if(reg.test(inputValue)){
    a.style.border= "1px solid rgb(0,196,0)";
    a.setAttribute("is-valid", "1");
  }
  else {
    a.style.border= "1px solid rgb(255,0,0)";
    a.setAttribute("is-valid", "0");
  }
}

  function buttonHendler(e){
      const AllValid = [];
      vallidInputArr.forEach((a) => {
          AllValid.push(a.getAttribute("is-valid"));
      }
      );
    const isValid= AllValid.reduce((acc, current) =>{
return acc && current;
    });
    if(!Boolean(Number(isValid))){
      e.preventDefault();
    }
    console.log(Boolean(Number(isValid)));
  }

  /* Навигация с переходами по разделам */
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Получите элемент с id="defaultOpen" и нажмите на него
  document.getElementById("defaultOpen").click();