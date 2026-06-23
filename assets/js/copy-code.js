// Copy Code Button for both fenced code blocks and custom highlight blocks
document.addEventListener('DOMContentLoaded', function () {

  // Tambah tombol ke semua fenced code block (div.highlighter-rouge)
  document.querySelectorAll('div.highlighter-rouge').forEach(function (block) {
    addCopyButton(block, function () {
      var code = block.querySelector('code');
      return code ? code.innerText : '';
    });
  });

  // Tambah tombol ke semua custom highlight block (figure.highlight)
  document.querySelectorAll('figure.highlight').forEach(function (block) {
    addCopyButton(block, function () {
      var code = block.querySelector('td.code pre') || block.querySelector('pre');
      return code ? code.innerText : '';
    });
  });

  function addCopyButton(container, getCode) {
    var btn = document.createElement('button');
    btn.className = 'copy-code-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Copy code');
    btn.innerHTML = '<i class="fa-regular fa-copy"></i>';

    btn.addEventListener('click', function () {
      var text = getCode();
      navigator.clipboard.writeText(text).then(function () {
        btn.classList.add('copied');
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 2000);
      });
    });

    container.style.position = container.style.position || 'relative';
    container.appendChild(btn);
  }

});
