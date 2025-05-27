let display = document.querySelector('.block-header p');
let expression = '';

document.querySelectorAll('.number, .function').forEach(btn => {
    btn.addEventListener('click', () => {
        expression += btn.value;
        display.textContent = expression;
    });
});

document.querySelector('.clear').addEventListener('click', () => {
    expression = '';
    display.textContent = '';
});

document.querySelector('.result').addEventListener('click', () => {
    try {
        expression = eval(expression).toString();
        display.textContent = expression;
    } catch {
        display.textContent = 'Erro';
        expression = '';
    }
});