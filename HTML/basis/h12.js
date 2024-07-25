const getCoor =  (e)=>{
    let x = e.clientX;
    let y = e.clientY;
}
const getPageCoor = (e)=>{
    let x = e.pageX;
    let y = e.pageY;
    return [x,y];
}
const box = document.getElementById('box');

const moveArea = document.querySelector(".moveable-area");
const moveAreaRect = moveArea.getBoundingClientRect();
const moveAreaLeft = moveAreaRect.left;
const moveAreaRight = moveAreaRect.right;
const moveAreaTop = moveAreaRect.top;
const moveAreaBottom = moveAreaRect.bottom;

box.onmousedown = (e)=>{
    //where you click
    let [x,y] = getPageCoor(e);
    const rect = box.getBoundingClientRect();
    //distance between where click and left top of box
    let boxOffsetX = x - rect.left;
    let boxOffsetY = y - rect.top;
    function isInMoveArea(x,y){
        return x>= moveAreaLeft && x<=moveAreaRight && y<=moveAreaBottom && y>=moveAreaTop;
    }
    box.onmousemove = (e)=>{
        let [x2,y2] = getPageCoor(e);
        x2 = x2 - boxOffsetX;
        y2 = y2 - boxOffsetY;
        if(isInMoveArea(x2,y2)){
            box.style.left = x2+"px";
            box.style.top = y2+"px";
        }else{
            box.style.left = moveArea.left+"px";
            box.style.top = moveArea.top+"px";
        }
        
    }
    box.onmouseup = (e)=>{
        let [x2,y2] = getPageCoor(e);
        x2 = x2 - boxOffsetX;
        y2 = y2 - boxOffsetY;
        if(isInMoveArea(x2,y2)){
            box.style.left = x2+"px";
            box.style.top = y2+"px";
        }else{
            box.onmousemove = null;
            box.style.left = moveArea.left - rect.width + "px";
            box.style.top = rect.top - rect.height + "px";
        }
        box.onmousemove = null;
    }

}

// var rect = box.getBoundingClientRect();
// console.log('left:',rect.left)
// // the position related to the viewport
// let x = rect.x;
// let y = rect.y;
// console.log('x: ', x, ' y: ', y)
// // get the postion related to the webpage
// x = x + window.scrollX;
// y = y + window.scrollY;
// console.log('x: ', x, ' y: ', y)

const text = document.querySelector(".text");
text.onclick = (e) => {
    console.log('class name is ', e.target.getAttribute('class'));
    console.log(e.target.getAttributeNames());
}