// Generates a random color in hexadecimal (e.g., #62b9cc)
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // Changes the color of the background using STYLE
  function changeBackgroundColor() {
    const colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
  }
  
  function changeBackgroundText() {
    const textBg = document.getElementById("text-bg");
    const currentText = textBg.innerHTML;
  
    if (currentText === "BORN TO FISH") {
      textBg.innerHTML = "OR";
    } else if (currentText === "OR") {
      textBg.innerHTML = "FORCED TO WORK";
    } else if (currentText === "FORCED TO WORK") {
      textBg.innerHTML = "BORN TO FISH";
    }
  }
  
  function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
  }
  
  setInterval(changeBackground, 100);


let graph = document.getElementById('paragraph');
console.log(paragraph); // <== <p id="paragraph">What is your name?</p>

let links = document.getElementsByClassName('link');
console.log(links); // <== HTMLCollection [a#google-link.link, google-link: a#google-link.link]
// 0: a#google-link.link

let gameFish = document.getElementById('title');
console.log(gameFish);

let code = document.getElementsByClassName('item')
console.log(code)

let divs = document.getElementsByTagName('div');
console.log(divs);

let paragraphDoc = document.getElementById('paragraph');
let paragraphId = paragraphDoc.getAttribute('id');
console.log(paragraphId); // <== paragraph