// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var currentIndex = 0;

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;

  }

  // YOUR TASK: Finish this function!
    // event.target is the object that was clicked
	document.getElementsByTagName("img")[0].src = pictures[currentIndex];
}



  document.getElementsByTagName("img")[0].addEventListener("click", function (event) {
  	showNextPicture();
  });