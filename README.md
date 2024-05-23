# Project-Do_love_me

querySelector: This function is used to select HTML elements based on CSS selectors. In this code, it's used to select elements with specific classes like .wrapper, .question, .yes-btn, and .no-btn.

getBoundingClientRect: This method returns the size of an element and its position relative to the viewport. It's used to get the size and position of the .wrapper element and the .no-btn button.

addEventListener: This function attaches an event handler to the selected elements. In this code, it's used to listen for click events on the "Yes" button (yesBtn) and mouseover events on the "No" button (noBtn).

Math.floor: This function returns the largest integer less than or equal to a given number. It's used to round down the random positions generated for the "No" button.

Math.random: This function generates a random number between 0 (inclusive) and 1 (exclusive). It's used to generate random positions for the "No" button within the bounds of the .wrapper element.
