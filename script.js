/**
 * CORPLAN Interactive Web Presentation
 * Logic for section switching and interaction.
 */

function showSection(sectionId) {
    // 1. Get all sections
    const sections = document.querySelectorAll('section');
    const homeNav = document.getElementById('home-nav');

    // 2. Hide all sections and remove active class
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Find target section
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        // 4. Reset scroll position to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // 5. Toggle Home Nav visibility
        if (sectionId === 'home') {
            homeNav.style.display = 'none';
        } else {
            homeNav.style.display = 'flex';
        }

        // 6. Short delay before showing new section for cleaner transition
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 50);
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

// Ensure the first section (home) is visible on load if not already set by HTML
document.addEventListener('DOMContentLoaded', () => {
    const activeSection = document.querySelector('section.active');
    if (!activeSection) {
        showSection('home');
    } else {
        // Ensure home nav is correctly hidden on initial load if started at home
        const homeNav = document.getElementById('home-nav');
        if (activeSection.id === 'home') {
            homeNav.style.display = 'none';
        } else {
            homeNav.style.display = 'flex';
        }
    }
});
