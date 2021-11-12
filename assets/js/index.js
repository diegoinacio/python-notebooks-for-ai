// ! Footer
// * Copyright
const footer = document.getElementById("footer");

let footer_p = document.createElement("p");
footer_p.className = "copyright";
footer.appendChild(footer_p);

let year_ft = new Date().getFullYear();
footer_p.innerText = `© ${year_ft} Diego Inácio.`;

// * Links
let footer_div = document.createElement("div");
let footer_a = document.createElement("a");
footer_a.className = "website";
footer_a.href = "https://diegoinacio.github.io/";
footer_a.title = "Personal Website";
footer_a.target = "_blank";
footer_a.innerText = "diegoinacio.github.io";
footer_div.appendChild(footer_a);
footer.appendChild(footer_div);

footer_div = document.createElement("div");
footer_a = document.createElement("a");
footer_a.className = "github";
footer_a.href = "https://github.com/diegoinacio";
footer_a.title = "GitHub";
footer_a.target = "_blank";
footer_a.innerText = "github.com/diegoinacio";
footer_div.appendChild(footer_a);
footer.appendChild(footer_div);

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
