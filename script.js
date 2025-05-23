document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this to your server
            alert(`Thank you for subscribing with ${email}! You'll receive updates soon.`);
            
            // Clear the form
            this.reset();
        });
    }

    // Add smooth scrolling for all CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real application, this would navigate to a subscription page or form
            if (this.classList.contains('primary')) {
                window.open('https://onlyfans.com/username', '_blank');
            } else if (this.classList.contains('secondary')) {
                window.open('https://onlyfans.com/username', '_blank');
            }
        });
    });

    // Add animation to blurred images on hover
    const blurredImages = document.querySelectorAll('.blurred-image');
    blurredImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.filter = 'blur(5px)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.filter = 'blur(10px)';
        });
    });

    // Animated counters for stats
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/[^\d]/g, '');
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + '+';
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.innerText = target + '+';
        }
    };
    
    // Initialize counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    // Add parallax effect to banner shapes
    const bannerShape = document.querySelector('.banner-shape');
    const bannerShape2 = document.querySelector('.banner-shape-2');
    
    if (bannerShape && bannerShape2) {
        window.addEventListener('mousemove', function(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            bannerShape.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
            bannerShape2.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
        });
    }

    // Show a unique age verification modal
    showUniqueAgeVerification();
    
    function showUniqueAgeVerification() {
        // Store original content
        const originalContent = document.body.innerHTML;
        
        // Create and inject CSS for animations
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            @keyframes gradientBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .age-verify-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(45, 45, 45, 0.9) 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                animation: fadeIn 0.5s ease-out forwards;
            }
            
            .age-verify-card {
                background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
                border-radius: 20px;
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
                width: 90%;
                max-width: 450px;
                overflow: hidden;
                animation: slideUp 0.7s ease-out forwards;
            }
            
            .age-verify-header {
                background: linear-gradient(135deg, #00aff0 0%, #0077cc 100%);
                background-size: 200% 200%;
                animation: gradientBG 5s ease infinite;
                color: white;
                padding: 25px 20px;
                text-align: center;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
            }
            
            .age-verify-content {
                padding: 25px;
                text-align: center;
            }
            
            .age-verify-title {
                margin: 0;
                font-size: 26px;
                font-weight: bold;
                text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
            }
            
            .age-verify-icon {
                font-size: 64px;
                margin-bottom: 15px;
                display: inline-block;
            }
            
            .age-verify-buttons {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 25px;
            }
            
            .age-verify-btn {
                padding: 15px;
                border: none;
                border-radius: 50px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .age-verify-btn-yes {
                background: linear-gradient(135deg, #00aff0 0%, #0077cc 100%);
                color: white;
            }
            
            .age-verify-btn-yes:hover {
                animation: pulse 1s infinite;
                box-shadow: 0 5px 15px rgba(0, 175, 240, 0.4);
            }
            
            .age-verify-btn-no {
                background: white;
                color: #333;
                border: 2px solid #ddd;
            }
            
            .age-verify-btn-no:hover {
                background-color: #f5f5f5;
                border-color: #bbb;
            }
            
            .age-notice {
                margin-top: 20px;
                font-size: 12px;
                color: #777;
            }
            
            /* For the restricted page */
            .restricted-container {
                background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%);
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 20px;
                animation: fadeIn 0.5s ease-out forwards;
            }
            
            .restricted-icon {
                font-size: 80px;
                color: #ff5757;
                margin-bottom: 20px;
            }
            
            .restricted-title {
                font-size: 32px;
                color: #333;
                margin-bottom: 15px;
            }
            
            .restricted-message {
                font-size: 18px;
                color: #555;
                margin-bottom: 30px;
                max-width: 500px;
            }
            
            .restricted-btn {
                background: linear-gradient(135deg, #00aff0 0%, #0077cc 100%);
                color: white;
                border: none;
                padding: 15px 40px;
                border-radius: 50px;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 5px 15px rgba(0, 175, 240, 0.3);
                transition: all 0.3s ease;
            }
            
            .restricted-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 7px 20px rgba(0, 175, 240, 0.4);
            }
            
            @media (min-width: 768px) {
                .age-verify-buttons {
                    flex-direction: row;
                    justify-content: center;
                }
                
                .age-verify-btn {
                    min-width: 180px;
                }
            }
        `;
        document.head.appendChild(styleElement);
        
        // Create modal HTML with emojis and better design
        const modalHTML = `
            <div class="age-verify-backdrop">
                <div class="age-verify-card">
                    <div class="age-verify-header">
                        <h2 class="age-verify-title">Age Verification</h2>
                    </div>
                    <div class="age-verify-content">
                        <div class="age-verify-icon">🔞</div>
                        <p>This website contains content for adults only.</p>
                        <p><strong>Are you at least 18 years old?</strong></p>
                        
                        <div class="age-verify-buttons">
                            <button id="verify-yes" class="age-verify-btn age-verify-btn-yes">Yes, I am 18+</button>
                            <button id="verify-no" class="age-verify-btn age-verify-btn-no">No, I am under 18</button>
                        </div>
                        
                        <p class="age-notice">By clicking "Yes", you confirm that you are at least 18 years old and agree to our Terms of Service.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to body
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = modalHTML;
        document.body.appendChild(tempDiv.firstElementChild);
        
        // Add event listeners to buttons
        document.getElementById('verify-yes').addEventListener('click', function() {
            // Remove the modal with fade effect
            const modal = document.querySelector('.age-verify-backdrop');
            modal.style.animation = 'fadeIn 0.5s ease-out reverse forwards';
            
            setTimeout(() => {
                modal.remove();
            }, 500);
        });
        
        document.getElementById('verify-no').addEventListener('click', function() {
            // Replace with age restriction message
            document.body.innerHTML = `
                <div class="restricted-container">
                    <div class="restricted-icon">⚠️</div>
                    <h1 class="restricted-title">Access Restricted</h1>
                    <p class="restricted-message">This content is only available to adults aged 18 and older.</p>
                    <button id="try-again" class="restricted-btn">Verify Age Again</button>
                </div>
            `;
            
            // Add event listener to try again button
            document.getElementById('try-again').addEventListener('click', function() {
                document.body.innerHTML = originalContent;
                // Re-attach all event listeners
                setTimeout(function() {
                    showUniqueAgeVerification();
                }, 100);
            });
        });
    }

    // Slide-in animations on scroll
    const slideElements = document.querySelectorAll('.slide-hidden, .slide-from-left, .slide-from-right');
    
    // Initial check for elements in viewport
    checkSlideElements();
    
    // Check if elements are in viewport on scroll
    window.addEventListener('scroll', function() {
        checkSlideElements();
    });
    
    function checkSlideElements() {
        slideElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            // Check if element is in viewport
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('slide-show');
            }
        });
    }
});