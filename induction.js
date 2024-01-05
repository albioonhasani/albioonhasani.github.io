const logo = document.querySelector('.ahlogo');
                
logo.addEventListener('mouseenter', () => {
    logo.style.backgroundColor = '';
});
                
logo.addEventListener('mouseleave', () => {
    logo.style.backgroundColor = '';
});

function navigateToPage() {
    var selectBox = document.getElementById("ahmenu");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

const dropdownSelect = document.getElementById('dropdownSelect');


const selectedOptionText = document.getElementById('selectedOptionText');


dropdownSelect.addEventListener('change', function () {
    selectedOptionText.textContent = dropdownSelect.options[dropdownSelect.selectedIndex].text;
});


dropdownSelect.addEventListener('click', function () {
    dropdownSelect.parentElement.classList.toggle('active');
});


document.addEventListener('click', function (e) {
    if (e.target !== dropdownSelect) {
        dropdownSelect.parentElement.classList.remove('active');
    }
});

function updateSelectedOption() {
    var selectBox = document.getElementById("ahmenu");
    var selectedValue = selectBox.options[selectBox.selectedIndex].text;
    var selectedOptionContainer = document.getElementById("selected-option");
    
    selectedOptionContainer.textContent = "Selected Option: " + selectedValue;
    }