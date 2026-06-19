const philosophyData = { /* Same data as before - I'm keeping it short here */ 
    ethics: { /* copy from previous script.js */ 
        title: "Ethics", definition: "Ethics is the philosophical study of moral principles...", 
        topQuote: "“The unexamined life is not worth living.” — Socrates",
        philosophers: ["Socrates","Plato","Aristotle","Immanuel Kant","John Stuart Mill"],
        ideas: ["Utilitarianism","Deontology","Virtue Ethics","Moral Relativism","Eudaimonia"],
        questions: ["What is the idea of a good life?","Are moral truths absolute?","How do we resolve moral dilemmas?","What are our duties to others?","Is morality culturally relative?"],
        rotatingQuotes: ["“Do not impose on others what you do not wish for yourself.” — Confucius", "Actions are right... — John Stuart Mill", "Act only according... — Immanuel Kant", "We are what we repeatedly do... — Aristotle"]
    },
    // ... (political, aesthetics, metaphysics, epistemology, logic) - use the full data from my previous message
};

let quoteInterval = null;

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page + '-page').classList.add('active');
}

function showBranch(branch) {
    const data = philosophyData[branch];
    if (!data) return;

    document.getElementById('branch-title').textContent = data.title;
    document.getElementById('branch-definition').textContent = data.definition;
    document.getElementById('top-quote').innerHTML = `<em>${data.topQuote}</em>`;

    document.getElementById('philosophers-grid').innerHTML = data.philosophers.map(p => `<div class="card"><h3>${p}</h3></div>`).join('');
    document.getElementById('ideas-grid').innerHTML = data.ideas.map(i => `<div class="card"><h3>${i}</h3></div>`).join('');
    document.getElementById('questions-grid').innerHTML = data.questions.map(q => `<div class="card"><p><strong>${q}</strong></p></div>`).join('');

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('branch-page').classList.add('active');

    startRotatingQuotes(data.rotatingQuotes);
}

function goBack() {
    showPage('home');
}

function startRotatingQuotes(quotes) {
    if (quoteInterval) clearInterval(quoteInterval);
    let i = 0;
    const el = document.getElementById('rotating-quote');
    const rotate = () => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.textContent = quotes[i];
            el.style.opacity = 1;
            i = (i + 1) % quotes.length;
        }, 500);
    };
    rotate();
    quoteInterval = setInterval(rotate, 10000);
}

function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! Your submission has been received.");
    e.target.reset();
    showPage('home');
}

// Full data object - paste the complete philosophyData from previous response
// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cThe Academy loaded successfully', 'color: #8b4513; font-size: 16px;');
    showPage('home');
});
