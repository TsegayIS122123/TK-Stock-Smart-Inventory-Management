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
        reportsTitle: "Reports & Analytics",
        reportsSubtitle: "Business insights and performance analytics",
        generateReport: "Generate Report",
        salesReport: "Sales Report",
        inventoryReport: "Inventory Report",
        profitReport: "Profit Report",
        customerReport: "Customer Report",
        totalRevenue: "Total Revenue",
        increase15: "+15% from last month",
        totalProfit: "Total Profit",
        increase12: "+12% from last month",
        itemsSold: "Items Sold",
        increase8: "+8% from last month",
        newCustomers: "New Customers",
        decrease5: "-5% from last month",
        salesAnalysis: "Sales Analysis",
        exportExcel: "Export to Excel",
        salesChartDesc: "Monthly Sales Trend Chart",
        date: "Date",
        product: "Product",
        quantity: "Quantity",
        revenue: "Revenue",
        profit: "Profit",
        margin: "Margin",
        inventoryAnalysis: "Inventory Analysis",
        inventoryChartDesc: "Inventory Distribution by Category",
        category: "Category",
        products: "Products",
        stockValue: "Stock Value",
        turnover: "Turnover Rate",
        status: "Status",
        profitAnalysis: "Profit Analysis",
        profitChartDesc: "Monthly Profit Trend",
        month: "Month",
        cost: "Cost",
        customerAnalysis: "Customer Analysis",
        customerChartDesc: "Customer Distribution by Region",
        customer: "Customer",
        region: "Region",
        totalPurchases: "Total Purchases",
        lastPurchase: "Last Purchase",
        customerType: "Customer Type",
        topProducts: "Top Selling Products",
        lowStock: "Low Stock Alerts",
        bestCustomers: "Best Customers",

        // Status
        good: "Good",
        warning: "Warning",
        critical: "Critical",
        regular: "Regular",
        premium: "Premium",
        wholesale: "Wholesale",

        // Regions
        addisAbaba: "Addis Ababa",
        bahirDar: "Bahir Dar",
        mekelle: "Mekelle",
        hawassa: "Hawassa",
        direDawa: "Dire Dawa",

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
        reportsTitle: "ሪፖርቶች እና ትንተናዎች",
        reportsSubtitle: "የንግድ ግንዛቤዎች እና የፈጠራ ትንተና",
        generateReport: "ሪፖርት ፍጠር",
        salesReport: "የሽያጭ ሪፖርት",
        inventoryReport: "የክምችት ሪፖርት",
        profitReport: "የምንዛሪ ሪፖርት",
        customerReport: "የደንበኛ ሪፖርት",
        totalRevenue: "ጠቅላላ ገቢ",
        increase15: "ከባድ ወር +15%",
        totalProfit: "ጠቅላላ ትርፍ",
        increase12: "ከባድ ወር +12%",
        itemsSold: "የተሸጡ ዕቃዎች",
        increase8: "ከባድ ወር +8%",
        newCustomers: "አዲስ ደንበኞች",
        decrease5: "ከባድ ወር -5%",
        salesAnalysis: "የሽያጭ ትንተና",
        exportExcel: "ወደ Excel ላክ",
        salesChartDesc: "ወርሃዊ የሽያጭ አዝማሚያ ገበታ",
        date: "ቀን",
        product: "ምርት",
        quantity: "ብዛት",
        revenue: "ገቢ",
        profit: "ትርፍ",
        margin: "ኅዳግ",
        inventoryAnalysis: "የክምችት ትንተና",
        inventoryChartDesc: "በምድብ የክምችት ስርጭት",
        category: "ምድብ",
        products: "ምርቶች",
        stockValue: "የክምችት ዋጋ",
        turnover: "የማዞሪያ መጠን",
        status: "ሁኔታ",
        profitAnalysis: "የትርፍ ትንተና",
        profitChartDesc: "ወርሃዊ የትርፍ አዝማሚያ",
        month: "ወር",
        cost: "ወጪ",
        customerAnalysis: "የደንበኛ ትንተና",
        customerChartDesc: "በክልል የደንበኛ ስርጭት",
        customer: "ደንበኛ",
        region: "ክልል",
        totalPurchases: "ጠቅላላ ግዢዎች",
        lastPurchase: "የመጨረሻ ግዢ",
        customerType: "የደንበኛ አይነት",
        topProducts: "በጣም የሚሸጡ ምርቶች",
        lowStock: "ዝቅተኛ ክምችት ማንቂያዎች",
        bestCustomers: "ከፍተኛ ደንበኞች",

        // Status
        good: "ጥሩ",
        warning: "ማስጠንቀቂያ",
        critical: "ማስጠንቀቂያ",
        regular: "መደበኛ",
        premium: "ፕሪሚየም",
        wholesale: "ጅምላ",

        // Regions
        addisAbaba: "አዲስ አበባ",
        bahirDar: "ባሕር ዳር",
        mekelle: "መቀሌ",
        hawassa: "ሀዋሳ",
        direDawa: "ድሬዳዋ",

        // Footer
        allRights: "ሁሉም መብቶች የተጠበቁ ናቸው",
        universityProject: "የበይነመረብ ፕሮግራሚንግ የመጨረሻ ፕሮጀክት - INSY3081",
        developers: "ተግባራዊ ከሰሩት: ፀጋይ እና ካሳ"
    }
};

// Sample data for reports
const reportData = {
    en: {
        salesReport: [
            { date: "2024-07-01", product: "Coffee Beans", quantity: 15, revenue: 4500, profit: 1350, margin: "30%" },
            { date: "2024-07-02", product: "White Teff", quantity: 25, revenue: 3000, profit: 750, margin: "25%" },
            { date: "2024-07-03", product: "Berbere Spice", quantity: 10, revenue: 1500, profit: 450, margin: "30%" },
            { date: "2024-07-04", product: "Injera", quantity: 50, revenue: 2500, profit: 500, margin: "20%" },
            { date: "2024-07-05", product: "Habesha Kemis", quantity: 3, revenue: 2550, profit: 765, margin: "30%" }
        ],
        inventoryReport: [
            { category: "Grains", products: 12, stockValue: 15000, turnover: "85%", status: "Good" },
            { category: "Spices", products: 8, stockValue: 8000, turnover: "92%", status: "Good" },
            { category: "Beverages", products: 6, stockValue: 12000, turnover: "45%", status: "Warning" },
            { category: "Clothing", products: 4, stockValue: 6800, turnover: "78%", status: "Good" },
            { category: "Other", products: 5, stockValue: 3500, turnover: "62%", status: "Warning" }
        ],
        profitReport: [
            { month: "January", revenue: 38500, cost: 23100, profit: 15400, margin: "40%" },
            { month: "February", revenue: 42000, cost: 25200, profit: 16800, margin: "40%" },
            { month: "March", revenue: 45500, cost: 27300, profit: 18200, margin: "40%" },
            { month: "April", revenue: 39500, cost: 23700, profit: 15800, margin: "40%" },
            { month: "May", revenue: 48000, cost: 28800, profit: 19200, margin: "40%" },
            { month: "June", revenue: 52000, cost: 31200, profit: 20800, margin: "40%" },
            { month: "July", revenue: 45230, cost: 27138, profit: 18092, margin: "40%" }
        ],
        customerReport: [
            { customer: "Ahmed Mohammed", region: "Addis Ababa", totalPurchases: 12500, lastPurchase: "2024-07-29", type: "Premium" },
            { customer: "Selamawit Bekele", region: "Bahir Dar", totalPurchases: 8450, lastPurchase: "2024-07-28", type: "Regular" },
            { customer: "Yohannes Tesfaye", region: "Mekelle", totalPurchases: 15200, lastPurchase: "2024-07-27", type: "Wholesale" },
            { customer: "Mekdes Alemu", region: "Hawassa", totalPurchases: 6800, lastPurchase: "2024-07-26", type: "Regular" },
            { customer: "David Solomon", region: "Dire Dawa", totalPurchases: 9200, lastPurchase: "2024-07-25", type: "Premium" }
        ],
        topProducts: [
            { name: "Coffee Beans", sales: 42, revenue: 12600 },
            { name: "White Teff", sales: 35, revenue: 4200 },
            { name: "Berbere Spice", sales: 28, revenue: 4200 }
        ],
        lowStock: [
            { name: "Injera", current: 3, min: 10 },
            { name: "Coffee Beans", current: 5, min: 15 },
            { name: "Sugar", current: 8, min: 20 }
        ],
        bestCustomers: [
            { name: "Yohannes Tesfaye", purchases: 15200 },
            { name: "Ahmed Mohammed", purchases: 12500 },
            { name: "David Solomon", purchases: 9200 }
        ]
    },

    am: {
        salesReport: [
            { date: "2024-07-01", product: "ቡና ፎሎ", quantity: 15, revenue: 4500, profit: 1350, margin: "30%" },
            { date: "2024-07-02", product: "ነጭ ጤፍ", quantity: 25, revenue: 3000, profit: 750, margin: "25%" },
            { date: "2024-07-03", product: "በርበሬ ቅመም", quantity: 10, revenue: 1500, profit: 450, margin: "30%" },
            { date: "2024-07-04", product: "እንጀራ", quantity: 50, revenue: 2500, profit: 500, margin: "20%" },
            { date: "2024-07-05", product: "ሐበሻ ቀሚስ", quantity: 3, revenue: 2550, profit: 765, margin: "30%" }
        ],
        inventoryReport: [
            { category: "እህሎች", products: 12, stockValue: 15000, turnover: "85%", status: "ጥሩ" },
            { category: "ቅመሞች", products: 8, stockValue: 8000, turnover: "92%", status: "ጥሩ" },
            { category: "መጠጦች", products: 6, stockValue: 12000, turnover: "45%", status: "ማስጠንቀቂያ" },
            { category: "ልብሶች", products: 4, stockValue: 6800, turnover: "78%", status: "ጥሩ" },
            { category: "ሌሎች", products: 5, stockValue: 3500, turnover: "62%", status: "ማስጠንቀቂያ" }
        ],
        profitReport: [
            { month: "ጃንዩዌሪ", revenue: 38500, cost: 23100, profit: 15400, margin: "40%" },
            { month: "ፌብሩዌሪ", revenue: 42000, cost: 25200, profit: 16800, margin: "40%" },
            { month: "ማርች", revenue: 45500, cost: 27300, profit: 18200, margin: "40%" },
            { month: "ኤፕሪል", revenue: 39500, cost: 23700, profit: 15800, margin: "40%" },
            { month: "ሜይ", revenue: 48000, cost: 28800, profit: 19200, margin: "40%" },
            { month: "ጁን", revenue: 52000, cost: 31200, profit: 20800, margin: "40%" },
            { month: "ጁላይ", revenue: 45230, cost: 27138, profit: 18092, margin: "40%" }
        ],
        customerReport: [
            { customer: "አህመድ መሀመድ", region: "አዲስ አበባ", totalPurchases: 12500, lastPurchase: "2024-07-29", type: "ፕሪሚየም" },
            { customer: "ሰላማዊት በቀለ", region: "ባሕር ዳር", totalPurchases: 8450, lastPurchase: "2024-07-28", type: "መደበኛ" },
            { customer: "ዮሐንስ ተስፋዬ", region: "መቀሌ", totalPurchases: 15200, lastPurchase: "2024-07-27", type: "ጅምላ" },
            { customer: "መቅደስ ዓለሙ", region: "ሀዋሳ", totalPurchases: 6800, lastPurchase: "2024-07-26", type: "መደበኛ" },
            { customer: "ዳዊት ሰሎሞን", region: "ድሬዳዋ", totalPurchases: 9200, lastPurchase: "2024-07-25", type: "ፕሪሚየም" }
        ],
        topProducts: [
            { name: "ቡና ፎሎ", sales: 42, revenue: 12600 },
            { name: "ነጭ ጤፍ", sales: 35, revenue: 4200 },
            { name: "በርበሬ ቅመም", sales: 28, revenue: 4200 }
        ],
        lowStock: [
            { name: "እንጀራ", current: 3, min: 10 },
            { name: "ቡና ፎሎ", current: 5, min: 15 },
            { name: "ስኳር", current: 8, min: 20 }
        ],
        bestCustomers: [
            { name: "ዮሐንስ ተስፋዬ", purchases: 15200 },
            { name: "አህመድ መሀመድ", purchases: 12500 },
            { name: "ዳዊት ሰሎሞን", purchases: 9200 }
        ]
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
    updateTranslations();

    // Save language preference
    localStorage.setItem('ethiostock_language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Reload data in new language
    loadCurrentReport();
    loadQuickStats();
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
}

// Load current report
function loadCurrentReport() {
    const activeReport = document.querySelector('.report-type-btn.active').dataset.report;

    // Hide all reports
    document.querySelectorAll('.report-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show active report
    document.getElementById(`${activeReport}Report`).classList.add('active');

    // Load data for active report
    switch (activeReport) {
        case 'sales':
            loadSalesReport();
            break;
        case 'inventory':
            loadInventoryReport();
            break;
        case 'profit':
            loadProfitReport();
            break;
        case 'customer':
            loadCustomerReport();
            break;
    }
}

// Load sales report
function loadSalesReport() {
    const data = reportData[currentLang].salesReport;
    const tableBody = document.getElementById('salesReportTable');

    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>$${item.revenue.toLocaleString()}</td>
            <td>$${item.profit.toLocaleString()}</td>
            <td>${item.margin}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load inventory report
function loadInventoryReport() {
    const data = reportData[currentLang].inventoryReport;
    const tableBody = document.getElementById('inventoryReportTable');

    tableBody.innerHTML = '';

    data.forEach(item => {
        const statusClass = item.status === 'Good' || item.status === 'ጥሩ' ? 'status-good' :
            item.status === 'Warning' || item.status === 'ማስጠንቀቂያ' ? 'status-warning' : 'status-critical';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.category}</td>
            <td>${item.products}</td>
            <td>$${item.stockValue.toLocaleString()}</td>
            <td>${item.turnover}</td>
            <td><span class="status-badge ${statusClass}">${item.status}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

// Load profit report
function loadProfitReport() {
    const data = reportData[currentLang].profitReport;
    const tableBody = document.getElementById('profitReportTable');

    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.month}</td>
            <td>$${item.revenue.toLocaleString()}</td>
            <td>$${item.cost.toLocaleString()}</td>
            <td>$${item.profit.toLocaleString()}</td>
            <td>${item.margin}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load customer report
function loadCustomerReport() {
    const data = reportData[currentLang].customerReport;
    const tableBody = document.getElementById('customerReportTable');

    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.customer}</td>
            <td>${item.region}</td>
            <td>$${item.totalPurchases.toLocaleString()}</td>
            <td>${item.lastPurchase}</td>
            <td>${item.type}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load quick stats
function loadQuickStats() {
    const data = reportData[currentLang];

    // Top products
    const topProductsList = document.getElementById('topProductsList');
    topProductsList.innerHTML = '';
    data.topProducts.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="product-name">${product.name}</span>
            <span class="stats-value">${product.sales} sales</span>
        `;
        topProductsList.appendChild(li);
    });

    // Low stock
    const lowStockList = document.getElementById('lowStockList');
    lowStockList.innerHTML = '';
    data.lowStock.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="product-name">${item.name}</span>
            <span class="stats-value" style="color: #e74c3c;">${item.current}/${item.min}</span>
        `;
        lowStockList.appendChild(li);
    });

    // Best customers
    const bestCustomersList = document.getElementById('bestCustomersList');
    bestCustomersList.innerHTML = '';
    data.bestCustomers.forEach(customer => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="product-name">${customer.name}</span>
            <span class="stats-value">$${customer.purchases.toLocaleString()}</span>
        `;
        bestCustomersList.appendChild(li);
    });
}

// Generate report
function generateReport() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // For demo purposes, just show a message
    const message = currentLang === 'en'
        ? `Generating report for ${startDate || 'all dates'} to ${endDate || 'today'}...`
        : `ሪፖርት ለ ${startDate || 'ሁሉም ቀናት'} እስከ ${endDate || 'ዛሬ'} በመፍጠር ላይ...`;

    console.log(message);

    // Show success message
    alert(currentLang === 'en'
        ? 'Report generated successfully! Data has been updated.'
        : 'ሪፖርት በተሳካ ሁኔታ ተፈጥሯል! ውሂብ ተዘምኗል።'
    );
}

// Export report
function exportReport(type) {
    const message = currentLang === 'en'
        ? `Exporting ${type} report to Excel...`
        : `${type} ሪፖርት ወደ Excel በማስገባት ላይ...`;

    console.log(message);

    // Show success message
    alert(currentLang === 'en'
        ? `${type} report exported successfully!`
        : `${type} ሪፖርት በተሳካ ሁኔታ ተላከ!`
    );
}

// Setup event listeners
function setupEventListeners() {
    // Report type buttons
    document.querySelectorAll('.report-type-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.report-type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadCurrentReport();
        });
    });

    // Generate report button
    document.getElementById('generateReportBtn').addEventListener('click', generateReport);

    // Export buttons
    document.getElementById('exportSalesBtn').addEventListener('click', () => exportReport('Sales'));
    document.getElementById('exportInventoryBtn').addEventListener('click', () => exportReport('Inventory'));
    document.getElementById('exportProfitBtn').addEventListener('click', () => exportReport('Profit'));
    document.getElementById('exportCustomerBtn').addEventListener('click', () => exportReport('Customer'));

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
}

// Initialize reports page
function initReports() {
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

    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const lastMonthStr = lastMonth.toISOString().split('T')[0];

    document.getElementById('startDate').value = lastMonthStr;
    document.getElementById('endDate').value = today;

    // Load translations
    updateTranslations();

    // Load initial data
    loadCurrentReport();
    loadQuickStats();

    // Setup event listeners
    setupEventListeners();

    // Set HTML language
    document.documentElement.setAttribute('lang', savedLang);

    console.log('Reports page loaded successfully');
}

// Start when page loads
document.addEventListener('DOMContentLoaded', initReports);