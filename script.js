 // Timer Countdown
function startTimer() {
    const daysElement = document.querySelector('.time-unit:nth-child(1) .time-value');
    const hoursElement = document.querySelector('.time-unit:nth-child(2) .time-value');
    const minutesElement = document.querySelector('.time-unit:nth-child(3) .time-value');
    const secondsElement = document.querySelector('.time-unit:nth-child(4) .time-value');

    let days = 4;
    let hours = 23;
    let minutes = 59;
    let seconds = 46;

    const timer = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            
            if (minutes < 0) {
                minutes = 59;
                hours--;
                
                if (hours < 0) {
                    hours = 23;
                    days--;
                    
                    if (days < 0) {
                        clearInterval(timer);
                        return;
                    }
                }
            }
        }

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Form Handling
function handleForms() {
    // Supplier inquiry form
    const inquiryForm = document.querySelector('.request-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Inquiry sent successfully!');
            this.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing!');
                this.reset();
            }
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    startTimer();
    handleForms();
    
    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn-join, .btn-login, .btn-send-quote, .btn-source');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            alert(`${buttonText} clicked!`);
        });
    });
});

// Product interaction
function initProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h5').textContent;
            const price = this.querySelector('.price').textContent;
            alert(`Selected: ${productName} - ${price}`);
        });
    });
}

// Initialize product interactions
document.addEventListener('DOMContentLoaded', initProductInteractions);