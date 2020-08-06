let number=0;

const number_p=document.getElementById('number');
const addCount=document.getElementById('add-count');
const lowerCount=document.getElementById('low-count');

addCount.addEventListener('click',add);
lowerCount.addEventListener('click',low);

function add(){
  number++;
  number_p.innerHTML=number;

  if(number>0){
  number_p.style.color='green';
  }else if(number<0){
    number_p.style.color='red';
  }else {
    number_p.style.color='white';
  }
function low (){
    number--;
    number_p.innerHTML=number;
    
    if(number>0){
        number_p.style.color='green';
        }else if(number<0){
          number_p.style.color='red';
        }else {
            number_p.style.color='white';  
        }
}