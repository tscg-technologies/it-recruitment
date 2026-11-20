/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Main Orchestration & Global Component Logic
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Homepage Quick Search Form Redirect to jobs.html
  const quickSearchForm = document.getElementById('home-quick-search-form');
  if (quickSearchForm) {
    quickSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const keyword = document.getElementById('quick-keyword')?.value || '';
      const technology = document.getElementById('quick-technology')?.value || '';
      const location = document.getElementById('quick-location')?.value || '';
      const experience = document.getElementById('quick-experience')?.value || '';
      const type = document.getElementById('quick-type')?.value || '';

      const queryParams = new URLSearchParams();
      if (keyword) queryParams.set('keyword', keyword);
      if (technology) queryParams.set('technology', technology);
      if (location && location !== 'all') queryParams.set('location', location);
      if (experience && experience !== 'all') queryParams.set('experience', experience);
      if (type && type !== 'all') queryParams.set('type', type);

      window.location.href = `jobs.html?${queryParams.toString()}`;
    });
  }

  // Quick skill pills on homepage
  const quickPills = document.querySelectorAll('.quick-pill');
  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const tech = pill.dataset.tech;
      window.location.href = `jobs.html?technology=${encodeURIComponent(tech)}`;
    });
  });

  // 2. Interactive Technology Stack Cloud
  const techTabs = document.querySelectorAll('.tech-tab-btn');
  const techChips = document.querySelectorAll('.tech-chip-item');

  if (techTabs.length > 0 && techChips.length > 0) {
    techTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const category = tab.dataset.category;

        techTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        techChips.forEach(chip => {
          if (category === 'all' || chip.dataset.category === category) {
            chip.style.display = 'inline-flex';
            chip.style.opacity = '1';
          } else {
            chip.style.display = 'none';
          }
        });
      });
    });

    // Clicking any chip directs to jobs.html filtered by that technology
    techChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const skillName = chip.dataset.skill;
        window.location.href = `jobs.html?technology=${encodeURIComponent(skillName)}`;
      });
    });
  }

  // 3. How IT Recruitment Works (Candidate vs Employer Workflow Toggle)
  const workflowToggleBtns = document.querySelectorAll('.workflow-toggle-btn');
  const candidateWorkflow = document.getElementById('workflow-candidate-timeline');
  const employerWorkflow = document.getElementById('workflow-employer-timeline');

  if (workflowToggleBtns.length > 0 && candidateWorkflow && employerWorkflow) {
    workflowToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.workflow;
        workflowToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (target === 'candidate') {
          candidateWorkflow.style.display = 'grid';
          employerWorkflow.style.display = 'none';
        } else {
          candidateWorkflow.style.display = 'none';
          employerWorkflow.style.display = 'grid';
        }
      });
    });
  }

});
