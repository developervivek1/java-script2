const submitBtn = document.getElementById('submit-btn');
const inputName = document.getElementById('input-name');
const myName = document.getElementById('my-name');

submitBtn.addEventListener('click', function(){
    const value = inputName.value;
    localStorage.setItem('name', value);
    location.reload();
    console.log(value);
})

window.addEventListener('load', function(){
    const value = this.localStorage.getItem('name');
    myName.innerText = value;
    console.log(value);
})