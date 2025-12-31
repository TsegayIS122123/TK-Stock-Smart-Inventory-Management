// Check if user is logged in
function checkLogin() {
    const user = localStorage.getItem('ethiostock_user');

    if (!user) {
        // No user data at all, redirect to login
        console.log('No user data found, redirecting to login');
        window.location.href = 'login.html';
        return false;
    }

    try {
        const userData = JSON.parse(user);

        // Check if user is marked as logged in
        if (!userData.isLoggedIn) {
            console.log('User not logged in, redirecting to login');
            window.location.href = 'login.html';
            return false;
        }

        return true;
    } catch (e) {
        console.log('Error parsing user data, redirecting to login');
        window.location.href = 'login.html';
        return false;
    }
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

        // Dashboard Content
        dashboardTitle: "Dashboard Overview",
        welcomeText: "Welcome back! Here's what's happening with your business today.",
        totalProducts: "Total Products",
        increase12: "+12% from last month",
        inventoryValue: "Inventory Value",
        increase8: "+8% from last month",
        todaysSales: "Today's Sales",
        decrease3: "-3% from yesterday",
        lowStockItems: "Low Stock Items",
        needsAttention: "Needs attention",
        quickActions: "Quick Actions",
        quickActionsDesc: "Frequently used actions for your business",
        addProduct: "Add Product",
        newSale: "New Sale",
        viewReports: "View Reports",
        addCustomer: "Add Customer",
        recentActivity: "Recent Sales Activity",
        viewAll: "View All",
        aboutSystem: "About System", 
        date: "Date",
        items: "Items",
        amount: "Amount",
        status: "Status",
        stockAlerts: "Stock Alerts",
        viewAllAlerts: "View All Alerts",
        product: "Product",
        currentStock: "Current Stock",
        minStock: "Min Stock",
        action: "Action",

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

        // Dashboard Content
        dashboardTitle: "የዳሽቦርድ ጥቅል ዕይታ",
        welcomeText: "እንኳን ደህና መጡ! ይህ በንግስዎ ውስጥ የሚከሰተው ነው።",
        totalProducts: "ጠቅላላ ምርቶች",
        increase12: "+12% ከባድ ወር",
        inventoryValue: "የክምችት ዋጋ",
        increase8: "+8% ከባድ ወር",
        todaysSales: "የዛሬ ሽያጭ",
        decrease3: "-3% ከትላንት",
        lowStockItems: "ዝቅተኛ ክምችት ዕቃዎች",
        needsAttention: "ትኩረት ያስፈልጋል",
        quickActions: "ፈጣን እርምጃዎች",
        quickActionsDesc: "ለንግስዎ ተደጋጋሚ እርምጃዎች",
        addProduct: "ምርት ጨምር",
        newSale: "አዲስ ሽያጭ",
        viewReports: "ሪፖርት አሳይ",
        aboutSystem: "ስለ ስርዓቱ", 
        recentActivity: "የቅርብ ሽያጭ እንቅስቃሴ",
        viewAll: "ሁሉንም አሳይ",
        customer: "ደንበኛ",
        date: "ቀን",
        items: "ዕቃዎች",
        amount: "መጠን",
        status: "ሁኔታ",
        stockAlerts: "የክምችት ማንቂያዎች",
        viewAllAlerts: "ሁሉንም ማንቂያዎች አሳይ",
        product: "ምርት",
        currentStock: "የአሁኑ ክምችት",
        minStock: "ዝቅተኛ ክምችት",
        action: "እርምጃ",

        // Footer
        allRights: "ሁሉም መብቶች የተጠበቁ ናቸው",
        universityProject: "የበይነመረብ ፕሮግራሚንግ የመጨረሻ ፕሮጀክት - INSY3081",
        developers: "ተግባራዊ ከሰሩት: ፀጋይ እና ካሳ"
    }
};

// Set language function
function setLanguage(lang) {
    currentLang = lang;

    // Update active button
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

    // Save language preference
    localStorage.setItem('ethiostock_language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Reload data in new language
    loadDashboardData();
}

// Load sample data
function loadDashboardData() {
    // Sales data
    const salesData = currentLang === 'en' ? [
        { customer: "Ahmed Mohammed", date: "2024-07-29", items: 3, amount: "$1,250", status: "Completed" },
        { customer: "Selamawit Bekele", date: "2024-07-29", items: 2, amount: "$450", status: "Completed" },
        { customer: "Yohannes Tesfaye", date: "2024-07-28", items: 1, amount: "$850", status: "Pending" },
        { customer: "Mekdes Alemu", date: "2024-07-28", items: 4, amount: "$320", status: "Completed" }
    ] : [
        { customer: "አህመድ መሀመድ", date: "2024-07-29", items: 3, amount: "1,250 ብር", status: "ተጠናቋል" },
        { customer: "ሰላማዊት በቀለ", date: "2024-07-29", items: 2, amount: "450 ብር", status: "ተጠናቋል" },
        { customer: "ዮሐንስ ተስፋዬ", date: "2024-07-28", items: 1, amount: "850 ብር", status: "በመጠባበቅ ላይ" },
        { customer: "መቅደስ ዓለሙ", date: "2024-07-28", items: 4, amount: "320 ብር", status: "ተጠናቋል" }
    ];

    // Stock alerts data
    const alertsData = currentLang === 'en' ? [
        { product: "Teff (White)", current: 5, min: 20, status: "Low" },
        { product: "Coffee Beans", current: 8, min: 15, status: "Low" },
        { product: "Injera", current: 3, min: 10, status: "Critical" },
        { product: "Berbere Spice", current: 12, min: 25, status: "Good" }
    ] : [
        { product: "ጤፍ (ነጭ)", current: 5, min: 20, status: "ዝቅተኛ" },
        { product: "ቡና ፎሎ", current: 8, min: 15, status: "ዝቅተኛ" },
        { product: "እንጀራ", current: 3, min: 10, status: "ክራቲካል" },
        { product: "በርበሬ", current: 12, min: 25, status: "ጥሩ" }
    ];

    // Update sales table
    const salesTable = document.getElementById('salesTable');
    salesTable.innerHTML = '';
    salesData.forEach(sale => {
        const statusClass = sale.status === "Completed" || sale.status === "ተጠናቋል" ? "status-completed" : "status-pending";
        salesTable.innerHTML += `
            <tr>
                <td>${sale.customer}</td>
                <td>${sale.date}</td>
                <td>${sale.items}</td>
                <td><strong>${sale.amount}</strong></td>
                <td><span class="status-badge ${statusClass}">${sale.status}</span></td>
            </tr>
        `;
    });

    // Update alerts table
    const alertsTable = document.getElementById('alertsTable');
    alertsTable.innerHTML = '';
    alertsData.forEach(alert => {
        let statusClass = "status-completed";
        let actionText = currentLang === 'en' ? "Reorder" : "እንደገና አዘዝ";

        if (alert.status === "Low" || alert.status === "ዝቅተኛ") {
            statusClass = "status-pending";
            actionText = currentLang === 'en' ? "Order Soon" : "በቅርቡ አዘዝ";
        } else if (alert.status === "Critical" || alert.status === "ክራቲካል") {
            statusClass = "status-low";
            actionText = currentLang === 'en' ? "Order Now" : "አሁን አዘዝ";
        }

        alertsTable.innerHTML += `
            <tr>
                <td>${alert.product}</td>
                <td>${alert.current}</td>
                <td>${alert.min}</td>
                <td><span class="status-badge ${statusClass}">${alert.status}</span></td>
                <td><button class="small-btn" onclick="orderProduct('${alert.product}')">${actionText}</button></td>
            </tr>
        `;
    });

    // Update low stock count
    const lowStockCount = alertsData.filter(a => a.status === "Low" || a.status === "ዝቅተኛ" || a.status === "Critical" || a.status === "ክራቲካል").length;
    document.getElementById('lowStockCount').textContent = lowStockCount;
}

// Button actions
function orderProduct(productName) {
    const message = currentLang === 'en'
        ? `Order placed for: ${productName}`
        : `ለ${productName} ትዕዛዝ ተሰጥቷል`;
    alert(message);
}

// Setup event listeners
function setupEventListeners() {
    // Logout function
    function logout() {
        const confirmMessage = currentLang === 'en'
            ? "Are you sure you want to logout?"
            : "እርግጠኛ ነህ መውጣት ትፈልጋለህ?";

        if (confirm(confirmMessage)) {
            // Clear the logged in flag but keep email if "Remember me" was checked
            const user = localStorage.getItem('ethiostock_user');
            if (user) {
                try {
                    const userData = JSON.parse(user);
                    // Keep only the email if "Remember me" was checked
                    if (userData.email) {
                        localStorage.setItem('ethiostock_user', JSON.stringify({
                            email: userData.email,
                            isLoggedIn: false
                        }));
                    } else {
                        localStorage.removeItem('ethiostock_user');
                    }
                } catch (e) {
                    localStorage.removeItem('ethiostock_user');
                }
            }
            window.location.href = 'login.html';
        }
    }
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', function (e) {
        e.preventDefault();
        logout(); // Call the logout function
    });

    // Quick action buttons
    document.getElementById('addProductBtn').addEventListener('click', function () {
        window.location.href = "inventory.html#addProductBtn";
    });

    document.getElementById('newSaleBtn').addEventListener('click', function () {
       window.location.href="sales.html#newSalesBtn";
    });

    document.getElementById('viewReportsBtn').addEventListener('click', function () {
        window.location.href="reports.html";
    });

    document.getElementById('aboutSystemBtn').addEventListener('click', function () {
        // Navigate to settings or specific customer page
        window.location.href = 'settings.html?tab=about';
    });
    // View all links
    document.querySelectorAll('.view-all').forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            if (index === 0) { // First view-all (Recent Activity)
                window.location.href = 'sales.html';
            } else if (index === 1) { // Second view-all (Stock Alerts)
                window.location.href = 'inventory.html?filter=low-stock';
            }
        });
    });
}

// Helper function to show messages
function showMessage(message) {
    alert(message);
}

// Initialize dashboard
function initDashboard() {
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

    // Load translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[savedLang][key]) {
            element.textContent = translations[savedLang][key];
        }
    });

    // Load data
    loadDashboardData();

    // Setup event listeners
    setupEventListeners();

    // Set HTML language
    document.documentElement.setAttribute('lang', savedLang);

    console.log('TK-Stock Dashboard loaded successfully');
}

// Start when page loads
document.addEventListener('DOMContentLoaded', initDashboard);