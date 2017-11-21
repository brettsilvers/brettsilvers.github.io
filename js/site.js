window.onscroll = function() {
  growShrinkLogo()
};

var Logo = document.getElementById("Logo");

function growShrinkLogo() {
var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
   if( scroll <= 5){
    //if scrolled less than 5
    Logo.className = 'xlargeLogo';
  }   
  else if (scroll > 5)
  if ( scroll < 10){
    Logo.className = 'largeLogo';
}
  else if (scroll > 10)
  if ( scroll < 15){
    Logo.className = 'medLogo';
}
    else if (scroll > 15)
  if ( scroll < 20){
    Logo.className = 'smallLogo';
}
  else if( scroll > 20){ //if scrolled more than 20
    Logo.className = 'xsmallLogo';
  }
 
}


	var leftgear = document.getElementById("leftgear"),
rightgear = document.getElementById("rightgear");
thirdgear = document.getElementById("thirdgear");
    
window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
    rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
    thirdgear.style.transform = "rotate("+window.pageYOffset+"deg)";

});
