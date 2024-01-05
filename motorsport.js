
const logo = document.querySelector('.logo');
                
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

function navigateToPage() {
    var selectBox = document.getElementById("menu");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}


function updateSelectedOption() {
    var selectBox = document.getElementById("menu");
    var selectedValue = selectBox.options[selectBox.selectedIndex].text;
    var selectedOptionContainer = document.getElementById("selected-option");
    
    selectedOptionContainer.textContent = "Selected Option: " + selectedValue;
    }


  



function showItem(itemId) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.classList.remove('active');
    });
  
    const selectedItem = document.getElementById(itemId);
    selectedItem.classList.add('active');
  }

  