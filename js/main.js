// $(document).ready(function() {
//     // Smooth scrolling for navigation links
//     $('a.nav-link').on('click', function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             const hash = this.hash;
//
//             $('pages, body').animate({
//                 scrollTop: $(hash).offset().top - 70
//             }, 800);
//         }
//     });
//
//     // Active navigation link updater
//     const updateActiveLink = () => {
//         const scrollPosition = $(window).scrollTop();
//
//         $('section').each(function() {
//             const top = $(this).offset().top - 100;
//             const bottom = top + $(this).outerHeight();
//             const id = $(this).attr('id');
//
//             if (scrollPosition >= top && scrollPosition <= bottom) {
//                 $('.nav-link').removeClass('active');
//                 $(`.nav-link[href="#${id}"]`).addClass('active');
//             }
//         });
//     };
//
//     // Update active link on scroll
//     $(window).on('scroll', updateActiveLink);
//
//     // Navbar background color change on scroll
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 50) {
//             $('.navbar').addClass('navbar-scrolled');
//         } else {
//             $('.navbar').removeClass('navbar-scrolled');
//         }
//     });
//
//     // Initialize tooltips
//     const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     tooltipTriggerList.map(function(tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//     });
//
//     // Add animation on scroll for feature cards
//     const animateOnScroll = () => {
//         $('.feature-card').each(function() {
//             const cardPosition = $(this).offset().top;
//             const scrollPosition = $(window).scrollTop();
//             const windowHeight = $(window).height();
//
//             if (scrollPosition + windowHeight > cardPosition) {
//                 $(this).addClass('animate');
//             }
//         });
//     };
//
//     $(window).on('scroll', animateOnScroll);
//     animateOnScroll(); // Initial check for visible elements
// });

// Form validation functions
const validateForm = (formElement) => {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            showError(input);
        } else {
            hideError(input);
        }
    });

    return isValid;
};

const showError = (input) => {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
        errorDiv.textContent = input.validationMessage;
    }
};

const hideError = (input) => {
    const errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('invalid-feedback')) {
        errorDiv.textContent = '';
    }
};
$(document).ready(function(){
    $('a.nav-link').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function(){
                window.location.hash = hash;
            });
        }
    });
});
