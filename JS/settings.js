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

// Default settings
const defaultSettings = {
    business: {
        name: '',
        type: 'retail',
        phone: '',
        email: '',
        address: '',
        city: '',
        country: 'Ethiopia',
        taxRate: 15,
        invoicePrefix: 'INV'
    },
    language: {
        interface: 'en',
        currency: 'ETB',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: '12h',
        timezone: 'Africa/Addis_Ababa'
    },
    preferences: {
        lowStockAlerts: true,
        salesNotifications: true,
        emailReports: false,
        defaultDashboard: 'overview',
        refreshInterval: 60000,
        receiptSize: '58mm',
        autoPrint: false
    },
    security: {
        twoFactor: false,
        autoLogout: true
    },
    backup: {
        autoBackup: true,
        frequency: 'daily',
        time: '02:00'
    }
};

// Translations
const translations = {
    en: {
        // Header
        english: "EN",
        amharic: "አማ",

        // Navigation
        dashboard: "Dashboard",
        inventory: "Inventory",
        sales: "Sales",
        reports: "Reports",
        settings: "Settings",
        logout: "Logout",

        // Page Content
        settingsTitle: "System Settings",
        settingsSubtitle: "Configure your business preferences and system options",
        allSystemsOperational: "All Systems Operational",
        storage: "Storage:",

        // Settings Navigation
        businessProfile: "Business Profile",
        languageRegion: "Language & Region",
        preferences: "Preferences",
        security: "Security",
        backupRestore: "Backup & Restore",
        support: "Support",
        about: "About TK-Stock",

        // Business Profile
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
        taxRateDescription: "Set the default tax rate applied to all sales",
        invoicePrefix: "Invoice Prefix",
        invoicePrefixDescription: "Prefix for generated invoice numbers (e.g., INV-1001)",
        businessLogo: "Business Logo",
        noLogo: "No Logo",
        uploadLogo: "Upload Logo",
        removeLogo: "Remove",
        logoDescription: "Recommended: 300x300px PNG or JPG, max 2MB",
        saveChanges: "Save Changes",

        // Language & Region
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

        // Preferences
        notifications: "Notifications",
        lowStockAlerts: "Low Stock Alerts",
        lowStockDescription: "Receive alerts when inventory is low",
        salesNotifications: "Sales Notifications",
        salesDescription: "Get notified about new sales",
        emailReports: "Email Reports",
        emailReportsDescription: "Send daily/weekly reports via email",
        dashboardSettings: "Dashboard Settings",
        defaultView: "Default View",
        overview: "Overview",
        analytics: "Analytics",
        quickActions: "Quick Actions",
        refreshInterval: "Auto-refresh Interval",
        never: "Never",
        printSettings: "Print Settings",
        receiptSize: "Receipt Size",
        autoPrint: "Auto Print Receipts",
        autoPrintDescription: "Automatically print receipts after sales",
        savePreferences: "Save Preferences",

        // Support
        contactSupport: "Contact & Support",
        technicalSupport: "Technical Support",
        technicalSupportDesc: "For system issues, bug reports, and technical questions",
        supportHours: "Mon-Fri: 9:00 AM - 5:00 PM",
        feedbackSuggestions: "Feedback & Suggestions",
        feedbackDesc: "Help us improve TK-Stock with your valuable feedback",
        feedbackType: "Feedback Type",
        suggestion: "Suggestion",
        bugReport: "Bug Report",
        featureRequest: "Feature Request",
        message: "Message",
        sendFeedback: "Send Feedback",
        developmentTeam: "Development Team",
        teamDesc: "This project is developed as part of our university coursework",
        leadDeveloper: "Lead Developer",
        uiDesigner: "UI/UX Designer",
        courseInfo: "Internet Programming (INSY3081) - Final Project",
        resourcesDocumentation: "Resources & Documentation",
        userManual: "User Manual",
        userManualDesc: "Complete guide to using TK-Stock",
        videoTutorials: "Video Tutorials",
        videoTutorialsDesc: "Step-by-step video guides",
        faq: "FAQ",
        faqDesc: "Frequently Asked Questions",

        // About
        aboutTkStock: "About TK-Stock",
        checkForUpdates: "Check for Updates",
        systemTagline: "Smart Inventory & Sales Management System",
        versionInformation: "Version Information",
        version: "Version",
        releaseDate: "Release Date",
        buildNumber: "Build Number",
        license: "License",
        educationalUse: "Educational Use",
        technologyStack: "Technology Stack",
        educationalPurpose: "Educational Purpose",
        purposeDesc: "This project is developed as the final project for the Internet Programming course (INSY3081) to demonstrate comprehensive front-end web development skills.",
        skill1: "HTML5 semantic structure",
        skill2: "CSS3 responsive design",
        skill3: "JavaScript DOM manipulation",
        skill4: "LocalStorage data persistence",
        skill5: "Multi-language support",
        skill6: "Professional UI/UX design",
        acknowledgements: "Acknowledgements",
        acknowledgementText: "Special thanks to our instructor and classmates for their guidance and support during the development of this project. This represents the culmination of skills learned throughout the Internet Programming course.",
        teamMembers: "INSY3081 Final Project Team",

        // Common
        other: "Other",

        // Footer
        allRights: "All rights reserved",
        universityProject: "Internet Programming Final Project - INSY3081",
        developers: "Developed by: Tsegay & Kasa"
    },

    am: {
        // Header
        english: "EN",
        amharic: "አማ",

        // Navigation
        dashboard: "ዳሽቦርድ",
        inventory: "ክምችት",
        sales: "ሽያጭ",
        reports: "ሪፖርት",
        settings: "ቅንብሮች",
        logout: "ውጣ",

        // Page Content
        settingsTitle: "የስርዓት ቅንብሮች",
        settingsSubtitle: "የንግድዎን ምርጫዎች እና የስርዓት አማራጮች ያዋቅሩ",
        allSystemsOperational: "ሁሉም ስርዓቶች እየሰሩ ነው",
        storage: "ማከማቻ:",

        // Settings Navigation
        businessProfile: "የንግድ መገለጫ",
        languageRegion: "ቋንቋ እና ክልል",
        preferences: "ምርጫዎች",
        security: "ደህንነት",
        backupRestore: "ተጠባባቂ እና መመለሻ",
        support: "ድጋፍ",
        about: "ስለ TK-Stock",

        // Business Profile
        basicInformation: "መሰረታዊ መረጃ",
        businessName: "የንግድ ስም",
        businessType: "የንግድ አይነት",
        businessPhone: "ስልክ ቁጥር",
        businessEmail: "ኢሜይል አድራሻ",
        locationInformation: "የቦታ መረጃ",
        businessAddress: "የንግድ አድራሻ",
        city: "ከተማ",
        country: "አገር",
        taxInformation: "የግብር መረጃ",
        taxRate: "የግብር መጠን (%)",
        taxRateDescription: "ለሁሉም ሽያጮች የሚተገበር ነባሪ ግብር መጠን ያዘጋጁ",
        invoicePrefix: "የፋክተር ቅድመ ቃል",
        invoicePrefixDescription: "ለተፈጠሩ የፋክተር ቁጥሮች ቅድመ ቃል (ለምሳሌ: INV-1001)",
        businessLogo: "የንግድ አርማ",
        noLogo: "አርማ የለም",
        uploadLogo: "አርማ ጫን",
        removeLogo: "አስወግድ",
        logoDescription: "የሚመከር: 300x300px PNG ወይም JPG, ከፍተኛ 2MB",
        saveChanges: "ለውጦችን አስቀምጥ",

        // Language & Region
        interfaceLanguage: "የመግቢያ ቋንቋ",
        english: "እንግሊዝኛ",
        englishDescription: "ነባሪ የስርዓት ቋንቋ",
        amharic: "አማርኛ",
        amharicDescription: "ለኢትዮጵያዊ ንግዶች",
        currencyFormatting: "ምንዛሪ እና ቅርጸት",
        currency: "ምንዛሪ",
        dateFormat: "የቀን ቅርጸት",
        timeFormat: "የሰዓት ቅርጸት",
        timeZone: "የሰዓት ሰሌዳ",
        currentTime: "አሁን ያለ ሰዓት:",
        applySettings: "ቅንብሮችን ተግብር",

        // Preferences
        notifications: "ማሳወቂያዎች",
        lowStockAlerts: "ዝቅተኛ ክምችት ማንቂያዎች",
        lowStockDescription: "ክምችት ሲያንስ ማንቂያዎችን ይቀበሉ",
        salesNotifications: "የሽያጭ ማሳወቂያዎች",
        salesDescription: "ስለ አዲስ ሽያጭ ይታወቁ",
        emailReports: "ኢሜይል ሪፖርቶች",
        emailReportsDescription: "በየቀኑ/በሳምንቱ ሪፖርቶችን በኢሜይል ይላኩ",
        dashboardSettings: "የዳሽቦርድ ቅንብሮች",
        defaultView: "ነባሪ እይታ",
        overview: "አጠቃላይ እይታ",
        analytics: "ትንታኔ",
        quickActions: "ፈጣን እርምጃዎች",
        refreshInterval: "ራስ-ሰር የማደስ ክፍተት",
        never: "ፈፅሞ አይደለም",
        printSettings: "የማተም ቅንብሮች",
        receiptSize: "የራሲት መጠን",
        autoPrint: "ራስ-ሰር ራሲት አትም",
        autoPrintDescription: "ከሽያጭ በኋላ ራሲትን በራስ-ሰር አትም",
        savePreferences: "ምርጫዎችን አስቀምጥ",

        // Support
        contactSupport: "አግኝነት እና ድጋፍ",
        technicalSupport: "ቴክኒካል ድጋፍ",
        technicalSupportDesc: "ለስርዓት ችግሮች፣ ስህተት ሪፖርቶች እና ቴክኒካል ጥያቄዎች",
        supportHours: "ሰኞ-አርብ: 9:00 ጥዋት - 5:00 ከሰዓት",
        feedbackSuggestions: "የምላሽ አስተያየት እና ሐሳቦች",
        feedbackDesc: "TK-Stockን ለማሻሻል በእርስዎ እርዳታ",
        feedbackType: "የምላሽ አስተያየት አይነት",
        suggestion: "ሐሳብ",
        bugReport: "የስህተት ሪፖርት",
        featureRequest: "የባህሪ ጥያቄ",
        message: "መልዕክት",
        sendFeedback: "ምላሽ አስተያየት ላክ",
        developmentTeam: "የልማት ቡድን",
        teamDesc: "ይህ ፕሮጀክት እንደ የዩኒቨርሲቲ ኮርስ የመጨረሻ ፕሮጀክት ይፈጠራል",
        leadDeveloper: "ሊድ ዴቨሎፐር",
        uiDesigner: "UI/UX ዲዛይነር",
        courseInfo: "የበይነመረብ ፕሮግራሚንግ (INSY3081) - የመጨረሻ ፕሮጀክት",
        resourcesDocumentation: "መርጃዎች እና ሰነዶች",
        userManual: "የተጠቃሚ መመሪያ",
        userManualDesc: "TK-Stock እንዴት እንደሚጠቀሙ ሙሉ መመሪያ",
        videoTutorials: "የቪዲዮ ትምህርቶች",
        videoTutorialsDesc: "ደረጃ በደረጃ የቪዲዮ መመሪያዎች",
        faq: "ተደጋግሞ የሚጠየቁ ጥያቄዎች",
        faqDesc: "ተደጋግሞ የሚጠየቁ ጥያቄዎች",

        // About
        aboutTkStock: "ስለ TK-Stock",
        checkForUpdates: "ለዝመናዎች ይፈትሹ",
        systemTagline: "ዘመናዊ ክምችት እና የሽያጭ አስተዳደር ስርዓት",
        versionInformation: "የተለቀቀ መረጃ",
        version: "ተለቀቀ",
        releaseDate: "የተለቀቀበት ቀን",
        buildNumber: "የግንባታ ቁጥር",
        license: "ፈቃድ",
        educationalUse: "ለትምህርት አገልግሎት",
        technologyStack: "ቴክኖሎጂ አቀማመጥ",
        educationalPurpose: "የትምህርት ዓላማ",
        purposeDesc: "ይህ ፕሮጀክት የበይነመረብ ፕሮግራሚንግ ኮርስ (INSY3081) የመጨረሻ ፕሮጀክት በመሆን የተሟላ የፊት-ጫፍ የድር ልማት ችሎታዎችን ለማሳየት ይፈጠራል።",
        skill1: "HTML5 ሴማንቲክ መዋቅር",
        skill2: "CSS3 ምላሽ የሚሰጥ ዲዛይን",
        skill3: "JavaScript DOM አያያዝ",
        skill4: "LocalStorage ውሂብ መጠበቂያ",
        skill5: "ብዙ-ቋንቋ ድጋፍ",
        skill6: "ፕሮፌሽናል UI/UX ዲዛይን",
        acknowledgements: "ምስጋናዎች",
        acknowledgementText: "ለእርስዎ መምህር እና ለአደረጃጀት ደጋፊዎች ለመመሪያቸው እና ለድጋፋቸው ምስጋና ይግባቸው። ይህ በዩኒቨርሲቲ ኮርስ ውስጥ ከተማሩት ችሎታዎች የተገኘ ውጤት ነው።",
        teamMembers: "INSY3081 የመጨረሻ ፕሮጀክት ቡድን",

        // Common
        other: "ሌላ",

        // Footer
        allRights: "ሁሉም መብቶች የተጠበቁ ናቸው",
        universityProject: "የበይነመረብ ፕሮግራሚንግ የመጨረሻ ፕሮጀክት - INSY3081",
        developers: "ተግባራዊ ከሰሩት: ፀጋይ እና ካሳ"
    }
};

// Set language function
function setLanguage(lang) {
    currentLang = lang;

    // Update active button in header
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update all translatable elements
    updateTranslations();

    // Update language select
    selectLanguage(lang, true);

    // Save language preference
    localStorage.setItem('ethiostock_language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Save language setting
    saveLanguageSettings(false);
}

// Update translations
function updateTranslations() {
    const lang = translations[currentLang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });

    // Update select options with data-i18n attributes
    document.querySelectorAll('[data-i18n] option').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (lang[key]) {
            option.textContent = lang[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (lang[key]) {
            element.setAttribute('placeholder', lang[key]);
        }
    });
}

// Select language option
function selectLanguage(lang, fromHeader = false) {
    // Update language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        const checkIcon = option.querySelector('.check-icon');
        if (checkIcon) checkIcon.style.opacity = '0';
    });

    // Activate selected language option
    const selectedOption = document.querySelector(`.language-option:nth-child(${lang === 'en' ? 1 : 2})`);
    if (selectedOption) {
        selectedOption.classList.add('active');
        const checkIcon = selectedOption.querySelector('.check-icon');
        if (checkIcon) checkIcon.style.opacity = '1';
    }

    // Update language select
    document.getElementById('languageSelect').value = lang;

    // If called from header, update translations
    if (!fromHeader) {
        currentLang = lang;
        updateTranslations();
        localStorage.setItem('ethiostock_language', lang);
        document.documentElement.setAttribute('lang', lang);
    }
}

// Load saved settings
function loadSettings() {
    const savedSettings = localStorage.getItem('tkstock_settings');
    const settings = savedSettings ? JSON.parse(savedSettings) : {};

    // Merge with defaults
    const mergedSettings = {
        business: { ...defaultSettings.business, ...settings.business },
        language: { ...defaultSettings.language, ...settings.language },
        preferences: { ...defaultSettings.preferences, ...settings.preferences },
        security: { ...defaultSettings.security, ...settings.security },
        backup: { ...defaultSettings.backup, ...settings.backup }
    };

    // Load business settings
    document.getElementById('businessName').value = mergedSettings.business.name;
    document.getElementById('businessType').value = mergedSettings.business.type;
    document.getElementById('businessPhone').value = mergedSettings.business.phone;
    document.getElementById('businessEmail').value = mergedSettings.business.email;
    document.getElementById('businessAddress').value = mergedSettings.business.address;
    document.getElementById('businessCity').value = mergedSettings.business.city;
    document.getElementById('businessCountry').value = mergedSettings.business.country;
    document.getElementById('taxRate').value = mergedSettings.business.taxRate;
    document.getElementById('invoicePrefix').value = mergedSettings.business.invoicePrefix;

    // Load language settings
    selectLanguage(mergedSettings.language.interface, true);
    document.getElementById('currency').value = mergedSettings.language.currency;
    document.getElementById('dateFormat').value = mergedSettings.language.dateFormat;
    document.getElementById('timeFormat').value = mergedSettings.language.timeFormat;
    document.getElementById('timezone').value = mergedSettings.language.timezone;

    // Load preference settings
    document.getElementById('lowStockAlerts').checked = mergedSettings.preferences.lowStockAlerts;
    document.getElementById('salesNotifications').checked = mergedSettings.preferences.salesNotifications;
    document.getElementById('emailReports').checked = mergedSettings.preferences.emailReports;
    document.getElementById('defaultDashboard').value = mergedSettings.preferences.defaultDashboard;
    document.getElementById('refreshInterval').value = mergedSettings.preferences.refreshInterval;
    document.getElementById('receiptSize').value = mergedSettings.preferences.receiptSize;
    document.getElementById('autoPrint').checked = mergedSettings.preferences.autoPrint;

    // Load logo if exists
    const logoData = localStorage.getItem('tkstock_logo');
    if (logoData) {
        const logoPreview = document.getElementById('logoPreview');
        logoPreview.innerHTML = `<img src="${logoData}" alt="Business Logo">`;
        logoPreview.classList.add('has-logo');
    }

    return mergedSettings;
}

// Save settings to localStorage
function saveSettings(settings) {
    localStorage.setItem('tkstock_settings', JSON.stringify(settings));
}

// Save business settings
function saveBusinessSettings() {
    const settings = loadSettings();

    settings.business = {
        name: document.getElementById('businessName').value.trim(),
        type: document.getElementById('businessType').value,
        phone: document.getElementById('businessPhone').value.trim(),
        email: document.getElementById('businessEmail').value.trim(),
        address: document.getElementById('businessAddress').value.trim(),
        city: document.getElementById('businessCity').value.trim(),
        country: document.getElementById('businessCountry').value.trim(),
        taxRate: parseFloat(document.getElementById('taxRate').value) || 15,
        invoicePrefix: document.getElementById('invoicePrefix').value.trim() || 'INV'
    };

    saveSettings(settings);
    showNotification(
        currentLang === 'en'
            ? 'Business profile saved successfully!'
            : 'የንግድ መገለጫ በተሳካ ሁኔታ ተቀምጧል!',
        'success'
    );
}

// Save language settings
function saveLanguageSettings(showNotification = true) {
    const settings = loadSettings();

    settings.language = {
        interface: document.getElementById('languageSelect').value,
        currency: document.getElementById('currency').value,
        dateFormat: document.getElementById('dateFormat').value,
        timeFormat: document.getElementById('timeFormat').value,
        timezone: document.getElementById('timezone').value
    };

    saveSettings(settings);

    if (showNotification) {
        showNotification(
            currentLang === 'en'
                ? 'Language settings applied successfully!'
                : 'የቋንቋ ቅንብሮች በተሳካ ሁኔታ ተተግብረዋል!',
            'success'
        );
    }
}

// Save preferences
function savePreferences() {
    const settings = loadSettings();

    settings.preferences = {
        lowStockAlerts: document.getElementById('lowStockAlerts').checked,
        salesNotifications: document.getElementById('salesNotifications').checked,
        emailReports: document.getElementById('emailReports').checked,
        defaultDashboard: document.getElementById('defaultDashboard').value,
        refreshInterval: parseInt(document.getElementById('refreshInterval').value),
        receiptSize: document.getElementById('receiptSize').value,
        autoPrint: document.getElementById('autoPrint').checked
    };

    saveSettings(settings);
    showNotification(
        currentLang === 'en'
            ? 'Preferences saved successfully!'
            : 'ምርጫዎች በተሳካ ሁኔታ ተቀምጠዋል!',
        'success'
    );
}

// Upload logo
function uploadLogo() {
    const fileInput = document.getElementById('logoFile');
    fileInput.click();

    fileInput.onchange = function () {
        const file = this.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showNotification(
                currentLang === 'en'
                    ? 'Please select an image file!'
                    : 'እባክዎ የምስል ፋይል ይምረጡ!',
                'error'
            );
            return;
        }

        if (file.size > 2 * 1024 * 1024) { // 2MB
            showNotification(
                currentLang === 'en'
                    ? 'File size must be less than 2MB!'
                    : 'የፋይል መጠን ከ2MB በታች መሆን አለበት!',
                'error'
            );
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const logoPreview = document.getElementById('logoPreview');
            logoPreview.innerHTML = `<img src="${e.target.result}" alt="Business Logo">`;
            logoPreview.classList.add('has-logo');

            // Save to localStorage
            localStorage.setItem('tkstock_logo', e.target.result);

            showNotification(
                currentLang === 'en'
                    ? 'Logo uploaded successfully!'
                    : 'አርማ በተሳካ ሁኔታ ተጫኗል!',
                'success'
            );
        };
        reader.readAsDataURL(file);
    };
}

// Remove logo
function removeLogo() {
    const logoPreview = document.getElementById('logoPreview');
    logoPreview.innerHTML = '<i class="fas fa-store"></i><span data-i18n="noLogo">No Logo</span>';
    logoPreview.classList.remove('has-logo');

    localStorage.removeItem('tkstock_logo');

    showNotification(
        currentLang === 'en'
            ? 'Logo removed successfully!'
            : 'አርማ በተሳካ ሁኔታ ተወግዷል!',
        'success'
    );
}

// Submit feedback
function submitFeedback() {
    const feedbackType = document.getElementById('feedbackType').value;
    const feedbackMessage = document.getElementById('feedbackMessage').value.trim();
    const feedbackEmail = document.getElementById('feedbackEmail').value.trim();

    if (!feedbackMessage) {
        showNotification(
            currentLang === 'en'
                ? 'Please enter your feedback message!'
                : 'እባክዎ የምላሽ አስተያየትዎን ያስገቡ!',
            'error'
        );
        return;
    }

    // For demo purposes, just show success message
    console.log('Feedback submitted:', {
        type: feedbackType,
        message: feedbackMessage,
        email: feedbackEmail,
        timestamp: new Date().toISOString()
    });

    // Clear form
    document.getElementById('feedbackMessage').value = '';
    document.getElementById('feedbackEmail').value = '';

    showNotification(
        currentLang === 'en'
            ? 'Thank you for your feedback! We appreciate your input.'
            : 'ስለ ምላሽ አስተያየትዎ እናመሰግናለን! አስተያየትዎን እናደንቃለን።',
        'success'
    );
}

// Check for updates
function checkForUpdates() {
    // For demo purposes
    showNotification(
        currentLang === 'en'
            ? 'You are using the latest version of TK-Stock!'
            : 'አሁን የቅርቡ የ TK-Stock ስሪት ነዎት!',
        'info'
    );
}

// Update current time
function updateCurrentTime() {
    const now = new Date();
    const timeDisplay = document.getElementById('currentTimeDisplay');

    if (timeDisplay) {
        const options = {
            timeZone: 'Africa/Addis_Ababa',
            hour12: document.getElementById('timeFormat').value === '12h',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        const timeStr = now.toLocaleTimeString('en-US', options);
        timeDisplay.textContent = timeStr;
    }
}

// Update storage info
function updateStorageInfo() {
    let totalSize = 0;
    let usedSize = 0;

    // Calculate localStorage usage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        usedSize += key.length + value.length;
    }

    // Convert to KB
    usedSize = usedSize / 1024;

    // For demo, use 5MB as total
    totalSize = 5120; // 5MB in KB

    const percentage = Math.min(100, Math.round((usedSize / totalSize) * 100));
    const storageElement = document.getElementById('storageUsed');

    if (storageElement) {
        storageElement.textContent = `${percentage}% used`;
        storageElement.style.color = percentage > 80 ? '#e74c3c' : percentage > 60 ? '#f39c12' : '#2ecc71';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');

    notificationMessage.textContent = message;

    // Set color based on type
    const colors = {
        success: '#2ecc71',
        error: '#e74c3c',
        info: '#3498db',
        warning: '#f39c12'
    };

    notification.style.borderLeftColor = colors[type] || colors.info;

    // Show notification
    notification.classList.add('show');

    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification();
    }, 5000);
}

// Hide notification
function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}

// Setup event listeners
function setupEventListeners() {
    // Settings tab navigation
    document.querySelectorAll('.settings-nav-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.dataset.tab + 'Tab';

            // Update active button
            document.querySelectorAll('.settings-nav-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Show active tab
            document.querySelectorAll('.settings-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', function (e) {
        e.preventDefault();
        const confirmMessage = currentLang === 'en'
            ? "Are you sure you want to logout?"
            : "እርግጠኛ ነህ መውጣት ትፈልጋለህ?";

        if (confirm(confirmMessage)) {
            localStorage.removeItem('ethiostock_user');
            window.location.href = 'login.html';
        }
    });

    // Language select change
    document.getElementById('languageSelect').addEventListener('change', function () {
        selectLanguage(this.value);
    });

    // Time format change
    document.getElementById('timeFormat').addEventListener('change', updateCurrentTime);

    // Auto-update time every second
    setInterval(updateCurrentTime, 1000);

    // Update storage info periodically
    setInterval(updateStorageInfo, 30000);
}

// Initialize settings page
function initSettings() {
    // Check if user is logged in
    if (!checkLogin()) return;

    // Set initial language
    const savedLang = localStorage.getItem('ethiostock_language') || 'en';
    currentLang = savedLang;

    // Set active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if ((savedLang === 'en' && btn.textContent === 'EN') ||
            (savedLang === 'am' && btn.textContent === 'አማ')) {
            btn.classList.add('active');
        }
    });

    // Initialize user info
    initUserInfo();

    // Load settings
    loadSettings();

    // Update translations
    updateTranslations();

    // Setup event listeners
    setupEventListeners();

    // Update current time
    updateCurrentTime();

    // Update storage info
    updateStorageInfo();

    // Set HTML language
    document.documentElement.setAttribute('lang', savedLang);

    console.log('Settings page loaded successfully');
}

// Start when page loads
document.addEventListener('DOMContentLoaded', initSettings);
// SIMPLE TAB SWITCHING - GUARANTEED TO WORK
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('=== SETTINGS PAGE LOADED ===');

//     // 1. TAB SWITCHING
//     setupTabs();

//     // 2. QUICK TEST
//     setTimeout(() => {
//         const tabs = document.querySelectorAll('.settings-nav-btn');
//         console.log('Total tabs found:', tabs.length);

//         if (tabs.length > 1) {
//             console.log('Trying to click second tab...');
//             tabs[1].click();
//         }
//     }, 500);
// });

// function setupTabs() {
//     // Get ALL tab buttons
//     const tabButtons = document.querySelectorAll('.settings-nav-btn');
//     console.log('Tab buttons found:', tabButtons.length);

//     // Get ALL tab sections
//     const tabSections = document.querySelectorAll('.settings-tab');
//     console.log('Tab sections found:', tabSections.length);

//     // Show what we found
//     tabButtons.forEach((btn, i) => {
//         console.log(`Button ${i}:`, btn.textContent.trim(), 'data-tab:', btn.getAttribute('data-tab'));
//     });

//     tabSections.forEach((section, i) => {
//         console.log(`Section ${i}: ID =`, section.id);
//     });

//     // Add click event to EACH button
//     tabButtons.forEach(button => {
//         button.addEventListener('click', function (event) {
//             event.preventDefault(); // Stop any default behavior

//             console.log('=== TAB CLICKED ===');
//             console.log('Button text:', this.textContent.trim());

//             // Get which tab to show
//             const tabId = this.getAttribute('data-tab');
//             console.log('Tab ID from data-tab:', tabId);
//             console.log('Looking for section with id:', tabId + 'Tab');

//             // 1. Remove 'active' from ALL buttons
//             tabButtons.forEach(btn => {
//                 btn.classList.remove('active');
//             });

//             // 2. Add 'active' to clicked button
//             this.classList.add('active');
//             console.log('Button now has active class:', this.classList.contains('active'));

//             // 3. Hide ALL sections
//             tabSections.forEach(section => {
//                 section.classList.remove('active');
//                 console.log('Hiding section:', section.id);
//             });

//             // 4. Show the selected section
//             const targetId = tabId + 'Tab';
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 targetSection.classList.add('active');
//                 console.log('SUCCESS! Showing section:', targetId);
//                 console.log('Section now has active class:', targetSection.classList.contains('active'));
//             } else {
//                 console.error('ERROR: Cannot find section with id:', targetId);
//                 console.log('Available sections:');
//                 tabSections.forEach(s => console.log(' -', s.id));
//             }

//             console.log('=== END TAB CLICK ===');
//         });
//     });

//     // Activate first tab if none is active
//     const activeButtons = document.querySelectorAll('.settings-nav-btn.active');
//     console.log('Initially active buttons:', activeButtons.length);

//     if (activeButtons.length === 0 && tabButtons.length > 0) {
//         console.log('No active tab found. Clicking first one...');
//         tabButtons[0].click();
//     } else if (activeButtons.length > 0) {
//         console.log('Active tab found:', activeButtons[0].textContent.trim());
//         activeButtons[0].click();
//     }
// }