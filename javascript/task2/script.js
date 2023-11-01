let number1=document.getElementById('firstNumber')
let number2=document.getElementById('secNumber')
let result=document.getElementById('result')

function sum(){
    let sum=Number(number1.value)+Number(number2.value)
    let message=`<p>The sum of ${number1.value} and ${number2.value} is ${sum}</p>`
    result.innerHTML=message
}
