const container = document.getElementById(".container");

function generateBlocks(){
    // for(let i = 0; i < 5; i++){
        // for(let i = 0; i < 25; i++){
        //     const div = document.createElement("div");
        //     div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        //     div.classList.add("box");
        //     container.appendChild(div);

            
        // }
        const container = document.getElementById('container');
        for (let i = 0; i < 25; i++) {
            const block = document.createElement('div');
            block.classList.add('block');
         let a = block.style.backgroundColor = '#' + Math.random().toString(16).slice(-6);
         setInterval(a,1000);
            container.appendChild(block);
        }
}
// }

generateBlocks();
// function changeBackGround() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//      document.getElementById("myDiv").style.backgroundColor = "#" + randomColor;
//     console.log(block);

// }
// // }

// generateBlocks();

// function generateBlocksInterval(){
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     const element = document.querySelectorAll("div")
//     myDiv.style.backgroundColor = "#" + randomColor;
//     myDiv.innerHTML = "#" + randomColor;
// }

// generateBlocksInterval();
