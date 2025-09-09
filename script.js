(function(){
	const navToggle=document.querySelector('.nav-toggle');
	const navList=document.querySelector('.site-nav ul');
	if(navToggle&&navList){
		navToggle.addEventListener('click',()=>{
			navList.classList.toggle('open');
			const expanded=navToggle.getAttribute('aria-expanded')==='true';
			navToggle.setAttribute('aria-expanded',(!expanded).toString());
		});
	}

	// Theme toggle with persistence
	const themeBtn=document.querySelector('.theme-toggle');
	const savedTheme=localStorage.getItem('theme');
	if(savedTheme==='dark') document.body.classList.add('dark');
	if(themeBtn){
		themeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
		themeBtn.addEventListener('click',()=>{
			document.body.classList.toggle('dark');
			const isDark=document.body.classList.contains('dark');
			localStorage.setItem('theme',isDark?'dark':'light');
			themeBtn.textContent=isDark?'☀️':'🌙';
		});
	}

	// Hero background slider
	const heroSlides=[...document.querySelectorAll('.hero-slide')];
	let heroIdx=0;
	function showHero(i){
		heroSlides.forEach((img,j)=>img.classList.toggle('active',j===i));
	}
	if(heroSlides.length){
		showHero(0);
		setInterval(()=>{heroIdx=(heroIdx+1)%heroSlides.length;showHero(heroIdx);},5000);
	}

	// Quotes carousel with dots (manual + auto)
	const slides=[...document.querySelectorAll('.slide')];
	const dotsContainer=document.getElementById('quote-dots');
	let idx=0; let timer;
	function show(i){
		slides.forEach((s,j)=>s.classList.toggle('active',j===i));
		const dots=[...dotsContainer.querySelectorAll('button')];
		dots.forEach((d,j)=>d.classList.toggle('active',j===i));
	}
	function startAuto(){
		stopAuto();
		timer=setInterval(()=>{idx=(idx+1)%slides.length;show(idx);},6000);
	}
	function stopAuto(){ if(timer) clearInterval(timer); }
	if(slides.length&&dotsContainer){
		dotsContainer.innerHTML='';
		slides.forEach((_,i)=>{
			const b=document.createElement('button');
			b.addEventListener('click',()=>{idx=i;show(idx);startAuto();});
			dotsContainer.appendChild(b);
		});
		show(0);
		startAuto();
	}

	// Quick donate pills
	const pills=[...document.querySelectorAll('.pill')];
	const donationLink=document.getElementById('donation-link');
	pills.forEach(p=>p.addEventListener('click',()=>{
		const amount=p.dataset.amount;
		if(!donationLink) return;
		if(amount==='custom'){
			const val=prompt('Enter amount in INR');
			if(!val) return;
			donationLink.href = donationLink.href.split('?')[0] + '?amount=' + encodeURIComponent(val);
			window.location.hash='#donate';
			return;
		}
		donationLink.href = donationLink.href.split('?')[0] + '?amount=' + encodeURIComponent(amount);
		window.location.hash='#donate';
	}));

	// Copy to clipboard
	[...document.querySelectorAll('.copy-btn')].forEach(btn=>{
		btn.addEventListener('click',()=>{
			const selector=btn.getAttribute('data-copy');
			const el=selector?document.querySelector(selector):null;
			if(!el) return;
			navigator.clipboard.writeText(el.textContent.trim()).then(()=>{
				btn.textContent='Copied';
				setTimeout(()=>btn.textContent='Copy',1200);
			});
		});
	});

	// Share
	const shareBtn=document.getElementById('share-btn');
	const waShare=document.getElementById('wa-share');
	const pageUrl=location.href.split('#')[0];
	const text='Join me in supporting HKK Society to build a mosque.';
	if(shareBtn && navigator.share){
		shareBtn.addEventListener('click',()=>navigator.share({title:document.title,text, url:pageUrl}));
	}
	if(waShare){
		waShare.href='https://wa.me/?text='+encodeURIComponent(text+' '+pageUrl);
	}

	// Year
	const y=document.getElementById('year');
	if(y) y.textContent=new Date().getFullYear().toString();
})();
