const button = document.querySelector("#myButton")
const button2 = document.querySelector("#myButton2")

function myFunction() {
    console.log('click');
}

button.addEventListener("click", myFunction)
button2.addEventListener("click", myFunction)

// button2.removeEventListener("click", myFunction)

// button2.addEventListener("click", function() {
//     console.log('click2');
// })

const button3 = document.querySelector("#myButton3")
function myFunction2() {
    console.log('click3');
}

button3.addEventListener("click", myFunction2, {once: true})

const button4 = document.querySelector("#myButton4")

function myFunction3(event) {
    // console.log(event.type);
    // console.log(event.currentTarget);
    // console.log(event.clientX);
    // console.log(event.clientY);
    // console.log(event);
}

button4.addEventListener("click", myFunction3)


// const input = document.querySelector("#myInput")
// input.addEventListener("input", function() {
//     console.log(input.value);
// })

// document.addEventListener("keydown", function(event) {
//     console.log(event.key);
// })

// window.addEventListener("resize", function(event) {
//     console.log('resize');
// })

// button.addEventListener("mouseenter", function() {
//     console.log('mouseenter');
// })

// button.addEventListener("mouseleave", function() {
//     console.log('mouseleave');
// })