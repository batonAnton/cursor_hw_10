const container = document.querySelector(".container");

function generateBlocks(){
    // for(let i = 0; i < 5; i++){
        for(let i = 0; i < 10; i++){
            const div = document.createElement("div");
            div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.classList.add("box");
            container.prepend(div);
// changeBackGround()

            
            // myDiv.innerHTML = "#" + randomColor;
        }
}

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
