const container = document.querySelector(".container");

function generateBlocks(){
    // for(let i = 0; i < 5; i++){
        for(let i = 0; i < 5; i++){
            const div = document.createElement("div");
            div.classList.add("box");
            container.prepend(div);
changeBackGround()

            
            // myDiv.innerHTML = "#" + randomColor;
        }
}

function changeBackGround() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
     document.getElementById("myDiv").style.backgroundColor = "#" + randomColor;
    console.log(block);

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
