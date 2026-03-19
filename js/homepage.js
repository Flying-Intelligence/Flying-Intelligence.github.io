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
            <div class='paper-achievement-card mb-5'>
                <div class='paper-achievement-row'>
                    <div class='paper-achievement-left'>
                        <h5 class='paper-title'><a href='${paper.url}' target='_blank'>${paper.title}</a></h5>
                    </div>
                    <div class='paper-achievement-right'>
                        ${paper.img ? `<div class='paper-image-wrapper'><img src='${paper.img}' alt='${paper.title}' class='paper-architecture-img'></div>` : '<div class="paper-image-placeholder">No Image</div>'}
                        <div class='paper-achievement-info'>
                            <div class='paper-tags'>
                                ${paper.tags.map(t => `<span class='badge' style='background:${tagColors[t] || '#888'};color:#fff;font-size:0.85em;padding:4px 8px;margin-right:6px;margin-bottom:6px;display:inline-block;'>${t}</span>`).join('')}
                            </div>
                            <p class='paper-authors'>${paper.authors}</p>
                        </div>
                    </div>
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
