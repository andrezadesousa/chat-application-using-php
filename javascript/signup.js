//xhr.open takes many paramaters but we only pass method, url, and async
// xhr.response gives us response of that passed URL

const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");

form.onsubmit = (e) => {
  e.preventDefault(); //preventing form from submiting
}

continueBtn.onclick = ()=>{
  //let's start ajax
//console.log("Heelo")
    let xhr = new XMLHttpRequest();//creating XML object
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
              }else{
                errorText.style.display = "block";
                errorText.textContent = data;
              }
          }
      }
    }

  //we have to send the form data through ajax to php
  let formData = new FormData(form); //creating new formData object
  xhr.send(formData); //sending the form data to php
}
  


  

