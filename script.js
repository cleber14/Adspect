window.onload = function() {
    let currentSlide = 1;
    let lateralButton = document.querySelector(".lateral-menu");
    let lateralBar = document.getElementById("container-lateral-menu");

    lateralButton.addEventListener("click", clique);

    function clique() {
        lateralBar.style.display = 'block';
        
    }

    function showSlide(n) {
        let slides = document.getElementsByClassName("images");

        if (n > slides.length) {
            currentSlide = 1;
        } else if (n < 1) {
            currentSlide = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[currentSlide - 1].style.display = "block";
    }

    function changeSlide(n) {
        showSlide(currentSlide += n);
    }

    // Inicializa o slide
    showSlide(currentSlide);
};
