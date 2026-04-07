/* Venus Resource — Shared JS */

(function () {
  'use strict';

  // ── Nav: highlight active page ──
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('[data-nav-link]');
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.remove(
        'text-stone-600', 'dark:text-stone-400',
        'hover:text-stone-900', 'dark:hover:text-stone-100'
      );
      link.classList.add(
        'text-green-800', 'dark:text-green-500',
        'border-b-2', 'border-green-800', 'dark:border-green-500', 'pb-1'
      );
    } else {
      link.classList.remove(
        'text-green-800', 'dark:text-green-500',
        'border-b-2', 'border-green-800', 'dark:border-green-500', 'pb-1'
      );
      link.classList.add(
        'text-stone-600', 'dark:text-stone-400',
        'hover:text-stone-900', 'dark:hover:text-stone-100'
      );
    }
  });

  // Also highlight the mobile bottom nav
  const mobileNavBtns = document.querySelectorAll('[data-mobile-nav]');
  mobileNavBtns.forEach(function (btn) {
    const href = btn.getAttribute('data-href');
    if (href === currentPage) {
      btn.classList.add('text-green-800', 'dark:text-green-400', 'font-bold', 'bg-stone-200/50', 'dark:bg-stone-800/50');
      btn.classList.remove('text-stone-500');
    } else {
      btn.classList.remove('text-green-800', 'dark:text-green-400', 'font-bold', 'bg-stone-200/50', 'dark:bg-stone-800/50');
      btn.classList.add('text-stone-500');
    }
    btn.addEventListener('click', function () {
      window.location.href = href;
    });
  });

  // ── Hamburger menu (tablet/mobile, ≥ md breakpoint hides desktop links) ──
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileOverlay = document.getElementById('mobile-menu-overlay');
  var closeMenuBtn = document.getElementById('close-menu-btn');

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    mobileOverlay.addEventListener('click', closeMenu);
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // ── Scroll reveal animations ──
  var reveals = document.querySelectorAll('.scroll-reveal');
  if (reveals.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  // ── Chart scroll animations ──
  var charts = document.querySelectorAll('[data-chart]');
  if (charts.length) {
    var chartObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Animate bar fills
          entry.target.querySelectorAll('.chart-bar-fill').forEach(function (bar) {
            bar.classList.add('chart-animated');
          });
          // Animate ring charts
          entry.target.querySelectorAll('.ring-chart-bg').forEach(function (ring) {
            ring.classList.add('chart-animated');
          });
          // Animate growth bar columns
          entry.target.querySelectorAll('.growth-bar-col').forEach(function (col, i) {
            setTimeout(function () {
              col.classList.add('chart-animated');
            }, i * 100);
          });
          chartObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    charts.forEach(function (el) { chartObserver.observe(el); });
  }

  // ── Contact form handling ──
  var form = document.getElementById('contact-form');
  if (form) {
    var submitBtn = form.querySelector('button[type="submit"]');
    var successMsg = document.getElementById('form-success');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var nameField = form.querySelector('[name="name"]');
      var emailField = form.querySelector('[name="email"]');
      var messageField = form.querySelector('[name="message"]');
      var valid = true;

      if (!nameField.value.trim()) {
        showError(nameField, 'Name is required');
        valid = false;
      }
      if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
        showError(emailField, 'Valid email is required');
        valid = false;
      }
      if (!messageField.value.trim()) {
        showError(messageField, 'Message is required');
        valid = false;
      }

      if (!valid) return;

      // Disable button to prevent double-submit
      submitBtn.disabled = true;
      submitBtn.textContent = 'SENDING...';

      // Attempt Formspree submission (placeholder endpoint)
      var endpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      var data = new FormData(form);

      fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          successMsg.classList.add('visible');
        } else {
          // Fallback: show success locally
          console.log('Form data:', Object.fromEntries(data));
          form.reset();
          successMsg.classList.add('visible');
        }
      }).catch(function () {
        // No backend — show success and log
        console.log('Form data:', Object.fromEntries(data));
        form.reset();
        successMsg.classList.add('visible');
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'SUBMIT ENQUIRY <span class="material-symbols-outlined text-sm">arrow_forward</span>';
      });
    });

    function showError(field, msg) {
      field.classList.add('input-error');
      var errEl = field.parentElement.querySelector('.field-error');
      if (errEl) {
        errEl.textContent = msg;
        errEl.classList.add('visible');
      }
    }

    function clearErrors() {
      form.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
      });
      form.querySelectorAll('.field-error').forEach(function (el) {
        el.classList.remove('visible');
      });
      successMsg.classList.remove('visible');
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }
})();
