// Publication Page Specific Scripts

document.addEventListener('DOMContentLoaded', function () {
    if (typeof papers === 'undefined') {
        console.warn('Paper data not loaded.');
        const container = document.querySelector('[data-papers-container]');
        if (container) {
            container.innerHTML = '<div class="text-center py-5"><p class="text-danger">Paper data not loaded.</p></div>';
        }
    } else {
        renderPublicationPapers();
    }
});

function renderPublicationPapers() {
    const container = document.querySelector('[data-papers-container]');
    if (!container) return;

    let html = '';
    // 按时间倒序排列（papers-data.js 中通常是按顺序排的，如果需要倒序可以在这里处理）
    // 这里保持原有顺序显示
    papers.forEach((paper) => {
        const imgPath = paper.img ? (paper.img.startsWith('http') ? paper.img : '../' + paper.img) : '';
        html += `
            <div class="col-md-12 mb-4">
                <div class="card h-100 shadow-sm paper-card">
                    ${imgPath ? `<img class="card-img-top" src="${imgPath}" alt="${paper.title}">` : ''}
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">
                            <a href="${paper.url}" target="_blank">${paper.title}</a>
                        </h5>
                        <p class="card-text mb-0" style="font-style: italic; color: #666; font-size: 0.9em;">
                            ${paper.venue || ''}
                        </p>
                        <p class="card-text mb-1" style="font-style: italic; color: #888; font-size: 0.85em;">
                            ${paper.date || ''}
                        </p>
                        <p class="card-text small text-muted mb-0">${paper.authors}</p>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}