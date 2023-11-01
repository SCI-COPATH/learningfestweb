let height=document.getElementById('height')
let weight=document.getElementById('weight')
function calculateBMI(){
    console.log(weight.value)
    console.log(height.value)
    let BMI=parseFloat(weight.value)/(parseFloat(height.value)*parseFloat(height.value))*10000
    let message=''
    
    if (BMI>=40){
        message='Obese'
    }
    else if (BMI>=25){
        message='Over Weight'
    }else if( BMI>=18.5){
        message='Normal'
    }else{
        message="Under Weight"
    }
    console.log(BMI)
    console.log(message)
    document.getElementById('bmi-val').innerHTML=BMI.toFixed(2)
    document.getElementById('bmi-msg').innerHTML=message
}