const nobtn= document.querySelector('#nobtn'); ''
nobtn.addEventListener('mouseover', function(){
    const randomX= parseInt(Math.random()*100);
    const randomY= parseInt(Math.random()*100);
    nobtn.style.setProperty('top', randomY+'%');
    nobtn.style.setProperty('left', randomY+'%');
    nobtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
})