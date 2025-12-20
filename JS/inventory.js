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

// Recommended Ethiopian product images (free to use URLs)
const productImages = [
    'https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=300&fit=crop', // Grains
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', // Coffee
    'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop', // Spices
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop', // Ethiopian Food
    'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop', // Traditional
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop'  // Market
];

// Sample Ethiopian products data
const sampleProducts = {
    en: [
        {
            id: 1,
            name: "White Teff",
            category: "grains",
            price: 120,
            stock: 45,
            minStock: 20,
            description: "High-quality Ethiopian white teff grain",
            status: "in-stock",
            value: 5400,
            image: productImages[0]
        },
        {
            id: 2,
            name: "Coffee Beans",
            category: "beverages",
            price: 300,
            stock: 22,
            minStock: 15,
            description: "Premium Ethiopian coffee beans",
            status: "in-stock",
            value: 6600,
            image: productImages[1]
        },
        {
            id: 3,
            name: "Injera",
            category: "grains",
            price: 50,
            stock: 3,
            minStock: 10,
            description: "Traditional Ethiopian flatbread",
            status: "low-stock",
            value: 150,
            image: productImages[3]
        },
        {
            id: 4,
            name: "Berbere Spice",
            category: "spices",
            price: 150,
            stock: 18,
            minStock: 25,
            description: "Authentic Ethiopian spice blend",
            status: "low-stock",
            value: 2700,
            image: productImages[2]
        },
        {
            id: 5,
            name: "Habesha Kemis",
            category: "clothing",
            price: 850,
            stock: 8,
            minStock: 5,
            description: "Traditional Ethiopian dress",
            status: "in-stock",
            value: 6800,
            image: productImages[4]
        },
        {
            id: 6,
            name: "Ethiopian Honey",
            category: "other",
            price: 200,
            stock: 0,
            minStock: 10,
            description: "Pure natural Ethiopian honey",
            status: "out-of-stock",
            value: 0,
            image: productImages[5]
        },
        {
            id: 7,
            name: "Shiro Powder",
            category: "spices",
            price: 85,
            stock: 40,
            minStock: 15,
            description: "Chickpea flour for traditional stew",
            status: "in-stock",
            value: 3400,
            image: productImages[2]
        },
        {
            id: 8,
            name: "Traditional Basket",
            category: "other",
            price: 350,
            stock: 12,
            minStock: 6,
            description: "Hand-woven Ethiopian basket",
            status: "in-stock",
            value: 4200,
            image: productImages[4]
        }
    ],
    am: [
        {
            id: 1,
            name: "ነጭ ጤፍ",
            category: "grains",
            price: 120,
            stock: 45,
            minStock: 20,
            description: "ከፍተኛ ጥራት ያለው ኢትዮጵያዊ ነጭ ጤፍ",
            status: "in-stock",
            value: 5400,
            image: productImages[0]
        },
        {
            id: 2,
            name: "ቡና ፎሎ",
            category: "beverages",
            price: 300,
            stock: 22,
            minStock: 15,
            description: "ምርጥ የኢትዮጵያ ቡና ፎሎ",
            status: "in-stock",
            value: 6600,
            image: productImages[1]
        },
        {
            id: 3,
            name: "እንጀራ",
            category: "grains",
            price: 50,
            stock: 3,
            minStock: 10,
            description: "ባህላዊ የኢትዮጵያ ቂጣ እንጀራ",
            status: "low-stock",
            value: 150,
            image: productImages[3]
        },
        {
            id: 4,
            name: "በርበሬ ቅመም",
            category: "spices",
            price: 150,
            stock: 18,
            minStock: 25,
            description: "እውነተኛ የኢትዮጵያ ቅመም ድብልቅ",
            status: "low-stock",
            value: 2700,
            image: productImages[2]
        },
        {
            id: 5,
            name: "ሐበሻ ቀሚስ",
            category: "clothing",
            price: 850,
            stock: 8,
            minStock: 5,
            description: "ባህላዊ የኢትዮጵያ ልብስ",
            status: "in-stock",
            value: 6800,
            image: productImages[4]
        },
        {
            id: 6,
            name: "የኢትዮጵያ ማር",
            category: "other",
            price: 200,
            stock: 0,
            minStock: 10,
            description: "ንጹህ የተፈጥሮ የኢትዮጵያ ማር",
            status: "out-of-stock",
            value: 0,
            image: productImages[5]
        },
        {
            id: 7,
            name: "ሽሮ ዱቄት",
            category: "spices",
            price: 85,
            stock: 40,
            minStock: 15,
            description: "ለባህላዊ ወጥ የሚውል የሽንኩርት ዱቄት",
            status: "in-stock",
            value: 3400,
            image: productImages[2]
        },
        {
            id: 8,
            name: "ባህላዊ ቅርጫት",
            category: "other",
            price: 350,
            stock: 12,
            minStock: 6,
            description: "በእጅ የተሰራ የኢትዮጵያ ቅርጫት",
            status: "in-stock",
            value: 4200,
            image: productImages[4]
        }
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
        inventoryTitle: "Product Inventory",
        inventorySubtitle: "Manage all your products and stock levels",
        searchPlaceholder: "Search products...",
        addProduct: "Add New Product",
        totalProducts: "Total Products",
        lowStock: "Low Stock",
        outOfStock: "Out of Stock",
        totalValue: "Total Value",
        allProducts: "All Products",
        allCategories: "All Categories",
        grains: "Grains",
        beverages: "Beverages",
        spices: "Spices",
        clothing: "Clothing",
        other: "Other",
        export: "Export",
        product: "Product",
        category: "Category",
        price: "Price",
        stock: "Stock",
        status: "Status",
        value: "Value",
        actions: "Actions",
        featuredProducts: "Featured Products",
        viewAll: "View All",

        // Modal
        addProduct: "Add New Product",
        productName: "Product Name",
        selectCategory: "Select Category",
        stockQuantity: "Stock Quantity",
        minStock: "Minimum Stock Level",
        imageUrl: "Image URL (Optional)",
        description: "Description",
        cancel: "Cancel",
        saveProduct: "Save Product",

        // Status
        inStock: "In Stock",
        lowStock: "Low Stock",
        outOfStock: "Out of Stock",

        // Actions
        edit: "Edit",
        delete: "Delete",
        reorder: "Reorder",

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
        inventoryTitle: "የምርት ክምችት",
        inventorySubtitle: "ሁሉንም ምርቶችዎን እና የክምችት ደረጃዎችን ያስተዳድሩ",
        searchPlaceholder: "ምርቶችን ይፈልጉ...",
        addProduct: "አዲስ ምርት ጨምር",
        totalProducts: "ጠቅላላ ምርቶች",
        lowStock: "ዝቅተኛ ክምችት",
        outOfStock: "የተጠናቀቀ ክምችት",
        totalValue: "ጠቅላላ ዋጋ",
        allProducts: "ሁሉም ምርቶች",
        allCategories: "ሁሉም ምድቦች",
        grains: "እህል",
        beverages: "መጠጥ",
        spices: "ቅመሞች",
        clothing: "ልብስ",
        other: "ሌላ",
        export: "ላክ",
        product: "ምርት",
        category: "ምድብ",
        price: "ዋጋ",
        stock: "ክምችት",
        status: "ሁኔታ",
        value: "ዋጋ",
        actions: "እርምጃዎች",
        featuredProducts: "የተመረጡ ምርቶች",
        viewAll: "ሁሉንም አሳይ",

        // Modal
        addProduct: "አዲስ ምርት ጨምር",
        productName: "የምርት ስም",
        selectCategory: "ምድብ ይምረጡ",
        stockQuantity: "የክምችት ብዛት",
        minStock: "ዝቅተኛ የክምችት ደረጃ",
        imageUrl: "የምስል ዩአርኤል (አማራጭ)",
        description: "መግለጫ",
        cancel: "ሰርዝ",
        saveProduct: "ምርቱን አስቀምጥ",

        // Status
        inStock: "በክምችት ላይ",
        lowStock: "ዝቅተኛ ክምችት",
        outOfStock: "ክምችት አልቋል",

        // Actions
        edit: "አርትዕ",
        delete: "ሰርዝ",
        reorder: "እንደገና አዘዝ",

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

    // Reload products in new language
    loadProducts();
    updateStats();
    loadFeaturedProducts();
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

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (lang[key]) {
            element.setAttribute('placeholder', lang[key]);
        }
    });

    // Update select options
    document.querySelectorAll('option[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
}

// Load products into table
function loadProducts() {
    const products = sampleProducts[currentLang];
    const tableBody = document.getElementById('productsTable');
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    tableBody.innerHTML = '';

    let filteredProducts = products;

    // Apply category filter
    if (categoryFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === categoryFilter);
    }

    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    filteredProducts.forEach(product => {
        // Determine status
        let statusClass, statusText;
        if (product.stock === 0) {
            statusClass = 'status-out-of-stock';
            statusText = currentLang === 'en' ? 'Out of Stock' : 'ክምችት አልቋል';
        } else if (product.stock <= product.minStock) {
            statusClass = 'status-low-stock';
            statusText = currentLang === 'en' ? 'Low Stock' : 'ዝቅተኛ ክምችት';
        } else {
            statusClass = 'status-in-stock';
            statusText = currentLang === 'en' ? 'In Stock' : 'በክምችት ላይ';
        }

        // Format category
        const categoryMap = {
            en: { grains: "Grains", beverages: "Beverages", spices: "Spices", clothing: "Clothing", other: "Other" },
            am: { grains: "እህል", beverages: "መጠጥ", spices: "ቅመሞች", clothing: "ልብስ", other: "ሌላ" }
        };

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="product-cell">
                    <div class="product-image">
                        ${product.image ?
                `<img src="${product.image}" alt="${product.name}" class="product-image">` :
                `<i class="fas fa-box"></i>`
            }
                    </div>
                    <div class="product-info">
                        <span class="product-name">${product.name}</span>
                        <span class="product-id">#PROD${product.id.toString().padStart(3, '0')}</span>
                    </div>
                </div>
            </td>
            <td>${categoryMap[currentLang][product.category]}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>$${product.value}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit-btn" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Load featured products
function loadFeaturedProducts() {
    const products = sampleProducts[currentLang];
    const featuredContainer = document.getElementById('featuredProducts');

    // Get top 4 products by value
    const featured = [...products]
        .sort((a, b) => b.value - a.value)
        .slice(0, 4);

    featuredContainer.innerHTML = '';

    featured.forEach(product => {
        // Determine stock status
        let stockClass, stockText;
        if (product.stock === 0) {
            stockClass = 'status-out-of-stock';
            stockText = '0';
        } else if (product.stock <= product.minStock) {
            stockClass = 'status-low-stock';
            stockText = product.stock;
        } else {
            stockClass = 'status-in-stock';
            stockText = product.stock;
        }

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                ${product.image ?
                `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">` :
                `<i class="fas fa-box-open"></i>`
            }
            </div>
            <div class="product-content">
                <h4 class="product-card-name">${product.name}</h4>
                <div class="product-card-info">
                    <span class="product-price">$${product.price}</span>
                    <span class="product-stock ${stockClass}">${stockText} left</span>
                </div>
            </div>
        `;

        featuredContainer.appendChild(card);
    });
}

// Update statistics
function updateStats() {
    const products = sampleProducts[currentLang];

    const totalProducts = products.length;
    const lowStock = products.filter(p => p.stock > 0 && p.stock <= p.minStock).length;
    const outOfStock = products.filter(p => p.stock === 0).length;
    const totalValue = products.reduce((sum, product) => sum + product.value, 0);

    document.getElementById('totalProductsCount').textContent = totalProducts;
    document.getElementById('lowStockCount').textContent = lowStock;
    document.getElementById('outOfStockCount').textContent = outOfStock;
    document.getElementById('totalValue').textContent = totalValue.toLocaleString();
}

// Modal functions
function openAddProductModal() {
    document.getElementById('productModal').style.display = 'flex';
    document.getElementById('modalTitle').textContent =
        currentLang === 'en' ? 'Add New Product' : 'አዲስ ምርት ጨምር';
    document.getElementById('productForm').reset();
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Product actions
function editProduct(productId) {
    const products = sampleProducts[currentLang];
    const product = products.find(p => p.id === productId);

    if (product) {
        openAddProductModal();
        document.getElementById('modalTitle').textContent =
            currentLang === 'en' ? 'Edit Product' : 'ምርት አርትዕ';

        // Fill form with product data
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productStock').value = product.stock;
        document.getElementById('minStock').value = product.minStock;
        document.getElementById('productImage').value = product.image || '';
        document.getElementById('productDescription').value = product.description || '';

        // Change save button to update
        document.getElementById('saveBtn').textContent =
            currentLang === 'en' ? 'Update Product' : 'ምርቱን አዘምን';
        document.getElementById('saveBtn').dataset.mode = 'edit';
        document.getElementById('saveBtn').dataset.productId = productId;
    }
}

function deleteProduct(productId) {
    const confirmMsg = currentLang === 'en'
        ? 'Are you sure you want to delete this product?'
        : 'እርግጠኛ ነህ ይህን ምርት ማስወገድ ትፈልጋለህ?';

    if (confirm(confirmMsg)) {
        // In a real app, this would remove from database
        console.log(`${currentLang === 'en' ? 'Deleted' : 'የተሰረደ'} product ID: ${productId}`);
        // Reload products to show updated list
        loadProducts();
        updateStats();
        loadFeaturedProducts();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Add product button
    document.getElementById('addProductBtn').addEventListener('click', openAddProductModal);

    // Close modal buttons
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('cancelBtn').addEventListener('click', closeModal);

    // Click outside modal to close
    document.getElementById('productModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });

    // Product form submission
    document.getElementById('productForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const mode = document.getElementById('saveBtn').dataset.mode;
        const productId = document.getElementById('saveBtn').dataset.productId;

        // Get form values
        const newProduct = {
            id: mode === 'edit' ? parseInt(productId) : sampleProducts[currentLang].length + 1,
            name: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            price: parseFloat(document.getElementById('productPrice').value),
            stock: parseInt(document.getElementById('productStock').value),
            minStock: parseInt(document.getElementById('minStock').value),
            image: document.getElementById('productImage').value || productImages[Math.floor(Math.random() * productImages.length)],
            description: document.getElementById('productDescription').value
        };

        // Calculate value and status
        newProduct.value = newProduct.price * newProduct.stock;
        newProduct.status = newProduct.stock === 0 ? 'out-of-stock' :
            newProduct.stock <= newProduct.minStock ? 'low-stock' : 'in-stock';

        if (mode === 'edit') {
            // Update existing product
            const index = sampleProducts[currentLang].findIndex(p => p.id === parseInt(productId));
            if (index !== -1) {
                // Update in both languages to keep IDs consistent
                sampleProducts.en[index] = { ...sampleProducts.en[index], ...newProduct, name: sampleProducts.en[index].name };
                sampleProducts.am[index] = { ...sampleProducts.am[index], ...newProduct, name: sampleProducts.am[index].name };
            }
        } else {
            // Add new product (add to both languages with appropriate names)
            // For demo, we'll add with same name in both languages
            sampleProducts[currentLang].push(newProduct);
        }

        closeModal();
        loadProducts();
        updateStats();
        loadFeaturedProducts();
    });

    // Search input
    document.getElementById('searchInput').addEventListener('input', loadProducts);

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', loadProducts);

    // Export button
    document.getElementById('exportBtn').addEventListener('click', function () {
        alert(currentLang === 'en'
            ? 'Export feature would download product data as CSV'
            : 'የማውጫ ባህሪ የምርት መረጃዎችን እንደ CSV ያወርዳል');
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

// Initialize inventory page
function initInventory() {
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
    loadProducts();
    updateStats();
    loadFeaturedProducts();

    // Setup event listeners
    setupEventListeners();

    // Set HTML language
    document.documentElement.setAttribute('lang', savedLang);

    console.log('Inventory Management loaded successfully');
}

// Start when page loads
document.addEventListener('DOMContentLoaded', initInventory);