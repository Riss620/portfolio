import { useState } from 'react';
import './Skills.css';

const skillCategories = [
    {
        id: 'languages',
        label: 'Languages',
        icon: '💻',
        skills: [
            { name: 'C++', level: 80 },
            { name: 'Python', level: 75 },
            { name: 'Java', level: 82 },
            { name: 'JavaScript', level: 88 },
            { name: 'SQL', level: 78 },
            { name: 'PHP', level: 72 },
        ],
    },
    {
        id: 'frameworks',
        label: 'Frameworks',
        icon: '⚙️',
        skills: [
            { name: 'React.js', level: 85 },
            { name: 'Node.js', level: 82 },
            { name: 'Express.js', level: 80 },
            { name: 'React Native', level: 65 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'Spring', level: 70 },
            { name: 'Spring Boot', level: 72 },
        ],
    },
    {
        id: 'databases',
        label: 'Databases',
        icon: '🗄️',
        skills: [
            { name: 'MongoDB', level: 80 },
            { name: 'MySQL', level: 78 },
        ],
    },
    {
        id: 'tools',
        label: 'Tools',
        icon: '🔧',
        skills: [
            { name: 'Git & GitHub', level: 85 },
            { name: 'GitHub Actions', level: 65 },
            { name: 'VS Code', level: 95 },
            { name: 'IntelliJ IDEA', level: 80 },
            { name: 'Web Hosting', level: 70 },
        ],
    },
    {
        id: 'concepts',
        label: 'Concepts',
        icon: '🧠',
        skills: [
            { name: 'REST APIs', level: 88 },
            { name: 'MVC Architecture', level: 85 },
            { name: 'Authentication', level: 82 },
            { name: 'DS & Algorithms', level: 78 },
            { name: 'AI Concepts', level: 60 },
        ],
    },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState('languages');
    const active = skillCategories.find((c) => c.id === activeTab);

    return (
        <section id="skills">
            <div className="container">
                <p className="section-label">What I Know</p>
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">A comprehensive overview of my technical toolkit built through projects and training.</p>

                <div className="skills-tabs">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`skill-tab ${activeTab === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <span>{cat.icon}</span> {cat.label}
                        </button>
                    ))}
                </div>

                <div className="skills-content glass-card">
                    <div className="skills-bars">
                        {active.skills.map((skill) => (
                            <div className="skill-item" key={skill.name}>
                                <div className="skill-header">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-pct">{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div
                                        className="skill-fill"
                                        style={{ '--target-width': `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="skills-tags">
                        {skillCategories.flatMap((c) => c.skills).slice(0, 20).map((s) => (
                            <span className="tag" key={s.name}>{s.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
