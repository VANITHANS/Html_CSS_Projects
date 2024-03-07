//progress
const progress  =  document.getElementById('progress') ; 
//previous
const prevBtn =  document.getElementById('prev');
//nextbtn 
const nextBtn  = document.getElementById("next");
//circle
const circles =  document.querySelector(".circle" ); 

let activeIndex =1; 

nextBtn.addEventListener ('click' , ()=>{
    activeIndex++ ;
    if(activeIndex > circles.length) {
        activeIndex = circles.length ; 
    }
    updateUI() ; 
})
prevBtn.addEventListener ('click' , ()=>{
    activeIndex-- ;
    if(activeIndex < circles.length) {
        activeIndex = 1 ; 
    }
    updateUI() ; 
})
function updateUI(){
    circles.forEach((circle, index) => {
        if(index < activeIndex) {
            circle.classList.add("active") ; 
        }
        else{
            circle.classList.remove ("active");      
        }
    });
    const actives =  document.querySelectorAll(".active" ); 
    progress.style.width =  ((actives.length-1)/(circles.length-1)) * 100  + '%' ; 

    if(activeIndex=== 1 ) {
        prevBtn.disabled =  true; 

    }
    else if (  activeIndex === circles.length ){
        nextBtn.disabled =  true ; 
    }
    else{
        prevBtn.disabled=false;   
        nextBtn.disabled =false; 
    }
}

