const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg"
 
];



const body = document.querySelector("body");

function image_change() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.getElementById("imgCh")
  body.classList.add("bgImage");
  bgImage.style.background='url("img/'+chosenImage+'")'
  setTimeout(image_change,2000);
}

