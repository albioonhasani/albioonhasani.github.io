const logo = document.querySelector('.ahlogo');
                
logo.addEventListener('mouseenter', () => {
    logo.style.backgroundColor = '';
});
                
logo.addEventListener('mouseleave', () => {
    logo.style.backgroundColor = '';
});




function toggleDropdown() {
    var dropdownContent = document.getElementById("additionalInfoContent");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdownContent = document.getElementById("additionalInfoContent");
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      }
    }
  };
  










  