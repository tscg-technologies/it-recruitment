/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Dynamic Job Details Page Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const detailsContainer = document.getElementById('job-details-view');
  if (!detailsContainer) return; // Only runs on job-details.html

  const notFoundContainer = document.getElementById('job-not-found-view');
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get('id') || 'IT001'; // Default to IT001 if none provided

  const job = window.getJobById ? window.getJobById(jobId) : null;

  if (!job) {
    if (detailsContainer) detailsContainer.style.display = 'none';
    if (notFoundContainer) notFoundContainer.style.display = 'block';
    return;
  }

  // Update Page Title
  document.title = `${job.title} | IT Talent & Technology Recruitment Demo`;

  // Render Details Elements
  const jobTitleEl = document.getElementById('job-detail-title');
  const jobCategoryEl = document.getElementById('job-detail-category');
  const jobLocationEl = document.getElementById('job-detail-location');
  const jobExpEl = document.getElementById('job-detail-experience');
  const jobTypeEl = document.getElementById('job-detail-type');
  const jobArrangementEl = document.getElementById('job-detail-arrangement');
  const jobSalaryEl = document.getElementById('job-detail-salary');
  const jobOverviewEl = document.getElementById('job-detail-overview');
  const jobRespList = document.getElementById('job-detail-responsibilities');
  const jobReqList = document.getElementById('job-detail-required');
  const jobPrefList = document.getElementById('job-detail-preferred');
  const jobSkillsCloud = document.getElementById('job-detail-skills-cloud');

  if (jobTitleEl) jobTitleEl.textContent = job.title;
  if (jobCategoryEl) jobCategoryEl.textContent = job.specialization;
  if (jobLocationEl) jobLocationEl.textContent = job.location;
  if (jobExpEl) jobExpEl.textContent = job.experience;
  if (jobTypeEl) jobTypeEl.textContent = job.employmentType;
  if (jobArrangementEl) jobArrangementEl.textContent = job.workArrangement;
  if (jobSalaryEl) jobSalaryEl.textContent = job.salary;
  if (jobOverviewEl) jobOverviewEl.textContent = job.overview;

  // Responsibilities
  if (jobRespList && Array.isArray(job.responsibilities)) {
    jobRespList.innerHTML = job.responsibilities
      .map(r => `<li class="details-list-item">${r}</li>`)
      .join('');
  }

  // Required Skills
  if (jobReqList && Array.isArray(job.requiredSkills)) {
    jobReqList.innerHTML = job.requiredSkills
      .map(r => `<li class="details-list-item">${r}</li>`)
      .join('');
  }

  // Preferred Skills
  if (jobPrefList && Array.isArray(job.preferredSkills)) {
    jobPrefList.innerHTML = job.preferredSkills
      .map(p => `<li class="details-list-item">${p}</li>`)
      .join('');
  }

  // Interactive Clickable Skills Cloud linking to job search
  if (jobSkillsCloud) {
    const allSkills = [...job.primarySkills, ...job.secondarySkills];
    jobSkillsCloud.innerHTML = allSkills.map(s => `
      <a href="jobs.html?technology=${encodeURIComponent(s)}" class="tech-chip" title="Find other roles with ${s}">
        <span>${s}</span>
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    `).join('');
  }

  // Render Related IT Opportunities
  const relatedContainer = document.getElementById('related-jobs-grid');
  if (relatedContainer && window.IT_JOBS_DATA) {
    const related = window.IT_JOBS_DATA.filter(j => 
      j.id !== job.id && (
        j.specialization === job.specialization || 
        j.primarySkills.some(s => job.primarySkills.includes(s))
      )
    ).slice(0, 3);

    if (related.length > 0) {
      relatedContainer.innerHTML = related.map(rel => `
        <article class="job-card">
          <div class="job-card-header">
            <span class="job-category-badge">${rel.specialization}</span>
            <h4 class="job-card-title"><a href="job-details.html?id=${rel.id}">${rel.title}</a></h4>
            <div class="job-card-meta">
              <span class="meta-item">${rel.location}</span>
              <span class="meta-item">${rel.experience}</span>
              <span class="meta-item">${rel.workArrangement}</span>
            </div>
          </div>
          <div class="job-skills-container">
            ${rel.primarySkills.map(s => `<span class="skill-tag skill-tag-primary">${s}</span>`).join('')}
          </div>
          <div class="job-card-footer">
            <a href="job-details.html?id=${rel.id}" class="btn btn-sm btn-outline-electric">Explore Role</a>
          </div>
        </article>
      `).join('');
    } else {
      relatedContainer.parentElement.style.display = 'none';
    }
  }

  // Modal Setup
  const applyModal = document.getElementById('apply-modal');
  const openModalBtns = document.querySelectorAll('.btn-open-apply-modal');
  const closeModalBtn = document.getElementById('btn-close-modal');
  const modalJobTitle = document.getElementById('modal-job-title');

  if (modalJobTitle) modalJobTitle.textContent = job.title;

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (applyModal) applyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    if (applyModal) applyModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (applyModal) {
    applyModal.addEventListener('click', (e) => {
      if (e.target === applyModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && applyModal && applyModal.classList.contains('active')) {
      closeModal();
    }
  });
});
