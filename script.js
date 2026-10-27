document.addEventListener("DOMContentLoaded", () => {


    /*
        INTERAÇÃO DOS CARDS

        Quando passar o mouse pelos cards,
        adicionamos uma classe.
    */

    const cards = document.querySelectorAll(
        ".skin-card, .project-card, .step-card"
    );


    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("is-hovered");

        });


        card.addEventListener("mouseleave", () => {

            card.classList.remove("is-hovered");

        });

    });



    /*
        EFEITO DE APARECIMENTO

        Os elementos aparecem suavemente
        quando entram na tela.
    */

    const elements = document.querySelectorAll(
        ".project-card, .skin-card, .step-card"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        elements.forEach(element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            observer.observe(element);

        });

    }



    /*
        PEQUENO EFEITO DO MOUSE

        Cria uma sensação mais viva
        na página.
    */

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth) * 100;

        const y =
            (event.clientY / window.innerHeight) * 100;


        document.documentElement.style.setProperty(
            "--mouse-x",
            `${x}%`
        );


        document.documentElement.style.setProperty(
            "--mouse-y",
            `${y}%`
        );

    });

});