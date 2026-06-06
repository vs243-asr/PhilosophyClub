// script.js
let submissions = JSON.parse(localStorage.getItem('philosophySubmissions')) || [];

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    if (page === 'home') {
        document.getElementById('home').classList.add('active');
    } else if (page === 'map') {
        document.getElementById('map').classList.add('active');
    } else {
        const element = document.getElementById(page);
        if (element) element.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitContribution() {
    const textarea = document.getElementById('submission-text');
    const text = textarea.value.trim();
    
    if (!text) {
        alert("Please write something before submitting.");
        return;
    }
    
    if (text.length > 600) {
        alert("Submission must be under 600 words.");
        return;
    }
    
    const newSubmission = {
        id: Date.now(),
        text: text,
        date: new Date().toLocaleDateString()
    };
    
    submissions.unshift(newSubmission);
    if (submissions.length > 5) submissions.pop(); // keep latest 5
    
    localStorage.setItem('philosophySubmissions', JSON.stringify(submissions));
    textarea.value = '';
    renderSubmissions();
    
    alert("Thank you! Your reflection has been added to the community wall.");
}

function renderSubmissions() {
    const container = document.getElementById('submissions-display');
    container.innerHTML = `<h3>Recent Contributions</h3>`;
    
    if (submissions.length === 0) {
        container.innerHTML += `<p style="text-align:center; color:#666; font-style:italic;">No contributions yet. Be the first!</p>`;
        return;
    }
    
    submissions.forEach(sub => {
        const div = document.createElement('div');
        div.className = 'submission-item';
        div.innerHTML = `
            <p>${sub.text}</p>
            <small style="color:#888;">Submitted on ${sub.date}</small>
        `;
        container.appendChild(div);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Show home by default
    document.getElementById('home').classList.add('active');
    renderSubmissions();
    
    // Keyboard shortcut hint
    console.log('%cPhilosophy Club prototype ready! Click branches and explore.', 'color:#8B0000; font-size:14px;');
});
