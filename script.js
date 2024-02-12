window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    var filter=document.getElementById("filter-toggle");
    header.classList.toggle("sticky",window.scrollY<1000);
    filter.classList.toggle("sticky-filter",window.scrollY>1000);
    window.onscroll = function() {
        if (window.scrollY > 1000) {
             document.getElementById("filter-toggle-header").style.display = "none"; 
             document.getElementById("inner-filter-search").style.display = "block"; 
        }
        else{
            document.getElementById("filter-toggle-header").style.display = "block"; 
            document.getElementById("inner-filter-search").style.display = "none"; 
        }
    };
    
})