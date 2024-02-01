$(document).ready(function(){
  
  console.log("Top: " +  $("img").position().top + " Left: " + $("img").position().left);
  
  
  $("img").draggable({
    stop: function(){
      console.log('stopping?');
      let dogeLeft = $("img").position().left;
  
      if(dogeLeft > 300){
        console.log("we above 300", dogeLeft);
        
        $("p").text("You WIN! Congrats!");
        
        $("img").attr("src", "https://picsum.photos/200/300");
      }
      else{
        console.log("we not above 300");
      }
    }
  });
  });
  
//   $("img").draggable(function(){
//     
//   }
//   });
  
  
  
  //TODO if position on far right tell user they won