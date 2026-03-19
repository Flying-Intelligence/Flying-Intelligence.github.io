// Homepage Specific Scripts

// Render Recent Research Achievements dynamically
document.addEventListener('DOMContentLoaded', function () {
    // Check if papers data is loaded
    if (typeof papers === 'undefined' || typeof tagColors === 'undefined') {
        console.warn('Paper data not loaded. Papers data:', typeof papers, 'Tag colors:', typeof tagColors);
        document.querySelector('[data-papers-container]') &&
            (document.querySelector('[data-papers-container]').innerHTML = '<div class="text-danger">Paper data not loaded.</div>');
    } else {
        renderPapers();
    }

    // Update year in footer
    updateYear();
});

// Render papers to the page
function renderPapers() {
    const container = document.querySelector('[data-papers-container]');
    if (!container) return;

    let html = '';
    papers.forEach(paper => {
        html += `
            <div class='card h-100 shadow-sm mb-3 paper-card'>
                ${paper.img ? `<img class='card-img-top' src='${paper.img}' alt='${paper.title}' style='height: 275px; object-fit: cover;'>` : ''}
                <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'><a href='${paper.url}' target='_blank'>${paper.title}</a></h5>
                    ${paper.tags.map(t => `<span class='badge' style='background:${tagColors[t] || '#888'};color:#fff;font-size:1em;margin-bottom:8px;margin-right:4px;'>${t}</span>`).join('')}
                    <p class='card-text small text-muted mb-0'>${paper.authors}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Update current year in footer
function updateYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}
