const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");
  
const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    // parse the data captured in res
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};


const selectRandomImage = function(images){
    const randomIndex = Math.floor(Math.random() * images.length);
    // test that number shows up
    console.log(randomIndex);

    // select one image from the array
    const randomImage = images[randomIndex];
    console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function(randomImage){
    // access author and url properties from the array
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}
button.addEventListener("click", function(){
    getImage();
})