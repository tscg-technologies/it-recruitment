/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Interactive Form Validation & Demo Data Handling
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Client-Side Resume File Selector Simulator
  const fileInputs = document.querySelectorAll('input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const parentZone = input.closest('.file-upload-zone') || input.parentElement;
      let badge = parentZone.querySelector('.selected-filename-badge');

      if (!file) {
        if (badge) badge.remove();
        return;
      }

      // Validate Extension (PDF, DOC, DOCX)
      const allowedExts = ['pdf', 'doc', 'docx'];
      const fileExt = file.name.split('.').pop().toLowerCase();
      if (!allowedExts.includes(fileExt)) {
        alert('Please select a valid document format (.pdf, .doc, or .docx).');
        input.value = '';
        if (badge) badge.remove();
        return;
      }

      // Validate Size (Max 5MB)
      const maxBytes = 5 * 1024 * 1024;
      if (file.size > maxBytes) {
        alert('File size exceeds 5MB limit. Please select a smaller document.');
        input.value = '';
        if (badge) badge.remove();
        return;
      }

      // Display selected file info
      const sizeStr = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
      if (!badge) {
        badge = document.createElement('div');
        badge.className = 'selected-filename-badge';
        parentZone.appendChild(badge);
      }
      badge.innerHTML = `
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        <strong>Selected:</strong> ${file.name} (${sizeStr}) — Demo Local Check Only
      `;
    });
  });

  // 2. Demo Confirmation Modal Helper
  const showDemoConfirmationModal = (title, message) => {
    let confirmModal = document.getElementById('demo-confirm-dialog');
    if (!confirmModal) {
      confirmModal = document.createElement('div');
      confirmModal.id = 'demo-confirm-dialog';
      confirmModal.className = 'modal-overlay';
      confirmModal.innerHTML = `
        <div class="modal-window" style="max-width: 520px; text-align: center;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(74, 198, 165, 0.15); color: var(--color-mint); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 id="demo-confirm-title" style="margin-bottom: 0.75rem; font-size: 1.4rem;"></h3>
          <p id="demo-confirm-msg" style="margin-bottom: 2rem; font-size: 0.95rem; line-height: 1.6;"></p>
          <button id="btn-demo-confirm-close" class="btn btn-primary" style="width: 100%;">Understood & Continue</button>
        </div>
      `;
      document.body.appendChild(confirmModal);

      const closeBtn = confirmModal.querySelector('#btn-demo-confirm-close');
      closeBtn.addEventListener('click', () => {
        confirmModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    document.getElementById('demo-confirm-title').textContent = title;
    document.getElementById('demo-confirm-msg').textContent = message;
    confirmModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // 3. Job Application Form (`job-details.html`)
  const applyForm = document.getElementById('job-apply-form');
  if (applyForm) {
    applyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modal = document.getElementById('apply-modal');
      if (modal) modal.classList.remove('active');

      showDemoConfirmationModal(
        'Application Demo Simulated',
        'Thank you for exploring our IT recruitment demo. This application is illustrative — candidate details and resume files are neither transmitted nor stored on any server.'
      );
      applyForm.reset();
      const badge = applyForm.querySelector('.selected-filename-badge');
      if (badge) badge.remove();
    });
  }

  // 4. Candidate Registration Form (`candidates.html`)
  const candidateRegForm = document.getElementById('candidate-registration-form');
  if (candidateRegForm) {
    candidateRegForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showDemoConfirmationModal(
        'Candidate Profile Demo Registered',
        'Thank you for exploring our Technology Career Hub. This is a recruitment website demo. Candidate details and resume files are not transmitted or stored.'
      );
      candidateRegForm.reset();
      const badge = candidateRegForm.querySelector('.selected-filename-badge');
      if (badge) badge.remove();
    });
  }

  // 5. Employer Hiring Form (`employers.html`)
  const employerForm = document.getElementById('employer-hiring-form');
  if (employerForm) {
    // Dynamic conditional field for Contract duration
    const engagementSelect = document.getElementById('employer-engagement-type');
    const contractDurationField = document.getElementById('contract-duration-field');

    if (engagementSelect && contractDurationField) {
      engagementSelect.addEventListener('change', (e) => {
        if (e.target.value.toLowerCase().includes('contract')) {
          contractDurationField.style.display = 'flex';
        } else {
          contractDurationField.style.display = 'none';
        }
      });
    }

    employerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showDemoConfirmationModal(
        'Technical Hiring Requirement Demo Received',
        'Thank you for submitting your recruitment specifications. This is a demo employer enquiry. No information has been transmitted or stored.'
      );
      employerForm.reset();
    });
  }

  // 6. Contact Form (`contact.html`) with Conditional Candidate/Employer Routes
  const contactForm = document.getElementById('general-contact-form');
  if (contactForm) {
    const audienceRadios = document.querySelectorAll('input[name="contactAudience"]');
    const candidateFields = document.getElementById('contact-candidate-fields');
    const employerFields = document.getElementById('contact-employer-fields');

    audienceRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.value === 'employer') {
          if (employerFields) employerFields.style.display = 'block';
          if (candidateFields) candidateFields.style.display = 'none';
        } else {
          if (employerFields) employerFields.style.display = 'none';
          if (candidateFields) candidateFields.style.display = 'block';
        }
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showDemoConfirmationModal(
        'Enquiry Received (Demo)',
        'Thank you for exploring our IT recruitment demo. This enquiry has not been transmitted or stored.'
      );
      contactForm.reset();
    });
  }
});
