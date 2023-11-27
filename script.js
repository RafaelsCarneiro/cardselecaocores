// script.js

document.addEventListener("DOMContentLoaded", function () {
    const $colors = document.querySelectorAll("#colors li");
    let $activeColor = document.querySelector("#colors li.active");
    let $activeImage = document.querySelector(".left .active");
  
    const handleColorMouseOver = (event) => {
      $activeColor.classList.remove("active");
      $activeColor = event.target;
      $activeColor.classList.add("active");
  
      const color = $activeColor.dataset.color;
      $activeImage.classList.remove("active");
      $activeImage = document.querySelector(`.left .${color}`);
      $activeImage.classList.add("active");
    };
  
    $colors.forEach(($ele) => {
      $ele.addEventListener("mouseover", handleColorMouseOver);
    });
  });
  