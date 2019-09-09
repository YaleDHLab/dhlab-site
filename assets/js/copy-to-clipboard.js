(() =>  {

  const clipboardTargets = document.querySelectorAll('.clipboard-target'),
    clipboardContents = document.querySelectorAll('.clipboard-content'),
    clipboardNotifications = document.querySelectorAll('.clipboard-notification');

  if (!clipboardTargets.length) return;

  const handleClick = () => {
    try {
      for (let i=0; i<clipboardContents.length; i++) {
        clipboardContents[i].select();
        const result = document.execCommand('copy');
        if (result) confirmSuccess();
      }
    } catch (err) {}
  };

  const confirmSuccess = () => {
    /* show the mobile notification on mobile */
    const clipboardIdx = clipboardNotifications.length > 1 ? 1 : 0;
    clipboardNotifications[clipboardIdx].style.display = 'block';
    setTimeout(function() {
      clipboardNotifications[clipboardIdx].style.display = 'none';
    }, 3000)
  }

  for (let i=0; i<clipboardTargets.length; i++) {
    clipboardTargets[i].addEventListener('click', handleClick)
  }
})()