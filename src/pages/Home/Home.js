// &lt;&gt;WEB DEVELOPER&lt;/&gt;


const h1 = "MICHAEL DALEO";
const h2 = "<> WEB DEVELOPER </>";
const speed = 100;

let i1 = 0;
let i2 = 0;

function type1() {
  if (i1 < h1.length) {
    document.getElementById("typewriter").textContent += h1.charAt(i1);
    i1++;
    setTimeout(type1, speed);
  } else {
    type2(); // start second line when first is done
  }
}

function type2() {
  if (i2 < h2.length) {
    document.getElementById("typewriter2").textContent += h2.charAt(i2);
    i2++;
    setTimeout(type2, speed);
  }
}

window.onload = type1;




