(() => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width > 900) return;
  const target = document.querySelector('#mobile-fonts');
  target.setAttribute('href', 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
  target.setAttribute('rel', 'stylesheet');
})()