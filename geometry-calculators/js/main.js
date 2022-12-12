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
        const squareInput = parseInt(document.querySelector('.square input').value);
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















    const rectangleBtn = document.querySelector('.rectangle .calc');
    const rectangleBtnReset = document.querySelector('.rectangle .reset');
    const rectangleWrap = document.querySelector('.rectangle');
    const rectangleArea = document.querySelector('.rectangle .area');
    const rectanglePerimeter = document.querySelector('.rectangle .perimeter');

    rectangleBtn.addEventListener('click', ()=>{
        const rectangleInputOne = parseInt(document.querySelector('.rectangle input.sideOne').value);
        const rectangleInputTwo = parseInt(document.querySelector('.rectangle input.sideTwo').value);



        if(rectangleInputOne > 0 && rectangleInputTwo > 0 && rectangleInputTwo != rectangleInputOne){
            rectangleWrap.classList.add('alreadyCalc');
            rectangleArea.innerHTML = rectangleInputOne * rectangleInputTwo + ' cm' + '2'.sup();
            rectanglePerimeter.innerHTML = (rectangleInputOne + rectangleInputTwo) * 2 + ' cm';
        }
    })
    rectangleBtnReset.addEventListener('click', ()=>{
        rectangleWrap.classList.remove('alreadyCalc');
        document.querySelector('.rectangle input.sideOne').value = '';
        document.querySelector('.rectangle input.sideTwo').value = '';
    })

})