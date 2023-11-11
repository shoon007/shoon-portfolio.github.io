/* the two animated login & register buttons */
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');


/* left & right slides */
const leftDiv = document.querySelector('.left-div');
const rightDiv = document.querySelector('.right-div');


/* the elements of left slide  */
const title = document.querySelector('.title');
const text = document.querySelector('.info');
const title2 = document.querySelector('.title2');
const text2 = document.querySelector('.info2');


/* the elements of right slide */
const paras = document.querySelectorAll('.para');
const about = document.querySelectorAll('.about');
const special = document.querySelector('.special')
const special2 = document.querySelector('.special2');


/* login & register links */
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

/* the two animated circles */
const aboveCircle = document.querySelector('.above-circle');
const belowCircle = document.querySelector('.below-circle');


const loaderDiv = document.querySelector('.loader-div')
    /* 
      window.onresize = function(event)
    {
    document.location.reload(true);
    } */
window.onload = function() {
    setTimeout(function() {
        loaderDiv.classList.add("loader-hidden");
    }, 2000);
    //  contactDiv.style.opacity = "1";
};

loginBtn.addEventListener('click', () => {
    leftDiv.style.left = '60%';
    leftDiv.classList.toggle('animate');
    rightDiv.style.right = "40%";
    title.style.display = 'none';
    text.style.display = 'none';
    loginBtn.style.display = 'none';
    title2.style.display = "block";
    text2.style.display = "block";
    registerBtn.style.display = "block";

    paras.forEach((para) => {

        para.classList.remove('hidden');
        para.style.opacity = '1'

    })
    about.forEach((info) => {
        info.style.right = "30%";
        info.style.opacity = "0";
    })
    special2.style.zIndex = "2";
    special.style.zIndex = "1";

    aboveCircle.style.top = "-100px";
    aboveCircle.style.right = "60%";
    belowCircle.style.left = "100px";
    belowCircle.style.top = " 400px";


})

registerBtn.addEventListener('click', () => {
    leftDiv.style.left = '0%';

    rightDiv.style.right = "0%";
    title.style.display = 'block';
    text.style.display = 'block';
    loginBtn.style.display = 'block';
    title2.style.display = "none";
    text2.style.display = "none";
    registerBtn.style.display = "none";

    paras.forEach((para) => {

        para.classList.add('hidden');
        para.style.opacity = '0'

    })
    about.forEach((info) => {
        info.style.right = "0%";
        info.style.opacity = "1";
    })

    special2.style.zIndex = "1";
    special.style.zIndex = "2";

    aboveCircle.style.top = "-100px";
    aboveCircle.style.right = "-80px";
    belowCircle.style.left = "-100px";
    belowCircle.style.top = " 400px";

})

loginLink.addEventListener('click', () => {
    title.style.display = 'none';
    text.style.display = 'none';
    loginBtn.style.display = 'none';
    title2.style.display = "block";
    text2.style.display = "block";
    registerBtn.style.display = "block";
    about.forEach((info) => {
        info.style.opacity = '0'

    })

    paras.forEach((para) => {

        para.style.opacity = '1'

    })

    special2.style.zIndex = "2";
    special.style.zIndex = "1";

})


registerLink.addEventListener('click', () => {
    title.style.display = 'block';
    text.style.display = 'block';
    loginBtn.style.display = 'block';
    title2.style.display = "none";
    text2.style.display = "none";
    registerBtn.style.display = "none";
    about.forEach((info) => {
        info.style.opacity = '1'

    })

    paras.forEach((para) => {
        para.style.opacity = '0'

    })

    special2.style.zIndex = "1";
    special.style.zIndex = "2";
})