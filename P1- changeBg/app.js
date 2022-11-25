// This BOM object's method is handling Loading after happening a even one by one
window.onload = () =>{
    main();
}

/* calling button from HTML code and it changing background color with addEvenbtListener of body by-
 calling colorGenerator function */

function main(){
    const btn = document.getElementById('btn')
    btn.addEventListener('click', function(){
        const bgcolor = colorGenerator()
        document.body.style.backgroundColor = bgcolor;
    })
}

// This function is generating the background color
function colorGenerator(){
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.ceil(Math.random() * 255)
    return `rgb(${red}, ${blue}, ${green}`
}
