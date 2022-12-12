window.addEventListener('load', () => {
    document.body.classList.add('loaded');
})

document.addEventListener('DOMContentLoaded', () => {

    const squareBtn = document.querySelector('.square .calc');
    const squareBtnReset = document.querySelector('.square .reset');
    const squareWrap = document.querySelector('.square');
    const squareArea = document.querySelector('.square .area');
    const squarePerimeter = document.querySelector('.square .perimeter');

    squareBtn.addEventListener('click', ()=>{
        const squareInput = document.querySelector('.square input').value;
        if(squareInput > 0){
            squareWrap.classList.add('alreadyCalc');
            squareArea.innerHTML = squareInput * squareInput + ' cm' + '2'.sup();
            squarePerimeter.innerHTML = squareInput * 4 + ' cm';
        }
    })
    squareBtnReset.addEventListener('click', ()=>{
        squareWrap.classList.remove('alreadyCalc');
        document.querySelector('.square input').value = '';
    })

})