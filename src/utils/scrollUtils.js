// src/utils/scrollUtils.js

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('nav'); // Adjust this selector if your header has a different element or class
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 0; // 20px extra padding
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }