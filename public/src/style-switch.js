document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('style-switch');
  const styleLink = document.getElementById('theme-style');
  const page = document.body.dataset.page;

  // Lire le cookie au chargement
  let style = getCookie('style');

  // Appliquer le style au chargement
  applyStyle(style);

  // Changement du style
  switcher.addEventListener('click', e => {
    e.preventDefault();

    style = style === '1' ? '0' : '1';
    applyStyle(style);

    document.cookie = 'style' + '=' + style + '; path=/';
    console.log(document.cookie);
  });

  function applyStyle(style){
    switch(page) {
      case 'home':
        styleLink.href = style === '0' ? 'styles/home-1.css' : 'styles/home-2.css';
        break;
      case 'calendar':
        styleLink.href = style === '0' ? 'styles/calendar-1.css' : 'styles/calendar-2.css';
        break;
    }
  }
});

// fonction pour récupérer le cookie
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