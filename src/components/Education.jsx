import './Education.css';

const education = [
    {
        degree: 'B.Tech in Computer Science',
        institution: 'Lovely Professional University',
        location: 'Punjab, India',
        period: 'Aug 2024 – Present',
        icon: '🎓',
        tags: ['MERN Stack', 'DSA', 'Databases', 'OS', 'Networks'],
        color: '#6c63ff',
    },
    {
        degree: 'Diploma in Mechanical Engineering',
        institution: 'Xavier Institute of Polytechnic and Technology',
        location: 'Ranchi, Jharkhand',
        period: 'Completed',
        icon: '🔧',
        tags: ['Engineering Fundamentals', 'Problem Solving'],
        color: '#00d4ff',
    },
    {
        degree: 'Matriculation',
        institution: 'Sundari Devi Saraswati Vidya Mandir',
        location: 'Samastipur, Bihar',
        period: 'Completed',
        icon: '📚',
        tags: ['Science', 'Mathematics'],
        color: '#ff6584',
    },
];

const certifications = [
    { icon: '🤖', name: 'ChatGPT Prompt Engineering', issuer: 'Online Certification' },
    { icon: '✨', name: 'Generative AI Tools & Applications', issuer: 'Online Certification' },
    { icon: '🧠', name: 'ChatGPT Masterclass', issuer: 'Online Certification' },
    { icon: '☕', name: 'Master DSA with Java', issuer: 'W3Grads — FLAMES \'25', highlight: true },
];

export default function Education() {
    return (
        <section id="education">
            <div className="container">
                <p className="section-label">Background</p>
                <h2 className="section-title">Education & Certifications</h2>
                <p className="section-subtitle">Academic foundation and continuous learning journey.</p>

                <div className="edu-layout">
                    {/* Education timeline */}
                    <div className="edu-col">
                        <h3 className="edu-col-title">
                            <span>🎓</span> Academic Journey
                        </h3>
                        <div className="timeline">
                            {education.map((e, i) => (
                                <div className="timeline-item" key={i} style={{ '--edu-color': e.color }}>
                                    <div className="timeline-dot">
                                        <span>{e.icon}</span>
                                    </div>
                                    <div className="timeline-body glass-card">
                                        <div className="timeline-period">{e.period}</div>
                                        <h4 className="timeline-degree">{e.degree}</h4>
                                        <p className="timeline-inst">{e.institution}</p>
                                        <p className="timeline-loc">📍 {e.location}</p>
                                        <div className="timeline-tags">
                                            {e.tags.map((t) => (
                                                <span className="tag" key={t}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="edu-col">
                        <h3 className="edu-col-title">
                            <span>📜</span> Certifications & Training
                        </h3>
                        <div className="cert-list">
                            {certifications.map((c) => (
                                <div className={`cert-card glass-card ${c.highlight ? 'cert-highlight' : ''}`} key={c.name}>
                                    <span className="cert-icon">{c.icon}</span>
                                    <div className="cert-info">
                                        <p className="cert-name">{c.name}</p>
                                        <p className="cert-issuer">{c.issuer}</p>
                                    </div>
                                    {c.highlight && (
                                        <span className="cert-badge">Featured</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="training-card glass-card">
                            <div className="training-header">
                                <span className="training-icon">🏆</span>
                                <div>
                                    <h4 className="training-title">Master DSA with Java</h4>
                                    <p className="training-org">W3Grads — FLAMES '25</p>
                                </div>
                            </div>
                            <div className="training-points">
                                <div className="tp-item">✅ Solved real-world DSA problems</div>
                                <div className="tp-item">✅ Learned optimized coding techniques</div>
                                <div className="tp-item">✅ Improved algorithmic thinking</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
