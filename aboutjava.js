const logo = document.querySelector('.ahlogo');
                
logo.addEventListener('mouseenter', () => {
    logo.style.backgroundColor = '';
});
                
logo.addEventListener('mouseleave', () => {
    logo.style.backgroundColor = '';
});

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
 
