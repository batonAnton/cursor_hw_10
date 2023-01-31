const container = document.getElementById(".container");

function generateBlocks(){
    
            
        const container = document.getElementById('container');
        for (let i = 0; i < 25; i++) {
            const block = document.createElement('div');
            block.classList.add('block');
         setInterval(() => block.style.backgroundColor = '#' + Math.random().toString(16).slice(-6),1000) ;
         
         container.appendChild(block);

         
        }
}

generateBlocks();
