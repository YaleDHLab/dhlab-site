(() =>  {

  const clipboardTarget = document.querySelector('#clipboard-target'),
    clipboardContent = document.querySelector('#clipboard-content'),
    clipboardNotification = document.querySelector('#clipboard-notification');

  if (!clipboardTarget) return;

  clipboardTarget.addEventListener('click', handleClick)

  const handleClick = () => {
    try {
      clipboardContent.select();
      const result = document.execCommand('copy');
      if (result) confirmSuccess();
    } catch (err) {}
  };

  const confirmSuccess = () => {
    clipboardNotification.style.display = 'block';
    setTimeout(function() {
      clipboardNotification.style.display = 'none';
    }, 3000)
  }

})()