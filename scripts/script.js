$(document).ready(function(){
  
  console.log("Top: " +  $("img").position().top + " Left: " + $("img").position().left);

  // #containment-wrapper { width: 95%; height:150px; border:2px solid #ccc; padding: 10px; }
  // $( "#draggable3" ).draggable({ containment: "#containment-wrapper", scroll: false })
  // $( "#draggable" ).draggable({ axis: "y" });
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
  
  function myFunction(element, color){
    element.style.color = color;
  }

  function displayText() {
        // Get the text container element
        var textContainer = document.getElementById('text-container');
        
        // Create a new text node
        var newText = document.createTextNode('Your AWESOME');
        
        // Clear any existing text in the container
        textContainer.innerHTML = '';
        
        // Append the new text node to the container
        textContainer.appendChild(newText);
    }
});
