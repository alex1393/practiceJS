window.addEventListener('load', () => {
    document.body.classList.add('loaded');
})

document.addEventListener('DOMContentLoaded', () => {

    function calcSquare(shapeWrap){
        const squareArea = shapeWrap.querySelector('.area');
        const squarePerimeter = shapeWrap.querySelector('.perimeter');
        const squareInput = parseInt(shapeWrap.querySelector('input').value);
        if(squareInput > 0){
            shapeWrap.classList.add('alreadyCalc');
            squareArea.innerHTML = squareInput * squareInput + ' cm' + '2'.sup();
            squarePerimeter.innerHTML = squareInput * 4 + ' cm';
            hideEnterData(shapeWrap);
        }
    }

    function calcRectangle(shapeWrap){
        const rectangleArea = shapeWrap.querySelector('.area');
        const rectanglePerimeter = shapeWrap.querySelector('.perimeter');
        const rectangleInputOne = parseInt(shapeWrap.querySelector('input.sideOne').value);
        const rectangleInputTwo = parseInt(shapeWrap.querySelector('input.sideTwo').value);

        if(rectangleInputOne > 0 && rectangleInputTwo > 0 && rectangleInputTwo !== rectangleInputOne){
            shapeWrap.classList.add('alreadyCalc');
            rectangleArea.innerHTML = rectangleInputOne * rectangleInputTwo + ' cm' + '2'.sup();
            rectanglePerimeter.innerHTML = (rectangleInputOne + rectangleInputTwo) * 2 + ' cm';
            hideEnterData(shapeWrap);
        }
    }

    function calcCircle(shapeWrap){
        const circleArea = shapeWrap.querySelector('.area');
        const circleCircumference = shapeWrap.querySelector('.circumference');
        const circleInput = parseInt(shapeWrap.querySelector('input').value);
        if(circleInput > 0){
            shapeWrap.classList.add('alreadyCalc');
            circleArea.innerHTML = (Math.PI * Math.pow(circleInput, 2)).toFixed(2) + ' cm' + '2'.sup();
            circleCircumference.innerHTML = (2 * Math.PI * circleInput).toFixed(2) + ' cm';
            hideEnterData(shapeWrap);
        }
    }

    function calcTriangle(shapeWrap){
        const triangleArea = shapeWrap.querySelector('.area');
        const triangleInputOne = parseInt(shapeWrap.querySelector('.firstSide').value);
        const triangleInputTwo = parseInt(shapeWrap.querySelector('.secondSide').value);
        const triangleInputThree = parseInt(shapeWrap.querySelector('.thirdSide').value);
        if(triangleInputOne > 0 && triangleInputTwo > 0 && triangleInputThree > 0){
            shapeWrap.classList.add('alreadyCalc');
            const halfPerimeter = (triangleInputOne + triangleInputTwo + triangleInputThree) / 2;
            triangleArea.innerHTML = (Math.sqrt(halfPerimeter * (halfPerimeter - triangleInputOne) * (halfPerimeter - triangleInputTwo) * (halfPerimeter - triangleInputThree))).toFixed(2) + ' cm' + '2'.sup();
            hideEnterData(shapeWrap);
        }
    }

    const calcButtons = document.querySelectorAll('.calc');
    calcButtons.forEach(el => {
        el.addEventListener('click', () => {
            const shapeWrap = el.closest('.shape');
            let classes = shapeWrap.getAttribute('class');
            switch( true ){
                case classes.includes('square'):
                    calcSquare(shapeWrap);
                    break;
                case classes.includes('rectangle'):
                    calcRectangle(shapeWrap);
                    break;
                case classes.includes('circle'):
                    calcCircle(shapeWrap);
                    break;
                case classes.includes('triangle'):
                    calcTriangle(shapeWrap);
                    break;
            }
        })
    })

    const resetButtons = document.querySelectorAll('.reset');
    resetButtons.forEach(el => {
        el.addEventListener('click', () => {
            const shapeWrap = el.closest('.shape');
            shapeWrap.classList.remove('alreadyCalc');
            const inputs = shapeWrap.querySelectorAll('input');
            inputs.forEach(item => item.value = '');
            showEnterData(shapeWrap);
        })
    })



    const allShapesWrapper = document.querySelectorAll('.shape');
    allShapesWrapper.forEach(shape => {
        shape.onmouseover = function(event) {
            if(!shape.classList.contains('alreadyCalc')){
                event.stopPropagation();
                showEnterData(shape);
            }
        };
        shape.onmouseout = function(event) {
            event.stopPropagation();
            let inputsValue = '';
            const allShapeInputs =  shape.querySelectorAll('input');
            allShapeInputs.forEach( input => {
                inputsValue = inputsValue + input.value;
            })
            if(inputsValue.length === 0){
                hideEnterData(shape);
                hideDescription(shape);
            }
        };
    })

    function showEnterData(shape){
        shape.querySelector('.enterData').style.display = 'flex';
        shape.querySelector('p.description').style.display = 'none';
    }
    function hideEnterData(shape){
        shape.querySelector('.enterData').style.display = 'none';
    }
    function hideDescription(shape){
        shape.querySelector('p.description').style.display = 'block';
    }

})