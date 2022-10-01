// ! Footer
// * Copyright
const footer = document.getElementById("footer");

let footer_p = document.createElement("p");
footer_p.className = "copyright";
footer.appendChild(footer_p);

let year_ft = new Date().getFullYear();
footer_p.innerText = `© ${year_ft} Diego Inácio.`;

// * Links
var footer_div = document.createElement("div");
let footer_a = document.createElement("a");
footer_a.href = "https://diegoinacio.github.io/";
footer_a.title = "personal website";
footer_a.target = "_blank";
footer_a.innerText = "diegoinacio.github.io";
footer_div.appendChild(footer_a);
footer.appendChild(footer_div);

var footer_div = document.createElement("div");
footer_a = document.createElement("a");
footer_a.href = "https://github.com/diegoinacio";
footer_a.title = "GitHub";
footer_a.target = "_blank";
footer_a.innerText = "github.com/diegoinacio";
footer_div.appendChild(footer_a);
footer.appendChild(footer_div);

// * Hidden Content
const ee_div = document.createElement("div");
ee_div.className = "hidden-content";
ee_div.title = "hidden content";
footer.appendChild(ee_div);

ee_div.addEventListener("click", (e) => {
  const cc = document.getElementById("creative-coding");
  cc.style.display = "block";
  footer.removeChild(e.target);
});
