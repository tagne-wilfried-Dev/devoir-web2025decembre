
const enters = document.querySelectorAll('td');
let number = []
let ste = ''
var a=0;
var op = '';
var test = false;
enters.forEach(cell => {
    cell.addEventListener('click', function(){
        const val = this.getAttribute("data-value");
        number.push(val);
        console.log(number);
        if(val == '*' || val == '/' || val == '+' || val == '-' || val == '%'){
            // console.log(number[number.length -1]);
            // a=parseInt(number.join(''));
            // console.log(a);
            if(test == true){
                op = number.pop();
                a = number.join('');
                ste = '' + eval(a);
                number = [];
                number.push(ste);
                number.push(op);
            }
            test = true;
        }
        ste += val;
        document.getElementById('result').value = ste;
        document.getElementById('result').classList.remove('egal');
        console.log("valeur entree :"+ val);
    })
})

function egal(){
    a = number.join('');
    ste = '' + eval(a);
    var result = document.getElementById('result');
    result.value = ste;
    result.classList.add('egal');
    number = [];
    // number.push(ste);
    ste = '';
    test = false;
}
// function relo(){
//     location.reload();
// }

// var resete = document.getElementById('reset');
// resete.addEventListener('click',relo());
// let ste ='';
// function afficher_val(){
//     const val = this.getAttribute("data-value");
//     ste += val
//     document.getElementById('result').value = ste;
// }
// const cells = document.getElementsByTagName('td');
// cells.forEach(cell => {
//     cell.addEventListener('click',afficher_val())
// })
