const colorPreview = document.querySelector(".preview"); 
const colorSlider = document.getElementById("hue-slider");
const brightnessSlider = document.getElementById("brightness-slider");
const contrastSlider = document.getElementById("contrast-slider");

colorSlider.addEventListener("input", function() {
  const hue = this.value;
  const color = `hsl(${hue}, 100%, 50%)`;

  colorPreview.style.backgroundColor = color;
  colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`;

  console.log(color, hue)
})