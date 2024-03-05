function clearScreen(){
    document.querySelector('#result').value="";
}

function display(val){
    document.querySelector('#result').value += val;
}

function calculate(){
    let p = document.querySelector('#result').value;
    let q = eval(p);
    document.querySelector('#result').value = q;
}