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

// Sample data
const sampleData = {
    en: {
        transactions: [
            { id: 1001, customer: "Ahmed Mohammed", date: "2024-07-29 14:30", items: 3, total: 1250, payment: "Paid" },
            { id: 1002, customer: "Selamawit Bekele", date: "2024-07-29 11:15", items: 2, total: 450, payment: "Paid" },
            { id: 1003, customer: "Yohannes Tesfaye", date: "2024-07-28 16:45", items: 1, total: 850, payment: "Pending" },
            { id: 1004, customer: "Mekdes Alemu", date: "2024-07-28 10:20", items: 4, total: 320, payment: "Paid" },
            { id: 1005, customer: "David Solomon", date: "2024-07-27 15:10", items: 2, total: 680, payment: "Paid" },
            { id: 1006, customer: "Helen Tekle", date: "2024-07-27 09:45", items: 5, total: 1200, payment: "Paid" }
        ],
        topProducts: [
            { name: "Coffee Beans", sales: 42, revenue: 12600 },
            { name: "White Teff", sales: 35, revenue: 4200 },
            { name: "Berbere Spice", sales: 28, revenue: 4200 },
            { name: "Injera", sales: 25, revenue: 1250 }
        ]
    },

    am: {
        transactions: [
            { id: 1001, customer: "አህመድ መሀመድ", date: "2024-07-29 14:30", items: 3, total: 1250, payment: "ተከፍሏል" },
            { id: 1002, customer: "ሰላማዊት በቀለ", date: "2024-07-29 11:15", items: 2, total: 450, payment: "ተከፍሏል" },
            { id: 1003, customer: "ዮሐንስ ተስፋዬ", date: "2024-07-28 16:45", items: 1, total: 850, payment: "በመጠባበቅ ላይ" },
            { id: 1004, customer: "መቅደስ ዓለሙ", date: "2024-07-28 10:20", items: 4, total: 320, payment: "ተከፍሏል" },
            { id: 1005, customer: "ዳዊት ሰሎሞን", date: "2024-07-27 15:10", items: 2, total: 680, payment: "ተከፍሏል" },
            { id: 1006, customer: "ሄለን ተክሌ", date: "2024-07-27 09:45", items: 5, total: 1200, payment: "ተከፍሏል" }
        ],
        topProducts: [
            { name: "ቡና ፎሎ", sales: 42, revenue: 12600 },
            { name: "ነጭ ጤፍ", sales: 35, revenue: 4200 },
            { name: "በርበሬ ቅመም", sales: 28, revenue: 4200 },
            { name: "እንጀራ", sales: 25, revenue: 1250 }
        ]
    }
};

// Available products for sale
const availableProducts = {
    en: [
        { id: 1, name: "White Teff", price: 120, stock: 45 },
        { id: 2, name: "Coffee Beans", price: 300, stock: 22 },
        { id: 3, name: "Injera", price: 50, stock: 3 },
        { id: 4, name: "Berbere Spice", price: 150, stock: 18 },
        { id: 5, name: "Habesha Kemis", price: 850, stock: 8 }
    ],
    am: [
        { id: 1, name: "ነጭ ጤፍ", price: 120, stock: 45 },
        { id: 2, name: "ቡና ፎሎ", price: 300, stock: 22 },
        { id: 3, name: "እንጀራ", price: 50, stock: 3 },
        { id: 4, name: "በርበሬ ቅመም", price: 150, stock: 18 },
        { id: 5, name: "ሐበሻ ቀሚስ", price: 850, stock: 8 }
    ]
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
        salesTitle: "Sales Management",
        salesSubtitle: "Process sales, manage transactions, and track revenue",
        newSale: "New Sale",
        todaySales: "Today's Sales",
        vsYesterday: "vs yesterday",
        weeklySales: "Weekly Sales",
        vsLastWeek: "vs last week",
        totalTransactions: "Total Transactions",
        thisMonth: "this month",
        avgTransaction: "Avg. Transaction",
        trend: "trend",
        newSaleForm: "New Sale Transaction",
        customerName: "Customer Name",
        customerPhone: "Phone Number",
        products: "Products",
        addProduct: "Add Product",
        subtotal: "Subtotal",
        tax: "Tax (15%)",
        total: "Total Amount",
        cancel: "Cancel",
        completeSale: "Complete Sale",
        recentTransactions: "Recent Transactions",
        today: "Today",
        thisWeek: "This Week",
        thisMonth: "This Month",
        allTime: "All Time",
        print: "Print",
        invoice: "Invoice #",
        customer: "Customer",
        dateTime: "Date & Time",
        items: "Items",
        total: "Total",
        payment: "Payment",
        actions: "Actions",
        topProducts: "Top Selling Products",
        viewInventory: "View Inventory",

        // Payment Status
        paid: "Paid",
        pending: "Pending",

        // Actions
        view: "View",
        receipt: "Receipt",

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
        salesTitle: "የሽያጭ አስተዳደር",
        salesSubtitle: "ሽያጭ አስኬድ፣ ግብይቶችን ያስተዳድሩ እና ገቢ ይከታተሉ",
        newSale: "አዲስ ሽያጭ",
        todaySales: "የዛሬ ሽያጭ",
        vsYesterday: "ከትላንት",
        weeklySales: "የሳምንት ሽያጭ",
        vsLastWeek: "ከባድ ሳምንት",
        totalTransactions: "ጠቅላላ ግብይቶች",
        thisMonth: "ይህ ወር",
        avgTransaction: "አማካኝ ግብይት",
        trend: "ዝንባሌ",
        newSaleForm: "አዲስ የሽያጭ ግብይት",
        customerName: "የደንበኛ ስም",
        customerPhone: "ስልክ ቁጥር",
        products: "ምርቶች",
        addProduct: "ምርት ጨምር",
        subtotal: "ከግብር በፊት",
        tax: "ግብር (15%)",
        total: "ጠቅላላ መጠን",
        cancel: "ሰርዝ",
        completeSale: "ሽያጩን አጠናቅቅ",
        recentTransactions: "የቅርብ ግብይቶች",
        today: "ዛሬ",
        thisWeek: "ይህ ሳምንት",
        thisMonth: "ይህ ወር",
        allTime: "ሁሉም ጊዜ",
        print: "አትም",
        invoice: "ፋክተር #",
        customer: "ደንበኛ",
        dateTime: "ቀን እና ሰዓት",
        items: "ዕቃዎች",
        total: "ጠቅላላ",
        payment: "ክፍያ",
        actions: "እርምጃዎች",
        topProducts: "በጣም የሚሸጡ ምርቶች",
        viewInventory: "ክምችት አሳይ",

        // Payment Status
        paid: "ተከፍሏል",
        pending: "በመጠባበቅ ላይ",

        // Actions
        view: "አሳይ",
        receipt: "መረጃው",

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
    updateTranslations();

    // Save language preference
    localStorage.setItem('ethiostock_language', lang);

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Reload data in new language
    loadTransactions();
    loadTopProducts();
    updateStats();
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

// Load transactions
function loadTransactions() {
    const transactions = sampleData[currentLang].transactions;
    const tableBody = document.getElementById('transactionsTable');
    const dateFilter = document.getElementById('dateFilter').value;

    tableBody.innerHTML = '';

    // Filter by date (simple demo filter)
    let filteredTransactions = [...transactions];
    if (dateFilter === 'today') {
        filteredTransactions = transactions.filter(t => t.date.includes('07-29'));
    } else if (dateFilter === 'week') {
        filteredTransactions = transactions.filter(t => t.date.includes('07-2'));
    }
    // For 'month' and 'all' show all

    filteredTransactions.forEach(transaction => {
        const paymentClass = transaction.payment === "Paid" || transaction.payment === "ተከፍሏል" ? "status-paid" : "status-pending";

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#INV${transaction.id}</td>
            <td>${transaction.customer}</td>
            <td>${transaction.date}</td>
            <td>${transaction.items}</td>
            <td>$${transaction.total}</td>
            <td><span class="payment-status ${paymentClass}">${transaction.payment}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn view-btn" onclick="viewTransaction(${transaction.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn receipt-btn" onclick="printReceipt(${transaction.id})">
                        <i class="fas fa-receipt"></i>
                    </button>
                </div>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Load top products
function loadTopProducts() {
    const topProducts = sampleData[currentLang].topProducts;
    const container = document.getElementById('topProductsGrid');

    container.innerHTML = '';

    topProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-icon">
                <i class="fas fa-star"></i>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-sales">
                    <div>${product.sales} sales</div>
                    <div>$${product.revenue} revenue</div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Update statistics
function updateStats() {
    const transactions = sampleData[currentLang].transactions;

    // Calculate stats
    const todaySales = transactions
        .filter(t => t.date.includes('07-29'))
        .reduce((sum, t) => sum + t.total, 0);

    const weeklySales = transactions
        .filter(t => t.date.includes('07-2'))
        .reduce((sum, t) => sum + t.total, 0);

    const totalTransactions = transactions.length;
    const avgTransaction = transactions.length > 0
        ? Math.round(transactions.reduce((sum, t) => sum + t.total, 0) / transactions.length)
        : 0;

    // Update DOM
    document.getElementById('todaySales').textContent = todaySales.toLocaleString();
    document.getElementById('weeklySales').textContent = weeklySales.toLocaleString();
    document.getElementById('totalTransactions').textContent = totalTransactions;
    document.getElementById('avgTransaction').textContent = avgTransaction;
}

// Sale form functions
let saleProducts = [];

function showSaleForm() {
    document.getElementById('saleFormContainer').style.display = 'block';
    saleProducts = [];
    updateSaleSummary();
}

function hideSaleForm() {
    document.getElementById('saleFormContainer').style.display = 'none';
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    saleProducts = [];
}

function addProductToSale() {
    const products = availableProducts[currentLang];

    // For demo, add the first available product
    if (products.length > 0) {
        const product = { ...products[0] }; // Copy first product
        product.quantity = 1;
        saleProducts.push(product);
        updateProductsList();
        updateSaleSummary();
    }
}

function removeProductFromSale(index) {
    saleProducts.splice(index, 1);
    updateProductsList();
    updateSaleSummary();
}

function updateProductsList() {
    const container = document.getElementById('productsList');
    container.innerHTML = '';

    saleProducts.forEach((product, index) => {
        const item = document.createElement('div');
        item.className = 'product-item';
        item.innerHTML = `
            <span>${product.name}</span>
            <input type="number" value="${product.quantity}" min="1" max="${product.stock}" 
                   onchange="updateProductQuantity(${index}, this.value)">
            <span>$${product.price}</span>
            <span>$${product.price * product.quantity}</span>
            <button class="remove-product" onclick="removeProductFromSale(${index})">
                <i class="fas fa-times"></i>
            </button>
        `;
        container.appendChild(item);
    });
}

function updateProductQuantity(index, quantity) {
    quantity = parseInt(quantity);
    if (quantity > 0 && quantity <= saleProducts[index].stock) {
        saleProducts[index].quantity = quantity;
        updateSaleSummary();
    }
}

function updateSaleSummary() {
    const subtotal = saleProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('taxAmount').textContent = tax.toFixed(2);
    document.getElementById('totalAmount').textContent = total.toFixed(2);
}

function completeSale() {
    const customerName = document.getElementById('customerName').value.trim();

    if (!customerName) {
        alert(currentLang === 'en' ? 'Please enter customer name' : 'የደንበኛ ስም ያስገቡ');
        return;
    }

    if (saleProducts.length === 0) {
        alert(currentLang === 'en' ? 'Please add at least one product' : 'ቢያንስ አንድ ምርት ያክሉ');
        return;
    }

    // Create new transaction
    const newId = sampleData[currentLang].transactions.length + 1001;
    const now = new Date();
    const dateStr = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const total = saleProducts.reduce((sum, product) => sum + (product.price * product.quantity), 0) * 1.15;

    const newTransaction = {
        id: newId,
        customer: customerName,
        date: dateStr,
        items: saleProducts.reduce((sum, product) => sum + product.quantity, 0),
        total: Math.round(total),
        payment: "Paid"
    };

    // Add to both languages
    sampleData.en.transactions.unshift({ ...newTransaction, customer: customerName });
    sampleData.am.transactions.unshift({ ...newTransaction, customer: customerName, payment: "ተከፍሏል" });

    // Update UI
    hideSaleForm();
    loadTransactions();
    updateStats();

    console.log('Sale completed:', newTransaction);
}

// Transaction actions
function viewTransaction(id) {
    const transaction = sampleData[currentLang].transactions.find(t => t.id === id);
    if (transaction) {
        const message = currentLang === 'en'
            ? `Invoice #${id}\nCustomer: ${transaction.customer}\nDate: ${transaction.date}\nTotal: $${transaction.total}`
            : `ፋክተር #${id}\nደንበኛ: ${transaction.customer}\nቀን: ${transaction.date}\nጠቅላላ: $${transaction.total}`;
        console.log(message);
    }
}

function printReceipt(id) {
    const transaction = sampleData[currentLang].transactions.find(t => t.id === id);
    if (transaction) {
        const message = currentLang === 'en'
            ? `Printing receipt for invoice #${id}...`
            : `ፋክተር #${id} ማተም በማሰራት ላይ...`;
        console.log(message);
    }
}

// Setup event listeners
function setupEventListeners() {
    // New sale button
    document.getElementById('newSaleBtn').addEventListener('click', showSaleForm);

    // Close form buttons
    document.getElementById('closeFormBtn').addEventListener('click', hideSaleForm);
    document.getElementById('cancelSaleBtn').addEventListener('click', hideSaleForm);

    // Add product to sale
    document.getElementById('addProductToSaleBtn').addEventListener('click', addProductToSale);

    // Complete sale
    document.getElementById('completeSaleBtn').addEventListener('click', completeSale);

    // Date filter
    document.getElementById('dateFilter').addEventListener('change', loadTransactions);

    // Print button
    document.getElementById('printBtn').addEventListener('click', function () {
        console.log(currentLang === 'en' ? 'Printing transactions...' : 'ግብይቶችን በማተም ላይ...');
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
}

// Initialize sales page
function initSales() {
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
    updateTranslations();

    // Load data
    loadTransactions();
    loadTopProducts();
    updateStats();

    // Setup event listeners
    setupEventListeners();

    // Set HTML language
    document.documentElement.setAttribute('lang', savedLang);

    console.log('Sales Management loaded successfully');
}

// Start when page loads
document.addEventListener('DOMContentLoaded', initSales);