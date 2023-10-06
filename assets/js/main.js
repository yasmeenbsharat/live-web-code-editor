
let output = document.getElementById('output');
function runCode() {


    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('js-code').value;
    output.contentDocument.body.innerHTML = `${htmlCode} <style> ${cssCode} </style>`;
    output.contentWindow.eval(jsCode);
    console.log(htmlCode);

}