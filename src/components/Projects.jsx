import './Projects.css';

const projects = [
    {
        id: 'chat',
        emoji: '💬',
        title: 'Group Chat Application',
        subtitle: 'MERN Stack',
        color: '#6c63ff',
        description:
            'Full-stack group chat app enabling real-time communication with persistent message storage for multiple users.',
        features: ['User Authentication', 'Real-time Messaging', 'Multi-user Rooms', 'MongoDB Storage', 'Responsive UI'],
        stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        outcome: 'Gained deep understanding of real-time systems and full-stack integration.',
    },
    {
        id: 'banking',
        emoji: '💰',
        title: 'Banking Application',
        subtitle: 'Java Full Stack',
        color: '#00d4ff',
        description:
            'Banking-style web application with secure authentication, dashboard access, and full session management.',
        features: ['Secure Login', 'Dashboard Access', 'Session Management', 'MVC Architecture', 'MySQL Integration'],
        stack: ['Java', 'JSP/Servlet', 'MySQL', 'HTML/CSS'],
        outcome: 'Strengthened backend development and debugging skills.',
    },
    {
        id: 'translator',
        emoji: '🌍',
        title: 'AI Language Translator',
        subtitle: 'Python / AI',
        color: '#ff6584',
        description:
            'AI-style chatbot for real-time travel assistance, including flight price tracking and voice output.',
        features: ['Real-time API Data', 'Chatbot Interface', 'Voice Output (gTTS)', 'Flight Tracking', 'Responsive UI'],
        stack: ['Python', 'Streamlit', 'gTTS', 'Pandas', 'REST APIs'],
        outcome: 'Learned API integration and AI-based UI interaction design.',
    },
    {
        id: 'jobtracker',
        emoji: '📊',
        title: 'Job Tracker Platform',
        subtitle: 'PHP Full Stack',
        color: '#f7b731',
        description:
            'Job management platform for tracking applications, uploading resumes, and browsing dynamic job listings.',
        features: ['User Auth System', 'Resume Upload', 'Job Browsing', 'Application Submission', 'Dynamic Listings'],
        stack: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'AJAX'],
        outcome: 'Improved full-stack development and database handling skills.',
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <p className="section-label">What I've Built</p>
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">Real-world applications built with various tech stacks, each solving a different problem.</p>

                <div className="projects-grid">
                    {projects.map((p) => (
                        <div className="project-card glass-card" key={p.id} style={{ '--project-color': p.color }}>
                            <div className="project-header">
                                <div className="project-emoji-wrapper">
                                    <span className="project-emoji">{p.emoji}</span>
                                </div>
                                <div className="project-meta">
                                    <h3 className="project-title">{p.title}</h3>
                                    <span className="project-subtitle">{p.subtitle}</span>
                                </div>
                            </div>

                            <p className="project-desc">{p.description}</p>

                            <div className="project-features">
                                {p.features.map((f) => (
                                    <span className="feature-item" key={f}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        {f}
                                    </span>
                                ))}
                            </div>

                            <div className="project-footer">
                                <div className="project-stack">
                                    {p.stack.map((s) => (
                                        <span className="tag" key={s}>{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-outcome">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                {p.outcome}
                            </div>

                            <div className="project-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
