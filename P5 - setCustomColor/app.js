// This BOM object's method is handling Loading after happening a even one by one
onload = () =>{
    main();
}

// set div value as null
let div = null;

/* calling button from HTML code and it changing background color with addEvenbtListener of body by-
 calling colorGenerator function */

function main(){
    const btn = document.getElementById('btn')
    const btnColor = document.getElementById('btn-color')
    const copyBtn = document.getElementById('copy-btn')
    btn.addEventListener('click', function(){
        const bgcolor = colorGenerator()
        document.body.style.backgroundColor = bgcolor;
        btnColor.value = bgcolor;
    })
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(btnColor.value)
        if (div!=null){
            div.remove()
            div = null
        }
        if (isValidHex(btnColor.value)){
            toastMessage(btnColor.value)
        }
        else{
            alert('invalid color')
        }
        
    })
    btnColor.addEventListener('keyup',function(e){
        const color = e.target.value
        if (color && isValidHex(color)){
            document.body.style.backgroundColor = color;
        }
    })
}

// This function is generating the background color
function colorGenerator(){
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.ceil(Math.random() * 255)
    const color = `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
    return color
}


// Function for create toast message div and appending with body
function toastMessage(msg){
    div = document.createElement('div')
    div.innerText = msg
    div.className = 'toast-message toast-message-slide-in'
    document.body.appendChild(div)
    div.addEventListener('click',function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')
        div.addEventListener('animationend',function(){
            div.remove()
            div = null
        })
    })

}


// Checking valid Hex code
function isValidHex(color){
    if (color.length !== 7) return false;
    if (color[0]!=='#') return false;
    color = color.substring(1)
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}
