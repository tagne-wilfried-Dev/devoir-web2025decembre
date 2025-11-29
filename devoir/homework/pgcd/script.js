

function min(a,b){
    if(a <= b) return a;
    else return b;
}
function max(a,b){
    if(a >= b) return a;
    else return b;
}

function pgcd(){
    let a = parseInt(document.form.vala.value);
    let b = parseInt(document.form.valb.value);
    if(!isNaN(a) && !isNaN(b)){
        let next = min(a,b);
        let pgcd = next;
        while(next != 0){
            pgcd = next;
            a = max(a,b) % min(a,b);
            b = max(a,b);
            next = a;
        }
        document.form.result.value = 'PGCD('+document.form.vala.value +','+document.form.valb.value+')= '+ pgcd ;
    }
    else{
        alert('Veuillez entrer des valeurs !')
    }
}