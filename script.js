const form = document.querySelector("form");

eField =form.querySelector (".email"),
eInput= eField.querySelector("input"),

pField= form.querySelector( ".password"),


pInput = pField.querySelector("input"),
numfield=form.queryselector(".number"),
numinput=numfield.queryselector("input")

form.onsubmit = (e)=>{
  e.preventDefault(); 

  (eInput.value== "") ? eField.classList.add("shake", "error") : checkEmail();

(pInput.value == "") ? pField.classList.add("shake", "error") : check_pass();

(numinput.value == "") ? numfield.classList.add("shake", "error") : check_num();

  setTimeout(()=>{ 
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    numfield.classList.remove("shake");
    }, 500);

  eInput.onkeyup = ()=>{checkEmail();} 
  pInput.onkeyup = ()=>{check_pass();} 
  numinput.onkeyup=()=>{check_num();}
  function checkEmail(){ 
    let pattern =   /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){ 
      eField.classList.add("error");
    eField.classList.remove("valid");
    let errorTxt =eField.querySelector(".error-txt");
      
      (eInput.value != "") ? errorTxt.innerText = "The email address is not valid" : errorTxt.innerText = "Email cannot be blank";
    
  }else{ 
      eField.classList.remove("error");

    eField.classList.add("valid");
    }
  }

  function check_pass(){ 
    if(pInput.value == ""){ 
      pField.classList.add("error");

      pField.classList.remove("valid");

    }else{ 
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }
 
   function checknum(){
    if (numinput.value==""){
      numfield.classList.add("error");
      numfield.classList.remove("valid");

    }
    else{
      numfield.classList.remove("error");
      numfield.classList.add("valid");
    }
   }
  
  if(!eField.classList.contains("error") && !pField.classList.contains("error") && !numfield.classList.contains("error")){
    window.location.href = form.getAttribute("sign_in.html");
  }
}
