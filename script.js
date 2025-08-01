// THEME SELECTION      
const theme = document.getElementsByTagName('label');
const textInput = document.getElementById('text-input');
const buttonsContainer = document.querySelector('.buttons-container');
const multipleButtons = document.querySelectorAll('.light-bc')
const delResetButtons = document.querySelectorAll('.del-reset');
const equalityButton = document.querySelector('.equality');
const inputThemeContainer = document.querySelector('.toggle');
const calcHeaders = document.querySelectorAll('.calcs');

const themeRadios = document.querySelectorAll('input[name="theme"]');
const body = document.body;

// Apply saved settings on page load
const savedColor = localStorage.getItem('themeColor');
const savedThemeId = localStorage.getItem('checkedTheme');
const calcHeaderColor = localStorage.getItem('checkedCalcHeaderColor');
const buttonTheme = localStorage.getItem('checkedButton');
const buttonHover = localStorage.getItem('multipleHover');
const buttonTextColor = localStorage.getItem('checkedTextColor');
const boxShadow = localStorage.getItem('checkedShadow')
const delResetBtn = localStorage.getItem('checkedDelReset');
const delResetColor = localStorage.getItem('checkedDelResetColor');
const delResetHover = localStorage.getItem('checkDelResetHover');
const delResetShadow = localStorage.getItem('checkedDelResetShadow');
const equalBtnColor = localStorage.getItem('checkedEquality');
const equalBtnHover = localStorage.getItem('checkedEqualityHover');
const equalTextColor = localStorage.getItem('checkedEqualTextColor');
const equalBtnShadow = localStorage.getItem('checkedEqualityShadow');
const buttonsContainerColor = localStorage.getItem('checkedBackgroundColor');
const inputThemeContainerColor = localStorage.getItem('CheckedInputThemeBackgroundColor');
const TextInputBackgroundColor = localStorage.getItem('checkedTextInput');
const TextInputColor = localStorage.getItem('checkedInputColor');

if (savedColor) {
    body.style.backgroundColor = savedColor;
    multipleButtons.forEach(multipleBtn => {
    multipleBtn.style.backgroundColor = buttonTheme;
    multipleBtn.style.color = buttonTextColor;
    multipleBtn.style.boxShadow = boxShadow;

    multipleBtn.addEventListener('mouseover', () => {
        multipleBtn.style.backgroundColor = buttonHover;
    });

    multipleBtn.addEventListener('mouseleave', () => {
    // restore to default (based on theme or saved state)
    multipleBtn.style.backgroundColor = buttonTheme;
    });
});


delResetButtons.forEach(delBtn => {
    delBtn.style.backgroundColor = delResetBtn;
    delBtn.style.color = delResetColor;
    delBtn.style.boxShadow = delResetShadow;

    delBtn.addEventListener('mouseover', () => {
    delBtn.style.backgroundColor = delResetHover;
    });

    delBtn.addEventListener('mouseleave', () => {
    delBtn.style.backgroundColor = delResetBtn;
    });
});

    calcHeaders.forEach(calBtn => {
        calBtn.style.color = calcHeaderColor;
    });

    equalityButton.style.backgroundColor = equalBtnColor;
    equalityButton.style.color = equalTextColor;
    equalityButton.style.boxShadow = equalBtnShadow;

    equalityButton.addEventListener('mouseover', () => {
        equalityButton.style.backgroundColor = equalBtnHover;
    });

    equalityButton.addEventListener('mouseleave', () => {
        equalityButton.style.backgroundColor = equalBtnColor;
    });
    
    buttonsContainer.style.backgroundColor = buttonsContainerColor;
    inputThemeContainer.style.backgroundColor = inputThemeContainerColor ;
    textInput.style.backgroundColor = TextInputBackgroundColor;
    textInput.style.color = TextInputColor;
};

if (savedThemeId) {
    const savedRadio = document.getElementById(savedThemeId);
    if (savedRadio) savedRadio.checked = true;
};

// Add click listeners
themeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        let color;
        let calcTextColor;
        let buttonColor;
        let buttonTextColor;
        let shadowColor;
        let resetDelBackgroundColor;
        let resetDelColor;
        let resetDelShadow;
        let equalColor;
        let equalTextColor;
        let equalShadow;
        let btnsContainer;
        let inputThemeBgc;
        let inputBackgroundColor;
        let inputColor;
        let multipleBtnHover;
        let delResetBtnHover;
        let equalHover;

        if (radio.id === 'theme1') {
            color = 'hsl(222, 26%, 31%)'; 
            calcTextColor = 'hsl(0, 0%, 100%)';
            buttonColor = 'hsl(30, 25%, 89%)';
            buttonTextColor = 'hsl(221, 14%, 31%)';
            shadowColor = 'hsl(0, 0%, 93%)';
            resetDelBackgroundColor = 'hsl(225, 21%, 49%)';
            resetDelColor = 'hsl(0, 0%, 100%)'
            resetDelShadow = '0 4px 1px hsl(224, 28%, 35%)';
            equalColor = 'hsl(6, 63%, 50%)';
            equalTextColor = 'hsl(0, 0%, 100%)';
            equalShadow = '0 4px 1px hsl(6, 70%, 34%)';
            btnsContainer = 'hsl(223, 31%, 20%)';
            inputThemeBgc = 'hsl(223, 31%, 20%)';
            inputBackgroundColor = 'hsl(224, 36%, 15%)';
            inputColor = 'hsl(0, 0%, 100%)';
            multipleBtnHover = 'hsl(0, 0%, 93%)';
            delResetBtnHover = 'hsl(221, 72.30%, 73.10%)';
            equalHover = 'hsl(6, 64.10%, 57.50%)';
            
        } else if (radio.id === 'theme2') {
            color = 'hsl(0, 0%, 90%)'; 
            calcTextColor = 'hsl(223, 31%, 20%)';
            buttonColor = 'hsl(45, 7%, 89%)';
            buttonTextColor = 'hsl(60, 10%, 19%)';
            shadowColor = '0 4px 1px hsl(35, 11%, 61%)';
            resetDelBackgroundColor = 'hsl(185, 42%, 37%)';
            resetDelColor = 'hsl(0, 0%, 100%)'
            resetDelShadow = '0 4px 1px hsl(185, 58%, 25%)';
            equalColor = 'hsl(25, 98%, 40%)';
            equalTextColor = 'hsl(0, 0%, 100%)';
            equalShadow = '0 4px 1px hsl(25, 99%, 27%)';
            btnsContainer = 'hsl(0, 5%, 81%)';
            inputThemeBgc = 'hsl(0, 5%, 81%)';
            inputBackgroundColor = 'hsl(0, 0%, 93%)';
            inputColor = 'hsl(224, 36%, 15%)'
            multipleBtnHover = 'hsl(0, 0%, 93%)';
            delResetBtnHover = 'hsl(185, 55.40%, 52.50%)'
            equalHover = 'hsl(25, 88.60%, 58.80%)';
            
        } else if (radio.id === 'theme3') {
            color = 'hsl(268, 75%, 9%)'; 
            calcTextColor = 'hsl(52, 100%, 62%)';
            buttonColor = 'hsl(268, 47%, 21%)';
            buttonTextColor = 'hsl(52, 100%, 62%)';
            shadowColor = '0 4px 1px hsl(285, 91%, 52%)';
            resetDelBackgroundColor = 'hsl(281, 89%, 26%)';
            resetDelColor = 'hsl(0, 0%, 100%)'
            resetDelShadow = '0 4px 1px hsl(285, 91%, 52%)';
            equalColor = 'hsl(176, 100%, 44%)';
            equalTextColor = 'hsl(198, 20%, 13%)';
            equalShadow = '0 4px 1px hsl(177, 92%, 70%)';
            btnsContainer = 'hsl(268, 71%, 12%)';
            inputThemeBgc = 'hsl(268, 71%, 12%)';
            inputBackgroundColor = 'hsl(268, 71%, 12%)';
            inputColor = 'hsl(52, 100%, 62%)'
            multipleBtnHover = 'hsl(268, 65.30%, 32.70%)';
            delResetBtnHover = 'hsl(290, 70%, 36%)'
            equalHover = 'hsl(176, 87.70%, 68.00%)';
            
        };

        calcHeaders.forEach(calBtn => {
        calBtn.style.color = calcTextColor;
    });

        body.style.backgroundColor = color;
        multipleButtons.forEach(multipleBtn => {
        multipleBtn.style.backgroundColor = buttonColor;
        multipleBtn.style.color = buttonTextColor;
        multipleBtn.style.boxShadow = shadowColor;

        multipleBtn.addEventListener('mouseover', () => {
        multipleBtn.style.backgroundColor = multipleBtnHover;
    });

        multipleBtn.addEventListener('mouseleave', () => {
    // restore to default (based on theme or saved state)
    multipleBtn.style.backgroundColor = buttonColor;
    });

    });

    delResetButtons.forEach(delBtn => {
        delBtn.style.backgroundColor = resetDelBackgroundColor;
        delBtn.style.color = resetDelColor;
        delBtn.style.boxShadow = resetDelShadow;

        delBtn.addEventListener('mouseover', () => {
        delBtn.style.backgroundColor = delResetBtnHover;
    });

        delBtn.addEventListener('mouseleave', () => {
        delBtn.style.backgroundColor = resetDelBackgroundColor;
    });
    });

    equalityButton.style.backgroundColor = equalColor;
    equalityButton.style.color = equalTextColor;
    equalityButton.style.boxShadow = equalShadow;

    equalityButton.addEventListener('mouseover', () => {
    equalityButton.style.backgroundColor = equalHover;
});

    equalityButton.addEventListener('mouseleave', () => {
    equalityButton.style.backgroundColor = equalColor;
});
    
    buttonsContainer.style.backgroundColor = btnsContainer;
    inputThemeContainer.style.backgroundColor = inputThemeBgc;
    
    textInput.style.backgroundColor = inputBackgroundColor;
    textInput.style.color = inputColor;

        localStorage.setItem('themeColor', color);
        localStorage.setItem('checkedTheme', radio.id);

        localStorage.setItem('checkedButton', buttonColor);
        localStorage.setItem('checkedTextColor', buttonTextColor);
        localStorage.setItem('checkedShadow', shadowColor);
        
        localStorage.setItem('checkedDelReset', resetDelBackgroundColor);
        localStorage.setItem('checkedDelResetColor', resetDelColor);
        localStorage.setItem('checkedDelResetShadow', resetDelShadow);
        localStorage.setItem('checkDelResetHover', delResetBtnHover);

        localStorage.setItem('checkedEquality', equalColor);
        localStorage.setItem('checkedEqualTextColor', equalTextColor);
        localStorage.setItem('checkedEqualityShadow', equalShadow);
        localStorage.setItem('checkedEqualityHover', equalHover);
        
        localStorage.setItem('checkedBackgroundColor', btnsContainer);
        localStorage.setItem('CheckedInputThemeBackgroundColor', inputThemeBgc);

        localStorage.setItem('checkedCalcHeaderColor', calcTextColor);
        localStorage.setItem('checkedTextInput', inputBackgroundColor);
        localStorage.setItem('checkedInputColor', inputColor);
    });
});

// DISPLAYING THE VALUES
function appendToDiplay(input) {
    textInput.value += input;
}

// DELETING THE VALUE
function del() {
    textInput.value = textInput.value.slice(0, -1);
}

// RESETING THE VALUE
function reset() {
    textInput.value = "";
}

// CALCULATING OF VALUES
function equalTo() {
    try {
        textInput.value = eval(textInput.value);
    } catch (error) {
        textInput.value = "Error"
    }
}