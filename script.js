// script.js
const quotesData = {
    ethics: [
        {text: "Do not impose on others what you do not wish for yourself.", author: "Confucius"},
        {text: "Actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness.", author: "John Stuart Mill"},
        {text: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.", author: "Immanuel Kant"},
        {text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.", author: "Aristotle"}
    ],
    political: [
        {text: "Man is born free, and everywhere he is in chains.", author: "Jean-Jacques Rousseau"},
        {text: "Man is by nature a political animal.", author: "Aristotle"},
        {text: "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.", author: "John Locke"},
        {text: "The philosophers have only interpreted the world in various ways; the point is to change it.", author: "Karl Marx"}
    ],
    aesthetics: [
        {text: "Beauty is truth, truth beauty.", author: "John Keats"},
        {text: "The aim of art is to represent not the outward appearance of things, but their inward significance.", author: "Aristotle"},
        {text: "Art is the highest task and the proper metaphysical activity of life.", author: "Friedrich Nietzsche"},
        {text: "The highest education is that which makes our life in harmony with all existence.", author: "Rabindranath Tagore"}
    ],
    metaphysics: [
        {text: "All men by nature desire to know.", author: "Aristotle"},
        {text: "I think, therefore I am.", author: "René Descartes"},
        {text: "Metaphysics is the finding of bad reasons for what we believe upon instinct.", author: "F.H. Bradley"},
        {text: "The true Self (Atman) is identical with ultimate reality (Brahman); realise this and be free.", author: "Swami Vivekananda"}
    ],
    epistemology: [
        {text: "Knowledge is true opinion accompanied by reason.", author: "Plato"},
        {text: "No man's knowledge here can go beyond his experience.", author: "John Locke"},
        {text: "Thoughts without content are empty, intuitions without concepts are blind.", author: "Immanuel Kant"},
        {text: "The only true wisdom is in knowing you know nothing.", author: "Socrates"}
    ],
    logic: [
        {text: "Logic takes care of itself; all we have to do is to look and see how it does it.", author: "Ludwig Wittgenstein"},
        {text: "A mind all logic is like a knife all blade. It makes the hand bleed that uses it.", author: "Rabindranath Tagore"},
        {text: "The logic of the world is prior to all truth and falsehood.", author: "Ludwig Wittgenstein"},
        {text: "The logic of words should yield to the logic of realities.", author: "Louis D. Brandeis"}
    ],
    darshana: [
        {text: "The true Self (Atman) is identical with ultimate reality (Brahman).", author: "Swami Vivekananda"},
        {text: "You only lose what you cling to.", author: "Buddha"},
        {text: "There is neither creation nor destruction, neither destiny nor free will.", author: "Nagarjuna"},
        {text: "The whole world is a sermon.", author: "Mahavira"}
    ]
};

function rotateQuotes(containerId, key) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const quotes = quotesData[key] || [];
    if (quotes.length === 0) return;
    
    let index = 0;
    
    function showQuote() {
        const q = quotes[index];
        container.innerHTML = `
            <span style="color: var(--gold); font-size: 2.2rem;">“</span>
            ${q.text}
            <span style="color: var(--gold); font-size: 2.2rem;">”</span>
            <br><strong>— ${q.author}</strong>
        `;
        index = (index + 1) % quotes.length;
    }
    
    showQuote();
    setInterval(showQuote, 10500);
}

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    const target = document.getElementById(page);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function submitContribution() {
    const textarea = document.getElementById('submission-text');
    const text = textarea.value.trim();
    
    if (!text) {
        alert("Please write something before submitting.");
        return;
    }
    if (text.length > 600) {
        alert("Your submission must be under 600 words.");
        return;
    }
    
    let submissions = JSON.parse(localStorage.getItem('academySubmissions') || '[]');
    submissions.unshift({
        text: text,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    });
    
    if (submissions.length > 6) submissions.pop();
    
    localStorage.setItem('academySubmissions', JSON.stringify(submissions));
    textarea.value = '';
    renderSubmissions();
    alert("Thank you! Your contribution has been published.");
}

function renderSubmissions() {
    const container = document.getElementById('submissions-display');
    if (!container) return;
    
    let submissions = JSON.parse(localStorage.getItem('academySubmissions') || '[]');
    container.innerHTML = '<h3>Recent Contributions</h3>';
    
    if (submissions.length === 0) {
        container.innerHTML += '<p style="text-align:center; color:#666; font-style:italic;">No contributions yet. Be the first to share your thoughts!</p>';
        return;
    }
    
    submissions.forEach(sub => {
        const div = document.createElement('div');
        div.className = 'submission-item';
        div.innerHTML = `
            <p>${sub.text}</p>
            <small style="color:#777;">${sub.date}</small>
        `;
        container.appendChild(div);
    });
}

function buildTimeline() {
    const container = document.getElementById('timeline-content');
    if (!container) return;
    
    const events = [
        {era: "Ancient Foundations", name: "Mahavira", years: "599–527 BCE"},
        {era: "", name: "Confucius", years: "551–479 BCE"},
        {era: "", name: "Buddha", years: "c. 563–483 BCE"},
        {era: "", name: "Socrates", years: "470–399 BCE"},
        {era: "", name: "Plato", years: "428–348 BCE"},
        {era: "", name: "Aristotle", years: "384–322 BCE"},
        {era: "", name: "Chanakya", years: "c. 375–283 BCE"},
        {era: "Classical Indian Thought", name: "Nagarjuna", years: "c. 150–250 CE"},
        {era: "", name: "Adi Shankaracharya", years: "c. 788–820 CE"},
        {era: "Renaissance & Enlightenment", name: "Machiavelli", years: "1469–1527"},
        {era: "", name: "Descartes", years: "1596–1650"},
        {era: "", name: "Locke", years: "1632–1704"},
        {era: "", name: "Kant", years: "1724–1804"},
        {era: "Modern Philosophy", name: "Nietzsche", years: "1844–1900"},
        {era: "", name: "Russell", years: "1872–1970"}
    ];
    
    container.innerHTML = '';
    let currentEra = '';
    
    events.forEach(event => {
        if (event.era && event.era !== currentEra) {
            const eraDiv = document.createElement('div');
            eraDiv.style.cssText = 'text-align:center; margin:2.5rem 0 1rem; color:var(--crimson); font-size:1.5rem; font-family:"Playfair Display",serif;';
            eraDiv.textContent = event.era;
            container.appendChild(eraDiv);
            currentEra = event.era;
        }
        
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-content">
                <strong>${event.name}</strong><br>
                <span style="color:#555;">${event.years}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function buildGlossary() {
    const container = document.getElementById('glossary-accordion');
    if (!container) return;
    
    const terms = {
        "A": [
            "A priori — Knowledge independent of experience",
            "A posteriori — Knowledge from experience",
            "Absurdism — No inherent meaning in life",
            "Aesthetics — Study of beauty and art"
        ],
        "C": [
            "Categorical Imperative — Universal moral rule",
            "Cogito — I think therefore I am"
        ],
        "D": [
            "Deontology — Duty-based ethics",
            "Determinism — All events are caused"
        ],
        "E": [
            "Empiricism — Knowledge from experience",
            "Epistemology — Study of knowledge",
            "Existentialism — Meaning created by individual"
        ],
        "M": [
            "Metaphysics — Study of reality",
            "Moral Relativism — Morality varies by culture"
        ],
        "O": ["Ontology — Study of being"],
        "S": [
            "Skepticism — Doubt of knowledge",
            "Social Contract — Agreement for political order"
        ],
        "U": ["Utilitarianism — Greatest happiness principle"],
        "V": ["Virtue Ethics — Character-based morality"]
    };
    
    container.innerHTML = '';
    
    Object.keys(terms).forEach(letter => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header" onclick="this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'block') ? 'none' : 'block'">
                ${letter}
            </div>
            <div class="accordion-body">
                <ul>\( {terms[letter].map(t => `<li> \){t}</li>`).join('')}</ul>
            </div>
        `;
        container.appendChild(item);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Show home page
    document.getElementById('home').classList.add('active');
    
    // Render submissions
    renderSubmissions();
    
    // Build timeline and glossary
    buildTimeline();
    buildGlossary();
    
    // Start rotating quotes with small delay
    setTimeout(() => {
        rotateQuotes('quotes-ethics', 'ethics');
        rotateQuotes('quotes-political', 'political');
        rotateQuotes('quotes-aesthetics', 'aesthetics');
        rotateQuotes('quotes-metaphysics', 'metaphysics');
        rotateQuotes('quotes-epistemology', 'epistemology');
        rotateQuotes('quotes-logic', 'logic');
        rotateQuotes('quotes-darshana', 'darshana');
    }, 600);
    
    // Footer date
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        lastUpdated.textContent = `Last updated: ${new Date().toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'})}`;
    }
    
    console.log('%cThe Academy website loaded successfully. All features active.', 'color:#8B0000; font-size:14px;');
});
