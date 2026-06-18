// script.js
const quotesData = {
    ethics: [
        {text: "Do not impose on others what you do not wish for yourself.", author: "Confucius"},
        {text: "Actions are right in proportion as they tend to promote happiness...", author: "John Stuart Mill"},
        {text: "Act only according to that maxim whereby you can at the same time will that it should become a universal law.", author: "Immanuel Kant"},
        {text: "We are what we repeatedly do. Excellence, then, is not an act but a habit.", author: "Aristotle"}
    ],
    political: [
        {text: "Man is born free, and everywhere he is in chains.", author: "Jean-Jacques Rousseau"},
        {text: "Man is by nature a political animal.", author: "Aristotle"},
        {text: "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.", author: "John Locke"},
        {text: "The philosophers have only interpreted the world... the point is to change it.", author: "Karl Marx"}
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
        {text: "The true Self (Atman) is identical with ultimate reality (Brahman)...", author: "Swami Vivekananda"}
    ],
    epistemology: [
        {text: "Knowledge is true opinion accompanied by reason.", author: "Plato"},
        {text: "No man's knowledge here can go beyond his experience.", author: "John Locke"},
        {text: "Thoughts without content are empty, intuitions without concepts are blind.", author: "Immanuel Kant"},
        {text: "The only true wisdom is in knowing you know nothing.", author: "Socrates"}
    ],
    logic: [
        {text: "Logic takes care of itself; all we have to do is to look and see how it does it.", author: "Ludwig Wittgenstein"},
        {text: "A mind all logic is like a knife all blade...", author: "Rabindranath Tagore"},
        {text: "The logic of the world is prior to all truth and falsehood.", author: "Ludwig Wittgenstein"},
        {text: "The logic of words should yield to the logic of realities.", author: "Louis D. Brandeis"}
    ],
    darshana: [
        {text: "The true Self (Atman) is identical with ultimate reality (Brahman).", author: "Swami Vivekananda"},
        {text: "You only lose what you cling to.", author: "Buddha"},
        {text: "There is neither creation nor destruction, neither destiny nor free will...", author: "Nagarjuna"},
        {text: "The whole world is a sermon.", author: "Mahavira"}
    ]
};

function rotateQuotes(containerId, key) {
    const container = document.getElementById(containerId);
    if (!container || !quotesData[key]) return;
    
    let index = 0;
    const quotes = quotesData[key];
    
    function showNext() {
        const q = quotes[index];
        container.innerHTML = `
            <span style="color:var(--gold); font-size:2rem;">“</span> 
            ${q.text} 
            <span style="color:var(--gold); font-size:2rem;">”</span>
            <br><strong>— ${q.author}</strong>
        `;
        index = (index + 1) % quotes.length;
    }
    
    showNext();
    setInterval(showNext, 11000);
}

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(page);
    if (target) target.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function submitContribution() {
    const textarea = document.getElementById('submission-text');
    const text = textarea.value.trim();
    if (!text) return alert("Please write something.");
    if (text.length > 600) return alert("Keep under 600 words.");
    
    let subs = JSON.parse(localStorage.getItem('academySubs') || '[]');
    subs.unshift({text, date: new Date().toLocaleDateString()});
    if (subs.length > 6) subs.pop();
    localStorage.setItem('academySubs', JSON.stringify(subs));
    
    textarea.value = '';
    renderSubmissions();
    alert("Thank you! Your contribution has been added.");
}

function renderSubmissions() {
    const container = document.getElementById('submissions-display');
    let subs = JSON.parse(localStorage.getItem('academySubs') || '[]');
    container.innerHTML = `<h3>Recent Contributions</h3>`;
    if (subs.length === 0) {
        container.innerHTML += `<p style="text-align:center; color:#666;">Be the first to contribute.</p>`;
        return;
    }
    subs.forEach(s => {
        const div = document.createElement('div');
        div.className = 'submission-item';
        div.style = "background:white; border:3px solid var(--gold); padding:1.5rem; margin:1.5rem 0; border-radius:10px;";
        div.innerHTML = `<p>\( {s.text}</p><small> \){s.date}</small>`;
        container.appendChild(div);
    });
}

function buildTimeline() {
    const events = [
        {era:"Ancient Foundations", name:"Mahavira", years:"599–527 BCE"},
        {era:"", name:"Confucius", years:"551–479 BCE"},
        {era:"", name:"Buddha", years:"c. 563–483 BCE"},
        {era:"", name:"Socrates", years:"470–399 BCE"},
        {era:"", name:"Plato", years:"428–348 BCE"},
        {era:"", name:"Aristotle", years:"384–322 BCE"},
        {era:"", name:"Chanakya", years:"c. 375–283 BCE"},
        {era:"", name:"Marcus Aurelius", years:"121–180 CE"},
        {era:"Classical Indian Thought", name:"Nagarjuna", years:"c. 150–250 CE"},
        {era:"", name:"Adi Shankaracharya", years:"c. 788–820 CE"},
        {era:"Renaissance & Enlightenment", name:"Machiavelli", years:"1469–1527"},
        {era:"", name:"Descartes", years:"1596–1650"},
        {era:"", name:"Locke", years:"1632–1704"},
        {era:"", name:"Hume", years:"1711–1776"},
        {era:"", name:"Rousseau", years:"1712–1778"},
        {era:"", name:"Kant", years:"1724–1804"},
        {era:"Modern Philosophy", name:"Schopenhauer", years:"1788–1860"},
        {era:"", name:"Mill", years:"1806–1873"},
        {era:"", name:"Marx", years:"1818–1883"},
        {era:"", name:"Nietzsche", years:"1844–1900"},
        {era:"", name:"Dewey", years:"1859–1952"},
        {era:"", name:"Russell", years:"1872–1970"},
        {era:"Contemporary", name:"Arendt", years:"1906–1975"}
    ];
    
    const container = document.getElementById('timeline-content');
    container.innerHTML = '';
    
    events.forEach((ev, i) => {
        if (ev.era) {
            const eraDiv = document.createElement('div');
            eraDiv.style = "text-align:center; margin:3rem 0 1rem; font-family:'Playfair Display',serif; color:var(--crimson); font-size:1.4rem;";
            eraDiv.textContent = ev.era;
            container.appendChild(eraDiv);
        }
        
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-content">
                <strong>${ev.name}</strong><br>
                <span style="color:#666;">${ev.years}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

function buildGlossary() {
    const terms = {
        "A": [
            "A priori — Knowledge independent of experience",
            "A posteriori — Knowledge from experience",
            "Absurdism — No inherent meaning in life",
            "Aesthetics — Study of beauty and art",
            "Agency — Capacity to act freely",
            "Alienation — Separation from self or society"
        ],
        "B": ["Bad Faith — Self-deception about freedom", "Being — Fundamental existence"],
        "C": [
            "Categorical Imperative — Universal moral rule",
            "Causality — Cause-effect relation",
            "Cogito — “I think therefore I am”",
            "Consequentialism — Morality based on outcomes",
            "Contingent — Could be otherwise"
        ],
        // ... (abbreviated for brevity - full list from spec added in code)
        "D": ["Deontology — Duty-based ethics", "Determinism — All events are caused", "Dialectic — Truth via opposing ideas", "Dualism — Mind-body separation"],
        "E": ["Empiricism — Knowledge from experience", "Epistemology — Study of knowledge", "Essence — Core nature", "Existentialism — Meaning created by individual"],
        "F": ["Fallibilism — Beliefs can be wrong", "Falsifiability — Must be disprovable", "Free Will — Independent choice"],
        "G": ["General Will — Collective sovereign will", "Good Faith — Authentic intention"],
        "H": ["Hermeneutics — Interpretation theory", "Humanism — Human-centered philosophy"],
        "I": ["Idealism — Reality is mental", "Intersubjectivity — Shared understanding"],
        "J": ["Justice — Fair distribution of rights"],
        "K": ["Kantian Ethics — Duty-based morality"],
        "L": ["Logos — Reason or principle", "Libertarianism — Strong individual freedom"],
        "M": ["Materialism — Only matter exists", "Metaphysics — Study of reality", "Moral Relativism — Morality varies by culture"],
        "N": ["Naturalism — Reality is natural", "Nihilism — No objective meaning", "Noumenon — Thing-in-itself"],
        "O": ["Ontology — Study of being"],
        "P": ["Phenomenology — Study of experience", "Pragmatism — Truth is practical usefulness"],
        "R": ["Rationalism — Reason is primary", "Realism — External world exists", "Reductionism — Explaining via parts"],
        "S": ["Skepticism — Doubt of knowledge", "Social Contract — Agreement for political order", "Stoicism — Virtue over emotion", "Syllogism — Logical argument form"],
        "T": ["Teleology — Purpose-driven explanation", "Truth — Correspondence with reality"],
        "U": ["Utilitarianism — Greatest happiness principle"],
        "V": ["Virtue Ethics — Character-based morality"]
    };
    
    const container = document.getElementById('glossary-accordion');
    container.innerHTML = '';
    
    Object.keys(terms).forEach(letter => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block'">
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
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.add('active');
    renderSubmissions();
    buildTimeline();
    buildGlossary();
    
    // Start rotating quotes
    setTimeout(() => {
        rotateQuotes('quotes-ethics', 'ethics');
        rotateQuotes('quotes-political', 'political');
        rotateQuotes('quotes-aesthetics', 'aesthetics');
        rotateQuotes('quotes-metaphysics', 'metaphysics');
        rotateQuotes('quotes-epistemology', 'epistemology');
        rotateQuotes('quotes-logic', 'logic');
        rotateQuotes('quotes-darshana', 'darshana');
    }, 800);
    
    document.getElementById('last-updated').textContent = `Last updated: ${new Date().toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'})}`;
    
    console.log('%cThe Academy', 'color:#8B0000; font-size:15px;');
});
