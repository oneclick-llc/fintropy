document.querySelector('.btn__modal__sushi').addEventListener('click', () => {
  const el = document.getElementById('button--modal--sushi');
  const text = document.createElement('span');
  text.innerText = 'Copied';
  text.style = 'font-size: 10pt;';
  navigator.clipboard.writeText('0xD0513DB39d87e8825389fEB10BD911dC53B3a153');
  el.parentNode.replaceChild(text, el);

  const handleReplace = function () {
    text.parentNode.replaceChild(el, text);
  };
  setTimeout(handleReplace, 1500);
});
