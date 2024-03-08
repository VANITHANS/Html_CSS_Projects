// input 
const  input =  document.querySelector('input' ) ;
//eye icon
const eye  =  document.querySelector (".eye-icon");

console.log(input) ; 
console.log(eye);

eye.addEventListener ('click' ,  ()=>{
    // if (input.type === 'password' ) {
    //     input.type=  'text' ;

    // }
    // else {
    //     input.type= 'password';
    // }
    input.type==='password' ? (input.type='type') :( input.type='password');
}) 