// script.js
const branchesData = {
    ethics: {
        title: "Ethics",
        definition: "Ethics is the philosophical study of moral principles and values that govern human behavior and judgments about what ought to be done.",
        philosophers: ["Socrates", "Plato", "Aristotle", "Immanuel Kant", "John Stuart Mill"],
        topQuote: "“The unexamined life is not worth living.” — Socrates",
        ideas: ["Utilitarianism", "Deontology", "Virtue Ethics", "Moral Relativism", "Eudaimonia"],
        questions: [
            "What is the idea of a good life?",
            "Are moral truths absolute?",
            "How do we resolve moral dilemmas?",
            "What are our duties to others?",
            "Is morality culturally relative?"
        ],
        rotatingQuotes: [
            "“Do not impose on others what you do not wish for yourself.” — Confucius",
            "“Actions are right in proportion as they tend to promote happiness...” — John Stuart Mill",
            "“Act only according to that maxim whereby you can at the same time will that it should become a universal law.” — Immanuel Kant",
            "“We are what we repeatedly do. Excellence, then, is not an act but a habit.” — Aristotle"
        ]
    },
    epistemology: {
        title: "Epistemology",
        definition: "Epistemology is the branch of philosophy concerned with the nature, origin, and limits of human knowledge.",
        philosophers: ["Plato", "René Descartes", "John Locke", "David Hume", "Immanuel Kant"],
        topQuote: "“The human understanding, when it has once adopted an opinion, draws all things else to support and agree to it.” — Francis Bacon",
        ideas: ["Justified True Belief", "Empiricism", "Rationalism", "Skepticism", "A Priori and A Posteriori"],
        questions: [
            "What is knowledge?",
            "Can we trust our senses?",
            "Is certainty possible?",
            "How do we distinguish truth from belief?",
            "What is the role of reason?"
        ],
        rotatingQuotes: [
            "“Knowledge is true opinion accompanied by reason.” — Plato",
            "“No man's knowledge here can go beyond his experience.” — John Locke",
            "“Thoughts without content are empty, intuitions without concepts are blind.” — Immanuel Kant",
            "“The only true wisdom is in knowing you know nothing.” — Socrates"
        ]
    },
    metaphysics: {
        title: "Metaphysics",
        definition: "Metaphysics is the branch of philosophy concerned with the fundamental nature of reality, existence, and being.",
        philosophers: ["Plato", "Aristotle", "Immanuel Kant", "René Descartes", "Swami Vivekananda"],
        topQuote: "“Why are there beings at all, instead of nothing?” — Martin Heidegger",
        ideas: ["Ontology", "Mind-Body Problem", "Theory of Forms", "Free Will vs Determinism", "Reality vs Appearance"],
        questions: [
            "What is the fundamental nature of reality?",
            "What is the relationship between mind and body?",
            "Why is there something rather than nothing?",
            "What is the nature of the self and personal identity?",
            "Do humans have free will, or are actions determined?"
        ],
        rotatingQuotes: [
            "“All men by nature desire to know.” — Aristotle",
            "“I think, therefore I am.” — René Descartes",
            "“Metaphysics is the finding of bad reasons for what we believe upon instinct.” — F.H. Bradley",
            "“The true Self (Atman) is identical with ultimate reality (Brahman).” — Swami Vivekananda"
        ]
    },
    political: {
        title: "Political Philosophy",
        definition: "Political Philosophy is the normative discipline that analyses how we ought to live together and examines the ideas of power.",
        philosophers: ["Plato", "Aristotle", "John Locke", "Niccolò Machiavelli", "Karl Marx"],
        topQuote: "“The price good men pay for indifference to public affairs is to be ruled by evil men.” — Plato",
        ideas: ["The Social Contract", "Liberty", "Rights", "Authority & Legitimacy", "Justice"],
        questions: [
            "What is justice?",
            "Why should political authority be obeyed?",
            "What is the relationship between the individual and the community?",
            "What is equality?",
            "Who should rule and for what purpose?"
        ],
        rotatingQuotes: [
            "“Man is born free, and everywhere he is in chains.” — Jean-Jacques Rousseau",
            "“Man is by nature a political animal.” — Aristotle",
            "“The end of law is not to abolish or restrain, but to preserve and enlarge freedom.” — John Locke",
            "“The philosophers have only interpreted the world... the point is to change it.” — Karl Marx"
        ]
    },
    aesthetics: {
        title: "Aesthetics",
        definition: "Aesthetics is the branch of philosophy concerned with beauty, art, taste, and sensory experience.",
        philosophers: ["Plato", "Immanuel Kant", "Friedrich Nietzsche", "John Dewey", "Arthur Schopenhauer"],
        topQuote: "“Nothing is beautiful, only man...” — Friedrich Nietzsche",
        ideas: ["Beauty", "The Sublime", "Expression Theory", "Art as Representation", "Aesthetic Judgment"],
        questions: [
            "What is Beauty?",
            "Is Art Subjective or Objective?",
            "What is the Purpose of Art?",
            "Can We Define Good Taste?",
            "How Does Art Relate to Truth?"
        ],
        rotatingQuotes: [
            "“Beauty is truth, truth beauty.” — John Keats",
            "“The aim of art is to represent not the outward appearance of things, but their inward significance.” — Aristotle",
            "“Art is the highest task and the proper metaphysical activity of life.” — Friedrich Nietzsche",
            "“The highest education is that which makes our life in harmony with all existence.” — Rabindranath Tagore"
        ]
    },
    logic: {
        title: "Logic",
        definition: "Logic is the study of the methods and principles used to distinguish correct reasoning from incorrect reasoning.",
        philosophers: ["Aristotle", "Gottlob Frege", "Uddayana", "Bertrand Russell", "Ludwig Wittgenstein"],
        topQuote: "“Logic pervades the world; the limits of the world are also its limits.” — Ludwig Wittgenstein",
        ideas: ["Deductive vs Inductive", "Fallacies", "Propositional Logic", "Predicate Logic", "Validity and Soundness"],
        questions: [
            "What makes an argument valid?",
            "Can logic be complete?",
            "How do we detect fallacies?",
            "What is the relationship between language and logic?",
            "Are there limits to reason?"
        ],
        rotatingQuotes: [
            "“Logic takes care of itself...” — Ludwig Wittgenstein",
            "“A mind all logic is like a knife all blade...” — Rabindranath Tagore",
            "“The logic of the world is prior to all truth and falsehood.” — Ludwig Wittgenstein",
            "“The logic of words should yield to the logic of realities.” — Louis D. Brandeis"
        ]
    }
};

let currentQuoteIndex = 0;
let quoteInterval;

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    
    if (page === 'timeline') renderTimeline();
    if (page === 'lexicon') renderLexicon();
    if (page === 'darshana') renderDarshana();
}

function navigateToBranch(branchKey) {
    const data = branchesData[branchKey];
    if (!data) return;

    document.getElementById('branch-title').textContent = data.title;
    document.getElementById('branch-definition').innerHTML = `<p><strong>Definition:</strong> ${data.definition}</p>`;
    document.getElementById('top-quote').innerHTML = `<p>${data.topQuote}</p>`;

    // Philosophers
    const philGrid = document.getElementById('philosophers-grid');
    philGrid.innerHTML = data.philosophers.map(ph => `
        <div class="card"><strong>${ph}</strong></div>
    `).join('');

    // Ideas
    const ideasGrid = document.getElementById('ideas-grid');
    ideasGrid.innerHTML = data.ideas.map(idea => `
        <div class="card">${idea}</div>
    `).join('');

    // Questions
    const qGrid = document.getElementById('questions-grid');
    qGrid.innerHTML = data.questions.map(q => `
        <div class="card">${q}</div>
    `).join('');

    // Show branch page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('branch-page').classList.add('active');

    // Start rotating quotes
    startRotatingQuotes(data.rotatingQuotes);
}

function startRotatingQuotes(quotes) {
    if (quoteInterval) clearInterval(quoteInterval);
    currentQuoteIndex = 0;
    
    const quoteEl = document.getElementById('rotating-quote');
    
    function rotate() {
        quoteEl.style.opacity = 0;
        setTimeout(() => {
            quoteEl.textContent = quotes[currentQuoteIndex];
            quoteEl.style.opacity = 1;
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }, 400);
    }
    
    rotate();
    quoteInterval = setInterval(rotate, 8000);
}

function showBranchInfo() {
    alert("Welcome to the Philosophy Atlas!\n\nClick on any of the surrounding branches to explore.");
}

// Timeline Data
const timelineData = [
    {name: "Mahavira", period: "599–527 BCE", era: "Ancient Foundations"},
    {name: "Confucius", period: "551–479 BCE", era: "Ancient Foundations"},
    {name: "Buddha", period: "c. 563–483 BCE", era: "Ancient Foundations"},
    {name: "Socrates", period: "470–399 BCE", era: "Ancient Foundations"},
    {name: "Plato", period: "428–348 BCE", era: "Ancient Foundations"},
    {name: "Aristotle", period: "384–322 BCE", era: "Ancient Foundations"},
    {name: "Chanakya", period: "c. 375–283 BCE", era: "Ancient Foundations"},
    {name: "Nagarjuna", period: "c. 150–250 CE", era: "Classical Indian Thought"},
    {name: "Adi Shankaracharya", period: "c. 788–820 CE", era: "Classical Indian Thought"},
    {name: "Machiavelli", period: "1469–1527", era: "Renaissance & Enlightenment"},
    {name: "Descartes", period: "1596–1650", era: "Renaissance & Enlightenment"},
    {name: "Locke", period: "1632–1704", era: "Renaissance & Enlightenment"},
    {name: "Kant", period: "1724–1804", era: "Renaissance & Enlightenment"},
    {name: "Nietzsche", period: "1844–1900", era: "Modern Philosophy"},
    {name: "Marx", period: "1818–1883", era: "Modern Philosophy"},
    {name: "Russell", period: "1872–1970", era: "Modern Philosophy"}
];

function renderTimeline() {
    const container = document.getElementById('timeline-nodes');
    container.innerHTML = '';
    
    timelineData.forEach((ph, i) => {
        const div = document.createElement('div');
        div.className = `timeline-event ${i % 2 === 0 ? '' : 'odd'}`;
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <strong>${ph.name}</strong><br>
                <small>${ph.period}</small>
                <p>${ph.era}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

const lexiconTerms = {
    A: ["A priori — Knowledge independent of experience", "A posteriori — Knowledge from experience", "Absurdism — No inherent meaning in life", "Aesthetics — Study of beauty and art"],
    B: ["Bad Faith — Self-deception about freedom", "Being — Fundamental existence"],
    C: ["Categorical Imperative — Universal moral rule", "Cogito — “I think therefore I am”"],
    D: ["Deontology — Duty-based ethics", "Determinism — All events are caused", "Dialectic — Truth via opposing ideas"],
    E: ["Empiricism — Knowledge from experience", "Epistemology — Study of knowledge", "Existentialism — Meaning created by individual"],
    F: ["Fallibilism — Beliefs can be wrong", "Free Will — Independent choice"],
    // ... (add more as needed)
    M: ["Metaphysics — Study of reality", "Moral Relativism — Morality varies by culture"],
    U: ["Utilitarianism — Greatest happiness principle"],
    V: ["Virtue Ethics — Character-based morality"]
};

function renderLexicon() {
    const container = document.getElementById('lexicon-container');
    container.innerHTML = Object.keys(lexiconTerms).map(letter => `
        <div class="lexicon-letter">
            <h3>${letter}</h3>
            \( {lexiconTerms[letter].map(term => `<div class="lexicon-term"> \){term}</div>`).join('')}
        </div>
    `).join('');
}

function renderDarshana() {
    document.getElementById('darshana-schools').innerHTML = `
        <li>Nyaya</li><li>Vaisheshika</li><li>Samkhya</li>
        <li>Yoga</li><li>Mimamsa</li><li>Vedanta</li>
    `;
    document.getElementById('darshana-thinkers').innerHTML = `
        <li>Mahavira</li><li>Buddha</li><li>Nagarjuna</li>
        <li>Adi Shankaracharya</li><li>Chanakya</li>
    `;
    document.getElementById('darshana-ideas').innerHTML = `
        <li>Dharma</li><li>Karma</li><li>Moksha</li>
        <li>Atman</li><li>Brahman</li><li>Shunya</li>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    document.getElementById('last-updated').textContent = `Last updated: ${new Date().getFullYear()}`;
});
