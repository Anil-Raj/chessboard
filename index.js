const container = document.getElementById('board_container');

(function drawBoard(){
    for(let i= 0; i< 8; i++){
        const row = document.createElement('div');
        row.classList.add('row');      
        for(let j= 0; j< 8; j++){
            const box = document.createElement('div');
            box.classList.add('box');   
            const color = (i *8 + (i % 2===0 ? 1: 0) +j) % 2 === 0 ? 'white' : 'black'
            box.classList.add(color);      
    
            row.appendChild(box);
        }
        container.appendChild(row);
    }
})()

