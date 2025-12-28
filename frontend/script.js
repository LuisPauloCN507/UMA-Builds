async function loadCharacters() {
    const response = await fetch('http://localhost:3001/characters');
    const characters = await response.json();
    const gallery = document.getElementById('characters-gallery');

    characters.forEach(uma => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <h2>${uma.name}</h2>
                <span class="tier-badge">TIER ${uma.tier}</span>
            </div>
            <div class="card-body">
                <div class="info-row">
                    <i class="fa-solid fa-chess-knight"></i>
                    Estratégia: <strong>${uma.strategy}</strong>
                </div>
                <div class="info-row">
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                    Unique: <span class="unique-skill">${uma.unique_skill}</span>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item stat-spd">
                        <i class="fa-solid fa-bolt"></i>
                        <strong>${uma.speed}</strong>
                        <small>SPD</small>
                    </div>
                    <div class="stat-item stat-sta">
                        <i class="fa-solid fa-heart-pulse"></i>
                        <strong>${uma.stamina}</strong>
                        <small>STA</small>
                    </div>
                    <div class="stat-item stat-pow">
                        <i class="fa-solid fa-dumbbell"></i>
                        <strong>${uma.power}</strong>
                        <small>POW</small>
                    </div>
                </div>
            </div>
        `;
        gallery.appendChild(card);
    });
}
loadCharacters();