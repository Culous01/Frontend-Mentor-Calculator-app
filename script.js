// Theme-related DOM Elements
const themeRadios = document.querySelectorAll('input[name="theme"]');
const multipleButtons = document.querySelectorAll('.light-bc');
const delResetButtons = document.querySelectorAll('.del-reset');
const equalityButton = document.querySelector('.equality');
const calcHeaders = document.querySelectorAll('.calcs');
const textInput = document.getElementById('text-input');
const buttonsContainer = document.querySelector('.buttons-container');
const inputThemeContainer = document.querySelector('.toggle');
const {body} = document;

// Load saved theme settings
function loadSavedTheme() {
    const settings = {
        color: localStorage.getItem('themeColor'),
        buttonColor: localStorage.getItem('checkedButton'),
        buttonTextColor: localStorage.getItem('checkedTextColor'),
        boxShadow: localStorage.getItem('checkedShadow'),
        multipleBtnHover: localStorage.getItem('multipleHover'),
        calcHeaderColor: localStorage.getItem('checkedCalcHeaderColor'),
        delBtnColor: localStorage.getItem('checkedDelReset'),
        delTextColor: localStorage.getItem('checkedDelResetColor'),
        delShadow: localStorage.getItem('checkedDelResetShadow'),
        delHover: localStorage.getItem('checkDelResetHover'),
        equalColor: localStorage.getItem('checkedEquality'),
        equalTextColor: localStorage.getItem('checkedEqualTextColor'),
        equalShadow: localStorage.getItem('checkedEqualityShadow'),
        equalHover: localStorage.getItem('checkedEqualityHover'),
        btnContainer: localStorage.getItem('checkedBackgroundColor'),
        inputThemeBg: localStorage.getItem('CheckedInputThemeBackgroundColor'),
        inputBg: localStorage.getItem('checkedTextInput'),
        inputColor: localStorage.getItem('checkedInputColor'),
        checkedTheme: localStorage.getItem('checkedTheme'),
    };

    if (settings.color) {
        body.style.backgroundColor = settings.color;
    }

    multipleButtons.forEach(btn => {
        btn.style.backgroundColor = settings.buttonColor;
        btn.style.color = settings.buttonTextColor;
        btn.style.boxShadow = settings.boxShadow;

        btn.onmouseover = () => btn.style.backgroundColor = settings.multipleBtnHover;
        btn.onmouseleave = () => btn.style.backgroundColor = settings.buttonColor;
    });

    delResetButtons.forEach(btn => {
        btn.style.backgroundColor = settings.delBtnColor;
        btn.style.color = settings.delTextColor;
        btn.style.boxShadow = settings.delShadow;

        btn.onmouseover = () => btn.style.backgroundColor = settings.delHover;
        btn.onmouseleave = () => btn.style.backgroundColor = settings.delBtnColor;
    });

    equalityButton.style.backgroundColor = settings.equalColor;
    equalityButton.style.color = settings.equalTextColor;
    equalityButton.style.boxShadow = settings.equalShadow;

    equalityButton.onmouseover = () => equalityButton.style.backgroundColor = settings.equalHover;
    equalityButton.onmouseleave = () => equalityButton.style.backgroundColor = settings.equalColor;

    calcHeaders.forEach(header => header.style.color = settings.calcHeaderColor);
    buttonsContainer.style.backgroundColor = settings.btnContainer;
    inputThemeContainer.style.backgroundColor = settings.inputThemeBg;
    textInput.style.backgroundColor = settings.inputBg;
    textInput.style.color = settings.inputColor;

    // Apply saved radio selection
    const savedRadio = document.getElementById(settings.checkedTheme);
    if (savedRadio) {
        savedRadio.checked = true;
    }
}

// Save settings to localStorage
function saveThemeSettings(id, values) {
    localStorage.setItem('checkedTheme', id);
    localStorage.setItem('themeColor', values.color);
    localStorage.setItem('checkedCalcHeaderColor', values.calcTextColor);
    localStorage.setItem('checkedButton', values.buttonColor);
    localStorage.setItem('multipleHover', values.multipleBtnHover);
    localStorage.setItem('checkedTextColor', values.buttonTextColor);
    localStorage.setItem('checkedShadow', values.shadowColor);
    localStorage.setItem('checkedDelReset', values.resetDelBackgroundColor);
    localStorage.setItem('checkedDelResetColor', values.resetDelColor);
    localStorage.setItem('checkDelResetHover', values.delResetBtnHover);
    localStorage.setItem('checkedDelResetShadow', values.resetDelShadow);
    localStorage.setItem('checkedEquality', values.equalColor);
    localStorage.setItem('checkedEqualTextColor', values.equalTextColor);
    localStorage.setItem('checkedEqualityShadow', values.equalShadow);
    localStorage.setItem('checkedEqualityHover', values.equalHover);
    localStorage.setItem('checkedBackgroundColor', values.btnsContainer);
    localStorage.setItem('CheckedInputThemeBackgroundColor', values.inputThemeBgc);
    localStorage.setItem('checkedTextInput', values.inputBackgroundColor);
    localStorage.setItem('checkedInputColor', values.inputColor);
}

// Theme switch logic
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        let values = {};

        if (radio.id === 'theme1') {
            values = {
                color: 'hsl(222, 26%, 31%)',
                calcTextColor: 'hsl(0, 0%, 100%)',
                buttonColor: 'hsl(30, 25%, 89%)',
                buttonTextColor: 'hsl(221, 14%, 31%)',
                shadowColor: '0 4px 1px hsl(28, 16%, 65%)',
                resetDelBackgroundColor: 'hsl(225, 21%, 49%)',
                resetDelColor: 'hsl(0, 0%, 100%)',
                resetDelShadow: '0 4px 1px hsl(224, 28%, 35%)',
                equalColor: 'hsl(6, 63%, 50%)',
                equalTextColor: 'hsl(0, 0%, 100%)',
                equalShadow: '0 4px 1px hsl(6, 70%, 34%)',
                btnsContainer: 'hsl(223, 31%, 20%)',
                inputThemeBgc: 'hsl(223, 31%, 20%)',
                inputBackgroundColor: 'hsl(224, 36%, 15%)',
                inputColor: 'hsl(0, 0%, 100%)',
                multipleBtnHover: 'hsl(0, 0%, 93%)',
                delResetBtnHover: 'hsl(221, 72%, 73%)',
                equalHover: 'hsl(6, 64%, 58%)'
            };
        } else if (radio.id === 'theme2') {
            values = {
                color: 'hsl(0, 0%, 90%)',
                calcTextColor: 'hsl(223, 31%, 20%)',
                buttonColor: 'hsl(45, 7%, 89%)',
                buttonTextColor: 'hsl(60, 10%, 19%)',
                shadowColor: '0 4px 1px hsl(35, 11%, 61%)',
                resetDelBackgroundColor: 'hsl(185, 42%, 37%)',
                resetDelColor: 'hsl(0, 0%, 100%)',
                resetDelShadow: '0 4px 1px hsl(185, 58%, 25%)',
                equalColor: 'hsl(25, 98%, 40%)',
                equalTextColor: 'hsl(0, 0%, 100%)',
                equalShadow: '0 4px 1px hsl(25, 99%, 27%)',
                btnsContainer: 'hsl(0, 5%, 81%)',
                inputThemeBgc: 'hsl(0, 5%, 81%)',
                inputBackgroundColor: 'hsl(0, 0%, 93%)',
                inputColor: 'hsl(224, 36%, 15%)',
                multipleBtnHover: 'hsl(0, 0%, 100%)',
                delResetBtnHover: 'hsl(185, 55%, 53%)',
                equalHover: 'hsl(25, 89%, 59%)'
            };
        } else if (radio.id === 'theme3') {
            values = {
                color: 'hsl(268, 75%, 9%)',
                calcTextColor: 'hsl(52, 100%, 62%)',
                buttonColor: 'hsl(268, 47%, 21%)',
                buttonTextColor: 'hsl(52, 100%, 62%)',
                shadowColor: '0 4px 1px hsl(290, 70%, 36%)',
                resetDelBackgroundColor: 'hsl(281, 89%, 26%)',
                resetDelColor: 'hsl(0, 0%, 100%)',
                resetDelShadow: '0 4px 1px hsl(285, 91%, 52%)',
                equalColor: 'hsl(176, 100%, 44%)',
                equalTextColor: 'hsl(198, 20%, 13%)',
                equalShadow: '0 4px 1px hsl(177, 92%, 70%)',
                btnsContainer: 'hsl(268, 71%, 12%)',
                inputThemeBgc: 'hsl(268, 71%, 12%)',
                inputBackgroundColor: 'hsl(268, 71%, 12%)',
                inputColor: 'hsl(52, 100%, 62%)',
                multipleBtnHover: 'hsl(268, 65%, 33%)',
                delResetBtnHover: 'hsl(290, 70%, 40%)',
                equalHover: 'hsl(176, 88%, 68%)'
            };
        }

        applyTheme(values);
        saveThemeSettings(radio.id, values);
    });
});

// Apply theme values to DOM
function applyTheme(values) {
    body.style.backgroundColor = values.color;
    calcHeaders.forEach(h => h.style.color = values.calcTextColor);

    multipleButtons.forEach(btn => {
        btn.style.backgroundColor = values.buttonColor;
        btn.style.color = values.buttonTextColor;
        btn.style.boxShadow = values.shadowColor;

        btn.onmouseover = () => btn.style.backgroundColor = values.multipleBtnHover;
        btn.onmouseleave = () => btn.style.backgroundColor = values.buttonColor;
    });

    delResetButtons.forEach(btn => {
        btn.style.backgroundColor = values.resetDelBackgroundColor;
        btn.style.color = values.resetDelColor;
        btn.style.boxShadow = values.resetDelShadow;

        btn.onmouseover = () => btn.style.backgroundColor = values.delResetBtnHover;
        btn.onmouseleave = () => btn.style.backgroundColor = values.resetDelBackgroundColor;
    });

    equalityButton.style.backgroundColor = values.equalColor;
    equalityButton.style.color = values.equalTextColor;
    equalityButton.style.boxShadow = values.equalShadow;

    equalityButton.onmouseover = () => equalityButton.style.backgroundColor = values.equalHover;
    equalityButton.onmouseleave = () => equalityButton.style.backgroundColor = values.equalColor;

    buttonsContainer.style.backgroundColor = values.btnsContainer;
    inputThemeContainer.style.backgroundColor = values.inputThemeBgc;
    textInput.style.backgroundColor = values.inputBackgroundColor;
    textInput.style.color = values.inputColor;
}

// Load previously selected theme on page load
loadSavedTheme();

// Calculator logic
function appendToDiplay(input) {
    // If input is an operator, just append it
    if (['+', '-', '*', '/', '.'].includes(input)) {
        textInput.value += input;
    } else {
        // Append digit and format with commas
        const current = textInput.value;
        const lastNumber = current.split(/[\+\-\*\/]/).pop().replace(/,/g, '');
        const rest = current.slice(0, current.length - lastNumber.length);
        const newNumber = (lastNumber + input).replace(/^0+(?=\d)/, ''); // Remove leading zeros
        const formatted = Number(newNumber).toLocaleString();

        textInput.value = rest + formatted;
    }
}

function del() {
        const current = textInput.value;
    const lastChar = current.slice(-1);

    if (lastChar.match(/[\d,]/)) {
        // Remove last digit and reformat
        const lastNumber = current.split(/[\+\-\*\/]/).pop().replace(/,/g, '');
        const rest = current.slice(0, current.length - lastNumber.length);

        const newNumber = lastNumber.slice(0, -1);
        const formatted = Number(newNumber || 0).toLocaleString();

        textInput.value = rest + (newNumber ? formatted : '');
    } else {
        // Remove last operator
        textInput.value = current.slice(0, -1);
    }
}

function reset() {
    textInput.value = "";
}

function equalTo() {
    try {
        const expression = textInput.value.replace(/,/g, ''); // Remove commas
        const result = eval(expression);
        textInput.value = Number(result).toLocaleString(); // Format with commas
    } catch {
        textInput.value = "Error";
    }
}
