/**
 * IT TALENT & TECHNOLOGY RECRUITMENT
 * Interactive Job Search & Multi-Filter Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  const jobsContainer = document.getElementById('jobs-grid-container');
  if (!jobsContainer) return; // Only run on pages with the job grid

  const searchInput = document.getElementById('search-keyword');
  const locationSelect = document.getElementById('filter-location');
  const experienceSelect = document.getElementById('filter-experience');
  const employmentSelect = document.getElementById('filter-employment');
  const sortSelect = document.getElementById('sort-jobs');
  const countDisplay = document.getElementById('results-count-display');
  const clearBtn = document.getElementById('btn-clear-all-filters');
  const loadMoreBtn = document.getElementById('btn-load-more');

  // Multi-select technologies state
  let selectedTechnologies = new Set();
  let selectedArrangement = 'all'; // all, remote, hybrid, onsite
  let visibleLimit = 9;

  // 1. Parse URL Query Parameters (from Homepage search or Specializations links)
  const urlParams = new URLSearchParams(window.location.search);
  const paramKeyword = urlParams.get('keyword');
  const paramTechnology = urlParams.get('technology');
  const paramLocation = urlParams.get('location');
  const paramExperience = urlParams.get('experience');
  const paramType = urlParams.get('type');
  const paramArrangement = urlParams.get('arrangement');
  const paramSpecialization = urlParams.get('specialization');

  if (paramKeyword && searchInput) searchInput.value = paramKeyword;
  if (paramLocation && locationSelect) locationSelect.value = paramLocation;
  if (paramExperience && experienceSelect) experienceSelect.value = paramExperience;
  if (paramType && employmentSelect) employmentSelect.value = paramType;

  if (paramArrangement) {
    selectedArrangement = paramArrangement.toLowerCase();
    const radio = document.querySelector(`input[name="workArrangement"][value="${paramArrangement}"]`);
    if (radio) radio.checked = true;
  }

  if (paramTechnology) {
    selectedTechnologies.add(paramTechnology.toLowerCase());
  }

  // 2. Setup Tech Filter Pills Click Listeners
  const techPills = document.querySelectorAll('.tech-filter-pill');
  techPills.forEach(pill => {
    const tech = pill.dataset.tech.toLowerCase();
    if (selectedTechnologies.has(tech)) {
      pill.classList.add('active');
    }

    pill.addEventListener('click', () => {
      if (selectedTechnologies.has(tech)) {
        selectedTechnologies.delete(tech);
        pill.classList.remove('active');
      } else {
        selectedTechnologies.add(tech);
        pill.classList.add('active');
      }
      applyFilters();
    });
  });

  // 3. Arrangement Radio Listeners
  const arrangementRadios = document.querySelectorAll('input[name="workArrangement"]');
  arrangementRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedArrangement = e.target.value.toLowerCase();
      applyFilters();
    });
  });

  // 4. Job Card HTML Builder
  const createJobCard = (job) => {
    const primaryPills = job.primarySkills.map(s => `<span class="skill-tag skill-tag-primary">${s}</span>`).join('');
    const secondaryPills = job.secondarySkills.slice(0, 3).map(s => `<span class="skill-tag">${s}</span>`).join('');

    return `
      <article class="job-card reveal-on-scroll is-visible" data-id="${job.id}">
        <div class="job-card-header">
          <span class="job-category-badge">${job.specialization}</span>
          <h3 class="job-card-title">
            <a href="job-details.html?id=${job.id}">${job.title}</a>
          </h3>
          <div class="job-card-meta">
            <span class="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              ${job.location}
            </span>
            <span class="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ${job.experience}
            </span>
            <span class="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              ${job.workArrangement}
            </span>
          </div>
        </div>
        
        <div class="job-skills-container">
          ${primaryPills}
          ${secondaryPills}
        </div>

        <div class="job-card-footer">
          <div class="salary-tag">
            ${job.salary.split('(')[0]}
            <small>Illustrative Benchmark</small>
          </div>
          <a href="job-details.html?id=${job.id}" class="btn btn-sm btn-primary">
            View Job
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </article>
    `;
  };

  // 5. Core Filtering Logic
  const applyFilters = () => {
    const rawJobs = window.IT_JOBS_DATA || [];
    const keyword = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const loc = (locationSelect ? locationSelect.value : '').toLowerCase();
    const exp = (experienceSelect ? experienceSelect.value : '');
    const emp = (employmentSelect ? employmentSelect.value : '').toLowerCase();
    const sort = sortSelect ? sortSelect.value : 'newest';

    let filtered = rawJobs.filter(job => {
      // Keyword in title, description, or skills
      if (keyword) {
        const matchesTitle = job.title.toLowerCase().includes(keyword);
        const matchesDesc = job.overview.toLowerCase().includes(keyword);
        const matchesSkills = job.primarySkills.some(s => s.toLowerCase().includes(keyword)) ||
                              job.secondarySkills.some(s => s.toLowerCase().includes(keyword));
        if (!matchesTitle && !matchesDesc && !matchesSkills) return false;
      }

      // Location match
      if (loc && loc !== 'all' && !job.location.toLowerCase().includes(loc)) {
        return false;
      }

      // Experience match
      if (exp && exp !== 'all' && job.experienceCategory !== exp) {
        return false;
      }

      // Employment match
      if (emp && emp !== 'all' && !job.employmentType.toLowerCase().includes(emp)) {
        return false;
      }

      // Work arrangement
      if (selectedArrangement && selectedArrangement !== 'all') {
        if (!job.workArrangement.toLowerCase().includes(selectedArrangement)) {
          return false;
        }
      }

      // Specialization URL param
      if (paramSpecialization && paramSpecialization !== 'all') {
        if (job.specialization.toLowerCase() !== paramSpecialization.toLowerCase()) {
          return false;
        }
      }

      // Multi-select technologies (must match all selected tech tags)
      if (selectedTechnologies.size > 0) {
        const allJobSkills = [...job.primarySkills, ...job.secondarySkills].map(s => s.toLowerCase());
        for (const tech of selectedTechnologies) {
          const hasTech = allJobSkills.some(s => s.includes(tech));
          if (!hasTech) return false;
        }
      }

      return true;
    });

    // Sorting
    if (sort === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // default newest by postedDate
      filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
    }

    // Update count display
    if (countDisplay) {
      countDisplay.innerHTML = `Showing <span>${Math.min(visibleLimit, filtered.length)}</span> of <span>${filtered.length}</span> IT Opportunities`;
    }

    // Render cards
    if (filtered.length === 0) {
      jobsContainer.innerHTML = `
        <div class="empty-state">
          <svg width="48" height="48" fill="none" stroke="#64748B" viewBox="0 0 24 24" style="margin: 0 auto 1rem;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h3>No matching IT roles found</h3>
          <p>Try adjusting your technology filters, location, or search keywords.</p>
          <button id="btn-reset-empty-filters" class="btn btn-outline-electric">Reset All Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('btn-reset-empty-filters');
      if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }

    const itemsToDisplay = filtered.slice(0, visibleLimit);
    jobsContainer.innerHTML = itemsToDisplay.map(createJobCard).join('');

    // Toggle Load More button
    if (loadMoreBtn) {
      loadMoreBtn.style.display = filtered.length > visibleLimit ? 'inline-flex' : 'none';
    }
  };

  // 6. Reset Filters Function
  const resetAllFilters = () => {
    if (searchInput) searchInput.value = '';
    if (locationSelect) locationSelect.value = 'all';
    if (experienceSelect) experienceSelect.value = 'all';
    if (employmentSelect) employmentSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'newest';

    selectedTechnologies.clear();
    techPills.forEach(p => p.classList.remove('active'));

    const allRadio = document.querySelector('input[name="workArrangement"][value="all"]');
    if (allRadio) allRadio.checked = true;
    selectedArrangement = 'all';

    visibleLimit = 9;
    applyFilters();
  };

  // Event bindings
  if (searchInput) searchInput.addEventListener('input', () => { visibleLimit = 9; applyFilters(); });
  if (locationSelect) locationSelect.addEventListener('change', () => { visibleLimit = 9; applyFilters(); });
  if (experienceSelect) experienceSelect.addEventListener('change', () => { visibleLimit = 9; applyFilters(); });
  if (employmentSelect) employmentSelect.addEventListener('change', () => { visibleLimit = 9; applyFilters(); });
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
  if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleLimit += 6;
      applyFilters();
    });
  }

  // Initial execution
  applyFilters();
});
