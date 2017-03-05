$(document).ready(function(){
  $('.parallax').parallax();
  $('.materialboxed').materialbox();
});
	
//Create Chart//



//Scroll Fire//
var options = [
	
	{selector: '.staggerAniG', offset: 50, callback: function(el) {
        //Materialize.showStaggeredList($(el));
      } },
	  
	  {selector: '.staggerAniW', offset: 50, callback: function(el) {
        //Materialize.showStaggeredList($(el));
      } },
	
  ];
  
  Materialize.scrollFire(options);
