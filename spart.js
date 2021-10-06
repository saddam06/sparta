// const btn=document.getElementsByClassName("bt1");

const todobutton = document.querySelector(".menu-btn");
const ul = document.querySelector(".menu");
var btn=document.querySelector(".nbtn1")
var btn2=document.querySelector(".nbtn1")
var btn3=document.querySelector(".nbtn2")
todobutton.addEventListener("click",function(e){
   ul.classList.toggle("active1");
   // if(ul.classList[2]=="active2"){
   //    ul.classList.remove("active2")
      
   // }

   // console.log(ul.classList)
   
})


btn.addEventListener("click",function(){
   if(ul.classList[1]=="active1"){
     ul.classList.toggle("active1")
    
   }
   
});
btn3.addEventListener("click",function(){
   if(ul.classList[1]=="active1"){
     ul.classList.toggle("active1")
    
   }
   
});
btn2.addEventListener("click",function(){
   if(ul.classList[1]=="active1"){
     ul.classList.toggle("active1")
    
   }
   
});



  
  
