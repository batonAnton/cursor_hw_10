
function generateBlocks(){
    for(let i = 0; i < 5; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        document.body.append(div);
    }
}

generateBlocks();

