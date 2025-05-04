
var finalResult = 0;

const h1 = document.createElement('h1');
h1.append('Simple Calculator');
document.body.appendChild(h1);



const parentDiv = document.createElement('div');
parentDiv.classList.add('container');
document.body.appendChild(parentDiv)

const input1 = document.createElement('input');
input1.setAttribute('placeholder', 'value 1');
input1.setAttribute('type', 'text');
parentDiv.appendChild(input1);



const input2 = document.createElement('input');
input2.setAttribute('placeholder', 'value 2');
input2.setAttribute('type', 'text');
parentDiv.appendChild(input2);





const br2 = document.createElement('br');
parentDiv.appendChild(br2);


const plusBtn = document.createElement('button');
plusBtn.append('+');
parentDiv.appendChild(plusBtn);


const minusBtn = document.createElement('button');
minusBtn.append('-');
parentDiv.appendChild(minusBtn);


const mulBtn = document.createElement('button');
mulBtn.append('*');
parentDiv.appendChild(mulBtn);


const divBtn = document.createElement('button');
divBtn.append('/');
parentDiv.appendChild(divBtn);



const equalsBtn = document.createElement('button');
equalsBtn.append('=');
equalsBtn.id = 'equals';
parentDiv.appendChild(equalsBtn);


const br3 = document.createElement('br');
parentDiv.appendChild(br3);


const result = document.createElement('p')
result.append(`Result : ${finalResult}`);
parentDiv.appendChild(result)

var operation = ""

plusBtn.addEventListener("click",() => {
    operation = '+';
})

minusBtn.addEventListener("click",() => {
    operation = '-';
})

mulBtn.addEventListener("click",() => {
    operation = '*';
})

divBtn.addEventListener("click",() => {
    operation = '/';
})


equalsBtn.addEventListener("click",() => {
    finalResult = 0;
    let val1 = parseInt(input1.value);
    let val2 = parseInt(input2.value);
    switch (operation) {
        case '+': finalResult = val1 + val2
            break;
        case '-': finalResult = val1 - val2
            break;

        case '*': finalResult = val1 * val2
            break;

        case '/': finalResult = val1 / val2
            break;

    }
    result.innerHTML=`Result : ${finalResult}`;
    operation = "";
    input1.value="";
    input2.value="";

})