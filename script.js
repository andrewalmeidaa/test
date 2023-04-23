const btnMovingNo = document.querySelector('#btnMovingNo')

btnMovingNo.addEventListener('mouseover',()=>{
    let newPositionTop = Math.random()*window.innerHeight
    let newPositionLeft = Math.random()*window.innerWidth

    btnMovingNo.style.top = newPositionTop + 'px'
    btnMovingNo.style.left = newPositionLeft + 'px'
})

const btnMovingYes = document.querySelector('#btnMovingYes')

btnMovingYes.addEventListener('click', ()=>{
    alert('Amo Voce <3!')
})