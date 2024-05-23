let wrapper = document.querySelector('.wrapper'); // corrected the selector string
console.log(wrapper);
let question = document.querySelector('.question');
console.log(question);
let yesBtn = document.querySelector('.yes-btn');
console.log(yesBtn); // corrected variable name from "yes-btn" to "yesBtn"
let noBtn = document.querySelector('.no-btn');
console.log(noBtn); // corrected variable name from "no-btn" to "noBtn"

let wrapperRect = wrapper.getBoundingClientRect();
let noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => { // corrected typo in "addEventListener"
    noBtn.innerText = 'I Love You Too :)';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + wrapperRect.left; // added "wrapperRect.left" to calculate the position relative to the wrapper
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + wrapperRect.top; // added "wrapperRect.top" to calculate the position relative to the wrapper

    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
});
