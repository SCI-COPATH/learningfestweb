

function findRandom(){
    console.log("click")
    let ra=Math.floor(Math.random()*6)+1
    let res=document.getElementById('result')
    res.innerText=ra
}
