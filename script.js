/* =========================================================
   THE ACADEMY
   SCRIPT.JS
========================================================= */

/* =========================================================
   AUTO FOOTER DATE
========================================================= */

(function () {

    const dateElement =
        document.getElementById("current-date");

    if (!dateElement) return;

    const today = new Date();

    const formattedDate =
        today.toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    dateElement.textContent =
        formattedDate;

})();

/* =========================================================
   ROTATING QUOTES
========================================================= */

(function () {

    const quoteBoxes =
        document.querySelectorAll(
            "[data-quotes]"
        );

    if (!quoteBoxes.length) return;

    quoteBoxes.forEach(box => {

        let quotes;

        try {

            quotes =
                JSON.parse(
                    box.dataset.quotes
                );

        } catch {

            return;

        }

        if (!quotes.length) return;

        let currentIndex =
            Math.floor(
                Math.random() *
                quotes.length
            );

        box.classList.add(
            "rotating-quote"
        );

        box.textContent =
            quotes[currentIndex];

        setInterval(() => {

            box.classList.add(
                "quote-fade-out"
            );

            setTimeout(() => {

                currentIndex =
                    (currentIndex + 1) %
                    quotes.length;

                box.textContent =
                    quotes[currentIndex];

                box.classList.remove(
                    "quote-fade-out"
                );

                box.classList.add(
                    "quote-fade-in"
                );

                setTimeout(() => {

                    box.classList.remove(
                        "quote-fade-in"
                    );

                }, 800);

            }, 700);

        }, 12000);

    });

})();

/* =========================================================
   LEXICON ACCORDION
========================================================= */

(function () {

    const sections =
        document.querySelectorAll(
            ".alphabet-section"
        );

    if (!sections.length) return;

    sections.forEach(section => {

        const header =
            section.querySelector(
                ".alphabet-header"
            );

        if (!header) return;

        header.addEventListener(
            "click",
            () => {

                section.classList.toggle(
                    "active"
                );

            }
        );

    });

})();

/* =========================================================
   SCROLL REVEAL
========================================================= */

(function () {

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    if (!revealElements.length) return;

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    revealElements.forEach(el => {

        observer.observe(el);

    });

})();

/* =========================================================
   ATLAS NODE ENHANCEMENT
========================================================= */

(function () {

    const nodes =
        document.querySelectorAll(
            ".atlas-node"
        );

    if (!nodes.length) return;

    nodes.forEach(node => {

        node.addEventListener(
            "mouseenter",
            () => {

                node.style.zIndex = "50";

            }
        );

        node.addEventListener(
            "mouseleave",
            () => {

                node.style.zIndex = "10";

            }
        );

    });

})();

/* =========================================================
   PAGE FADE-IN
========================================================= */

(function () {

    document.body.style.opacity =
        "0";

    window.addEventListener(
        "load",
        () => {

            document.body.style.transition =
                "opacity 0.8s ease";

            document.body.style.opacity =
                "1";

        }
    );

})();

/* =========================================================
   SMOOTH BACK TO TOP
========================================================= */

(function () {

    const buttons =
        document.querySelectorAll(
            ".back-button"
        );

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    });

})();

/* =========================================================
   TIMELINE CARD REVEAL
========================================================= */

(function () {

    const cards =
        document.querySelectorAll(
            ".timeline-card"
        );

    if (!cards.length) return;

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        setTimeout(() => {

            card.style.transition =
                "all 0.8s ease";

            card.style.opacity =
                "1";

            card.style.transform =
                "translateY(0)";

        }, index * 120);

    });

})();

/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

(function () {

    const headers =
        document.querySelectorAll(
            ".alphabet-header"
        );

    headers.forEach(header => {

        header.setAttribute(
            "tabindex",
            "0"
        );

        header.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    header.click();

                }

            }
        );

    });

})();

/* =========================================================
   OPTIONAL PARALLAX
========================================================= */

(function () {

    const compass =
        document.querySelector(
            ".compass-rose"
        );

    if (!compass) return;

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 10;

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 10;

            compass.style.transform =
                `translate(-50%, -50%)
                 rotate(${x}deg)
                 translate(${x}px, ${y}px)`;

        }
    );

})();

/* =========================================================
   END OF SCRIPT
========================================================= */
