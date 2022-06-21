function toggle(div_id,hide_id){
if(div_id==id1){
     $(div_id).animate({
        opacity:0
     },0);
     $(hide_id).hide();
     $(div_id).show();
     $(div_id).animate({
        opacity:1,
        width:"99%",
        height:"99%",
     },500)
   
}
else{
    $(div_id).show();
    $(hide_id).hide();
}
  };