$(document).ready(function(){
  
//add new items to the list with the input box
  $(".add").click(function(){
    if(!$.trim($('input').val())) {
      alert("You can't think of ANYTHING??");
    }
      else{$(".items ul").prepend(
      $('<li><div class="box"></div>' + $("input").val() + '<div class="delete"></div></li>')
        )}
  });
  
//check box/strike through text when clicked
  $('ul').on('click','li',function(event){
    $(this).toggleClass('two');
    $(this).children('.box').toggleClass('checked');
  })
  
//show delete sign on hover
  $('ul').on('mouseenter','li',function(){
    $(this).children('.delete').css('display','inline');
  });
  $('ul').on('mouseleave','li',function(){
    $(this).children('.delete').hide();
  });

//remove when delete is pressed
  $('ul').on('click', '.delete', function(e){
    e.preventDefault();
    $(this).parent().remove();
  });
    
 
});