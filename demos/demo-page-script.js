/* SQORA PRO — universal demo single-page script
   Requires: window.PAGE_ID set before this script loads
   Requires: demos-data.js (window.DEMOS) loaded before this script */

(function () {
  const UI = {
    en: {
      forWhom:   "For whom",
      features:  "Features",
      budget:    "Budget",
      timeline:  "Timeline",
      stack:     "Stack",
      openLive:  "Open Live Demo →",
      orderSimilar: "Order similar →",
      share:     "Share:",
      copyLink:  "📋 Copy link",
      copied:    "✓ Copied",
      openFull:  "Open fullscreen ↗",
      related:   "Related demos",
      soon:      "Coming Soon",
      launching: "Launching soon",
      from:      "from",
      live:      "● Live",
    },
    ru: {
      forWhom:   "Кому подойдёт",
      features:  "Что внутри",
      budget:    "Бюджет",
      timeline:  "Срок",
      stack:     "Стек",
      openLive:  "Открыть Live Demo →",
      orderSimilar: "Заказать похожий →",
      share:     "Поделиться:",
      copyLink:  "📋 Скопировать ссылку",
      copied:    "✓ Скопировано",
      openFull:  "Открыть на полный экран ↗",
      related:   "Похожие демо",
      soon:      "Скоро",
      launching: "Скоро запустим",
      from:      "от",
      live:      "● Live",
    }
  };

  function getLang() {
    return (localStorage.getItem('sqora_lang') || document.documentElement.lang || 'ru') === 'en' ? 'en' : 'ru';
  }

  function render() {
    const lang = getLang();
    const T = UI[lang];
    const demo = window.DEMOS && window.DEMOS.find(d => d.id === window.PAGE_ID);
    if (!demo) { window.location.href = '../demos.html'; return; }

    // Title & breadcrumb
    document.title = demo.name[lang] + ' — SQORA PRO Live Demo';
    const crumb = document.getElementById('demo-name-crumb');
    if (crumb) crumb.textContent = demo.name[lang];

    // Headline & description
    const headlineEl = document.getElementById('demo-headline');
    if (headlineEl) headlineEl.textContent = demo.headline[lang];
    const descEl = document.getElementById('demo-desc');
    if (descEl) descEl.textContent = demo.description[lang];

    // Section titles
    const forWhomTitle = document.getElementById('section-for-whom-title');
    if (forWhomTitle) forWhomTitle.textContent = T.forWhom;
    const featTitle = document.getElementById('section-features-title');
    if (featTitle) featTitle.textContent = T.features;

    // Meta labels
    const budgetLabel = document.getElementById('meta-label-budget');
    if (budgetLabel) budgetLabel.textContent = T.budget;
    const timelineLabel = document.getElementById('meta-label-timeline');
    if (timelineLabel) timelineLabel.textContent = T.timeline;
    const stackLabel = document.getElementById('meta-label-stack');
    if (stackLabel) stackLabel.textContent = T.stack;

    // Meta values
    const budgetVal = document.getElementById('demo-budget');
    if (budgetVal) budgetVal.textContent = demo.budget;
    const timelineVal = document.getElementById('demo-timeline');
    if (timelineVal) timelineVal.textContent = demo.timeline;

    // Stack tags (render once)
    const stackEl = document.getElementById('demo-stack');
    if (stackEl && !stackEl.dataset.rendered) {
      demo.stack.forEach(s => {
        const span = document.createElement('span');
        span.textContent = s;
        stackEl.appendChild(span);
      });
      stackEl.dataset.rendered = '1';
    }

    // Tags (status + industry)
    const tagsEl = document.getElementById('demo-tags');
    if (tagsEl) {
      tagsEl.innerHTML = `
        <span class="demo-tag demo-tag-accent">${demo.industry_label[lang]}</span>
        <span class="demo-tag ${demo.status === 'live' ? 'badge-live' : 'badge-soon'}">
          ${demo.status === 'live' ? T.live : T.soon}
        </span>`;
    }

    // For whom list
    const forWhomEl = document.getElementById('for-whom-list');
    if (forWhomEl) {
      forWhomEl.innerHTML = '';
      demo.forWhom[lang].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        forWhomEl.appendChild(li);
      });
    }

    // Features list
    const featEl = document.getElementById('features-list');
    if (featEl) {
      featEl.innerHTML = '';
      demo.features[lang].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        featEl.appendChild(li);
      });
    }

    // Live button
    const liveBtnWrap = document.getElementById('live-btn-wrap');
    if (liveBtnWrap && !liveBtnWrap.dataset.rendered) {
      if (demo.status === 'live' && demo.liveUrl) {
        liveBtnWrap.innerHTML = `<a href="${demo.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live">${T.openLive}</a>`;
        const fullLink = document.getElementById('open-full-link');
        if (fullLink) { fullLink.href = demo.liveUrl; fullLink.rel = 'noopener noreferrer'; }
        const liveBtn = liveBtnWrap.querySelector('.btn-live');
        if (liveBtn) liveBtn.addEventListener('click', openWebsite);
        if (fullLink) fullLink.addEventListener('click', openWebsite);
      } else {
        liveBtnWrap.innerHTML = `<div class="btn-disabled-demo">${T.soon}</div>`;
        const fullLink = document.getElementById('open-full-link');
        if (fullLink) fullLink.style.display = 'none';
      }
      liveBtnWrap.dataset.rendered = '1';
    }
    // Update live btn text on lang switch
    const liveBtnA = liveBtnWrap && liveBtnWrap.querySelector('.btn-live');
    if (liveBtnA) liveBtnA.textContent = T.openLive;

    // Order btn
    const orderBtn = document.getElementById('btn-order');
    if (orderBtn) orderBtn.textContent = T.orderSimilar;

    // Share
    const shareLabel = document.getElementById('share-label');
    if (shareLabel) shareLabel.textContent = T.share;
    const copyBtn = document.querySelector('.copy-link-btn');
    if (copyBtn && !copyBtn.dataset.origSet) {
      copyBtn.dataset.orig_ru = UI.ru.copyLink;
      copyBtn.dataset.orig_en = UI.en.copyLink;
      copyBtn.dataset.origSet = '1';
    }
    if (copyBtn && !copyBtn.dataset.copying) {
      copyBtn.textContent = lang === 'en' ? UI.en.copyLink : UI.ru.copyLink;
    }

    // Open full link label
    const openFullEl = document.getElementById('open-full-link');
    if (openFullEl && demo.status === 'live') openFullEl.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = T.openFull; });

    // Related title
    const relatedTitle = document.getElementById('related-title');
    if (relatedTitle) relatedTitle.textContent = T.related;

    // Preview frame (render once)
    const previewEl = document.getElementById('preview-frame');
    if (previewEl && !previewEl.dataset.rendered) {
      if (demo.status === 'live' && demo.liveUrl) {
        previewEl.innerHTML = `<iframe src="${demo.liveUrl}" class="demo-iframe" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>`;
      } else {
        previewEl.innerHTML = `
          <div class="demo-soon-placeholder">
            <div class="demo-soon-emoji">${demo.emoji}</div>
            <div class="demo-soon-title">Demo in Production</div>
            <div class="demo-soon-sub">${T.launching}</div>
          </div>`;
      }
      previewEl.dataset.rendered = '1';
    }

    // Related cards
    const relatedEl = document.getElementById('related-grid');
    if (relatedEl) {
      relatedEl.innerHTML = '';
      const related = window.DEMOS
        .filter(d => d.id !== window.PAGE_ID && (d.industry === demo.industry || d.type === demo.type))
        .slice(0, 3);
      related.forEach(r => {
        const a = document.createElement('a');
        a.href = r.id + '.html';
        a.className = 'demo-card';
        a.style.cssText = 'text-decoration:none;display:block;';
        const thumbHtml = r.thumb
          ? `<img src="../${r.thumb}" alt="${r.name[lang]}" style="width:100%;height:160px;object-fit:cover;border-radius:16px 16px 0 0;display:block;">`
          : `<div style="height:160px;background:linear-gradient(135deg,#EEF5FF,#E0EEFF);display:flex;align-items:center;justify-content:center;font-size:48px;border-radius:16px 16px 0 0;position:relative;">
               ${r.emoji}
               <span style="position:absolute;top:10px;left:10px;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600;background:${r.status==='live'?'rgba(46,204,113,0.15)':'rgba(0,120,255,0.1)'};color:${r.status==='live'?'#1a7a4a':'#0078FF'}">
                 ${r.status==='live'?T.live:T.soon}
               </span>
             </div>`;
        a.innerHTML = thumbHtml + `
          <div style="padding:16px;border:1px solid rgba(10,22,40,0.08);border-top:none;border-radius:0 0 16px 16px;">
            <div style="font-weight:700;font-size:16px;margin-bottom:4px">${r.name[lang]}</div>
            <div style="font-size:13px;color:#5A6A82;margin-bottom:8px">${r.industry_label[lang]}</div>
            <div style="font-size:13px;color:#0078FF;font-weight:600">${T.from} ${r.budget} →</div>
          </div>`;
        relatedEl.appendChild(a);
      });
    }
  }

  function openWebsite(event) {
    const url = event.currentTarget.getAttribute('href');
    if (!url || url === '#') return;
    event.preventDefault();
    const opened = window.open(url, '_blank');
    if (opened) opened.opener = null;
    else window.location.href = url;
  }

  window.copyDemoLink = function () {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.querySelector('.copy-link-btn');
      if (!btn) return;
      const lang = getLang();
      btn.dataset.copying = '1';
      btn.textContent = UI[lang].copied;
      setTimeout(() => {
        delete btn.dataset.copying;
        btn.textContent = UI[lang].copyLink;
      }, 2000);
    });
  };

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

  // Hook into language switcher
  const hookLang = () => {
    const buttons = document.querySelectorAll('.language-toggle button[data-lang]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => setTimeout(render, 30));
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hookLang);
  } else {
    hookLang();
  }
})();
