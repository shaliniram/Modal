const modal_container= document.querySelector(".modal_container");
const close = document.querySelector("#close");
const open = document.querySelector("#open_modal");


open.addEventListener("click",()=>{
  modal_container.style.display = "block";
  open.style.top = "65%";

});


close.addEventListener("click",()=>{
    modal_container.style.display = "none";
    open.style.top = "50%";
  
  });

window.addEventListener("click",(e)=>{
    if(e.target === modal_container){
        modal_container.style.display = "none";
    }
});