import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const typedRef = useRef(null);
    const titles = ['Full Stack Developer', 'MERN Stack Engineer', 'Problem Solver', 'Backend Engineer'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    useEffect(() => {
        const el = typedRef.current;
        let timeout;

        function type() {
            const current = titles[titleIndex];
            if (isDeleting) {
                el.textContent = current.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = current.substring(0, charIndex + 1);
                charIndex++;
            }

            let delay = isDeleting ? 60 : 100;

            if (!isDeleting && charIndex === current.length) {
                delay = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                delay = 400;
            }

            timeout = setTimeout(type, delay);
        }

        timeout = setTimeout(type, 800);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-greeting animate-fade-up">
                            <span className="greeting-emoji">👋</span> Hello, I'm
                        </p>
                        <h1 className="hero-name animate-fade-up delay-1">
                            Rishav Kumar
                        </h1>
                        <div className="hero-title-wrapper animate-fade-up delay-2">
                            <span className="hero-title-prefix">I'm a&nbsp;</span>
                            <span className="hero-typed" ref={typedRef}></span>
                            <span className="cursor">|</span>
                        </div>
                        <p className="hero-bio animate-fade-up delay-3">
                            Full Stack Developer passionate about building <strong>scalable web applications</strong> with
                            the MERN stack, Java, and PHP. I turn ideas into impactful digital experiences.
                        </p>
                        <div className="hero-actions animate-fade-up delay-4">
                            <a href="#projects" className="btn-primary">
                                View My Work
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </a>
                            <a href="mailto:rishavku620@gmail.com" className="btn-outline">
                                Get In Touch
                            </a>
                            <a
                                href="https://drive.google.com/uc?export=download&id=1ln-mTtjBOLPcIYqSn5M7IEPNeVFwAmrM"
                                download="Rishav_Kumar_Resume.pdf"
                                className="btn-resume"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                Download Resume
                            </a>
                        </div>
                        <div className="hero-socials animate-fade-up delay-5">
                            <a href="https://github.com/Riss620" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                            </a>
                            <a href="https://linkedin.com/in/rishav-kumar-55572b340/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="mailto:rishavku620@gmail.com" className="social-link" aria-label="Email">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual animate-float">
                        <div className="avatar-ring">
                            <div className="avatar-ring-inner">
                                <img
                                    src="/avatar.jpg"
                                    alt="Rishav Kumar"
                                    className="avatar-photo"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="avatar-fallback" aria-hidden="true">
                                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="38" r="20" fill="url(#grad1)" />
                                        <ellipse cx="50" cy="80" rx="32" ry="20" fill="url(#grad1)" opacity="0.7" />
                                        <defs>
                                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#6c63ff" />
                                                <stop offset="100%" stopColor="#00d4ff" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="ring-orbit">
                                <div className="orbit-dot orbit-dot-1"><span>⚛️</span></div>
                                <div className="orbit-dot orbit-dot-2"><span>🟢</span></div>
                                <div className="orbit-dot orbit-dot-3"><span>☕</span></div>
                            </div>
                        </div>

                        <div className="hero-badge badge-1">
                            <span className="badge-icon">✅</span>
                            <div>
                                <div className="badge-num">4+</div>
                                <div className="badge-label">Projects</div>
                            </div>
                        </div>
                        <div className="hero-badge badge-2">
                            <span className="badge-icon">🎓</span>
                            <div>
                                <div className="badge-num">B.Tech</div>
                                <div className="badge-label">CS @ LPU</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
            </div>
        </section>
    );
}
