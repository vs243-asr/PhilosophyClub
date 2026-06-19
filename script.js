* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'EB Garamond', serif;
    background: #f9f4e8;
    color: #2c1f14;
    line-height: 1.7;
    min-height: 100vh;
}

.navbar {
    background: #8b4513;
    color: #f4e8c1;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 4px solid #d4af37;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: 700;
    color: #f4e8c1;
    text-decoration: none;
}

.nav-links a {
    color: #f4e8c1;
    margin-left: 1.8rem;
    text-decoration: none;
    font-weight: 500;
}

.page { display: none; padding: 2rem 1rem; min-height: calc(100vh - 70px); }
.page.active { display: block; }

.hero { text-align: center; padding: 3rem 1rem; }
.philosophy-center {
    font-family: 'Playfair Display', serif;
    font-size: 3.8rem;
    color: #8b4513;
    margin-bottom: 2rem;
}

.atlas-grid {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
}

.central-node { cursor: pointer; }
.node-circle {
    width: 130px;
    height: 130px;
    background: #8b4513;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.2rem;
    margin: 0 auto 10px;
    border: 8px solid #d4af37;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    transition: transform 0.3s;
}

.branch-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 12px;
    cursor: pointer;
}

.branch-item .node-circle {
    width: 100px;
    height: 100px;
    font-size: 2.4rem;
    background: #a0522d;
}

.branch-item:hover .node-circle { transform: scale(1.15); }

.top-quote {
    background: #fdf6e3;
    border-left: 8px solid #8b4513;
    padding: 2rem;
    font-size: 1.45rem;
    font-style: italic;
    text-align: center;
    margin: 2.5rem auto;
    max-width: 900px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1100px;
    margin: 2rem auto;
}

.card {
    background: #fffef5;
    border: 2px solid #d4af37;
    border-radius: 10px;
    padding: 1.6rem;
    box-shadow: 0 5px 15px rgba(139,69,19,0.1);
    transition: all 0.3s;
}

.card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(139,69,19,0.2);
}

.rotating-quote {
    min-height: 140px;
    padding: 1.8rem;
    background: rgba(212,175,55,0.12);
    border: 2px dashed #d4af37;
    border-radius: 10px;
    font-style: italic;
    font-size: 1.35rem;
}

.gold-btn {
    background: #d4af37;
    color: #2c1f14;
    border: none;
    padding: 12px 28px;
    font-size: 1.15rem;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
}

.back-btn {
    background: #8b4513;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 1.5rem;
}

footer {
    text-align: center;
    padding: 2rem;
    background: #8b4513;
    color: #f4e8c1;
    margin-top: 3rem;
}

/* Responsive */
@media (max-width: 768px) {
    .philosophy-center { font-size: 2.8rem; }
    .node-circle { width: 90px; height: 90px; font-size: 2rem; }
    .cards-grid { grid-template-columns: 1fr; }
}
