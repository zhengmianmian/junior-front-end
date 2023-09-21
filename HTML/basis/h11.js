const container = document.querySelector(".container");
const boxContainer = document.querySelector(".box-container");
const box = document.querySelector(".box");
let source;
const handleDragStart = (e)=>{
    e.dataTransfer.effectAllowed = e.target.dataset.effect;//move copy
    source = e.target;
    console.log('start')
}
const handleDragEnd = (e)=>{
    let x,y;
    x = e.offsetX;
    y = e.offsetY;
    console.log("x is ",x, "y is ",y);
}


container.ondragstart = handleDragStart;
container.ondragover = e=>{
    e.preventDefault();
    //console.log('over', e.target)
}


boxContainer.ondragstart = handleDragStart;
boxContainer.ondragend = handleDragEnd;



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

window.onload = function(){
    document.onmousemove = (e)=>{
        e = e || window.event;
        var left = e.pageX + 2;
        var top = e.pageY + 2;
        box.style.left = left+"px";
        box.style.top = top+"px";
    }
}
// const box2 = document.getElementById("box2");
// box2.onmousedown = ()=>{
//     document.onmousemove=(e)=>{
//         e = e || window.event;
//         var left = e.pageX;
//         var top = e.pageY;
//         box2.style.left = left+"px";
//         box2.style.top = top+"px";
//     }
//     box2.onmouseup = ()=>{
//         document.onmousemove = null;
//     }
// }
