const container = document.querySelector(".container");

function generateBlocks(){
        for(let i = 0; i < 5; i++){
            const div = document.createElement("div");
            div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            div.classList.add("box");
            container.prepend(div);
        }
}

generateBlocks();

