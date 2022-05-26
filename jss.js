console.log("connected");
let doc=window.document;

doc.body.style.backgroundColor="black";
doc.body.style.justifyContent="center";
doc.body.style.alignItems="center";
doc.body.style.display="flex";

let div1=doc.createElement("div");
let div2=doc.createElement("div");
let div3=doc.createElement("div");


div1.style.height="500px";
div1.style.width="500px";
div1.style.backgroundColor="pink";
div1.style.transform="rotate";
div1.style.clipPath="polygon( 50% 0% 100% 10%)";
doc.body.appendChild(div1);
console.log(div1);