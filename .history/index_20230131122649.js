const container = document.querySelector(".container");
function generateBlocks(){
    // for(let i = 0; i < 5; i++){
        for(let i = 0; i < 5; i++){
            const div = document.createElement("div");
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            console.log(randomColor);
            const block = document.getElementsByClassName("box")
            // block.style.backgroundColor = "#" + randomColor;

            div.classList.add("box");
            container.prepend(div);
            
            // myDiv.innerHTML = "#" + randomColor;
        }
}
// }

generateBlocks();

// function generateBlocksInterval(){
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     const element = document.querySelectorAll("div")
//     myDiv.style.backgroundColor = "#" + randomColor;
//     myDiv.innerHTML = "#" + randomColor;
// }

// generateBlocksInterval();
