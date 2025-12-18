document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('style-switch');
  const styleLink = document.getElementById('theme-style');
  const page = document.body.dataset.page;

  // Read the cookie on loading
  let style = getCookie('style');

  // Apply style to load
  applyStyle(style);

  // Style change
  switcher.addEventListener('click', e => {
    e.preventDefault();

    style = style === '1' ? '0' : '1';
    applyStyle(style);

    document.cookie = 'style' + '=' + style + '; path=/';
  });

  function applyStyle(style){
    switch(page) {
      case 'home':
        styleLink.href = style === '0' ? 'styles/home-1.css' : 'styles/home-2.css';
        break;
      case 'calendar':
        styleLink.href = style === '0' ? 'styles/calendar-1.css' : 'styles/calendar-2.css';
        break;
      case 'about':
        styleLink.href = style === '0' ? 'styles/about-1.css' : 'styles/about-2.css';
        break;
      case 'form':
        styleLink.href = style === '0' ? 'styles/form-1.css' : 'styles/form-2.css';
        break;
    }
  }
});

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) {
      return value;
    }
  }
  return '0';
}