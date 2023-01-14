document.querySelector('.but').addEventListener('click', () => {
    let a = document.querySelector('.a').value;
    let b = document.querySelector('.b').value;
    let c = document.querySelector('.c').value;
    let pa = parseInt(a);
    let pb = parseInt(b);
    let pc = parseInt(c);
    let result = '';

    if (Number.isInteger(pa) != true || Number.isInteger(pb) != true || Number.isInteger(pc) != true){
        result += 'Invalid input data'
    }
    else {
        let D = Math.pow(b, 2) - 4 * a * c;
        if(D < 0){
            result += 'No solution'
        }
        else if(D == 0){
            let x = -(b/(2*a))
            result += `X = ${x}`
        }
        else if(D > 0){
            let x1 = -((-b + Math.sqrt(D))/(2 * a));
            let x2 = -((-b - Math.sqrt(D))/(2 * a));
            result += (`X<sub>1</sub> = ${x1.toFixed(2)} <br/> X<sub>2</sub> = ${x2.toFixed(2)}`)
        }
    }

    document.querySelector('.out').innerHTML = result;
});