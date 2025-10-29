document.addEventListener('DOMContentLoaded',function(){
  // Initialize AOS
  if(window.AOS) AOS.init({duration:700,once:true});

  // Nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  toggle && toggle.addEventListener('click',()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? 'none' : 'flex';
  });

  // Copy code button
  const copyBtn = document.getElementById('copy-code');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      const code = document.getElementById('arduino-code').innerText;
      try{
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copied!';
        setTimeout(()=>copyBtn.textContent = 'Copy Code',1500);
      }catch(e){
        copyBtn.textContent = 'Copy failed';
        setTimeout(()=>copyBtn.textContent = 'Copy Code',1500);
      }
    });
  }
});
