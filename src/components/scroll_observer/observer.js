import React from 'react'

export default function UnitScrollAnimation(options = {}) {
    const {
        selector = '.animate-on-scroll',
        activeClass = 'active',
        threshold = 0.2,
        rootMargin = '0px 0px -200px 0px',
        once = true
    } = options;

    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(activeClass);

                if (once) {
                    observer.unobserve(entry.target);
                }
            } else if (!once) {
                entry.target.classList.remove(activeClass);
            }
        });
    }, {
        threshold: threshold,
        rootMargin: rootMargin
    });

    elements.forEach(el => observer.observe(el));

    return observer
}

