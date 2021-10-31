// ! Footer
const footer = document.getElementById("footer");

const footer_p = document.createElement("p");
footer_p.className = "copyright";
footer.appendChild(footer_p);

let year_ft = new Date().getFullYear();
footer_p.innerText = `© ${year_ft} Diego Inácio.`;

// * Easter Egg
const ee_div = document.createElement("div");
ee_div.className = "easter-egg";
ee_div.innerText = `easter egg`;
footer.appendChild(ee_div);

ee_div.addEventListener("click", (e) => {
  const cc = document.getElementById("creative-coding");
  cc.style.display = "block";
  footer.removeChild(e.target);
});
