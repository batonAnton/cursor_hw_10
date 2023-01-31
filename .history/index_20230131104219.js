const button = document.querySelector(".btn");

button.onclick = generateBlocks;

function generateBlocks(){
    const div = document.createElement("div");
    div.classListAdd("box");

    document.body.append(div);
}

// generateBlocks();