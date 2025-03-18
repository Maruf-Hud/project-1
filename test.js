let keysPressed = {
    up: false,
    right: false,
  };
  
  // Add event listeners for keydown and keyup
  document.addEventListener("keydown", (event) => {
    
  
    // Check if both keys are pressed
    
    if (keysPressed.up && keysPressed.right) {
        console.log("Both Arrow Up and Arrow Right keys are pressed!");
        // Perform actions when both keys are pressed
    }else{
        if (event.key === "ArrowUp") {
            keysPressed.up = true;
            console.log("ArrowUp")
          }
          if (event.key === "ArrowRight") {
            keysPressed.right = true;
            console.log("ArrowRight")
      
          }
    }

  });
  
  document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") {
      keysPressed.up = false;
    }
    if (event.key === "ArrowRight") {
      keysPressed.right = false;
    }
  });