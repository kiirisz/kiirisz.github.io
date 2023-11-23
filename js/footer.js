document.addEventListener('DOMContentLoaded', function () {

    var footerHover = document.getElementById('footer-hover');
    var footer = document.querySelector('footer');

    footerHover.addEventListener('mouseover', function () {
        footer.style.bottom = "0";
    });

    footerHover.addEventListener('mouseout', function () {
        footer.style.bottom = "-50";
    });

});