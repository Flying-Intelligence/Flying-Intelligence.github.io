// 方向与论文数据
const directionPapers = {
    "Low-altitude Coordination": [
        {
            title: "UAVs meet LLMs: Overviews and perspectives towards agentic low-altitude mobility",
            url: "https://www.sciencedirect.com/science/article/pii/S1566253525002313",
            img: "files/images/UAVS.png",
            authors: "<a href=\"group.html#yonglin-tian\">Yonglin Tian</a>, Fei Lin, Yiduo Li, Tengchao Zhang, <a href=\"group.html#qiyao-zhang\">Qiyao Zhang</a>, Xuan Fu, Jun Huang, Xingyuan Dai, Yutong Wang, Chunwei Tian, Bai Li, Yisheng Lv, Levente Kovács, Fei-Yue Wang",
            badge: { text: "Low-altitude Coordination", color: "#4BC0C0" }
        }
    ],
    "Low-altitude Perception": [
        {
            title: "CogRail: Benchmarking VLMs in Cognitive Intrusion Perception for Intelligent Railway Transportation Systems",
            url: "https://arxiv.org/abs/2601.09613",
            img: "files/images/CogRail.png",
            authors: "<a href=\"group.html#yonglin-tian\">Yonglin Tian</a>, <a href=\"group.html#qiyao-zhang\">Qiyao Zhang</a>, Wei Xu, Yutong Wang, <a href=\"group.html#yihao-wu\">Yihao Wu</a>, <a href=\"group.html#xinyi-li\">Xinyi Li</a>, Xingyuan Dai, Hui Zhang, Zhiyong Cui, Baoqing Guo, Zujun Yu, Yisheng Lv",
            badge: { text: "Low-altitude Perception", color: "#FF6384" }
        }
    ],
    "Low-altitude Control": [
        {
            title: "AIR-VLA: Vision-Language-Action Systems for Aerial Manipulation",
            url: "https://arxiv.org/abs/2601.21602",
            img: "files/images/AIR-VLA.png",
            authors: "<a href=\"group.html#jianli-sun\">Jianli Sun</a>, Bin Tian, <a href=\"group.html#qiyao-zhang\">Qiyao Zhang</a>, Chengxiang Li, Zihan Song, Zhiyong Cui, Yisheng Lv, <a href=\"group.html#yonglin-tian\">Yonglin Tian</a>",
            badge: { text: "Low-altitude Control", color: "#FFCE56" }
        },
        {
            title: "LogisticsVLN: Vision-Language Navigation For Low-Altitude Terminal Delivery Based on Agentic UAVs",
            url: "https://arxiv.org/abs/2505.03460",
            img: "files/images/LogisticsVLN.png",
            authors: "Xinyuan Zhang, <a href=\"group.html#yonglin-tian\">Yonglin Tian</a>, Fei Lin, Yue Liu, Jing Ma, Kornelia S ´ ara Szatm ´ ary, Fei-Yue Wang",
            badge: { text: "Low-altitude Control", color: "#FFCE56" }
        }
    ],
    "Low-altitude Maneuver": []
};

function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function renderPapers(direction) {
    const papers = directionPapers[direction] || [];
    document.getElementById('direction-title').textContent = direction;
    const list = document.getElementById('direction-papers-list');
    if (papers.length === 0) {
        list.innerHTML = '<div class="text-center text-muted">No papers for this direction yet.</div>';
        return;
    }
    let html = '<div class="row">';
    papers.forEach(paper => {
        html += `<div class="col-md-12 mb-3">
            <div class="card h-100 shadow-sm">
                ${paper.img ? `<img class="card-img-top" src="${paper.img}" alt="${paper.title}" style="height: 350px; object-fit: cover;">` : ''}
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title"><a href="${paper.url}" target="_blank">${paper.title}</a></h5>
                    ${paper.badge ? `<span class="badge" style="background:${paper.badge.color};color:#fff;font-size:1em;margin-bottom:8px;">${paper.badge.text}</span>` : ''}
                    <p class="card-text small text-muted mb-0">${paper.authors}</p>
                </div>
            </div>
        </div>`;
    });
    html += '</div>';
    list.innerHTML = html;
}

window.onload = function () {
    const direction = getQueryParam('direction') || 'Low-altitude Coordination';
    renderPapers(direction);
};
