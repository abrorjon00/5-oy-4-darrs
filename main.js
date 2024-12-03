const colorPicker = document.getElementById('colorPicker');
const ball = document.querySelector('.ball');
const field = document.querySelector('.field');
const colorPickerr = document.getElementById('colorPickerer');
const text = document.getElementById('text');
const light = document.getElementById('light');
const button = document.getElementById('toggleEffect');
let effectEnabled = false;

// Body rangini o'zgartirish
colorPicker.addEventListener('input', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// field.addEventListener('click', (event) => {
//     const fieldRect = field.getBoundingClientRect();
//     const x = event.clientX - fieldRect.left;
//     const y = event.clientY - fieldRect.top;
//     ball.style.left = `${x - ball.offsetWidth / 2}px`;
//     ball.style.top = `${y - ball.offsetHeight / 2}px`;
// });

// colorPickerr.addEventListener('input', (event) => {
//     text.style.color = event.target.value;
// });

// button.addEventListener('click', () => {
//     effectEnabled = !effectEnabled;
//     light.style.display = effectEnabled ? 'block' : 'none';
//     document.body.style.cursor = effectEnabled ? 'none' : 'default';
//     button.textContent = effectEnabled ? 'Effektni o‘chirish' : 'Effektni yoqish';
// });

// document.body.addEventListener('mousemove', (event) => {
//     if (!effectEnabled) return;

//     light.style.left = `${event.pageX}px`;
//     light.style.top = `${event.pageY}px`;
// });
