// ==========================================
// ARTICLE DATABASE — HIGH CPC KEYWORDS
// ==========================================
const articles = [
    {
        id: 1,
        title: "How Credit Cards Actually Work (And How to Use Them Right)",
        summary: "Credit cards aren't free money. Learn how interest rates, minimum payments, and credit limits work before you get into trouble.",
        category: "Credit",
        date: "Mar 18, 2026",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        file: "articles/how-credit-cards-work.html"
    },
    {
        id: 2,
        title: "The 50/30/20 Budget Rule Explained Simply",
        summary: "The most popular budgeting method in the world. 50% needs, 30% wants, 20% savings. Here's how to actually apply it.",
        category: "Budgeting",
        date: "Mar 18, 2026",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
        file: "articles/50-30-20-rule.html"
    },
    {
        id: 3,
        title: "What Is a Credit Score and Why Does It Matter?",
        summary: "Your credit score affects your ability to rent an apartment, buy a car, or get a loan. Here's everything you need to know.",
        category: "Credit",
        date: "Mar 18, 2026",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        file: "articles/what-is-credit-score.html"
    },
    {
        id: 4,
        title: "How to Start Investing With $50 or Less",
        summary: "You don't need thousands to invest. Fractional shares, index funds, and micro-investing apps make it possible for anyone.",
        category: "Investing",
        date: "Mar 18, 2026",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
        file: "articles/start-investing-50.html"
    },
    {
        id: 5,
        title: "Savings Account vs Checking Account: What's the Difference?",
        summary: "They look the same but serve completely different purposes. One earns interest, the other gives you quick access.",
        category: "Budgeting",
        date: "Mar 18, 2026",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
        file: "articles/savings-vs-checking.html"
    },
    {
        id: 6,
        title: "5 Types of Insurance Everyone Should Understand",
        summary: "Health, auto, life, renters, and disability. What each one covers, who needs it, and how to avoid overpaying.",
        category: "Insurance",
        date: "Mar 18, 2026",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
        file: "articles/types-of-insurance.html"
    },
    {
        id: 7,
        title: "What Is Compound Interest? The 8th Wonder of the World",
        summary: "Albert Einstein reportedly called it the most powerful force in the universe. Here's how it makes your money grow automatically.",
        category: "Investing",
        date: "Mar 18, 2026",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&h=400&fit=crop",
        file: "articles/compound-interest.html"
    },
    {
        id: 8,
        title: "Renting vs Buying a Home: The Real Math",
        summary: "Everyone says 'buying is always better.' That's not always true. We break down the numbers so you can decide for yourself.",
        category: "Real Estate",
        date: "Mar 18, 2026",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        file: "articles/renting-vs-buying.html"
    },
    {
        id: 9,
        title: "Bitcoin for Beginners: What It Is and How It Works",
        summary: "Cryptocurrency explained without the hype. What Bitcoin actually does, how transactions work, and the real risks involved.",
        category: "Crypto",
        date: "Mar 18, 2026",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop",
        file: "articles/bitcoin-beginners.html"
    },
    {
        id: 10,
        title: "The Ultimate Guide to Emergency Funds",
        summary: "Why you need one, how much you should save, and where to keep it to maximize interest.",
        category: "Budgeting",
        date: "Mar 18, 2026",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=600&h=400&fit=crop",
        file: "articles/emergency-fund-guide.html"
    },
    {
        id: 11,
        title: "Snowball vs Avalanche: The Best Way to Pay Off Debt",
        summary: "Two psychological and mathematical approaches to destroying your credit card debt forever.",
        category: "Credit",
        date: "Mar 18, 2026",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&h=400&fit=crop",
        file: "articles/snowball-vs-avalanche.html"
    },
    {
        id: 12,
        title: "ETFs vs Mutual Funds: Which Is Better for Beginners?",
        summary: "Both offer diversification, but one is usually cheaper and more tax-efficient. Learn the clear differences.",
        category: "Investing",
        date: "Mar 18, 2026",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop",
        file: "articles/etfs-vs-mutual-funds.html"
    },
    {
        id: 13,
        title: "What is a 401(k) and How Does Employer Matching Work?",
        summary: "If you aren't using your employer match, you are literally turning down free money. Here is how it works.",
        category: "Investing",
        date: "Mar 18, 2026",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
        file: "articles/what-is-a-401k.html"
    },
    {
        id: 14,
        title: "Ethereum Explained: How It Differs From Bitcoin",
        summary: "Bitcoin is digital money. Ethereum is a global computer. Understand the difference before investing.",
        category: "Crypto",
        date: "Mar 18, 2026",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=600&h=400&fit=crop",
        file: "articles/ethereum-explained.html"
    },
    {
        id: 15,
        title: "FHA vs Conventional Loans for First-Time Homebuyers",
        summary: "You don't always need 20% down to buy a house. Learn the pros and cons of 3.5% down payment loans.",
        category: "Real Estate",
        date: "Mar 18, 2026",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop",
        file: "articles/fha-vs-conventional.html"
    }
];

// ==========================================
// RENDER ARTICLES
// ==========================================
function renderArticles(data = articles, title = "Latest") {
    const grid = document.getElementById('articles-grid');
    const header = document.getElementById('articles-title');
    if (!grid) return;

    if (header) {
        if (title === "Latest") {
            header.innerHTML = "Latest Articles";
        } else {
            header.innerHTML = `${title} Articles <span onclick="filterCategory('All')" style="font-size:0.95rem; color:var(--primary); cursor:pointer; margin-left:16px; border-bottom: 2px solid var(--primary); padding-bottom: 2px;"><i class="fa-solid fa-xmark"></i> Clear Filter</span>`;
        }
    }

    grid.innerHTML = data.map(a => `
        <article class="article-card" onclick="window.location.href='${a.file}'">
            <div class="article-img-wrap">
                <img src="${a.image}" alt="${a.title}" class="article-thumb" loading="lazy">
            </div>
            <div class="article-body">
                <span class="article-tag">${a.category}</span>
                <h3>${a.title}</h3>
                <p>${a.summary}</p>
                <div class="article-meta">
                    <span><i class="fa-regular fa-calendar"></i> ${a.date}</span>
                    <span><i class="fa-regular fa-clock"></i> ${a.readTime}</span>
                </div>
            </div>
        </article>
    `).join('');
}

function filterCategory(category) {
    if (category === 'All') {
        renderArticles(articles, "Latest");
    } else {
        const filtered = articles.filter(a => a.category === category);
        renderArticles(filtered, category);
    }
    document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// DARK MODE
// ==========================================
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    if (localStorage.getItem('mintwiseTheme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('mintwiseTheme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('mintwiseTheme', 'dark');
        }
    });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    initTheme();
});
