/*
//SINGLE DICE Roller
const btn1=document.getElementById("btn1")
btn1.onclick=function(){
    event.preventDefault();
    let a=Math.floor(Math.random()*6)+1
    document.getElementById("par1").textContent=`Outcome:  ${a}`
    switch(a){
        case 1:
            document.getElementById("par2").innerHTML=`<img src="images/dice1.png" alt="" width="100">`
            break
        
        case 2:
            document.getElementById("par2").innerHTML=`<img src="images/dice2.png" alt="" width="100">`
            break

        case 3:
            document.getElementById("par2").innerHTML=`<img src="images/dice3.png" alt="" width="100">`
            break

        case 4:
            document.getElementById("par2").innerHTML=`<img src="images/dice4.png" alt="" width="100">`
            break

        case 5:
            document.getElementById("par2").innerHTML=`<img src="images/dice5.png" alt="" width="100">`
            break

        case 6:
            document.getElementById("par2").innerHTML=`<img src="images/dice6.png" alt="" width="100">`
            break
    }
    
}
*/
const btn1=document.getElementById("btn1")
btn1.onclick=function(){
    event.preventDefault();
    let DiceInput=Number(document.getElementById("in1").value);
    let images=""
    let output=[];
    let sum=0
    for (let i = 0; i <DiceInput; i++) {
        let a=Math.floor(Math.random()*6)+1
        output.push(a);
        images+=`<img src="images/dice${a}.png" alt="" width="100">`   
    }
    document.getElementById("par1").textContent =output.join(", ");

    document.getElementById("par2").innerHTML=images
    for (let i = 0; i < output.length; i++) {
        sum+=output[i]  
    }
    document.getElementById("par3").innerHTML =sum

    
}
