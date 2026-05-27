/* ==========================================================================
   ui.js — UI o'zaro ta'sirlari
   Modal, Dropdown, Tabs, Accordion, Tooltip, Toast, Parol toggle,
   Checkbox-all, Theme toggle, Mobile sidebar.

   Hech qanday CRUD logikasi yo'q — faqat vizual o'zaro ta'sirlar.
   data-* atributlari orqali ulanadi.
   ========================================================================== */

(function () {
  "use strict";

  /* ========================================================================
     1. MODAL
     Ochish: <button data-modal-open="modal-id">
     Yopish: <button data-modal-close> (modal ichida) yoki backdrop bosish
     ESC tugmasi ham yopadi
     ======================================================================== */
  function initModals() {
    document.querySelectorAll("[data-modal-open]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var id = trigger.getAttribute("data-modal-open");
        var modal = document.getElementById(id);
        if (modal) openModal(modal);
      });
    });

    document.querySelectorAll("[data-modal-close]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var modal = trigger.closest(".modal-backdrop");
        if (modal) closeModal(modal);
      });
    });

    document.querySelectorAll(".modal-backdrop").forEach(function (backdrop) {
      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) closeModal(backdrop);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document
          .querySelectorAll(".modal-backdrop.is-open")
          .forEach(closeModal);
      }
    });
  }

  function openModal(modal) {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    if (!document.querySelector(".modal-backdrop.is-open")) {
      document.body.style.overflow = "";
    }
  }

  /* ========================================================================
     2. DROPDOWN
     <div class="dropdown"><button data-dropdown-toggle>...</button>...</div>
     ======================================================================== */
  function initDropdowns() {
    document
      .querySelectorAll("[data-dropdown-toggle]")
      .forEach(function (toggle) {
        toggle.addEventListener("click", function (event) {
          event.stopPropagation();
          var dropdown = toggle.closest(".dropdown");
          if (!dropdown) return;
          var wasOpen = dropdown.classList.contains("is-open");
          closeAllDropdowns();
          if (!wasOpen) dropdown.classList.add("is-open");
        });
      });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".dropdown")) closeAllDropdowns();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeAllDropdowns();
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown.is-open").forEach(function (d) {
      d.classList.remove("is-open");
    });
  }

  /* ========================================================================
     3. TABS
     .tabs > .tabs__list > .tabs__tab[data-tab-target="panel-id"]
     .tabs > .tabs__panels > .tabs__panel[id="panel-id"]
     ======================================================================== */
  function initTabs() {
    document.querySelectorAll(".tabs").forEach(function (tabsRoot) {
      var tabs = tabsRoot.querySelectorAll(".tabs__tab");
      var panels = tabsRoot.querySelectorAll(".tabs__panel");

      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          var targetId = tab.getAttribute("data-tab-target");
          tabs.forEach(function (t) {
            t.classList.remove("is-active");
          });
          panels.forEach(function (p) {
            p.classList.remove("is-active");
          });
          tab.classList.add("is-active");
          var targetPanel = tabsRoot.querySelector("#" + targetId);
          if (targetPanel) targetPanel.classList.add("is-active");
        });
      });
    });
  }

  /* ========================================================================
     4. ACCORDION
     .accordion > .accordion__item > .accordion__trigger + .accordion__content
     ======================================================================== */
  function initAccordions() {
    document
      .querySelectorAll(".accordion__trigger")
      .forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          var item = trigger.closest(".accordion__item");
          if (!item) return;
          var accordion = item.closest(".accordion");
          var allowMultiple =
            accordion && accordion.hasAttribute("data-accordion-multiple");

          if (!allowMultiple && accordion) {
            accordion
              .querySelectorAll(".accordion__item.is-open")
              .forEach(function (i) {
                if (i !== item) i.classList.remove("is-open");
              });
          }
          item.classList.toggle("is-open");
        });
      });
  }

  /* ========================================================================
     5. TOAST
     window.showToast({ type: "success", title: "...", message: "..." })
     ======================================================================== */
  function ensureToastContainer() {
    var container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    return container;
  }

  function showToast(options) {
    var opts = options || {};
    var type = opts.type || "info";
    var title = opts.title || "";
    var message = opts.message || "";
    var duration = opts.duration !== undefined ? opts.duration : 3500;

    var icons = {
      success:
        '<svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      error:
        '<svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      warning:
        '<svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
      info: '<svg class="toast__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    };

    var toast = document.createElement("div");
    toast.className = "toast toast--" + type;
    toast.setAttribute("role", "status");
    toast.innerHTML =
      (icons[type] || icons.info) +
      '<div class="toast__content">' +
      (title
        ? '<span class="toast__title">' + escapeHtml(title) + "</span>"
        : "") +
      (message
        ? '<span class="toast__message">' + escapeHtml(message) + "</span>"
        : "") +
      "</div>" +
      '<button type="button" class="toast__close" aria-label="Yopish">' +
      '<svg class="toast__close-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
      "</button>";

    ensureToastContainer().appendChild(toast);
    var closeBtn = toast.querySelector(".toast__close");
    closeBtn.addEventListener("click", function () {
      removeToast(toast);
    });

    if (duration > 0) {
      setTimeout(function () {
        removeToast(toast);
      }, duration);
    }
  }

  function removeToast(toast) {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "opacity 200ms ease, transform 200ms ease";
    setTimeout(function () {
      toast.remove();
    }, 220);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ========================================================================
     6. PAROL KO'RSATISH/YASHIRISH
     <button data-password-toggle="input-id">
     ======================================================================== */
  function initPasswordToggles() {
    document.querySelectorAll("[data-password-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-password-toggle");
        var input = document.getElementById(id);
        if (!input) return;
        var isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        btn
          .querySelectorAll("[data-icon-show], [data-icon-hide]")
          .forEach(function (icon) {
            icon.hidden = !icon.hidden;
          });
      });
    });
  }

  /* ========================================================================
     7. CHECKBOX BARCHASINI TANLASH
     <input type="checkbox" data-check-all="group-name">
     <input type="checkbox" data-check-item="group-name">
     ======================================================================== */
  function initCheckAll() {
    document.querySelectorAll("[data-check-all]").forEach(function (master) {
      var group = master.getAttribute("data-check-all");
      var items = document.querySelectorAll(
        '[data-check-item="' + group + '"]',
      );

      master.addEventListener("change", function () {
        items.forEach(function (item) {
          item.checked = master.checked;
          syncRowSelection(item);
        });
      });

      items.forEach(function (item) {
        item.addEventListener("change", function () {
          syncRowSelection(item);
          var checkedCount = Array.prototype.filter.call(items, function (i) {
            return i.checked;
          }).length;
          master.checked = checkedCount === items.length;
          master.indeterminate =
            checkedCount > 0 && checkedCount < items.length;
        });
      });
    });
  }

  function syncRowSelection(checkbox) {
    var row = checkbox.closest(".table__row");
    if (row) row.classList.toggle("is-selected", checkbox.checked);
  }

  /* ========================================================================
     8. SIDEBAR TOGGLE (mobile)
     <button data-sidebar-toggle>
     ======================================================================== */
  function initSidebarToggle() {
    document.querySelectorAll("[data-sidebar-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sidebar = document.querySelector(".sidebar");
        var body = document.body;
        if (sidebar) {
          sidebar.classList.toggle("is-open");
          body.classList.toggle("sidebar-open");
        }
      });
    });
  }

  /* ========================================================================
     9. THEME TOGGLE (light/dark)
     <button data-theme-toggle>
     ======================================================================== */
  function initThemeToggle() {
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var html = document.documentElement;
        var current = html.getAttribute("data-theme") || "light";
        html.setAttribute("data-theme", current === "light" ? "dark" : "light");
      });
    });
  }

  /* ========================================================================
     INITIALIZE — DOM tayyor bo'lganda hammasini yoqamiz
     ======================================================================== */
  function init() {
    initModals();
    initDropdowns();
    initTabs();
    initAccordions();
    initPasswordToggles();
    initCheckAll();
    initSidebarToggle();
    initThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Public API
  window.OquvUI = {
    showToast: showToast,
    openModal: function (id) {
      var m = document.getElementById(id);
      if (m) openModal(m);
    },
    closeModal: function (id) {
      var m = document.getElementById(id);
      if (m) closeModal(m);
    },
  };
})();
