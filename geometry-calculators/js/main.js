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


    const circleBtn = document.querySelector('.circle .calc');
    const circleBtnReset = document.querySelector('.circle .reset');
    const circleWrap = document.querySelector('.circle');
    const circleArea = document.querySelector('.circle .area');
    const circleCircumference = document.querySelector('.circle .circumference');

    circleBtn.addEventListener('click', ()=>{
        const circleInput = parseInt(document.querySelector('.circle input').value);
        if(circleInput > 0){
            circleWrap.classList.add('alreadyCalc');
            circleArea.innerHTML = (Math.PI * Math.pow(circleInput, 2)).toFixed(2) + ' cm' + '2'.sup();
            circleCircumference.innerHTML = (2 * Math.PI * circleInput).toFixed(2) + ' cm';
        }
    })

    const triangleBtn = document.querySelector('.triangle .calc');
    const triangleBtnReset = document.querySelector('.triangle .reset');
    const triangleWrap = document.querySelector('.triangle');
    const triangleArea = document.querySelector('.triangle .area');
    const triangleCircumference = document.querySelector('.triangle .circumference');

    triangleBtn.addEventListener('click', ()=>{
        const triangleInputOne = parseInt(document.querySelector('.triangle .firstSide').value);
        const triangleInputTwo = parseInt(document.querySelector('.triangle .secondSide').value);
        const triangleInputThree = parseInt(document.querySelector('.triangle .thirdSide').value);
        if(triangleInputOne > 0 && triangleInputTwo > 0 && triangleInputThree > 0){
            triangleWrap.classList.add('alreadyCalc');
            const halfPerimeter = (triangleInputOne + triangleInputTwo + triangleInputThree) / 2;
            triangleArea.innerHTML = (Math.sqrt(halfPerimeter * (halfPerimeter - triangleInputOne) * (halfPerimeter - triangleInputTwo) * (halfPerimeter - triangleInputThree))).toFixed(2) + ' cm' + '2'.sup();
            console.log((Math.sqrt(halfPerimeter * (halfPerimeter - triangleInputOne) * (halfPerimeter - triangleInputTwo) * (halfPerimeter - triangleInputThree))).toFixed(2));
        }
    })


    const resetBtns = document.querySelectorAll('.shape .reset');
    resetBtns.forEach(el => {
        el.addEventListener('click', () => {
            resetShape(el);
        })
    })
    function resetShape(closeBtn){
        const shapeElement = closeBtn.closest('.shape');
        shapeElement.classList.remove('alreadyCalc');
        const inputs = shapeElement.querySelectorAll('input');
        inputs.forEach(item => {
            item.value = '';
        })
    }

})