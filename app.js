const toogleSwitch =document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toogle-icon')
const img1 = document.querySelector('#img_1')
const img2 = document.querySelector('#img_2')
const img3 = document.querySelector('#img_3')
const textBox = document.querySelector('#text-box')


// Dark or Light Images 
const imageMode =(color) =>{
    img1.src = `./img/undraw_proud_coder_${color}.svg`;
    img2.src =`./img/undraw_feeling_proud_${color}.svg`
    img3.src = `./img/undraw_conceptual_idea_${color}.svg`
}

// DarkModeStyle 
const darkMode =() =>{
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 /50%)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon') 
    imageMode('dark')
}
//Light Mode Style
const lightMode =()=>{
    nav.style.backgroundColor = 'rgb(255 255 255 /50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%) '
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    imageMode('light')
}

// Switch Theme Dynamically 
const switchTheme =(event) =>{
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark')
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme','light')
        lightMode();
    }
}

// Event Listner
toogleSwitch.addEventListener('change',switchTheme)