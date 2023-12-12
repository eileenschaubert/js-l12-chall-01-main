const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");


// const getData = async function () {
//     const res = await fetch("https://api.quotable.io/quotes?author=maya-angelou");
//     const data = await res.json();
//     console.log(data);
//   };
//   getData();
  
const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    // parse the data captured in res
    const images = await res.json();
    console.log(images);
};
getImage();