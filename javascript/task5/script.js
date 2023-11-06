

async function start(){
  try{
    const response=await fetch('./assets/persons.json')
    const data= await response.json()
    console.log(data)
    dataToScreen(data)
  }catch{
    console.log("faild to featch")
  }
}
start()
function dataToScreen(datas){
  let div=document.getElementById('conent')
  for (key in datas){
    let message='<tr><td>'+datas[key].name+'</td><td>'+datas[key].age+'</td></tr>'
    console.log(datas[key])
    div.insertAdjacentHTML("afterend",message) 
  }
  
}