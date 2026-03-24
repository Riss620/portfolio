import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const body = `Hi Rishav,%0A%0A${message}%0A%0AName: ${name}%0AEmail: ${email}`;
        window.location.href = `mailto:rishavku620@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        setStatus('Opening your email client...');
    };

    return (
        <section id="contact">
            <div className="container">
                <p className="section-label">Get In Touch</p>
                <h2 className="section-title">Contact Me</h2>
                <p className="section-subtitle">Have an opportunity or just want to say hi? I'd love to hear from you.</p>

                <div className="contact-layout">
                    {/* Info */}
                    <div className="contact-info">
                        <div className="contact-intro glass-card">
                            <h3>Let's build something together 🚀</h3>
                            <p>
                                I'm currently open to internships, freelance projects, and full-time opportunities.
                                Feel free to reach out — I usually respond within 24 hours.
                            </p>
                        </div>

                        <div className="contact-links">
                            <a href="mailto:rishavku620@gmail.com" className="contact-link glass-card">
                                <div className="cl-icon" style={{ background: 'rgba(108,99,255,0.15)' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div className="cl-body">
                                    <span className="cl-label">Email</span>
                                    <span className="cl-value">rishavku620@gmail.com</span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cl-arrow"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </a>

                            <a href="https://github.com/Riss620" target="_blank" rel="noreferrer" className="contact-link glass-card">
                                <div className="cl-icon" style={{ background: 'rgba(0,212,255,0.1)' }}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                </div>
                                <div className="cl-body">
                                    <span className="cl-label">GitHub</span>
                                    <span className="cl-value">github.com/Riss620</span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cl-arrow"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </a>

                            <a href="https://linkedin.com/in/rishav-kumar-55572b340/" target="_blank" rel="noreferrer" className="contact-link glass-card">
                                <div className="cl-icon" style={{ background: 'rgba(255,101,132,0.1)' }}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </div>
                                <div className="cl-body">
                                    <span className="cl-label">LinkedIn</span>
                                    <span className="cl-value">rishav-kumar-55572b340</span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="cl-arrow"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                            </a>

                            <div className="contact-link glass-card" style={{ cursor: 'default' }}>
                                <div className="cl-icon" style={{ background: 'rgba(247,183,49,0.1)' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.2 19.79 19.79 0 010 .57 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" /></svg>
                                </div>
                                <div className="cl-body">
                                    <span className="cl-label">Phone</span>
                                    <span className="cl-value">+91-6206034538</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <h3 className="form-title">Send a Message</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Job Opportunity / Collaboration"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project or opportunity..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {status && <p className="form-status">{status}</p>}
                        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Send Message
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
