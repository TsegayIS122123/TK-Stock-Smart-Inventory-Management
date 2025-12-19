// Language translations
const translations = {
    en: {
        // Header
        english: "EN",
        amharic: "አማ",
        tagline: "Smart Inventory & Sales Management System",
        taglineAm: "ዘመናዊ ክምችት እና የሽያጭ አስተዳደር ስርዓት",

        // Form labels
        email: "Email Address",
        emailPlaceholder: "admin@ethiostock.com",
        password: "Password",
        passwordPlaceholder: "Enter your password",
        rememberMe: "Remember me",
        signIn: "Sign In",

        // Links
        forgotPassword: "Forgot Password?",
        contactSupport: "Contact Support",

        // Footer
        allRights: "All rights reserved",
        universityProject: "Internet Programming Final Project - INSY3081",
        developers: "Developed by: Tsegay & Kasa"
    },

    am: {
        // Header
        english: "EN",
        amharic: "አማ",
        tagline: "Smart Inventory & Sales Management System",
        taglineAm: "ዘመናዊ ክምችት እና የሽያጭ አስተዳደር ስርዓት",

        // Form labels
        email: "የኢሜይል አድራሻ",
        emailPlaceholder: "አስተዳዳሪ@ethiostock.com",
        password: "የይለፍ ቃል",
        passwordPlaceholder: "የይለፍ ቃልዎን ያስገቡ",
        rememberMe: "አስታውሰኝ",
        signIn: "ግባ",

        // Links
        forgotPassword: "የይለፍ ቃል ረሳሁ?",
        contactSupport: "ድጋፍ ያግኙ",

        // Footer
        allRights: "ሁሉም መብቶች የተጠበቁ ናቸው",
        universityProject: "የበይነመረብ ፕሮግራሚንግ የመጨረሻ ፕሮጀክት - INSY3081",
        developers: "ተግባራዊ ከሰሩት: ፀጋይ እና ካሳ"
    }
};

// Set language function
function setLanguage(lang) {
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Store language preference
    localStorage.setItem('ethiostock_language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
}

// DOM Elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');
const loginBtn = document.getElementById('loginBtn');
const forgotLink = document.getElementById('forgotLink');
const supportLink = document.getElementById('supportLink');

// Email validation
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validate email
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address (e.g., name@example.com)');
        emailInput.focus();
        return;
    }

    // Validate password
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        passwordInput.focus();
        return;
    }

    // Show loading state
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
    loginBtn.disabled = true;

    // Simulate login process
    setTimeout(() => {
        // For this project demo, accept any valid email/password
        console.log('Login attempt:', { email, password });

        // Store user data if "Remember me" is checked
        if (rememberCheckbox.checked) {
            localStorage.setItem('ethiostock_user', JSON.stringify({
                email: email,
                lastLogin: new Date().toISOString()
            }));
        }

        // Reset button
        loginBtn.innerHTML = originalText;
        loginBtn.disabled = false;

        // Redirect to main application
        window.location.href = 'dashboard.html';

    }, 1500);
});

// Forgot password link
forgotLink.addEventListener('click', function (event) {
    event.preventDefault();
    const userEmail = emailInput.value.trim() || prompt('Enter your email address:');

    if (userEmail && isValidEmail(userEmail)) {
        alert(`Password reset instructions have been sent to:\n${userEmail}\n\nNote: This is a demo. In a real application, an email would be sent.`);
    } else if (userEmail) {
        alert('Please enter a valid email address.');
    }
});

// Contact support link
supportLink.addEventListener('click', function (event) {
    event.preventDefault();
    alert('Contact Support:\n\nEmail: support@TK-stock.com\nPhone: +251 979 416 992\nHours: Mon-Fri, 9AM-5PM');
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    // Set default language (from localStorage or default to English)
    const savedLang = localStorage.getItem('ethiostock_language') || 'en';
    setLanguage(savedLang);

    // Pre-fill email if previously remembered
    const savedUser = localStorage.getItem('ethiostock_user');
    if (savedUser) {
        try {
            const userData = JSON.parse(savedUser);
            emailInput.value = userData.email;
            rememberCheckbox.checked = true;
        } catch (e) {
            console.log('No saved user data found');
        }
    }

    // Demo info (for testing)
    console.log('=== TK-Stock Demo Login ===');
    console.log('Demo Credentials:');
    console.log('Email: admin@tkstock.com');
    console.log('Password: tsegaykasa123 (or any 6+ characters)');
    console.log('Language: Click EN/አማ buttons to switch');
});