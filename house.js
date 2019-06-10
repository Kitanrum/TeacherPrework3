console.log("Script Running")

let clicked = false;

let firstBulb = document.querySelector('#lightbulb1')
console.log(firstBulb)

let secondBulb = document.querySelector('#lightbulb2')
console.log(secondBulb) 

let thirdBulb = document.querySelector('#lightbulb3') 
console.log(thirdBulb)

let fourthBulb = document.querySelector('#lightbulb4')
console.log(fourthBulb) 

let fifthBulb = document.querySelector('#lightbulb5')
console.log(fifthBulb) 

let sixthBulb = document.querySelector('#lightbulb6') 
console.log(sixthBulb); 

let seventhBulb = document.querySelector('#lightbulb7');
console.log(seventhBulb); 

let eigthBulb = document.querySelector('#lightbulb8');
console.log(eigthBulb) 

let ninthBulb = document.querySelector('#lightbulb9') ;
console.log(ninthBulb);

let lights = [firstBulb,secondBulb,thirdBulb,fourthBulb,fifthBulb,sixthBulb,seventhBulb,eigthBulb,ninthBulb];
console.log(lights);

function firstLight(){
    
    if(firstBulb.classList.contains('active')){
        firstBulb.classList.toggle('active');
        secondBulb.classList.toggle('active')
        fourthBulb.classList.toggle('active');
    }
    else{
        firstBulb.classList.toggle('active')
        secondBulb.classList.toggle('active');
        fourthBulb.classList.toggle('active');
    }
    
}

function secondLight(){
    
    if(secondBulb.classList.contains('active')){
        firstBulb.classList.toggle('active');
        secondBulb.classList.toggle('active')
        thirdBulb.classList.toggle('active');
        fifthBulb.classList.toggle('active');
    }
    else{
        firstBulb.classList.toggle('active');
        secondBulb.classList.toggle('active')
        thirdBulb.classList.toggle('active');
        fifthBulb.classList.toggle('active');
    }
    
}


function handleLight(){
    
    console.log('test');
    for(let i =0; i<lights.length;i++){
        lights[i].addEventListener('click', (e) => {
            lights[i].classList.toggle('active');
            firstLight();
            secondLight();
        });
    
    }
    

    
}

handleLight