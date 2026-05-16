document.addEventListener("DOMContentLoaded", () => {
    const mostrarBienvenida = () => {
        const hora = new Date().getHours();
        const banner = document.getElementById('welcome-message');
        if (banner) {
            let mensaje = "";
            if (hora >= 6 && hora < 12) {
                mensaje = "¡Buenos días! El carnaval somos todos";
            } else if (hora >= 12 && hora < 18) {
                mensaje = "¡Más que fiesta, es tradición!";
            } else {
                mensaje = "Aquí se baila con el alma y se ríe con el corazón.";
            }
            
            banner.style.cssText = "background:#b30000; color:white; text-align:center; padding:15px; font-weight:bold; border-bottom:3px solid #ffd400; font-size: 1.1rem; width: 100%;";
            banner.innerText = mensaje;
        }
    };

    const configurarMenu = () => {
        const btnDropdown = document.querySelector(".dropbtn");
        const contentDropdown = document.querySelector(".dropdown-content");

        if (btnDropdown && contentDropdown) {
            btnDropdown.addEventListener("click", (e) => {
                e.preventDefault();
                contentDropdown.classList.toggle("show");
            });

            window.addEventListener("click", (e) => {
                if (!e.target.matches('.dropbtn')) {
                    if (contentDropdown.classList.contains('show')) {
                        contentDropdown.classList.remove('show');
                    }
                }
            });
        }
    };

    const configurarSlider = () => {
        const slides = document.querySelectorAll(".slide");
        const btnNext = document.querySelector(".next");
        const btnPrev = document.querySelector(".prev");
        
        if (slides.length === 0) return;

        let index = 0;
        let autoPlay = setInterval(() => {
            index = (index + 1) % slides.length;
            actualizarSlide(index);
        }, 5000);

        const actualizarSlide = (i) => {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[i].classList.add("active");
        };

        const reiniciarIntervalo = () => {
            clearInterval(autoPlay);
            autoPlay = setInterval(() => {
                index = (index + 1) % slides.length;
                actualizarSlide(index);
            }, 5000);
        };

        if (btnNext) {
            btnNext.addEventListener("click", () => {
                index = (index + 1) % slides.length;
                actualizarSlide(index);
                reiniciarIntervalo();
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener("click", () => {
                index = (index - 1 + slides.length) % slides.length;
                actualizarSlide(index);
                reiniciarIntervalo();
            });
        }
    };

    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&#8593;";
    scrollBtn.id = "scroll-top-btn";
    scrollBtn.style.cssText = "position:fixed; bottom:20px; right:20px; width:45px; height:45px; background:#b30000; color:#ffd400; border:2px solid #ffd400; border-radius:50%; cursor:pointer; display:none; z-index:1000; font-size:20px; font-weight:bold; box-shadow: 0 4px 8px rgba(0,0,0,0.3); transition: transform 0.2s;";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    scrollBtn.addEventListener("mouseenter", () => {
        scrollBtn.style.transform = "scale(1.1)";
    });

    scrollBtn.addEventListener("mouseleave", () => {
        scrollBtn.style.transform = "scale(1)";
    });

    mostrarBienvenida();
    configurarMenu();
    configurarSlider();
});
