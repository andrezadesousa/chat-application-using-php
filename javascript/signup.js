//xhr.open takes many paramaters but we only pass method, url, and async
// xhr.response gives us response of that passed URL

const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e) => {
  e.preventDefault(); //preventing form from submiting
}

continueBtn.onclick = ()=>{
  //let's start ajax
  //console.log("Heelo")
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("POST", "php/signup.php", true);
  xhr.onload = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        let data = xhr.response;
        //console.log(data)
        if(data == "success"){
          location.href = "users.php"
        }else{
          errorText.textContent = data;
          errorText.style.display = "block";
        }
      }
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
  


  

