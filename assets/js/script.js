// ========== CUSTOM CURSOR ==========
const cursor = document.getElementById('customCursor');
const cursorDot = document.getElementById('customCursorDot');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let cursorDotX = 0, cursorDotY = 0;

// Smooth cursor movement
const updateCursor = () => {
    // Main cursor with delay for smooth effect
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Dot cursor with less delay (faster)
    cursorDotX += (mouseX - cursorDotX) * 0.3;
    cursorDotY += (mouseY - cursorDotY) * 0.3;
    
    cursorDot.style.left = cursorDotX + 'px';
    cursorDot.style.top = cursorDotY + 'px';
    
    requestAnimationFrame(updateCursor);
};

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start cursor animation
updateCursor();

// Hover effects
const addHoverEffect = (element) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(200, 16, 46, 0.2)';
        cursor.style.borderColor = '#ff3366';
        cursorDot.style.transform = 'scale(1.5)';
        cursorDot.style.background = '#ff3366';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'rgba(200, 16, 46, 0.1)';
        cursor.style.borderColor = 'var(--primary-red)';
        cursorDot.style.transform = 'scale(1)';
        cursorDot.style.background = 'var(--primary-red)';
    });
};

// Apply to interactive elements
document.querySelectorAll('a, button, .service-card, .nav-link, .btn, .gallery-card, .glass-card').forEach(addHoverEffect);

// Click effect
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorDot.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorDot.style.transform = 'scale(1)';
});

// Hide on touch devices
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
}

// ========== SCROLL TO TOP ==========
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

        // Loader
        window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            setTimeout(function() {
                loader.classList.add('hidden');
            }, 3000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Active nav link on click
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu after click
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse).hide();
                }
            });
        });

        // Smooth scrolling for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    




      
      // Video Play/Pause Functionality
      const video = document.getElementById("salonVideo");
      const playBtn = document.getElementById("playBtn");
      const videoOverlay = document.getElementById("videoOverlay");

      playBtn.addEventListener("click", function () {
        if (video.paused) {
          video.play();
          videoOverlay.classList.add("hidden");
          playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
          video.pause();
          videoOverlay.classList.remove("hidden");
          playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
      });

      // Show overlay when video ends
      video.addEventListener("ended", function () {
        videoOverlay.classList.remove("hidden");
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
      });

      // Button Functionality
      const bookNowBtn = document.getElementById("bookNowBtn");
      const readMoreBtn = document.getElementById("readMoreBtn");

      bookNowBtn.addEventListener("click", function () {
        this.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Redirecting...';
        setTimeout(() => {
          alert("Redirecting to booking page!");
          // window.location.href = '/booking';
        }, 1000);
      });

      readMoreBtn.addEventListener("click", function () {
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        setTimeout(() => {
          alert("Loading more information!");
          // window.location.href = '/about';
        }, 1000);
      });

      // Stats Counter Animation
      function animateStats() {
        const counters = document.querySelectorAll(".count-up");

        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"));
          let current = 0;
          const increment = target / 40;
          const duration = 1500;
          const stepTime = duration / (target / increment);

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target + "+";
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, stepTime);
        });
      }

      // Fade-in Animation on Scroll
      function checkScroll() {
        const fadeElements = document.querySelectorAll(".fade-in");

        fadeElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible");
          }
        });
      }

      // Initialize animations when page loads
      window.addEventListener("load", function () {
        checkScroll();

        // Start stats animation after a delay
        setTimeout(() => {
          animateStats();
        }, 500);
      });

      // Check scroll position
      window.addEventListener("scroll", checkScroll);

      // Mobile video optimization
      function handleVideoResize() {
        if (window.innerWidth <= 768) {
          video.muted = true;
          video.setAttribute("playsinline", "");
          video.setAttribute("webkit-playsinline", "");
        }
      }

      window.addEventListener("resize", handleVideoResize);
      handleVideoResize(); // Initial call

      // Add loading state to buttons
      const buttons = document.querySelectorAll(".btn");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", function () {
          this.style.transform = "translateY(-2px)";
        });

        button.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
        });
      });

      // Add click animation to stats cards
      const statCards = document.querySelectorAll(".stat-card");
      statCards.forEach((card) => {
        card.addEventListener("click", function () {
          this.style.transform = "scale(0.95)";
          setTimeout(() => {
            this.style.transform = "translateY(-5px)";
          }, 150);
        });
      });



      // about section js here
       // Timeline animation on scroll
        const timelineItems = document.querySelectorAll('.timeline-item');

        function animateTimeline() {
            timelineItems.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                }
            });
        }

        // Initialize timeline items
        timelineItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.6s ease';
        });

        window.addEventListener('scroll', animateTimeline);
        animateTimeline();







        // services section js 

           // Scroll Animation Observer
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all animated elements
            document.querySelectorAll('.fade-up, .fade-in-left, .fade-in-right, .scale-up').forEach(el => {
                observer.observe(el);
            });
        }

        // Service Category Filter
        const categoryBtns = document.querySelectorAll('.category-btn');
        const serviceCards = document.querySelectorAll('.service-card');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const category = btn.getAttribute('data-category');
                
                // Animate out current cards
                serviceCards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                });
                
                // Show filtered cards after animation
                setTimeout(() => {
                    serviceCards.forEach(card => {
                        if (category === 'all' || card.getAttribute('data-category') === category) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 100);
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }, 300);
            });
        });

        // Book Now Buttons Animation
        const bookButtons = document.querySelectorAll('.btn-book');
        bookButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.7);
                    transform: scale(0);
                    animation: ripple-animation 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y}px;
                    left: ${x}px;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Service info
                const serviceTitle = this.closest('.service-card')?.querySelector('.service-title')?.textContent || 'Service';
                const servicePrice = this.closest('.service-card')?.querySelector('.price-amount')?.textContent || '';
                
                // Button animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                    alert(`Booking: ${serviceTitle}\nPrice: ${servicePrice}\n\nYou will be redirected to booking page...`);
                }, 150);
            });
        });

        // Details Buttons
        const detailButtons = document.querySelectorAll('.btn-details');
        detailButtons.forEach(button => {
            button.addEventListener('click', function() {
                const serviceCard = this.closest('.service-card');
                if (serviceCard) {
                    serviceCard.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        serviceCard.style.transform = '';
                    }, 300);
                    
                    const serviceTitle = serviceCard.querySelector('.service-title').textContent;
                    const serviceDescription = serviceCard.querySelector('.service-description').textContent;
                    
                    alert(`Service Details: ${serviceTitle}\n\n${serviceDescription}`);
                }
            });
        });

        // CTA Button Animation
        document.querySelector('.btn-cta').addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                alert('Redirecting to booking page...');
                // Redirect to booking page
            }, 150);
        });

        // Hover animations for cards
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            initScrollAnimations();
            
            // Initial stagger animation for service cards
            setTimeout(() => {
                serviceCards.forEach((card, index) => {
                    setTimeout(() => {
                        if (card.classList.contains('fade-up')) {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }
                    }, index * 100);
                });
            }, 500);
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            // Re-initialize animations if needed
        });
  





        // booking form section js 

          // Current step tracking
        let currentStep = 1;
        const totalSteps = 4;

        // Booking data object
        const bookingData = {
            service: '',
            package: '',
            date: '',
            time: '',
            name: '',
            phone: '',
            email: '',
            requests: '',
            price: 0
        };

        // Initialize date picker min date
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('appointmentDate').min = today;
            generateTimeSlots();
        });

        // Generate time slots
        function generateTimeSlots() {
            const timeSlotsContainer = document.getElementById('timeSlots');
            const slots = [
                '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
                '05:00 PM', '06:00 PM', '07:00 PM'
            ];

            timeSlotsContainer.innerHTML = slots.map(slot => 
                `<div class="time-slot" data-time="${slot}">${slot}</div>`
            ).join('');

            // Add click event to time slots
            document.querySelectorAll('.time-slot').forEach(slot => {
                slot.addEventListener('click', function() {
                    if (!this.classList.contains('disabled')) {
                        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                        this.classList.add('selected');
                        bookingData.time = this.getAttribute('data-time');
                        updateSummary();
                    }
                });
            });
        }

        // Service price calculation
        document.getElementById('serviceType').addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            bookingData.service = selectedOption.text;
            bookingData.price = parseInt(selectedOption.getAttribute('data-price')) || 0;
            updateSummary();
        });

        document.getElementById('package').addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            bookingData.package = selectedOption.text;
            if (selectedOption.value) {
                bookingData.price = parseInt(selectedOption.getAttribute('data-price')) || 0;
            }
            updateSummary();
        });

        // Date selection
        document.getElementById('appointmentDate').addEventListener('change', function() {
            bookingData.date = this.value;
            updateSummary();
        });

        // Personal details
        document.getElementById('fullName').addEventListener('input', function() {
            bookingData.name = this.value;
        });

        document.getElementById('phoneNumber').addEventListener('input', function() {
            bookingData.phone = this.value;
        });

        document.getElementById('email').addEventListener('input', function() {
            bookingData.email = this.value;
        });

        document.getElementById('specialRequests').addEventListener('input', function() {
            bookingData.requests = this.value;
        });

        // Navigation functions
        function nextStep(step) {
            if (validateStep(currentStep)) {
                currentStep = step;
                updateProgress();
                showStep(step);
                updateConfirmation();
            }
        }

        function prevStep(step) {
            currentStep = step;
            updateProgress();
            showStep(step);
        }

        function showStep(step) {
            // Hide all steps
            document.querySelectorAll('.form-step').forEach(stepEl => {
                stepEl.classList.remove('active');
            });
            
            // Show current step
            document.getElementById(`step${step}`).classList.add('active');
        }

        function updateProgress() {
            const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;
            
            // Update step indicators
            document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
                if (index + 1 <= currentStep) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        function validateStep(step) {
            switch(step) {
                case 1:
                    if (!document.getElementById('serviceType').value) {
                        alert('Please select a service');
                        return false;
                    }
                    return true;
                
                case 2:
                    if (!document.getElementById('appointmentDate').value) {
                        alert('Please select a date');
                        return false;
                    }
                    if (!bookingData.time) {
                        alert('Please select a time slot');
                        return false;
                    }
                    return true;
                
                case 3:
                    if (!document.getElementById('fullName').value) {
                        alert('Please enter your full name');
                        return false;
                    }
                    if (!document.getElementById('phoneNumber').value) {
                        alert('Please enter your phone number');
                        return false;
                    }
                    return true;
                
                default:
                    return true;
            }
        }

        function updateSummary() {
            // Update summary sidebar
            document.getElementById('summaryService').textContent = bookingData.service || '-';
            document.getElementById('summaryPackage').textContent = bookingData.package || 'None';
            document.getElementById('summaryDateTime').textContent = 
                bookingData.date && bookingData.time ? 
                `${bookingData.date} at ${bookingData.time}` : '-';
            document.getElementById('summaryDuration').textContent = '45-60 mins';
            document.getElementById('summaryTotal').textContent = `Rs ${bookingData.price}`;
        }

        function updateConfirmation() {
            // Update confirmation step
            document.getElementById('confirmService').textContent = bookingData.service;
            document.getElementById('confirmPackage').textContent = bookingData.package || 'None';
            document.getElementById('confirmDate').textContent = bookingData.date;
            document.getElementById('confirmTime').textContent = bookingData.time;
            document.getElementById('confirmName').textContent = bookingData.name;
            document.getElementById('confirmPhone').textContent = bookingData.phone;
        }

        function submitBooking() {
            // Show success message
            document.getElementById('step4').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';

            // Prepare WhatsApp message
            const message = `💈 *New Booking Request - Sohna Salon* 💈

👤 *Name:* ${bookingData.name}
📞 *Phone:* ${bookingData.phone}
📧 *Email:* ${bookingData.email || 'Not provided'}

💇 *Service:* ${bookingData.service}
📦 *Package:* ${bookingData.package || 'None'}
💰 *Total:* Rs ${bookingData.price}

📅 *Date:* ${bookingData.date}
🕐 *Time:* ${bookingData.time}

📝 *Special Requests:* ${bookingData.requests || 'None'}

📍 *Sent from Sohna Salon Website*`;

            // Open WhatsApp
            const whatsappURL = `https://wa.me/+923158466285?text=${encodeURIComponent(message)}`;
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
            }, 2000);
        }

        function resetForm() {
            // Reset form and show first step
            document.getElementById('bookingForm').reset();
            document.getElementById('successMessage').style.display = 'none';
            currentStep = 1;
            updateProgress();
            showStep(1);
            
            // Reset booking data
            Object.keys(bookingData).forEach(key => {
                bookingData[key] = '';
            });
            bookingData.price = 0;
            updateSummary();
            
            // Reset time slots selection
            document.querySelectorAll('.time-slot').forEach(slot => {
                slot.classList.remove('selected');
            });
        }





        // gallery section js 

         // Gallery Filter Functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Lightbox Functionality
        let currentImageIndex = 0;
        const images = [
            {
               src: 'assets/pic/man2.jpg',
                title: 'Classic Fade Haircut',
                desc: 'Before & After Transformation'
            },
            {
                src: 'assets/pic/beard.jpg',
                title: 'Beard Styling',
                desc: 'Precision Beard Design'
            },
            {
                 src: 'assets/pic/facial.jpg',
                title: 'Premium Facial',
                desc: 'Skin Rejuvenation'
            },
            {
               src: 'assets/pic/salon interior.jpg', 
              title: 'Luxury Interior',
                desc: 'Premium Salon Setup'
            },
            {
                  src: 'assets/pic/hair cut.jpg',
                title: 'Modern Style',
                desc: 'Contemporary Haircut'
            },
            {
                src: 'assets/pic/man1.jpg',
                title: 'Beard Care',
                desc: 'Complete Grooming'
            },
            {
                 src: 'assets/pic/child1.jpg',
                title: 'Skin Treatment',
                desc: 'Professional Care'
            },
            { 
                 src: 'assets/pic/salon out pic.jpg',
                title: 'Work Station',
                desc: 'Professional Setup'
            }
        ];

        function openLightbox(index) {
            currentImageIndex = index - 1;
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxTitle = document.getElementById('lightbox-title');
            const lightboxDesc = document.getElementById('lightbox-desc');
            
            lightboxImg.src = images[currentImageIndex].src;
            lightboxTitle.textContent = images[currentImageIndex].title;
            lightboxDesc.textContent = images[currentImageIndex].desc;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function changeImage(direction) {
            currentImageIndex += direction;
            
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxTitle = document.getElementById('lightbox-title');
            const lightboxDesc = document.getElementById('lightbox-desc');
            
            lightboxImg.src = images[currentImageIndex].src;
            lightboxTitle.textContent = images[currentImageIndex].title;
            lightboxDesc.textContent = images[currentImageIndex].desc;
        }

        // Close lightbox on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeImage(1);
            }
        });

        // Close lightbox when clicking outside image
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') {
                closeLightbox();
            }
        });

        // Initialize gallery items animation
        galleryItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // Smooth scroll for CTA button
        document.querySelector('.btn-cta').addEventListener('click', (e) => {
            e.preventDefault();
            alert('Booking functionality would be implemented here!');
        });










        // footer js here

      

    
        // Function to initialize OpenStreetMap
        function initOpenStreetMap() {
            // Default coordinates (Karachi)
            let latitude = 24.8607;
            let longitude = 67.0011;
            
            // Try to get user's location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        // Use user's current location
                        latitude = position.coords.latitude;
                        longitude = position.coords.longitude;
                        createMap(latitude, longitude);
                    },
                    function(error) {
                        // If user denies location, use default
                        console.log("Location access denied, using default location");
                        createMap(latitude, longitude);
                    }
                );
            } else {
                // Geolocation not supported, use default
                createMap(latitude, longitude);
            }
        }
        
        function createMap(lat, lng) {
            // Create map centered at the coordinates
            const map = L.map('openstreetmap').setView([lat, lng], 15);
            
            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
            }).addTo(map);
            
            // Create custom red marker icon
            const redIcon = L.divIcon({
                html: '<div class="custom-red-marker"><i class="fas fa-map-marker-alt"></i></div>',
                iconSize: [35, 35],
                iconAnchor: [17, 35],
                popupAnchor: [0, -35],
                className: 'custom-marker'
            });
            
            // Add marker to the map
            const marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);
            
            // Create popup content
            const popupContent = `
                <div style="text-align: center; padding: 5px;">
                    <h4 style="margin: 0 0 5px 0; color: var(--primary-red);">Sohna Salon</h4>
                    <p style="margin: 0 0 10px 0; font-size: 0.9rem;">Your Location Address</p>
                    <button onclick="getDirections(${lat}, ${lng})" 
                            style="background: var(--gradient-red); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 0.8rem;">
                        <i class="fas fa-directions"></i> Get Directions
                    </button>
                </div>
            `;
            
            // Bind popup to marker
            marker.bindPopup(popupContent).openPopup();
            
            // Add click event to marker
            marker.on('click', function() {
                this.openPopup();
            });
            
            // Save map instance for resize handling
            window.currentMap = map;
        }
        
        // Function to get directions
        function getDirections(lat, lng) {
            const url = `https://maps.app.goo.gl/ALneFGxvmeSLNEsC6?api=1&destination=${lat},${lng}`;
            window.open(url, '_blank');
        }
        
        // Function to resize map on window resize
        function resizeMap() {
            if (window.currentMap) {
                setTimeout(() => {
                    window.currentMap.invalidateSize();
                }, 200);
            }
        }
        
        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initOpenStreetMap();
            
            // Handle window resize
            window.addEventListener('resize', resizeMap);
            
            // Handle orientation change
            window.addEventListener('orientationchange', function() {
                setTimeout(resizeMap, 300);
            });
            
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
            
            // Update overlay text with location
            setTimeout(() => {
                const overlayText = document.querySelector('.map-overlay p');
                overlayText.textContent = 'Click on map marker for directions';
            }, 1000);
        });
        
        // Fallback function if something goes wrong
        function showMapError() {
            const mapContainer = document.getElementById('openstreetmap');
            mapContainer.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: var(--card-bg); color: var(--text-secondary); padding: 20px; text-align: center; border-radius: 10px;">
                    <i class="fas fa-map-marker-alt" style="font-size: 2.5rem; color: var(--primary-red); margin-bottom: 15px;"></i>
                    <h4 style="color: var(--text-primary); margin-bottom: 10px;">Sohna Salon</h4>
                    <p style="margin-bottom: 15px; font-size: 0.9rem;">Your Location Address</p>
                    <div style="display: flex; gap: 10px;">
                        <button onclick="getDirections(24.8607, 67.0011)" style="background: var(--gradient-red); color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 0.85rem;">
                            <i class="fas fa-directions"></i> Get Directions
                        </button>
                        <button onclick="initOpenStreetMap()" style="background: var(--card-bg); color: var(--text-primary); border: 1px solid var(--border-red); padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 0.85rem;">
                            <i class="fas fa-redo"></i> Reload Map
                        </button>
                    </div>
                </div>
            `;
        }
        
        // Error handling for map loading
        window.addEventListener('error', function(e) {
            if (e.target.tagName === 'SCRIPT' && e.target.src.includes('leaflet')) {
                showMapError();
            }
        });
    