//  copy text
const   copyText  =  document.querySelector('textarea[name=copyText')  ; 
// final Text
const   finalText  =  document.querySelector('textarea[name=finalText')  ; 
 // moveBtn 
 const moveBtn =  document.querySelector(".moverBtn") ; 
  // copy btn 
  const copyBtn =  document.querySelector(".copyBtn") ; 
 //  output 
  const outputBtn =  document.querySelector(".output" ) ; 

  copyBtn.addEventListener ('click',()=>{
    let  temp =  copyText.value; 
    copyToClipBoard(temp) ;
  } )

  moveBtn.addEventListener ('click', ()=>{
     let temp  = copyText.value; 
     finalText.value= temp ; 
  })
copyText.addEventListener ('click',()=>this.select());
finalText.addEventListener('click',()=>this.select());

function copyToClipBoard(str) {
    const  outputContainer =  document.querySelector(".output-container" );
     const  textArea =  document.createElement('textarea') ; 
     textArea.value =  str;
     outputContainer.appendChild (textArea);
     textArea.select () ;
     document.execCommand('copy'); 
     outputContainer.removeChild(textArea);
     outputBtn.innerHTML = '<h3> Content Copied </h3>';
     output.classList.add('added');
     setTimeout(()=>{
        output.classList.toggle("added");
        outputBtn.textContent= "";
     }, 2000) ; 
}