"use strict";
const mainImage = document.getElementById("largeImg");
const images = document.getElementById("thumbs");
images.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest("a");
    if (link) mainImage.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
