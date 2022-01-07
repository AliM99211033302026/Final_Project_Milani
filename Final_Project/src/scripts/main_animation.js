{
  let circles = document.getElementById("main_animation").children;
  let generator;
  const clr = "rgb(255, 100, 26)";
  const changeRandomColor = () => {
    generator = Math.floor(Math.random() * 36);
    if (circles[generator].style.backgroundColor !== clr) {
      circles[generator].style.backgroundColor = clr;
    } else {
      circles[generator].style.backgroundColor = "unset";
    }
  };
  setInterval(() => {
    changeRandomColor();
  }, 300);
}
