function generateBlocks(){
    const block = document.createElement("block");
    block.classListAdd("box");

    document.body.append(block);
}

generateBlocks();