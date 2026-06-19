const philosophyData = {
    ethics: {
        title: "Ethics",
        definition: "Ethics is the philosophical study of moral principles and values that govern human behavior and judgments about what ought to be done.",
        topQuote: "The unexamined life is not worth living. — Socrates",
        philosophers: ["Socrates", "Plato", "Aristotle", "Immanuel Kant", "John Stuart Mill"],
        ideas: ["Utilitarianism", "Deontology", "Virtue Ethics", "Moral Relativism", "Eudaimonia"],
        questions: ["What is the idea of a good life?", "Are moral truths absolute?", "How do we resolve moral dilemmas?", "What are our duties to others?", "Is morality culturally relative?"],
        rotatingQuotes: ["Do not impose on others what you do not wish for yourself. — Confucius", "Actions are right in proportion as they tend to promote happiness... — John Stuart Mill", "Act only according to that maxim... — Immanuel Kant", "We are what we repeatedly do. Excellence is not an act but a habit. — Aristotle"]
    },
    political: { /* add the rest from previous full version */ 
        title: "Political Philosophy", definition: "Political Philosophy is the normative discipline that analyses how we ought to live together...", 
        topQuote: "The price good men pay for indifference to public affairs is to be ruled by evil men. — Plato",
        philosophers: ["Plato","Aristotle","John Locke","Niccolo Machiavelli","Karl Marx"],
        ideas: ["The Social Contract","Liberty","Rights","Authority & Legitimacy","Justice"],
        questions: ["What is justice?","Why should political authority be obeyed?","What is the relationship between the individual and the community?","What is equality?","Who should rule and for what purpose?"],
        rotatingQuotes: ["Man is born free... — Rousseau","Man is by nature a political animal. — Aristotle","The end of law is... — John Locke","The philosophers have only interpreted the world... — Karl Marx"]
    },
    // Repeat for aesthetics, metaphysics, epistemology, logic using the full data I gave you earlier
    // (I shortened here for space - paste the complete object from my previous full script.js)
};

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page + '-page').classList.add('active');
}

function showBranch(key) {
    const d = philosophyData[key];
    document.getElementById('branch-title').textContent = d.title;
    document.getElementById('branch-definition').textContent = d.definition;
    document.getElementById('top-quote').innerHTML = `<em>${d.topQuote}</em>`;

    document.getElementById('philosophers-grid').innerHTML = d.philosophers.map(p => `<div class="card"><h3>${p}</h3></div>`).join('');
    document.getElementById('ideas-grid').innerHTML = d.ideas.map(i => `<div class="card"><h3>${i}</h3></div>`).join('');
    document.getElementById('questions-grid').innerHTML = d.questions.map(q => `<div class="card"><p><strong>${q}</strong></p></div>`).join('');

    showPage('branch');
    startRotatingQuotes(d.rotatingQuotes);
}

let quoteInterval;
function startRotatingQuotes(quotes) {
    if (quoteInterval) clearInterval(quoteInterval);
    let i = 0;
    const el = document.getElementById('rotating-quote');
    const rotate = () => { el.textContent = quotes[i]; i = (i+1)%quotes.length; };
    rotate();
    quoteInterval = setInterval(rotate, 10000);
}

function goBack() { showPage('home'); }
function handleSubmit(e) { e.preventDefault(); alert("Thank you! Submission received."); e.target.reset(); showPage('home'); }

document.addEventListener('DOMContentLoaded', () => showPage('home'));
