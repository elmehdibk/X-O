let cells=["","","","","","","","",""]
const border = document.querySelector('.border')
border.innerHTML="";
for (let i = 0; i < cells.length; i++) {
   const cell =document.createElement('div')
   cell.className='bordChild'
   cell.innerText=cells[i]
   border.appendChild(cell)
 
}
   