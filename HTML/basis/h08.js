var btn=document.querySelector(".btn");

btn.addEventListener('mouseover', function(event){
    // const x = (event.pageX - btn.offsetLeft)
    // const y = (event.pageY - btn.offsetTop)
    const x = event.offsetX;
    const y = event.offsetY;
    btn.style.setProperty('--xPos', x+'px')
    btn.style.setProperty('--yPos', y+'px')
            
});