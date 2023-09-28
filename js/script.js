let cells=["","","","","","","","",""]
const border = document.querySelector('.border')
let player1='X'
let player2='O'
let turn=true

function play(index){
    if(cells[index] !=='') return;
    if(turn && cells[index]==''){
        cells[index]=player1
        renderBorder()
    }
   turn=!turn
   
   console.log(turn);
    
   if(turn&&cells[index]==''){
             cells[index]=player2
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
    }
       
}
renderBorder()