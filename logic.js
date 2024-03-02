let hiremeee=document.querySelector(".hire__me");
function hire(){
   console.log(alert("Thank u for hire me"));
}

let body=document.querySelector("body");


let butt=document.querySelector("#but1");
let currentmode="lightmode";

butt.addEventListener("click",()=>{

   if(currentmode==="lightmode"){
      currentmode="darkmode";
     body.classList.add("darkmode");
   }
   else{
      currentmode="lightmode";
     body.classList.add("lightmode");
   }

}
);
