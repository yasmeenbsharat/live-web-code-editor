let htmlCode = document.getElementById('html-code');
let cssCode = document.getElementById('css-code');
let jsCode = document.getElementById('js-code');
let output = document.getElementById('output');
function debounce(func, delay) {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}


function runCode() {
    output.contentDocument.body.innerHTML = `${htmlCode.value} <style> ${cssCode.value} </style>`;
    output.contentWindow.eval(jsCode.value);
}


const debouncedRunCode = debounce(runCode, 500);
htmlCode.addEventListener('input', debouncedRunCode);
cssCode.addEventListener('input', debouncedRunCode);
jsCode.addEventListener('input', debouncedRunCode);