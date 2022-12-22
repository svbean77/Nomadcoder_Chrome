const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const choosenImage = images[Math.floor(Math.random() * images.length)];

//javascript를 이용해 tag 추가
const bgImage = document.createElement("img");
bgImage.src = `img/${choosenImage}`;

//이미지를 html body에 추가
document.body.appendChild(bgImage);
