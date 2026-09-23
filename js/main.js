document.addEventListener("DOMContentLoaded", () => {

    // ============================================================
    // MENÚ MÓVIL
    // ============================================================

    const menuButton = document.querySelector("#menu-button");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            const isOpen = !mobileMenu.classList.contains("hidden");

            mobileMenu.classList.toggle("hidden");

            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        });


        // Cerrar menú al seleccionar una opción

        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.add("hidden");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    // ============================================================
    // EFECTO GLOW DEL CURSOR
    // ============================================================

    const cursorGlow = document.querySelector("#cursor-glow");

    if (cursorGlow) {

        document.addEventListener("mousemove", (event) => {

            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;

        });

    }


    // ============================================================
    // ANIMACIONES AL HACER SCROLL
    // ============================================================

    const animatedElements = document.querySelectorAll(
        "[data-animate]"
    );

    if (animatedElements.length > 0) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.remove(
                        "translate-y-8",
                        "opacity-0"
                    );

                    entry.target.classList.add(
                        "translate-y-0",
                        "opacity-100"
                    );

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.15
            }
        );


        animatedElements.forEach((element) => {
            observer.observe(element);
        });

    }

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {

        animatedElements.forEach((element) => {

            element.classList.remove(
                "translate-y-8",
                "opacity-0",
                "transition-all",
                "duration-700"
            );

            element.classList.add(
                "translate-y-0",
                "opacity-100"
            );

        });

    }

});