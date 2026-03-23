// ===== App Logic =====

(function () {
    'use strict';

    let activeFilter = 'all';
    let searchQuery = '';

    // ===== Rendering =====

    function formatDate(dateStr) {
        if (!dateStr) return '';
        // Handle partial dates like "2026-04"
        if (dateStr.length <= 7) {
            const [y, m] = dateStr.split('-');
            const maanden = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
            return maanden[parseInt(m, 10) - 1] + ' ' + y;
        }
        const d = new Date(dateStr);
        return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    function faseLabel(fase) {
        const labels = {
            commissie: 'Commissiebehandeling',
            plenair: 'Plenair debat',
            stemming: 'Stemming gepland'
        };
        return labels[fase] || fase;
    }

    function createCard(item) {
        const card = document.createElement('div');
        card.className = `card ${item.status}`;
        card.dataset.kamer = item.kamer;

        let statusHtml = '';
        if (item.fase) {
            statusHtml = `<div class="card-status ${item.fase}">● ${faseLabel(item.fase)}</div>`;
        }

        let votesHtml = '';
        if (item.stemmenVoor != null) {
            const total = item.stemmenVoor + item.stemmenTegen;
            const pct = Math.round((item.stemmenVoor / total) * 100);
            votesHtml = `
                <div class="card-votes">
                    <span class="votes-for">Voor: ${item.stemmenVoor}</span>
                    <div class="votes-bar"><div class="votes-bar-fill" style="width:${pct}%"></div></div>
                    <span class="votes-against">Tegen: ${item.stemmenTegen}</span>
                </div>`;
        }

        let resultBadge = '';
        if (item.status === 'aangenomen') {
            resultBadge = `<div class="card-status resultaat-aangenomen">✓ Aangenomen</div>`;
        } else if (item.status === 'verworpen') {
            resultBadge = `<div class="card-status resultaat-verworpen">✗ Verworpen</div>`;
        }

        let verwachtHtml = '';
        if (item.verwacht) {
            verwachtHtml = `<div class="card-status plenair">Verwacht: ${item.verwacht}</div>`;
        }

        const kamerLabel = item.kamer === 'tweede-kamer' ? 'Tweede Kamer' : 'Eerste Kamer';

        card.innerHTML = `
            <div class="card-top">
                <h3 class="card-title">${item.titel}</h3>
                <span class="card-kamer ${item.kamer}">${kamerLabel}</span>
            </div>
            <p class="card-description">${item.beschrijving}</p>
            ${statusHtml}
            ${resultBadge}
            ${votesHtml}
            ${verwachtHtml}
            <div class="card-meta">
                <div class="card-tags">
                    ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <span class="card-date">${item.indiener ? item.indiener + ' · ' : ''}${formatDate(item.datum)}</span>
            </div>
        `;

        return card;
    }

    function render() {
        const sections = ['behandeling', 'aangenomen', 'verworpen', 'verwacht'];
        const counts = { behandeling: 0, aangenomen: 0, verworpen: 0, verwacht: 0 };

        sections.forEach(status => {
            const grid = document.getElementById(`grid-${status}`);
            grid.innerHTML = '';

            const items = wetsvoorstellen.filter(item => {
                if (item.status !== status) return false;
                if (activeFilter !== 'all' && item.kamer !== activeFilter) return false;
                if (searchQuery) {
                    const q = searchQuery.toLowerCase();
                    const haystack = (item.titel + ' ' + item.beschrijving + ' ' + item.tags.join(' ') + ' ' + (item.indiener || '')).toLowerCase();
                    return haystack.includes(q);
                }
                return true;
            });

            counts[status] = items.length;

            if (items.length === 0) {
                grid.innerHTML = '<div class="empty-state">Geen wetsvoorstellen gevonden</div>';
            } else {
                items.forEach(item => grid.appendChild(createCard(item)));
            }

            document.getElementById(`badge-${status}`).textContent = items.length;
        });

        // Header stats
        document.getElementById('stat-behandeling').textContent = counts.behandeling;
        document.getElementById('stat-aangenomen').textContent = counts.aangenomen;
        document.getElementById('stat-verworpen').textContent = counts.verworpen;
    }

    // ===== Event Listeners =====

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            render();
        });
    });

    // Search
    document.getElementById('search').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        render();
    });

    // Initial render
    render();

    // Animate stat numbers on load
    function animateNumbers() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(el => {
            const target = parseInt(el.textContent, 10);
            if (isNaN(target) || target === 0) return;
            let current = 0;
            const step = Math.max(1, Math.floor(target / 15));
            const interval = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                el.textContent = current;
            }, 40);
        });
    }

    setTimeout(animateNumbers, 200);
})();
