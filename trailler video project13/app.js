// btn 
const  btn =  document.querySelector(".btn");

// close icon 
const closeIcon =  document.querySelector(".close-icon");

//  trailler container
 const  traillerContainer   =  document.querySelector(".trailler-container");

//video
 const  video =  document.querySelector("video" );

//  console.log(btn) ;
//  console.log(closeIcon);
//  console.log(traillerContainer);
//  console.log(video);

btn.addEventListener ("click", ()=>{
    traillerContainer.classList.remove("active")
})

closeIcon.addEventListener('click', ()=>{
    traillerContainer.classList.add('active');
    video.pause();
    video.currentTime=0;
})