
function resoudre(){
    
    let a = parseInt(document.form.a.value);
    let b = parseInt(document.form.b.value);
    let c = parseInt(document.form.c.value);
    if(isNaN(a) && isNaN(b) && isNaN(c)){
        alert('Veuillez entrer des valeurs!');
        return;
    }
    else{
        let result = 0;
        if(a == 0){
            if(b == 0){
                if(c == 0){
                    result = "Solutions infinis";
                }
                else{
                    result = "Pas de solution";
                }
            }
            else{
                result = "Solution x= "+ (-b/c);
            }
        }
        else{
            let dis = (b*b - 4*a*c) ** 0.5;
            dis = dis.toFixed(2)

            console.log("discriminant= "+dis);
            if(dis == 0)
                result = 'Solution double: Ro= '+(-b/2*a);
            else if(dis > 0){
                let r1 = (-b-dis)/2*a;
                r1 = r1.toFixed(2);
                let r2 = (-b+dis)/2*a;
                r2 = r2.toFixed(2);
                result = 'solutions distinctes:'+ ' R1= '+r1+'  et R2= ' +r2; 
            }
            else{
               result = 'pas de solution';//Desole 
            }
        }
        if(result == "-Infinity") result = '- infini';
        document.getElementById('result').value = result;
    }
}

