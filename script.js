// script.js
const branches = {
    ethics: {
        title: "Ethics",
        definition: "Ethics is the philosophical study of moral principles and values that govern human behavior and judgments about what ought to be done.",
        philosophers: ["Socrates", "Plato", "Aristotle", "Immanuel Kant", "John Stuart Mill"],
        topQuote: "“The unexamined life is not worth living.” — Socrates",
        rotatingQuotes: [
            "“Do not impose on others what you do not wish for yourself.” — Confucius",
            "“Actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness.” — John Stuart Mill",
            "“Act only according to that maxim whereby you can at the same time that it should become a universal law.” — Immanuel Kant",
            "“We are what we repeatedly do. Excellence, then, is not an act but a habit.” — Aristotle"
        ],
        ideas: ["Utilitarianism", "Deontology", "Virtue Ethics", "Moral Relativism", "Eudaimonia"],
        questions: [
            "What is the idea of a good life?",
            "Are moral truths absolute?",
            "How do we resolve moral dilemmas?",
            "What are our duties to others?",
            "Is morality culturally relative?"
        ]
    },
    political: {
        title: "Political Philosophy",
        definition: "Political Philosophy is the normative discipline that analyses how we ought to live together and examines the ideas of power.",
        philosophers: ["Plato", "Aristotle", "John Locke", "Niccolo Machiavelli", "Karl Marx"],
        topQuote: "“The price good men pay for indifference to public affairs is to be ruled by evil men.” — Plato",
        rotatingQuotes: [
            "“Man is born free, and everywhere he is in chains.” — Jean-Jacques Rousseau",
            "“Man is by nature a political animal.” — Aristotle",
            "“The end of law is not to abolish or restrain, but to preserve and enlarge freedom.” — John Locke",
            "“The philosophers have only interpreted the world in various ways; the point is to change it.” — Karl Marx"
        ],
        ideas: ["The Social Contract", "Liberty", "Rights", "Authority & Legitimacy", "Justice"],
        questions: [
            "What is justice?",
            "Why should political authority be obeyed and how is it considered legitimate?",
            "What is the relationship between the individual and the community?",
            "What is equality?",
            "Who should rule and for what purpose?"
        ]
    },
    aesthetics: {
        title: "Aesthetics",
        definition: "Aesthetics is the branch of philosophy concerned with beauty, art, taste, and sensory experience.",
        philosophers: ["Plato", "Immanuel Kant", "Friedrich Nietzsche", "John Dewey", "Arthur Schopenhauer"],
        topQuote: "“Nothing is beautiful, only man: on this piece of naivety rests all aesthetics, it is the first truth of aesthetics.” — Friedrich Nietzsche",
        rotatingQuotes: [
            "“Beauty is truth, truth beauty.” — John Keats",
            "“The aim of art is to represent not the outward appearance of things, but their inward significance.” — Aristotle",
            "“Art is the highest task and the proper metaphysical activity of life.” — Friedrich Nietzsche",
            "“The highest education is that which makes our life in harmony with all existence.” — Rabindranath Tagore"
        ],
        ideas: ["Beauty", "Sublime", "Expression Theory", "Art as Representation", "Aesthetic Judgment"],
        questions: [
            "What is Beauty?",
            "Is Art Subjective or Objective?",
            "What is the Purpose of Art?",
            "Can We Define Good Taste?",
            "How Does Art Relate to Truth?"
        ]
    },
    metaphysics: {
        title: "Metaphysics",
        definition: "Metaphysics is the branch of philosophy concerned with the fundamental nature of reality, existence, and being.",
        philosophers: ["Plato", "Aristotle", "Immanuel Kant", "René Descartes", "Swami Vivekananda"],
        topQuote: "“Why are there beings at all, instead of nothing?” — Martin Heidegger",
        rotatingQuotes: [
            "“All men by nature desire to know.” — Aristotle",
            "“I think, therefore I am.” — René Descartes",
            "“Metaphysics is the finding of bad reasons for what we believe upon instinct.” — F.H. Bradley",
            "“The true Self (Atman) is identical with ultimate reality (Brahman); realise this and be free.” — Swami Vivekananda"
        ],
        ideas: ["Ontology", "Mind-Body Problem & Consciousness", "Theory of Forms", "Free Will vs Determinism", "Reality vs Appearance"],
        questions: [
            "What is the fundamental nature of reality?",
            "What is the relationship between mind and body?",
            "Why is there something rather than nothing?",
            "What is the nature of the self and personal identity?",
            "Do humans have free will, or are actions determined?"
        ]
    },
    epistemology: {
        title: "Epistemology",
        definition: "Epistemology is the branch of philosophy concerned with the nature, origin, and limits of human knowledge.",
        philosophers: ["Plato", "René Descartes", "John Locke", "David Hume", "Immanuel Kant"],
        topQuote: "“The human understanding, when it has once adopted an opinion, draws all things else to support and agree to it.” — Francis Bacon",
        rotatingQuotes: [
            "“Knowledge is true opinion accompanied by reason.” — Plato",
            "“No man's knowledge here can go beyond his experience.” — John Locke",
            "“Thoughts without content are empty, intuitions without concepts are blind.” — Immanuel Kant",
            "“The only true wisdom is in knowing you know nothing.” — Socrates"
        ],
        ideas: ["Justified True Belief", "Empiricism", "Rationalism", "Skepticism", "A Priori and A Posteriori"],
        questions: [
            "What is knowledge?",
            "Can we trust our senses?",
            "Is certainty possible?",
            "How do we distinguish truth from belief?",
            "What is the role of reason?"
        ]
    },
    logic: {
        title: "Logic",
        definition: "Logic is the study of the methods and principles used to distinguish correct reasoning from incorrect reasoning.",
        philosophers: ["Aristotle", "Gottlob Frege", "Uddayana", "Bertrand Russell", "Ludwig Wittgenstein"],
        topQuote: "“Logic pervades the world; the limits of the world are also its limits.” — Ludwig Wittgenstein",
        rotatingQuotes: [
            "“Logic takes care of itself; all we have to do is to look and see how it does it.” — Ludwig Wittgenstein",
            "“A mind all logic is like a knife all blade. It makes the hand bleed that uses it.” — Rabindranath Tagore",
            "“The logic of the world is prior to all truth and falsehood.” — Ludwig Wittgenstein",
            "“The logic of words should yield to the logic of realities.” — Louis D. Brandeis"
        ],
        ideas: ["Deductive vs. Inductive", "Fallacies", "Propositional Logic", "Predicate Logic", "Validity and Soundness"],
        questions: [
            "What makes an argument valid?",
            "Can logic be complete?",
            "How do we detect fallacies?",
            "What is the relationship between language and logic?",
            "Are there limits to reason?"
        ]
    }
};

function createBranchHTML(branchKey) {
    const b = branches[branchKey];
    let html = `
        <div class="branch-header">
            <h1 class="branch-title">${b.title}</h1>
            <div class="definition">
                <strong>Definition:</strong> ${b.definition}
            </div>
        </div>

        <div class="section">
            <h2>Key Philosophers</h2>
            <div class="cards-grid">
                ${b.philosophers.map(ph => `
                    <div class="card">
                        <h3>${ph}</h3>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="top-quote">
            ${b.topQuote}
        </div>

        <div class="section">
            <h2>Main Ideas</h2>
            <div class="cards-grid">
                ${b.ideas.map(idea => `
                    <div class="card">
                        <h3>${idea}</h3>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2>Big Questions</h2>
            <div class="cards-grid">
                ${b.questions.map(q => `
                    <div class="card">
                        <h3>${q}</h3>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="quotes-rotating">
            <h2 style="text-align:center; margin-bottom:1.5rem; color:var(--deep-red);">Timeless Reflections</h2>
            <div id="rotating-quotes"></div>
        </div>
    `;
    return html;
}

let currentQuoteIndex = 0;
let quoteInterval;

function startRotatingQuotes(quotes) {
    if (quoteInterval) clearInterval(quoteInterval);
    
    const container = document.getElementById('rotating-quotes');
    container.innerHTML = '';
    
    quotes.forEach((quote, i) => {
        const div = document.createElement('div');
        div.className = `quote-text ${i === 0 ? 'active' : ''}`;
        div.innerHTML = quote;
        container.appendChild(div);
    });

    currentQuoteIndex = 0;

    quoteInterval = setInterval(() => {
        const quoteEls = document.querySelectorAll('.quote-text');
        quoteEls[currentQuoteIndex].classList.remove('active');
        
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        
        quoteEls[currentQuoteIndex].classList.add('active');
    }, 10000);
}

function showBranch(branchKey) {
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('community-page').classList.remove('active');
    const branchPage = document.getElementById('branch-page');
    branchPage.classList.add('active');
    
    document.getElementById('branch-content').innerHTML = createBranchHTML(branchKey);
    
    // Start rotating quotes
    startRotatingQuotes(branches[branchKey].rotatingQuotes);
}

function backToHome() {
    if (quoteInterval) clearInterval(quoteInterval);
    document.getElementById('branch-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
}

function showPage(page) {
    if (quoteInterval) clearInterval(quoteInterval);
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (page === 'home') {
        document.getElementById('home-page').classList.add('active');
    } else if (page === 'community') {
        document.getElementById('community-page').classList.add('active');
    }
}

function submitContribution() {
    const text = document.getElementById('submission-text').value.trim();
    if (text.length < 30) {
        alert("Please write a meaningful contribution (at least 30 characters).");
        return;
    }
    if (text.length > 700) {
        alert("Submission exceeds 700 words limit.");
        return;
    }
    alert("Thank you! Your contribution has been submitted for review.");
    document.getElementById('submission-text').value = '';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Show home by default
    showPage('home');
});
