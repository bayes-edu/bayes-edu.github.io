/* Renderizado del índice a partir de los datos de programs.js */
(function () {
  'use strict';

  var AREAS = window.AREAS || {};
  var STAGES = window.STAGES || {};
  var PROGRAMS = window.PROGRAMS || [];

  var state = { area: 'all', stage: 'all', query: '' };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function areaOf(id) { return AREAS[id] || { label: id, icon: '•', color: 'var(--primary)' }; }

  function links(p) {
    var html = '<a class="btn btn-primary" href="' + esc(p.url) + '" target="_blank" rel="noopener">Abrir ↗</a>';
    return '<div class="links">' + html + '</div>';
  }

  /* ---------- Metodología: llamada a la acción destacada ---------- */
  function renderFeatured() {
    var el = document.getElementById('featured');
    var p = PROGRAMS.filter(function (x) { return x.featured; })[0];
    if (!p) { el.innerHTML = ''; return; }

    el.innerHTML =
      '<div class="cta">' +
        '<div class="cta-body">' +
          '<span class="cta-eyebrow">📊 ¿Quieres crear tus propios recursos?</span>' +
          '<h2>' + esc(p.title) + '</h2>' +
          '<p>' + esc(p.description) + '</p>' +
        '</div>' +
        '<div class="cta-actions">' +
          '<a class="btn btn-primary btn-lg" href="' + esc(p.url) + '" target="_blank" rel="noopener">Ver la metodología ↗</a>' +
        '</div>' +
      '</div>';
  }

  /* ---------- Filtros por chips (genérico para tema y nivel) ---------- */
  // dimension: 'area' usa p.area (una clave); 'stage' usa p.stages (varias).
  function renderChipRow(elId, taxonomy, dimension) {
    var apps = PROGRAMS.filter(function (p) { return !p.featured; });
    var counts = {};
    apps.forEach(function (p) {
      if (dimension === 'stage') {
        (p.stages || []).forEach(function (k) { counts[k] = (counts[k] || 0) + 1; });
      } else {
        counts[p.area] = (counts[p.area] || 0) + 1;
      }
    });

    var chips = [{ key: 'all', label: 'Todos', count: apps.length }];
    Object.keys(taxonomy).forEach(function (k) {
      if (counts[k]) {
        chips.push({ key: k, label: taxonomy[k].label, icon: taxonomy[k].icon, count: counts[k] });
      }
    });

    var el = document.getElementById(elId);
    el.innerHTML = chips.map(function (c) {
      var active = state[dimension] === c.key ? ' active' : '';
      return '<button class="chip' + active + '" data-key="' + c.key + '">' +
        (c.icon ? c.icon + ' ' : '') + esc(c.label) +
        ' <span class="count">' + c.count + '</span></button>';
    }).join('');

    Array.prototype.forEach.call(el.querySelectorAll('.chip'), function (btn) {
      btn.addEventListener('click', function () {
        state[dimension] = btn.getAttribute('data-key');
        renderChips();
        renderGrid();
      });
    });
  }

  function renderChips() {
    renderChipRow('chips-area', AREAS, 'area');
    renderChipRow('chips-stage', STAGES, 'stage');
  }

  function matches(p) {
    if (state.area !== 'all' && p.area !== state.area) return false;
    if (state.stage !== 'all' && (p.stages || []).indexOf(state.stage) === -1) return false;
    if (state.query) {
      var hay = (p.title + ' ' + p.subtitle + ' ' + p.description + ' ' + p.model + ' ' + p.level).toLowerCase();
      if (hay.indexOf(state.query) === -1) return false;
    }
    return true;
  }

  function renderGrid() {
    var el = document.getElementById('grid');
    var apps = PROGRAMS.filter(function (p) { return !p.featured && matches(p); });

    if (!apps.length) {
      el.innerHTML = '<p class="empty">No hay recursos que coincidan con los filtros seleccionados.</p>';
      return;
    }

    el.innerHTML = apps.map(function (p) {
      var a = areaOf(p.area);
      var meta = [];
      if (p.level) meta.push('<span class="meta-badge">' + esc(p.level) + '</span>');
      if (p.model) meta.push('<span class="meta-badge">' + esc(p.model) + '</span>');
      return '<article class="card" style="--accent:' + a.color + '">' +
        '<div class="tag-row">' +
          '<span class="area-badge" style="--accent:' + a.color + '">' + a.icon + ' ' + esc(a.label) + '</span>' +
          meta.join('') +
        '</div>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<div class="sub">' + esc(p.subtitle) + '</div>' +
        '<p class="desc">' + esc(p.description) + '</p>' +
        links(p) +
      '</article>';
    }).join('');
  }

  /* Tema claro / oscuro */
  function setupTheme() {
    var btn = document.getElementById('themeToggle');
    function paint() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = dark ? '☀️' : '🌙';
    }
    btn.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (dark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      paint();
    });
    paint();
  }

  function setupSearch() {
    document.getElementById('search').addEventListener('input', function (e) {
      state.query = e.target.value.trim().toLowerCase();
      renderGrid();
    });
  }

  renderFeatured();
  renderChips();
  renderGrid();
  setupTheme();
  setupSearch();
})();
