let cells=["","","","","","","","",""]
const border = document.querySelector('.border')
const displayP=document.querySelector('.turn')
const replay=document.querySelector('#replay')
let player1='X'
let player2='O'
let active=true
let turn=true



function play(index){

    if(!active || cells[index] !=='') return;
    
    if(turn && cells[index]==''){
        cells[index]=player1
        displayP.innerHTML=`Player ${player2} turn`
        if (winer()) {
            displayP.innerText = `Player ${player1} win!`;
            active=false
          }
        renderBorder()
    }
    turn=!turn
    
   console.log(turn);
    
   if(turn&&cells[index]==''){
             cells[index]=player2
             displayP.innerHTML=`Player ${player1} turn`
             if (winer()) {
                displayP.innerText = `Player ${player2} win!`;
                active=false
              }
             renderBorder()
    }
    
}

function renderBorder(){
    border.innerHTML="";
    for (let i = 0; i < cells.length; i++) {
        const cell =document.createElement('div')
        cell.className='bordChild'
       cell.innerText=cells[i]      
       cell.addEventListener('click',()=>{play(i)})
       border.appendChild(cell)
       cell.innerHTML=cells[i] 
       if(cell.innerHTML=='X'){
        cell.style.color='red'
       }else{
        cell.style.color='royalblue'
       }
    }
    
}

const rep=()=>location.reload()


function winer(){
    
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for (const combo of winCombinations) {
        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            document.getElementById('replay').style.marginLeft='35%';
            return true    ,replay.innerHTML=`<h1 class='title'>PLAY AGAIN</h1><button onclick='rep()'>Replay</button>`;  ;
          
        }
      }
      return false;
    
   
    
    }




displayP.innerHTML=`Player ${player1} turn`
renderBorder()