const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
            display.value = '';
        } else if (value === '>') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                const result = eval(currentInput.replace(/x/g, '*'));
                display.value = `${currentInput}\n   ${result}`;
                currentInput = ''; // Optionally reset after evaluation
            } catch {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput; // Show ongoing input
        }
    });
});
