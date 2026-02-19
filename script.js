/**
 * CORPLAN Interactive Web Presentation
 * Logic for section switching and tab interaction.
 */

/**
 * Main section navigation
 */
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    const homeNav = document.getElementById('home-nav');

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        // Reset scroll position
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Toggle Home Nav visibility
        if (sectionId === 'home') {
            homeNav.style.display = 'none';
        } else {
            homeNav.style.display = 'flex';
        }

        // Delay for transition
        setTimeout(() => {
            targetSection.classList.add('active');
            
            // On mobile, ensure we start at the top of the content
            if (window.innerWidth <= 768) {
                targetSection.scrollTop = 0;
            }
        }, 50);
    }
}

/**
 * Sub-tab switching within focus areas
 */
function switchTab(sectionId, tabType) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // 1. Update buttons
    const btns = section.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    
    // Find the button that contains the click
    const activeBtn = Array.from(btns).find(btn => 
        btn.getAttribute('onclick').includes(`'${tabType}'`)
    );
    if (activeBtn) activeBtn.classList.add('active');

    // 2. Update content
    const contents = section.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const targetContent = document.getElementById(`${sectionId}-${tabType}`);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

// Initial state management
document.addEventListener('DOMContentLoaded', () => {
    const activeSection = document.querySelector('section.active');
    if (!activeSection) {
        showSection('home');
    } else {
        const homeNav = document.getElementById('home-nav');
        homeNav.style.display = (activeSection.id === 'home') ? 'none' : 'flex';
    }
});
