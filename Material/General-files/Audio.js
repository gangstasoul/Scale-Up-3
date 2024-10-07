document.addEventListener('DOMContentLoaded', function() {
            var draggableContainers = document.querySelectorAll('.draggable-container');
            var iframe = document.querySelector('iframe');

            draggableContainers.forEach(function(container) {
                var handle = container.querySelector('.draggable-handle');
                handle.addEventListener('mousedown', startDrag);
                handle.addEventListener('touchstart', startDrag, { passive: false });

                function startDrag(event) {
                    event.preventDefault();

                    var initialX, initialY, offsetX, offsetY;

                    if (event.type === 'mousedown') {
                        initialX = event.clientX;
                        initialY = event.clientY;
                        document.addEventListener('mousemove', drag);
                        document.addEventListener('mouseup', stopDrag);
                    } else if (event.type === 'touchstart') {
                        initialX = event.touches[0].clientX;
                        initialY = event.touches[0].clientY;
                        document.addEventListener('touchmove', drag, { passive: false });
                        document.addEventListener('touchend', stopDrag);
                    }

                    var rect = container.getBoundingClientRect();
                    offsetX = initialX - rect.left;
                    offsetY = initialY - rect.top;

                    // Disable pointer events on the iframe
                    iframe.style.pointerEvents = 'none';

                    function drag(event) {
                        event.preventDefault();
                        var clientX, clientY;

                        if (event.type === 'mousemove') {
                            clientX = event.clientX;
                            clientY = event.clientY;
                        } else if (event.type === 'touchmove') {
                            clientX = event.touches[0].clientX;
                            clientY = event.touches[0].clientY;
                        }

                        container.style.left = (clientX + window.scrollX - offsetX) + 'px';
                        container.style.top = (clientY + window.scrollY - offsetY) + 'px';
                    }

                    function stopDrag() {
                        document.removeEventListener('mousemove', drag);
                        document.removeEventListener('mouseup', stopDrag);
                        document.removeEventListener('touchmove', drag);
                        document.removeEventListener('touchend', stopDrag);

                        // Re-enable pointer events on the iframe
                        iframe.style.pointerEvents = 'auto';
                    }
                }
            });
        });


  var video = document.getElementById("Video6");  
  var audio1 = document.getElementById("audio1");  
  var controlButton1 = document.getElementById("rewindButton1");
  var controlButton2 = document.getElementById("rewindButton2");
  var controlButton3_4 = document.getElementById("rewindButton3_4");
  var controlButton5 = document.getElementById("rewindButton5"); 
  var controlButton6 = document.getElementById("rewindButton6");
  var controlButton7 = document.getElementById("rewindButton7");
  var controlButton8 = document.getElementById("rewindButton8");
  var controlButton9 = document.getElementById("rewindButton9");
   var controlButton11 = document.getElementById("rewindButton11");
    var controlButton12 = document.getElementById("rewindButton12");
	 var controlButton13 = document.getElementById("rewindButton13");
	  var controlButton14 = document.getElementById("rewindButton14");
	   var controlButton15 = document.getElementById("rewindButton15");
	    var controlButton16 = document.getElementById("rewindButton16");
		 var controlButton17 = document.getElementById("rewindButton17");
		  var controlButton18 = document.getElementById("rewindButton18");
		  
  controlButton1.addEventListener("click", function() {
    video.currentTime = 20;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 3000); 
  });

  controlButton2.addEventListener("click", function() {
    video.currentTime = 28;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 9000); 
  });

  controlButton3_4.addEventListener("click", function() {
    video.currentTime = 68;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 6750); 
  });

  controlButton5.addEventListener("click", function() {
    video.currentTime = 87;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 6800); 
  });

  controlButton6.addEventListener("click", function() {
    video.currentTime = 113;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 1820);    
  });

  controlButton7.addEventListener("click", function() {
    video.currentTime = 128;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 3800);    
  });

  controlButton8.addEventListener("click", function() {
    video.currentTime = 154;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 5800); 
  });

  controlButton9.addEventListener("click", function() {
    video.currentTime = 201;
    video.play();
    setTimeout(function() {
      video.pause();
    }, 6500); 
  });

  controlButton11.addEventListener("click", function() {
    audio1.currentTime = 26;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 5000); 
  });
  
   controlButton12.addEventListener("click", function() {
    audio1.currentTime = 31;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 9500); 
  });

  controlButton13.addEventListener("click", function() {
    audio1.currentTime = 40;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 5000); 
  });
  
    controlButton14.addEventListener("click", function() {
    audio1.currentTime = 52;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 5000); 
  });
  
    controlButton15.addEventListener("click", function() {
    audio1.currentTime = 31;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 9500); 
  });
  
    controlButton16.addEventListener("click", function() {
    audio1.currentTime = 68;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 7000); 
  });
  
    controlButton17.addEventListener("click", function() {
    audio1.currentTime = 75;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 7000); 
  });
  
    controlButton18.addEventListener("click", function() {
    audio1.currentTime = 82;
    audio1.play();
    setTimeout(function() {
      audio1.pause();
    }, 4000); 
  });