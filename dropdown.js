/* Toggle between hiding and showing the dropdown Menu */
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    const myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }