const button = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".collapse");
const xbtn = document.querySelector(".icon")
button.addEventListener("click", function(){
    if(collapse.classList.contains("collapse")){
        collapse.classList.remove("collapse");
        xbtn.classList="fa fa-times";
    } else{
        collapse.classList.add("collapse");
        xbtn.classList="fa fa-bars";
    }
    

});