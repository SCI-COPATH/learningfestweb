let Name=document.getElementById('name')
let formSubmit=document.getElementById('form')
let mail=document.getElementById('mail')
let pass=document.getElementById('password')
let cpass=document.getElementById('confirm')
let feed=document.getElementById('feedback')
function showError(object,message){
    errorObject=object.parentElement;
    errorObject.className = 'inner error'
    errorObject.querySelector('small').innerText=message

}
function checklength(name,min,max){
    if(name.value.length<min){
        showError(name,`Minimum ${min} Charater`)
        return 0
    }
    if(name.value.length>max){
        showError(name,`Maximum ${max} Alow`)
        return 0
    }
    showSucces(name)
    return 1


}
function passwordChek(pass,confirm){
    if (pass.value!==confirm.value){
        showError(confirm,'Password Not match')
        return 0
    }
    showSucces(pass)
    showSucces(confirm)
    return 1

}
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'inner success';
}
function checkEmail(input) {
    console.log('check mail')
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
        console.log('set')
        return 1
    }else {
        console.log('wrong')
        showError(input,'Email is not invalid');
        return 0
    }
}

formSubmit.addEventListener('submit',function(e){
    console.log('submot')
    let count=0
    e.preventDefault()
    count+=checkEmail(mail)
    count+=checklength(Name,3,15)
    count+=checklength(pass,7,15)
    count+=passwordChek(pass,cpass)
    if(count==4){
        formSubmit.className = 'form hiddin';
        feed.className='feedback'
    }   
    

})


