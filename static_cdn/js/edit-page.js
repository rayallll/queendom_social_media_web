//---------------------Edit Page Start-------------------------

// Left Side Bar Activation
const tabBtn = document.querySelectorAll(".tab");
const tab = document.querySelectorAll(".tabShow");
    function tabs(panelIndex){
        tab.forEach(function(node){
            node.style.display = "none";
        });
        tab[panelIndex].style.display = "block";
    }
tabs(0);
//--Emphasize Active tab--//
$(".tab").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});
