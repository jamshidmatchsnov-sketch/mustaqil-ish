// --- Translations ---
const translations = {
    uz: {
        logo: "Mening Budjetim",
        login_title: "Kirish",
        register_title: "Ro'yxatdan o'tish",
        email: "Email",
        password: "Parol",
        nickname: "Nickname",
        login_btn: "Kirish",
        register_btn: "Ro'yxatdan o'tish",
        to_register: "Ro'yxatdan o'tish",
        to_login: "Kirish",
        nav_dashboard: "Boshqaruv paneli",
        nav_transactions: "Tranzaksiyalar",
        nav_stats: "Statistika",
        nav_settings: "Sozlamalar",
        welcome: "Xush kelibsiz",
        header_subtitle: "Bugun moliyaviy holatingizni ko'zdan kechiring.",
        settings_title: "Sozlamalar",
        lang_select: "Tilni tanlang:",
        close_btn: "Yopish",
        total_balance: "Umumiy Balans",
        total_income: "Daromad",
        total_expense: "Xarajat",
        chart_title: "Xarajatlar Diagrammasi",
        new_transaction: "Yangi Tranzaksiya",
        desc_label: "Tavsif",
        amount_label: "Miqdor (so'm)",
        type_label: "Turi",
        opt_income: "Daromad",
        opt_expense: "Xarajat",
        add_btn: "Qo'shish",
        recent_title: "Oxirgi Amallar",
        empty_history: "Hozircha hech narsa yo'q",
        logout_title: "Chiqish",
        placeholder_desc: "Masalan: Bozorlik",
        history_title: "Barcha tranzaksiyalar tarixi",
        stats_chart_title: "Shu oydagi kirim va chiqimlar",
        stats_summary_title: "Hisobot",
        income_sum: "Jami Daromad",
        expense_sum: "Jami Xarajat",
        net_profit: "Sof foyda/zarar"
    },
    en: {
        logo: "My Budget",
        login_title: "Login",
        register_title: "Sign Up",
        email: "Email",
        password: "Password",
        nickname: "Nickname",
        login_btn: "Sign In",
        register_btn: "Sign Up",
        to_register: "Register here",
        to_login: "Login here",
        nav_dashboard: "Dashboard",
        nav_transactions: "History",
        nav_stats: "Statistics",
        nav_settings: "Settings",
        welcome: "Welcome",
        header_subtitle: "Check your financial status today.",
        settings_title: "Settings",
        lang_select: "Choose language:",
        close_btn: "Close",
        total_balance: "Total Balance",
        total_income: "Income",
        total_expense: "Expense",
        chart_title: "Expense Chart",
        new_transaction: "New Transaction",
        desc_label: "Description",
        amount_label: "Amount (UZS)",
        type_label: "Type",
        opt_income: "Income",
        opt_expense: "Expense",
        add_btn: "Add",
        recent_title: "Recent Transactions",
        empty_history: "Nothing here yet",
        logout_title: "Logout",
        placeholder_desc: "E.g.: Groceries",
        history_title: "All Transactions History",
        stats_chart_title: "Income & Expense this Month",
        stats_summary_title: "Summary Report",
        income_sum: "Total Income",
        expense_sum: "Total Expense",
        net_profit: "Net Profit/Loss"
    },
    ru: {
        logo: "Мой Бюджет",
        login_title: "Вход",
        register_title: "Регистрация",
        email: "Email",
        password: "Пароль",
        nickname: "Никнейм",
        login_btn: "Войти",
        register_btn: "Создать аккаунт",
        to_register: "Регистрация",
        to_login: "Войти",
        nav_dashboard: "Панель управления",
        nav_transactions: "История",
        nav_stats: "Статистика",
        nav_settings: "Настройки",
        welcome: "Добро пожаловать",
        header_subtitle: "Проверьте свое финансовое состояние сегодня.",
        settings_title: "Настройки",
        lang_select: "Выберите язык:",
        close_btn: "Закрыть",
        total_balance: "Общий Баланс",
        total_income: "Доход",
        total_expense: "Расход",
        chart_title: "Диаграмма расходов",
        new_transaction: "Новая транзакция",
        desc_label: "Описание",
        amount_label: "Сумма (сум)",
        type_label: "Тип",
        opt_income: "Доход",
        opt_expense: "Расход",
        add_btn: "Добавить",
        recent_title: "Последние операции",
        empty_history: "Пока ничего нет",
        logout_title: "Выйти",
        placeholder_desc: "Напр.: Продукты",
        history_title: "История всех транзакций",
        stats_chart_title: "Доходы и расходы в этом месяце",
        stats_summary_title: "Краткий отчет",
        income_sum: "Общий доход",
        expense_sum: "Общий расход",
        net_profit: "Чистая прибыль/убыток"
    }
};

// --- State and Constants ---
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let currentLang = localStorage.getItem('currentLang') || 'uz';
let transactions = [];
let expenseChart;

// Elements
const authModal = document.getElementById('authModal');
const appMain = document.getElementById('appMain');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toRegister = document.getElementById('toRegister');
const toLogin = document.getElementById('toLogin');
const loginInputForm = document.getElementById('loginInputForm');
const registerInputForm = document.getElementById('registerInputForm');

const budgetForm = document.getElementById('budgetForm');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const transactionList = document.getElementById('transactionList');
const totalBalance = document.getElementById('totalBalance');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const currentDateEl = document.getElementById('currentDate');
const welcomeUser = document.getElementById('welcomeUser');
const logoutBtn = document.getElementById('logoutBtn');
const langSwitcher = document.getElementById('langSwitcher');
const settingsToggle = document.getElementById('settingsToggle');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');

// Navigation Elements
const navDashboard = document.getElementById('navDashboard');
const navTransactions = document.getElementById('navTransactions');
const navStats = document.getElementById('navStats');
const viewSections = document.querySelectorAll('.view-section');
const navItems = document.querySelectorAll('.nav-links li');

// History & Stats Elements
const historyMonthFilter = document.getElementById('historyMonthFilter');
const groupedHistoryList = document.getElementById('groupedHistoryList');
const monthlyStatsChartCanvas = document.getElementById('monthlyStatsChart');
let monthlyStatsChart;

// --- Initialization ---
function init() {
    updateLanguage(currentLang);
    langSwitcher.value = currentLang;

    if (currentUser) {
        showApp();
    } else {
        showAuth();
    }
}

// --- Auth Functions ---
function showAuth() {
    authModal.classList.remove('hidden');
    appMain.classList.add('hidden');
}

function showApp() {
    authModal.classList.add('hidden');
    appMain.classList.remove('hidden');
    welcomeUser.innerText = currentUser.nickname;
    document.getElementById('userNameDisplay').innerText = currentUser.nickname;
    document.getElementById('userEmailDisplay').innerText = currentUser.email;
    document.getElementById('userAvatar').src = `https://ui-avatars.com/api/?name=${currentUser.nickname}&background=6366f1&color=fff`;
    
    loadTransactions();
    updateDate();
    updateUI();
    initMonthlyChart();
    
    // Set initial filter to current month
    const now = new Date();
    const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    historyMonthFilter.value = monthStr;
}

function switchView(viewId, navItem) {
    viewSections.forEach(view => view.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    
    navItems.forEach(item => item.classList.remove('active'));
    if (navItem) navItem.classList.add('active');

    // Refresh data for specific views
    if (viewId === 'historyView') updateHistoryView();
    if (viewId === 'statsView') updateStatisticsView();
    if (viewId === 'dashboardView') updateUI();
}

toRegister.onclick = (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
};

toLogin.onclick = (e) => {
    e.preventDefault();
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
};

// Navigation Event Listeners
navDashboard.onclick = (e) => { e.preventDefault(); switchView('dashboardView', navDashboard); };
navTransactions.onclick = (e) => { e.preventDefault(); switchView('historyView', navTransactions); };
navStats.onclick = (e) => { e.preventDefault(); switchView('statsView', navStats); };
historyMonthFilter.onchange = () => updateHistoryView();

registerInputForm.onsubmit = (e) => {
    e.preventDefault();
    const nickname = document.getElementById('regNickname').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPass').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
        alert(currentLang === 'uz' ? 'Bu email allaqachon mavjud!' : 'This email already exists!');
        return;
    }

    const newUser = { nickname, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showApp();
};

loginInputForm.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPass').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showApp();
    } else {
        alert(currentLang === 'uz' ? 'Email yoki parol xato!' : 'Invalid email or password!');
    }
};

const logoutBtnMobile = document.getElementById('logoutBtnMobile');

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    showAuth();
}

logoutBtn.onclick = logout;
if (logoutBtnMobile) logoutBtnMobile.onclick = logout;

// --- Language Functions ---
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('currentLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update placeholders
    description.placeholder = translations[lang].placeholder_desc;
    
    updateDate();
}

langSwitcher.onchange = (e) => {
    updateLanguage(e.target.value);
};

settingsToggle.onclick = () => settingsPanel.classList.toggle('hidden');
closeSettings.onclick = () => settingsPanel.classList.add('hidden');

// --- Core Logic ---
function loadTransactions() {
    const key = `transactions_${currentUser.email}`;
    transactions = JSON.parse(localStorage.getItem(key)) || [];
}

function updateLocalStorage() {
    const key = `transactions_${currentUser.email}`;
    localStorage.setItem(key, JSON.stringify(transactions));
}

function updateDate() {
    const now = new Date();
    const locales = { uz: 'uz-UZ', en: 'en-US', ru: 'ru-RU' };
    const options = { month: 'long', year: 'numeric' };
    currentDateEl.innerText = now.toLocaleDateString(locales[currentLang], options);
}

function updateUI() {
    transactionList.innerHTML = '';

    if (transactions.length === 0) {
        transactionList.innerHTML = `<div class="empty-state"><p data-i18n="empty_history">${translations[currentLang].empty_history}</p></div>`;
    } else {
        transactions.slice().reverse().forEach(transaction => {
            const item = document.createElement('div');
            item.classList.add('transaction-item');
            
            const isIncome = transaction.type === 'income';
            const icon = isIncome ? 'fa-arrow-up' : 'fa-arrow-down';
            const iconClass = isIncome ? 'text-success' : 'text-danger';

            item.innerHTML = `
                <div class="item-info">
                    <div class="item-icon">
                        <i class="fas ${icon} ${iconClass}"></i>
                    </div>
                    <div class="item-details">
                        <h4>${transaction.description}</h4>
                        <p>${transaction.date}</p>
                    </div>
                </div>
                <div class="item-amount ${iconClass}">
                    ${isIncome ? '+' : '-'}${transaction.amount.toLocaleString()} so'm
                    <i class="fas fa-trash-alt delete-btn" onclick="removeTransaction(${transaction.id})"></i>
                </div>
            `;
            transactionList.appendChild(item);
        });
    }

    updateSummary();
}

function updateSummary() {
    const amounts = transactions.map(t => t.type === 'income' ? t.amount : -t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((acc, item) => (acc += item.amount), 0);

    const expense = transactions
        .filter(t => t.type === 'expense')
        .reduce((acc, item) => (acc += item.amount), 0);

    totalBalance.innerText = `${total.toLocaleString()} so'm`;
    totalIncome.innerText = `+${income.toLocaleString()} so'm`;
    totalExpense.innerText = `-${expense.toLocaleString()} so'm`;
}

window.removeTransaction = function(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    updateUI();
}

// Removed old budgetForm.onsubmit and old chart logic per user request to move stats to new view

function getChartData() {
    const lastTransactions = transactions.filter(t => t.type === 'expense').slice(-7);
    const labels = lastTransactions.map(t => t.description);
    const values = lastTransactions.map(t => t.amount);
    
    if(labels.length === 0) return { labels: [translations[currentLang].empty_history], values: [0] };
    return { labels, values };
}


// --- History & Stats Detail Logic ---

function updateHistoryView() {
    const filterMonth = historyMonthFilter.value; // YYYY-MM
    const filtered = transactions.filter(t => {
        if (!filterMonth) return true;
        const [y, m, d] = t.date.split('.').reverse(); // Assuming DD.MM.YYYY
        // Wait, script.js uses toLocaleDateString(). format varies by locale.
        // Let's store date as ISO string or a standard format in the future.
        // For now, let's try to parse it.
        const tDate = new Date(t.timestamp || 0);
        if (t.timestamp) {
            const tMonth = `${tDate.getFullYear()}-${String(tDate.getMonth() + 1).padStart(2, '0')}`;
            return tMonth === filterMonth;
        }
        return true;
    }).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

    groupedHistoryList.innerHTML = '';
    
    if (filtered.length === 0) {
        groupedHistoryList.innerHTML = `<div class="empty-state"><p>${translations[currentLang].empty_history}</p></div>`;
        return;
    }

    const groups = {};
    filtered.forEach(t => {
        const dateStr = t.date;
        if (!groups[dateStr]) groups[dateStr] = [];
        groups[dateStr].push(t);
    });

    Object.keys(groups).forEach(date => {
        const groupEl = document.createElement('div');
        groupEl.classList.add('history-date-group');
        
        groupEl.innerHTML = `<div class="history-date-header">${date}</div>`;
        
        groups[date].forEach(t => {
            const item = document.createElement('div');
            item.classList.add('transaction-item');
            const isIncome = t.type === 'income';
            const iconClass = isIncome ? 'text-success' : 'text-danger';
            
            item.innerHTML = `
                <div class="item-info">
                    <div class="item-icon"><i class="fas ${isIncome ? 'fa-arrow-up' : 'fa-arrow-down'} ${iconClass}"></i></div>
                    <div class="item-details">
                        <h4>${t.description}</h4>
                        <p>${t.type === 'income' ? translations[currentLang].opt_income : translations[currentLang].opt_expense}</p>
                    </div>
                </div>
                <div class="item-amount ${iconClass}">
                    ${isIncome ? '+' : '-'}${t.amount.toLocaleString()} so'm
                </div>
            `;
            groupEl.appendChild(item);
        });
        groupedHistoryList.appendChild(groupEl);
    });
}

function initMonthlyChart() {
    const ctx = monthlyStatsChartCanvas.getContext('2d');
    monthlyStatsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [translations[currentLang].opt_income, translations[currentLang].opt_expense],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#22c55e', '#ef4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

function updateStatisticsView() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const monthlyTransactions = transactions.filter(t => {
        const tDate = new Date(t.timestamp || 0);
        return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
    });

    const income = monthlyTransactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expense = monthlyTransactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

    monthlyStatsChart.data.datasets[0].data = [income, expense];
    monthlyStatsChart.data.labels = [translations[currentLang].opt_income, translations[currentLang].opt_expense];
    monthlyStatsChart.update();

    const breakdown = document.getElementById('statsBreakdown');
    breakdown.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">${translations[currentLang].income_sum}</span>
            <span class="stat-value text-success">+${income.toLocaleString()} so'm</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">${translations[currentLang].expense_sum}</span>
            <span class="stat-value text-danger">-${expense.toLocaleString()} so'm</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">${translations[currentLang].net_profit}</span>
            <span class="stat-value ${income - expense >= 0 ? 'text-success' : 'text-danger'}">${(income - expense).toLocaleString()} so'm</span>
        </div>
    `;
}

// Update budgetForm to include timestamp
const originalOnSubmit = budgetForm.onsubmit;
budgetForm.onsubmit = (e) => {
    e.preventDefault();
    const transaction = {
        id: Math.floor(Math.random() * 100000000),
        description: description.value,
        amount: +amount.value,
        type: type.value,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now()
    };

    transactions.push(transaction);
    updateLocalStorage();
    updateUI();
    
    description.value = '';
    amount.value = '';
};

// Run init
init();
