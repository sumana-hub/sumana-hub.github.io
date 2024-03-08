
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
  const currentYear = new Date().getFullYear();
      const copyrightText = document.getElementById('copyright-text');
      copyrightText.innerHTML = `Copyright &copy; ${currentYear} Made with <i class="fa fa-heart"></i> by Sumana Dhital `;