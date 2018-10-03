window.onscroll = function() {setScrollButtonVisibility()};

function setScrollButtonVisibility() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("Scrollbutton").style.display = "block";
    } else {
      document.getElementById("Scrollbutton").style.display = "none";
    }
}

function scroller (){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop= 0;
}
