
lucide.createIcons();


document.getElementById('year').textContent = new Date().getFullYear();


gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline();

tl.fromTo('.hero-content > div', 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
)
.fromTo('.hero-content h1', 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
    "-=0.6"
)
.fromTo('.hero-content p', 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
    "-=0.6"
)
.fromTo('.hero-content a', 
    { opacity: 0, scale: 0.9 }, 
    { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" }, 
    "-=0.4"
);


gsap.fromTo('.section-header', 
    { opacity: 0, y: 30 },
    { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#categorias',
            start: 'top 75%'
        }
    }
);

gsap.fromTo('.category-card', 
    { opacity: 0, y: 40 },
    { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.category-card',
            start: 'top 85%'
        }
    }
);


gsap.fromTo('.about-text', 
    { opacity: 0, x: -40 },
    { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#nosotros',
            start: 'top 75%'
        }
    }
);

gsap.fromTo('.about-visual', 
    { opacity: 0, scale: 0.9 },
    { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: '#nosotros',
            start: 'top 75%'
        }
    }
);
