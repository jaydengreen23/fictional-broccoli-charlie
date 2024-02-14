$(document).ready(function(){
  
  console.log("Top: " +  $("img").position().top + " Left: " + $("img").position().left);

  
  // 
  //$( "#draggable" ).draggable({ axis: "y" });
   $("img").draggable({
    stop: function(){
      console.log('stopping?');
      let dogeLeft = $("img").position().left;
  
      if(dogeLeft > 300){
        console.log("we above 300", dogeLeft);
        
        $("p").text("You WIN! Congrats!");
        
        $("img").attr("src", "https://i.imgflip.com/4gson0.jpg");
      }
      else{
        console.log("we not above 300");
      }
    }
  });


  //$( "#draggable3" ).draggable({ containment: "#img", scroll: false });

  $(function(){
    $( "img" ).draggable({ containment: "#containment-wrapper", scroll: false });
  });
  $("#DoIt").click(function(){
        // Get the text container element
        console.log('hit button')
        var textContainer = document.getElementById('text-container');
        
        // Create a new text node
        var newText = document.createTextNode('Your AWESOME');
        
        // Clear any existing text in the container
        textContainer.innerHTML = '';
        
        // Append the new text node to the container
        textContainer.appendChild(newText);
    });
});
