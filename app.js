// ===== App Logic =====

(function () {
    'use strict';

    let activeFilter = 'all';
    let searchQuery = '';

    // ===== Helpers =====

    function formatDate(dateStr) {
        if (!dateStr) return '—';
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

    // ===== Card Rendering =====

    function createCard(item) {
        const card = document.createElement('div');
        card.className = `card ${item.status}`;
        card.dataset.kamer = item.kamer;
        card.dataset.id = item.id;

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
                    <span class="votes-for">${item.stemmenVoor} voor</span>
                    <div class="votes-bar"><div class="votes-bar-fill" style="width:${pct}%"></div></div>
                    <span class="votes-against">${item.stemmenTegen} tegen</span>
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
                <span class="card-date">${formatDate(item.datum)}</span>
            </div>
            <div class="card-click-hint">Klik voor meer details →</div>
        `;

        card.addEventListener('click', () => openModal(item));
        return card;
    }

    // ===== Modal =====

    function openModal(item) {
        const overlay = document.getElementById('modal-overlay');
        const accent = document.getElementById('modal-accent');
        const body = document.getElementById('modal-body');

        accent.className = `modal-accent ${item.status}`;

        const kamerLabel = item.kamer === 'tweede-kamer' ? 'Tweede Kamer' : 'Eerste Kamer';

        // Build timeline HTML
        let timelineHtml = '';
        if (item.tijdlijn) {
            timelineHtml = `
                <div class="modal-section-title">Tijdlijn</div>
                <div class="modal-timeline">
                    ${item.tijdlijn.map(t => `
                        <div class="timeline-item">
                            <div class="timeline-dot ${t.done ? 'done' : ''} ${t.active ? 'active' : ''}">
                                ${t.done ? '✓' : t.active ? '●' : ''}
                            </div>
                            <div class="timeline-info">
                                <div class="timeline-label">${t.label}</div>
                                <div class="timeline-date">${t.datum ? formatDate(t.datum) : 'Nog niet gepland'}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Build vote section
        let voteHtml = '';
        if (item.stemmenVoor != null) {
            const total = item.stemmenVoor + item.stemmenTegen;
            const pct = Math.round((item.stemmenVoor / total) * 100);
            const resultClass = item.status === 'aangenomen' ? 'aangenomen' : 'verworpen';
            const resultText = item.status === 'aangenomen' ? '✓ Aangenomen' : '✗ Verworpen';

            let partyHtml = '';
            if (item.partijStemmen) {
                partyHtml = `
                    <div class="modal-section-title" style="margin-top: 16px;">Stemgedrag per partij</div>
                    <div class="party-votes">
                        ${item.partijStemmen.voor.map(p => `
                            <div class="party-vote">
                                <span class="party-name">${p}</span>
                                <span class="party-stance voor">Voor</span>
                            </div>
                        `).join('')}
                        ${item.partijStemmen.tegen.map(p => `
                            <div class="party-vote">
                                <span class="party-name">${p}</span>
                                <span class="party-stance tegen">Tegen</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            voteHtml = `
                <div class="modal-section-title">Stemresultaat</div>
                <div class="modal-vote-summary">
                    <div class="modal-vote-result ${resultClass}">${resultText}</div>
                    <div class="modal-vote-bar">
                        <span class="votes-for">${item.stemmenVoor} voor</span>
                        <div class="votes-bar"><div class="votes-bar-fill" style="width:${pct}%"></div></div>
                        <span class="votes-against">${item.stemmenTegen} tegen</span>
                    </div>
                    ${partyHtml}
                </div>
            `;
        }

        // Build verwacht section
        let verwachtInfo = '';
        if (item.verwacht) {
            verwachtInfo = `
                <div class="modal-section-title">Verwachte indiening</div>
                <div class="modal-vote-summary">
                    <p style="color: var(--orange); font-weight: 700; font-size: 1rem; text-align: center;">${item.verwacht}</p>
                </div>
            `;
        }

        // Build fase section for behandeling
        let faseHtml = '';
        if (item.fase) {
            faseHtml = `<div class="card-status ${item.fase}" style="margin-bottom: 20px;">● ${faseLabel(item.fase)}</div>`;
        }

        body.innerHTML = `
            <span class="modal-kamer ${item.kamer}">${kamerLabel}</span>
            <h2 class="modal-title">${item.titel}</h2>
            <div class="modal-indiener">Ingediend door: ${item.indiener}</div>
            ${faseHtml}
            <div class="modal-description">${item.beschrijving}</div>

            <div class="modal-section-title">Thema's</div>
            <div class="modal-tags">
                ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>

            ${timelineHtml}
            ${voteHtml}
            ${verwachtInfo}

            <div class="modal-footer">
                <div class="modal-info-item">📋 Dossier: ${item.dossier || '—'}</div>
                <div class="modal-info-item">📅 ${formatDate(item.datum)}</div>
                <div class="modal-info-item">🏛️ ${kamerLabel}</div>
            </div>
        `;

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.getElementById('modal-overlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // ===== Grid Rendering =====

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
                    const partijStr = item.partijStemmen
                        ? [...item.partijStemmen.voor, ...item.partijStemmen.tegen].join(' ')
                        : '';
                    const haystack = (
                        item.titel + ' ' +
                        item.beschrijving + ' ' +
                        item.tags.join(' ') + ' ' +
                        (item.indiener || '') + ' ' +
                        partijStr
                    ).toLowerCase();
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

        document.getElementById('stat-behandeling').textContent = counts.behandeling;
        document.getElementById('stat-aangenomen').textContent = counts.aangenomen;
        document.getElementById('stat-verworpen').textContent = counts.verworpen;
    }

    // ===== Event Listeners =====

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            render();
        });
    });

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
