const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector("users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = () => {
  searchBar.classList.toggle("active");
  searchBar.focus();
  searchBtn.classList.toggle("active");
  searchBar.value = "";
}

searchBar.onkeyup = () => {
  let searchTerm = searchBar.value;
  if(searchTerm != ""){
    searchBar.classList.add("active");
  }else{
    searchBar.classList.remove("active");
  }
  //let's start ajax
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("POST", "../php/search.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        let data = xhr.response;
        //console.log(data);
        usersList.innerHTML = data;
      }
    }
  }
  xhr.setRequestHeader("Content-type", "application/x-ww-form-urlencoded");
  xhr.send("searchTerm" + searchTerm);
}

setInterval(() => {
  let xhr = new XMLHttpRequest(); //creating XML object
  xhr.open("GET", "../php/users.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let data = xhr.response;
        //console.log(data);
        //usersList.innerHTML = data;
        if(!searchBar.classList.contains("active")){// if active active not contains in seacrh bar then add this data
          usersList.innerHTML = data;
        }
      }
    }
  }
  xhr.send()
}, 500); //this function will frequently after 500ms
