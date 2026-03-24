import './About.css';

const strengths = [
    { icon: '🚀', label: 'Full Stack Dev' },
    { icon: '🔗', label: 'REST APIs' },
    { icon: '🔐', label: 'Auth Systems' },
    { icon: '🗄️', label: 'DB Design' },
    { icon: '🐛', label: 'Debugging' },
    { icon: '⚡', label: 'Real-time Apps' },
];

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-left">
                        <p className="section-label">Who Am I</p>
                        <h2 className="section-title">About Me</h2>
                        <p className="about-text">
                            I'm <strong>Rishav Kumar</strong>, a passionate Full Stack Developer currently pursuing
                            my <strong>B.Tech in Computer Science</strong> at Lovely Professional University, Punjab.
                        </p>
                        <p className="about-text">
                            I specialize in building end-to-end web applications with the <strong>MERN stack</strong>,
                            along with <strong>Java (JSP/Servlet)</strong> and <strong>PHP</strong>. My focus is on
                            clean architecture, scalable APIs, and seamless user experiences.
                        </p>
                        <p className="about-text">
                            Beyond coding, I actively sharpen my <strong>DSA skills</strong> through competitive
                            problem-solving and have hands-on training in optimized coding techniques from W3Grads.
                        </p>
                        <div className="about-info">
                            <div className="info-item">
                                <span className="info-label">📧 Email</span>
                                <a href="mailto:rishavku620@gmail.com" className="info-value">rishavku620@gmail.com</a>
                            </div>
                            <div className="info-item">
                                <span className="info-label">📱 Phone</span>
                                <span className="info-value">+91-6206034538</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">📍 Location</span>
                                <span className="info-value">Punjab, India</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">🎓 University</span>
                                <span className="info-value">LPU (Since 2024)</span>
                            </div>
                        </div>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1ln-mTtjBOLPcIYqSn5M7IEPNeVFwAmrM"
                            download="Rishav_Kumar_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-primary"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Download Resume
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                        </a>
                    </div>

                    <div className="about-right">
                        <div className="strengths-grid">
                            {strengths.map((s) => (
                                <div className="strength-card glass-card" key={s.label}>
                                    <span className="strength-icon">{s.icon}</span>
                                    <span className="strength-label">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="about-stats">
                            <div className="stat-card glass-card">
                                <div className="stat-num gradient-text">4+</div>
                                <div className="stat-label">Projects Built</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-num gradient-text">5+</div>
                                <div className="stat-label">Technologies</div>
                            </div>
                            <div className="stat-card glass-card">
                                <div className="stat-num gradient-text">3</div>
                                <div className="stat-label">Certifications</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
