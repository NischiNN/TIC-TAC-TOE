let playerO=true
var accessButton=document.querySelectorAll('.box');
var matchingArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var winner=false

function resetAllButton(){
    playerO=true
    accessButton.forEach((box)=>{
        box.innerText='';
        box.disabled=false;
        box.classList.remove('disabled-css');
        box.style.color='#000000'
        box.classList.remove('winner-match-glow-button');
    })
}

accessButton.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        if(playerO){
            box.innerText='O';
            box.style.color='#DA202D'
            playerO=false;
            box.disabled=true;
            box.classList.add('disabled-css')
        }
        else{
            box.innerText='X';
            playerO=true;
            box.disabled=true;
            box.classList.add('disabled-css')
        }
        winner=checkWinner(box,index);
        if(winner){
            accessButton.forEach(box=>{
                box.disabled=true;
                box.classList.add('disabled-css')
            });
            let findDisplayWinner=document.querySelector('.winner-display');
            findDisplayWinner.innerText=`Congratulations !! ${playerO ? 'player 2' : 'player 1'} won`
        }
    });
})

function checkWinner(box,index){
    console.log("winner is checking",box,index)
    for(let i=0;i<matchingArray?.length;i++){
        if(matchingArray[i].includes(index)){
            if(accessButton[matchingArray[i][0]]?.innerText!=='' && accessButton[matchingArray[i][1]]?.innerText!=='' && accessButton[matchingArray[i][2]]?.innerText!=''){
                if(accessButton[matchingArray[i][0]]?.innerText === accessButton[matchingArray[i][1]]?.innerText &&
                    accessButton[matchingArray[i][1]]?.innerText === accessButton[matchingArray[i][2]]?.innerText){
                    accessButton[matchingArray[i][0]].classList.add('winner-match-glow-button');
                    accessButton[matchingArray[i][1]].classList.add('winner-match-glow-button')
                    accessButton[matchingArray[i][2]].classList.add('winner-match-glow-button')
                    return true
                }
            }
        }
    }
}