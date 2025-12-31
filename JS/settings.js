// Check if user is logged in
function checkLogin() {
    const user = localStorage.getItem('ethiostock_user');
    if (!user) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Initialize user info
function initUserInfo() {
    const user = localStorage.getItem('ethiostock_user');
    if (user) {
        try {
            const userData = JSON.parse(user);
            const username = document.getElementById('username');
            if (username) {
                username.textContent = userData.email.split('@')[0];
            }
        } catch (e) {
            console.log('Error loading user info');
        }
    }
}

// Language management
let currentLang = localStorage.getItem('ethiostock_language') || 'en';

// Translations
const translations = {
    en: {
        english: "EN",
        amharic: "አማ",
        dashboard: "Dashboard",
        inventory: "Inventory",
        sales: "Sales",
        reports: "Reports",
        settings: "Settings",
        logout: "Logout",
        settingsTitle: "System Settings",
        settingsSubtitle: "Configure your business preferences",
        allSystemsOperational: "All Systems Operational",
        storage: "Storage:",
        businessProfile: "Business Profile",
        languageRegion: "Language & Region",
        preferences: "Preferences",
        support: "Support",
        about: "About TK-Stock",
        basicInformation: "Basic Information",
        businessName: "Business Name",
        businessType: "Business Type",
        businessPhone: "Phone Number",
        businessEmail: "Email Address",
        locationInformation: "Location Information",
        businessAddress: "Business Address",
        city: "City",
        country: "Country",
        taxInformation: "Tax Information",
        taxRate: "Tax Rate (%)",
        taxRateDescription: "Set default tax rate for all sales",
        invoicePrefix: "Invoice Prefix",
        invoicePrefixDescription: "Prefix for invoice numbers (e.g., INV-1001)",
        businessLogo: "Business Logo",
        noLogo: "No Logo",
        uploadLogo: "Upload Logo",
        removeLogo: "Remove",
        logoDescription: "Recommended: 300x300px PNG or JPG, max 2MB",
        saveChanges: "Save Changes",
        interfaceLanguage: "Interface Language",
        english: "English",
        englishDescription: "Default system language",
        amharic: "Amharic (አማርኛ)",
        amharicDescription: "For Ethiopian businesses",
        currencyFormatting: "Currency & Formatting",
        currency: "Currency",
        dateFormat: "Date Format",
        timeFormat: "Time Format",
        timeZone: "Time Zone",
        currentTime: "Current Time:",
        applySettings: "Apply Settings",
        notifications: "Notifications",
        lowStockAlerts: "Low Stock Alerts",
        lowStockDescription: "Receive alerts when inventory is low",
        salesNotifications: "Sales Notifications",
        salesDescription: "Get notified about new sales",
        emailReports: "Email Reports",
        emailReportsDescription: "Send reports via email",
        dashboardSettings: "Dashboard Settings",
        defaultView: "Default View",
        overview: "Overview",
        analytics: "Analytics",
        quickActions: "Quick Actions",
        refreshInterval: "Auto-refresh",
        never: "Never",
        printSettings: "Print Settings",
        receiptSize: "Receipt Size",
        autoPrint: "Auto Print Receipts",
        autoPrintDescription: "Auto print after sales",
        savePreferences: "Save Preferences",
        contactSupport: "Contact & Support",
        technicalSupport: "Technical Support",
        technicalSupportDesc: "For system issues and questions",
        supportHours: "Mon-Fri: 9:00 AM - 5:00 PM",
        feedbackSuggestions: "Feedback & Suggestions",
        feedbackDesc: "Help us improve TK-Stock",
        feedbackType: "Feedback Type",
        suggestion: "Suggestion",
        bugReport: "Bug Report",
        featureRequest: "Feature Request",
        message: "Message",
        sendFeedback: "Send Feedback",
        developmentTeam: "Development Team",
        teamDesc: "University course project",
        leadDeveloper: "Lead Developer",
        uiDesigner: "UI/UX Designer",
        courseInfo: "Internet Programming - INSY3081",
        resourcesDocumentation: "Resources",
        userManual: "User Manual",
        userManualDesc: "Complete guide to TK-Stock",
        videoTutorials: "Video Tutorials",
        videoTutorialsDesc: "Step-by-step guides",
        faq: "FAQ",
        faqDesc: "Frequently Asked Questions",
        aboutTkStock: "About TK-Stock",
        checkForUpdates: "Check Updates",
        systemTagline: "Smart Inventory & Sales Management",
        versionInformation: "Version",
        version: "Version",
        releaseDate: "Release Date",
        buildNumber: "Build Number",
        license: "License",
        educationalUse: "Educational Use",
        technologyStack: "Technology Stack",
        educationalPurpose: "Educational Purpose",
        purposeDesc: "Final project for Internet Programming course",
        skill1: "HTML5 structure",
        skill2: "CSS3 responsive",
        skill3: "JavaScript DOM",
        skill4: "LocalStorage",
        skill5: "Multi-language",
        skill6: "Professional design",
        acknowledgements: "Acknowledgements",
        acknowledgementText: "Special thanks to Instructor Selam for guidance and inspiration.",
        courseImpact: "Skills learned in INSY3081 applied to real-world solution.",
        teamMembers: "INSY3081 Project Team",
        other: "Other",
        allRights: "All rights reserved",
        universityProject: "Internet Programming Final Project",
        developers: "Developed by: Tsegay & Kasa"
    },
    am: {
        english: "EN",
        amharic: "አማ",
        dashboard: "ዳሽቦርድ",
        inventory: "ክምችት",
        sales: "ሽያጭ",
        reports: "ሪፖርት",
        settings: "ቅንብሮች",
        logout: "ውጣ",
        settingsTitle: "የስርዓት ቅንብሮች",
        settingsSubtitle: "የንግድዎን ምርጫዎች ያዋቅሩ",
        allSystemsOperational: "ሁሉም ስርዓቶች እየሰሩ ነው",
        storage: "ማከማቻ:",
        businessProfile: "የንግድ መገለጫ",
        languageRegion: "ቋንቋ እና ክልል",
        preferences: "ምርጫዎች",
        support: "ድጋፍ",
        about: "ስለ TK-Stock",
        basicInformation: "መሰረታዊ መረጃ",
        businessName: "የንግድ ስም",
        businessType: "የንግድ አይነት",
        businessPhone: "ስልክ ቁጥር",
        businessEmail: "ኢሜይል",
        locationInformation: "የቦታ መረጃ",
        businessAddress: "አድራሻ",
        city: "ከተማ",
        country: "አገር",
        taxInformation: "የግብር መረጃ",
        taxRate: "ግብር (%)",
        taxRateDescription: "ለሽያጮች ነባሪ ግብር",
        invoicePrefix: "የፋክተር ቅድመ ቃል",
        invoicePrefixDescription: "ለፋክተር ቁጥሮች (ለምሳሌ: INV-1001)",
        businessLogo: "የንግድ አርማ",
        noLogo: "አርማ የለም",
        uploadLogo: "አርማ ጫን",
        removeLogo: "አስወግድ",
        logoDescription: "የሚመከር: 300x300px PNG ወይም JPG",
        saveChanges: "አስቀምጥ",
        interfaceLanguage: "የመግቢያ ቋንቋ",
        english: "እንግሊዝኛ",
        englishDescription: "ነባሪ ቋንቋ",
        amharic: "አማርኛ",
        amharicDescription: "ለኢትዮጵያዊ ንግዶች",
        currencyFormatting: "ምንዛሪ እና ቅርጸት",
        currency: "ምንዛሪ",
        dateFormat: "የቀን ቅርጸት",
        timeFormat: "የሰዓት ቅርጸት",
        timeZone: "የሰዓት ሰሌዳ",
        currentTime: "አሁን ያለ ሰዓት:",
        applySettings: "ተግብር",
        notifications: "ማሳወቂያዎች",
        lowStockAlerts: "ዝቅተኛ ክምችት ማንቂያ",
        lowStockDescription: "ክምችት ሲያንስ ማንቂያ ይቀበሉ",
        salesNotifications: "የሽያጭ ማሳወቂያ",
        salesDescription: "ስለ አዲስ ሽያጭ ይታወቁ",
        emailReports: "ኢሜይል ሪፖርት",
        emailReportsDescription: "ሪፖርቶችን በኢሜይል ይላኩ",
        dashboardSettings: "የዳሽቦርድ ቅንብር",
        defaultView: "ነባሪ እይታ",
        overview: "አጠቃላይ እይታ",
        analytics: "ትንታኔ",
        quickActions: "ፈጣን እርምጃዎች",
        refreshInterval: "ራስ-ሰር ማደስ",
        never: "ፈፅሞ አይደለም",
        printSettings: "የማተም ቅንብር",
        receiptSize: "የራሲት መጠን",
        autoPrint: "ራስ-ሰር ራሲት",
        autoPrintDescription: "ከሽያጭ በኋላ ራስ-ሰር አትም",
        savePreferences: "አስቀምጥ",
        contactSupport: "አግኝነት እና ድጋፍ",
        technicalSupport: "ቴክኒካል ድጋፍ",
        technicalSupportDesc: "ለስርዓት ችግሮች",
        supportHours: "ሰኞ-አርብ: 9:00 - 5:00",
        feedbackSuggestions: "ምላሽ አስተያየት",
        feedbackDesc: "TK-Stockን ለማሻሻል",
        feedbackType: "የምላሽ አይነት",
        suggestion: "ሐሳብ",
        bugReport: "ስህተት ሪፖርት",
        featureRequest: "ባህሪ ጥያቄ",
        message: "መልዕክት",
        sendFeedback: "ምላሽ ላክ",
        developmentTeam: "የልማት ቡድን",
        teamDesc: "የዩኒቨርሲቲ ፕሮጀክት",
        leadDeveloper: "ሊድ ዴቨሎፐር",
        uiDesigner: "UI/UX ዲዛይነር",
        courseInfo: "የበይነመረብ ፕሮግራሚንግ - INSY3081",
        resourcesDocumentation: "መርጃዎች",
        userManual: "የተጠቃሚ መመሪያ",
        userManualDesc: "TK-Stock መመሪያ",
        videoTutorials: "ቪዲዮ ትምህርት",
        videoTutorialsDesc: "ደረጃ በደረጃ",
        faq: "ተደጋግሞ የሚጠየቁ",
        faqDesc: "ተደጋግሞ የሚጠየቁ",
        aboutTkStock: "ስለ TK-Stock",
        checkForUpdates: "ዝመና ፈትሽ",
        systemTagline: "ዘመናዊ ክምችት እና ሽያጭ ስርዓት",
        versionInformation: "ተለቀቀ መረጃ",
        version: "ተለቀቀ",
        releaseDate: "የተለቀቀበት ቀን",
        buildNumber: "የግንባታ ቁጥር",
        license: "ፈቃድ",
        educationalUse: "ለትምህርት",
        technologyStack: "ቴክኖሎጂ",
        educationalPurpose: "የትምህርት ዓላማ",
        purposeDesc: "የዩኒቨርሲቲ ኮርስ የመጨረሻ ፕሮጀክት",
        skill1: "HTML5 መዋቅር",
        skill2: "CSS3 ምላሽ",
        skill3: "JavaScript DOM",
        skill4: "LocalStorage",
        skill5: "ብዙ-ቋንቋ",
        skill6: "ፕሮፌሽናል ዲዛይን",
        acknowledgements: "ምስጋናዎች",
        acknowledgementText: "ለመምህር ሰላም ለመመሪያቸው እና ለማበረታቻቸው እናመሰግናለን።",
        courseImpact: "በ INSY3081 ከተማርነው ችሎታዎች የተገኘ ውጤት።",
        teamMembers: "INSY3081 ፕሮጀክት ቡድን",
        other: "ሌላ",
        allRights: "ሁሉም መብቶች የተጠበቁ ናቸው",
        universityProject: "የበይነመረብ ፕሮግራሚንግ ፕሮጀክት",
        developers: "ተግባራዊ ከሰሩት: ፀጋይ እና ካሳ"
    }
};

// Set language function
function setLanguage(lang) {
    currentLang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((lang === 'en' && btn.textContent === 'EN') ||
            (lang === 'am' && btn.textContent === 'አማ')) {
            btn.classList.add('active');
        }
    });

    // Update all translations
    updateTranslations();

    // Update language option
    selectLanguage(lang);

    // Save preference
    localStorage.setItem('ethiostock_language', lang);
    document.documentElement.setAttribute('lang', lang);

    showNotification(
        lang === 'en' ? 'Language changed to English' : 'ቋንቋ ወደ አማርኛ ተቀየረ',
        'success'
    );
}

// Update translations
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Select language option
function selectLanguage(lang) {
    // Reset all
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
    });

    // Activate selected
    if (lang === 'en') {
        document.getElementById('englishOption').classList.add('active');
    } else {
        document.getElementById('amharicOption').classList.add('active');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');

    messageElement.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Tab switching - SIMPLE AND WORKING
function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.settings-nav-btn');
    const tabContents = document.querySelectorAll('.settings-tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');

            // Update buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabName + 'Tab') {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Update current time
function updateCurrentTime() {
    const now = new Date();
    const options = {
        hour12: document.getElementById('timeFormat').value === '12h',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    const timeStr = now.toLocaleTimeString(currentLang === 'en' ? 'en-US' : 'am-ET', options);
    document.getElementById('currentTimeDisplay').textContent = timeStr;
}

// Load settings
function loadSettings() {
    // Load business settings
    const settings = JSON.parse(localStorage.getItem('tkstock_settings') || '{}');

    if (settings.business) {
        document.getElementById('businessName').value = settings.business.name || '';
        document.getElementById('businessType').value = settings.business.type || 'retail';
        document.getElementById('businessPhone').value = settings.business.phone || '';
        document.getElementById('businessEmail').value = settings.business.email || '';
        document.getElementById('businessAddress').value = settings.business.address || '';
        document.getElementById('businessCity').value = settings.business.city || '';
        document.getElementById('taxRate').value = settings.business.taxRate || 15;
        document.getElementById('invoicePrefix').value = settings.business.invoicePrefix || 'INV';
    }

    if (settings.preferences) {
        document.getElementById('lowStockAlerts').checked = settings.preferences.lowStockAlerts || true;
        document.getElementById('salesNotifications').checked = settings.preferences.salesNotifications || true;
        document.getElementById('emailReports').checked = settings.preferences.emailReports || false;
        document.getElementById('defaultDashboard').value = settings.preferences.defaultDashboard || 'overview';
        document.getElementById('refreshInterval').value = settings.preferences.refreshInterval || 60000;
        document.getElementById('receiptSize').value = settings.preferences.receiptSize || '58mm';
        document.getElementById('autoPrint').checked = settings.preferences.autoPrint || false;
    }
}

// Save business settings
function saveBusinessSettings() {
    const settings = {
        business: {
            name: document.getElementById('businessName').value,
            type: document.getElementById('businessType').value,
            phone: document.getElementById('businessPhone').value,
            email: document.getElementById('businessEmail').value,
            address: document.getElementById('businessAddress').value,
            city: document.getElementById('businessCity').value,
            taxRate: parseFloat(document.getElementById('taxRate').value),
            invoicePrefix: document.getElementById('invoicePrefix').value
        }
    };

    localStorage.setItem('tkstock_settings', JSON.stringify(settings));
    showNotification(
        currentLang === 'en' ? 'Business settings saved!' : 'የንግድ ቅንብሮች ተቀምጠዋል!',
        'success'
    );
}

// Save preferences
function savePreferences() {
    const settings = JSON.parse(localStorage.getItem('tkstock_settings') || '{}');

    settings.preferences = {
        lowStockAlerts: document.getElementById('lowStockAlerts').checked,
        salesNotifications: document.getElementById('salesNotifications').checked,
        emailReports: document.getElementById('emailReports').checked,
        defaultDashboard: document.getElementById('defaultDashboard').value,
        refreshInterval: parseInt(document.getElementById('refreshInterval').value),
        receiptSize: document.getElementById('receiptSize').value,
        autoPrint: document.getElementById('autoPrint').checked
    };

    localStorage.setItem('tkstock_settings', JSON.stringify(settings));
    showNotification(
        currentLang === 'en' ? 'Preferences saved!' : 'ምርጫዎች ተቀምጠዋል!',
        'success'
    );
}

// Upload logo
function uploadLogo() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const logoPreview = document.getElementById('logoPreview');
                logoPreview.innerHTML = `<img src="${e.target.result}" alt="Logo">`;
                logoPreview.classList.add('has-logo');

                localStorage.setItem('tkstock_logo', e.target.result);
                showNotification(
                    currentLang === 'en' ? 'Logo uploaded!' : 'አርማ ተጫኗል!',
                    'success'
                );
            };
            reader.readAsDataURL(file);
        }
    };

    input.click();
}

// Remove logo
function removeLogo() {
    document.getElementById('logoPreview').innerHTML =
        '<i class="fas fa-store-alt"></i><span data-i18n="noLogo">No Logo</span>';
    document.getElementById('logoPreview').classList.remove('has-logo');
    localStorage.removeItem('tkstock_logo');

    showNotification(
        currentLang === 'en' ? 'Logo removed!' : 'አርማ ተወግዷል!',
        'success'
    );
}

// Submit feedback
function submitFeedback() {
    const message = document.getElementById('feedbackMessage').value;
    if (!message.trim()) {
        showNotification(
            currentLang === 'en' ? 'Please enter feedback!' : 'እባክዎ ምላሽ ያስገቡ!',
            'error'
        );
        return;
    }

    document.getElementById('feedbackMessage').value = '';
    showNotification(
        currentLang === 'en' ? 'Thank you for your feedback!' : 'ስለ ምላሽዎ እናመሰግናለን!',
        'success'
    );
}

// Check updates
function checkForUpdates() {
    showNotification(
        currentLang === 'en' ? 'You have the latest version!' : 'የቅርቡ ስሪት ነዎት!',
        'info'
    );
}

// Setup event listeners
function setupEventListeners() {
    // Buttons
    document.getElementById('saveBusinessBtn').addEventListener('click', saveBusinessSettings);
    document.getElementById('savePreferencesBtn').addEventListener('click', savePreferences);
    document.getElementById('uploadLogoBtn').addEventListener('click', uploadLogo);
    document.getElementById('removeLogoBtn').addEventListener('click', removeLogo);
    document.getElementById('submitFeedbackBtn').addEventListener('click', submitFeedback);
    document.getElementById('checkUpdatesBtn').addEventListener('click', checkForUpdates);
    document.getElementById('notificationClose').addEventListener('click', () => {
        document.getElementById('notification').classList.remove('show');
    });

    // Language options
    document.getElementById('englishOption').addEventListener('click', () => setLanguage('en'));
    document.getElementById('amharicOption').addEventListener('click', () => setLanguage('am'));

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function (e) {
        e.preventDefault();
        if (confirm(currentLang === 'en' ? 'Logout?' : 'መውጣት?')) {
            localStorage.removeItem('ethiostock_user');
            window.location.href = 'login.html';
        }
    });
}

// Initialize everything
function initSettings() {
    if (!checkLogin()) return;

    initUserInfo();
    loadSettings();
    updateTranslations();
    setupTabSwitching();
    setupEventListeners();

    // Set current time and update every second
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

    // Set current language
    const savedLang = localStorage.getItem('ethiostock_language') || 'en';
    selectLanguage(savedLang);

    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((savedLang === 'en' && btn.textContent === 'EN') ||
            (savedLang === 'am' && btn.textContent === 'አማ')) {
            btn.classList.add('active');
        }
    });

    console.log('Settings page loaded!');
}

// Start when page loads
document.addEventListener('DOMContentLoaded', initSettings);