"use strict";

var newHtml = `
  <div>Hi</div>
`;
const main = document.getElementById("main");
// replace original content
// main.innerHTML = newHtml;
main.insertAdjacentHTML('beforeend',newHtml);

console.log("Print this: ", this)