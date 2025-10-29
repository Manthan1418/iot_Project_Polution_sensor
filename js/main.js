document.addEventListener('DOMContentLoaded',function(){
  // Initialize AOS
  if(window.AOS) AOS.init({duration:700,once:true});

  // Handle header scroll effect
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when page is scrolled
    if (currentScroll > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Nav toggle for small screens
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle && nav) {
    toggle.addEventListener('click',()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('active');
    });

    // Close menu when clicking on links or outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking on nav links
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

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
