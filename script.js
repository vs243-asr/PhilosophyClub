
// script.js

// ==================== DATA FOR ALL BRANCHES ====================
const philosophyData = {
    ethics: {
        title: "Ethics",
        definition: "Ethics is the philosophical study of moral principles and values that govern human behavior and judgments about what ought to be done.",
        topQuote: "“The unexamined life is not worth living.” — Socrates",
        philosophers: ["Socrates", "Plato", "Aristotle", "Immanuel Kant", "John Stuart Mill"],
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
            "“Actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness.” — John Stuart Mill",
            "“Act only according to that maxim whereby you can at the same time that it should become a universal law.” — Immanuel Kant",
            "“We are what we repeatedly do. Excellence, then, is not an act but a habit.” — Aristotle"
        ]
    },

    political: {
        title: "Political Philosophy",
        definition: "Political Philosophy is the normative discipline that analyses how we ought to live together and examines the ideas of power.",
        topQuote: "“The price good men pay for indifference to public affairs is to be ruled by evil men.” — Plato",
        philosophers: ["Plato", "Aristotle", "John Locke", "Niccolo Machiavelli", "Karl Marx"],
        ideas: ["The Social Contract", "Liberty", "Rights", "Authority & Legitimacy", "Justice"],
        questions: [
            "What is justice?",
            "Why should political authority be obeyed and how is it considered legitimate?",
            "What is the relationship between the individual and the community?",
            "What is equality?",
            "Who should rule and for what purpose?"
        ],
        rotatingQuotes: [
            "“Man is born free, and everywhere he is in chains.” — Jean-Jacques Rousseau",
            "“Man is by nature a political animal.” — Aristotle",
            "“The end of law is not to abolish or restrain, but to preserve and enlarge freedom.” — John Locke",
            "“The philosophers have only interpreted the world in various ways; the point is to change it.” — Karl Marx"
        ]
    },

    aesthetics: {
        title: "Aesthetics",
        definition: "Aesthetics is the branch of philosophy concerned with beauty, art, taste, and sensory experience.",
        topQuote: "“Nothing is beautiful, only man: on this piece of naive rests all aesthetics, it is the first truth of aesthetics.” — Friedrich Nietzsche",
        philosophers: ["Plato", "Immanuel Kant", "Friedrich Nietzsche", "John Dewey", "Arthur Schopenhauer"],
        ideas: ["Beauty", "Sublime", "Expression Theory", "Art as Representation", "Aesthetic Judgment"],
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

    metaphysics: {
        title: "Metaphysics",
        definition: "Metaphysics is the branch of philosophy concerned with the fundamental nature of reality, existence, and being.",
        topQuote: "“Why are there beings at all, instead of nothing?” — Martin Heidegger",
        philosophers: ["Plato", "Aristotle", "Immanuel Kant", "René Descartes", "Swami Vivekananda"],
        ideas: ["Ontology", "Mind-Body Problem & Consciousness", "Theory of Forms", "Free Will vs Determinism", "Reality vs Appearance"],
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
            "“The true Self (Atman) is identical with ultimate reality (Brahman); realise this and be free.” — Swami Vivekananda"
        ]
    },

    epistemology: {
        title: "Epistemology",
        definition: "Epistemology is the branch of philosophy concerned with the nature, origin, and limits of human knowledge.",
        topQuote: "“The human understanding, when it has once adopted an opinion, draws all things else to support and agree to it.” — Francis Bacon",
        philosophers: ["Plato", "René Descartes", "John Locke", "David Hume", "Immanuel Kant"],
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

    logic: {
        title: "Logic",
        definition: "Logic is the study of the methods and principles used to distinguish correct reasoning from incorrect reasoning.",
        topQuote: "“Logic pervades the world; the limits of the world are also its limits.” — Ludwig Wittgenstein",
        philosophers: ["Aristotle", "Gottlob Frege", "Uddayana", "Bertrand Russell", "Ludwig Wittgenstein"],
        ideas: ["Deductive vs. Inductive", "Fallacies", "Propositional Logic", "Predicate Logic", "Validity and Soundness"],
        questions: [
            "What makes an argument valid?",
            "Can logic be complete?",
            "How do we detect fallacies?",
            "What is the relationship between language and logic?",
            "Are there limits to reason?"
        ],
        rotatingQuotes: [
            "“Logic takes care of itself; all we have to do is to look and see how it does it.” — Ludwig Wittgenstein",
            "“A mind all logic is like a knife all blade. It makes the hand bleed that uses it.” — Rabindranath Tagore",
            "“The logic of the world is prior to all truth and falsehood.” — Ludwig Wittgenstein",
            "“The logic of words should yield to the logic of realities.” — Louis D. Brandeis"
        ]
    }
};

// ==================== NAVIGATION ====================
let currentBranch = null;

function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (page === 'home') {
        document.getElementById('home-page').classList.add('active');
    } else if (page === 'community') {
        document.getElementById('community-page').classList.add('active');
    } else if (page === 'contribute') {
        document.getElementById('contribute-page').classList.add('active');
    }
}

function showBranch(branchKey) {
    currentBranch = branchKey;
    const data = philosophyData[branchKey];
    if (!data) return;

    // Fill content
    document.getElementById('branch-title').textContent = data.title;
    document.getElementById('branch-definition').textContent = data.definition;
    document.getElementById('top-quote').innerHTML = `<em>${data.topQuote}</em>`;

    // Philosophers
    const philGrid = document.getElementById('philosophers-grid');
    philGrid.innerHTML = data.philosophers.map(p => `
        <div class="card">
            <h3>${p}</h3>
        </div>
    `).join('');

    // Ideas
    const ideasGrid = document.getElementById('ideas-grid');
    ideasGrid.innerHTML = data.ideas.map(i => `
        <div class="card">
            <h3>${i}</h3>
        </div>
    `).join('');

    // Questions
    const qGrid = document.getElementById('questions-grid');
    qGrid.innerHTML = data.questions.map(q => `
        <div class="card">
            <p><strong>${q}</strong></p>
        </div>
    `).join('');

    // Show branch page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('branch-page').classList.add('active');

    // Start rotating quotes
    startRotatingQuotes(data.rotatingQuotes);
}

function goBack() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('home-page').classList.add('active');
}

// ==================== ROTATING QUOTES ====================
let quoteInterval = null;

function startRotatingQuotes(quotes) {
    if (quoteInterval) clearInterval(quoteInterval);
    
    let index = 0;
    const quoteEl = document.getElementById('rotating-quote');
    
    const rotate = () => {
        quoteEl.style.opacity = 0;
        setTimeout(() => {
            quoteEl.textContent = quotes[index];
            quoteEl.style.opacity = 1;
            index = (index + 1) % quotes.length;
        }, 600);
    };
    
    rotate(); // Show first immediately
    quoteInterval = setInterval(rotate, 10000); // Every 10 seconds
}

// ==================== FORM SUBMISSION ====================
function handleSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('sub-title').value.trim();
    const text = document.getElementById('sub-text').value.trim();
    const author = document.getElementById('sub-author').value.trim();
    
    if (text.length > 700) {
        alert("Submission exceeds 700 words. Please shorten it.");
        return;
    }
    
    alert(`Thank you, \( {author}!\n\nYour submission " \){title}" has been received and will be reviewed by The Academy moderators.`);
    
    // Reset form
    e.target.reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Show home page by default
    document.getElementById('home-page').classList.add('active');
    
    // Make central node also clickable (optional)
    const central = document.querySelector('.central-node');
    if (central) {
        central.addEventListener('click', () => {
            alert("Welcome to The Academy!\nClick on any branch to explore.");
        });
    }
});
