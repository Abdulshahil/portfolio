const about=document.querySelector('#btn1');
const content=document.querySelector('#content');
let count=0;
about.addEventListener("click",()=>{
    count++;
if(count%2==0){
    content.style.display="block";
}
else{
    content.style.display="none";
}
});