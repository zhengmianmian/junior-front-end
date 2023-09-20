const container = document.querySelector(".container");
let source;
container.ondragstart = e=>{
    e.dataTransfer.effectAllowed = e.target.dataset.effect;//move copy
    source = e.target;
    console.log('start', e.dataTransfer)
}
container.ondragover = e=>{
    e.preventDefault();
    //console.log('over', e.target)
}
const clearDropStyle = ()=>{
    document.querySelectorAll('.drop-over').forEach((node)=>{
        node.classList.remove('drop-over')
    })
};
function getDropNode(node){
    while(node){
        if(node.dataset && node.dataset.drop){
            return node;
        }
        node = node.parentNode;
    }
}
container.ondragenter = e=>{
    clearDropStyle();
    const dropNode = getDropNode( e.target);
    if (dropNode && dropNode.dataset.drop===e.dataTransfer.effectAllowed) {
        dropNode.classList.add('drop-over');
    } 
}
container.ondrop = e=>{
    const dropNode = getDropNode(e.target);
    let cloned = source.cloneNode(true);
    cloned.setAttribute("draggable", false);
    cloned.removeAttribute("data-effect");//can not drag this
    if (dropNode && dropNode.dataset.drop===e.dataTransfer.effectAllowed){
        dropNode.innerHTML = ""
        dropNode.appendChild(cloned);
        clearDropStyle();
    }
    
}