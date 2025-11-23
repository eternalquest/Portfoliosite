import React from "react";

/* Replace placeholders (email, links, images) with your real content */

export default function App() {
  return (
    <div className="site-root">
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo">NC</div>
            <div className="brand-meta">
              <div className="brand-name">Norse Coder</div>
              <div className="brand-tag">Developer · Writer · Digital Experiences</div>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#writing">Writing</a>
            <a href="#contact" className="cta">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-left">
              <h1>I build clear, reliable digital experiences for creators & small businesses.</h1>
              <p className="hero-sub">
                React & modern frontend, small interactive Three.js pieces, and technical writing that helps your audience trust and convert.
              </p>

              <div className="hero-ctas">
                <a href="#projects" className="btn primary">See projects</a>
                <a href="#contact" className="btn outline">Hire me</a>
              </div>

              <ul className="hero-quick">
                <li>React · Vite · Modern JS</li>
                <li>Django REST · Simple APIs</li>
                <li>Writing · Product copy</li>
              </ul>
            </div>

            <div className="hero-right">
              <div className="visual-card">
                <img src="" alt="Your photo" className="portrait" />
                <div className="visual-meta">
                  <div className="small">Interactive demo</div>
                  <div className="muted">Replace this with a Three.js canvas or demo screenshot</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Selected projects</h2>
            <p className="section-sub">Small, meaningful projects that show craft, reliability and clear outcomes.</p>

            <div className="cards">
              <article className="card">
                <div className="card-visual">Landing — Coach</div>
                <h3>Landing page for a coach</h3>
                <p className="muted">Clean hero, concise copy and faster load. Conversion-focused layout.</p>
                <div className="meta">React · Design</div>
              </article>

              <article className="card">
                <div className="card-visual">Three.js</div>
                <h3>Interactive historical scene</h3>
                <p className="muted">Micro-interaction that tells a short story and improves retention.</p>
                <div className="meta">Three.js · UX</div>
              </article>

              <article className="card">
                <div className="card-visual">CRM</div>
                <h3>Bank CRM (student project)</h3>
                <p className="muted">Django REST + React integration demonstrating fullstack ability.</p>
                <div className="meta">Django · React</div>
              </article>
            </div>
          </div>
        </section>

        <section id="services" className="section light">
          <div className="container">
            <h2 className="section-title">Services</h2>
            <p className="section-sub">Fixed-scope packages that make hiring simple.</p>

            <div className="service-grid">
              <div className="service">
                <div className="service-title">Landing Page</div>
                <div className="service-desc">One-page React landing, responsive and performance-optimized.</div>
                <div className="service-price">₹10,000 – ₹20,000</div>
              </div>

              <div className="service">
                <div className="service-title">Website Revamp</div>
                <div className="service-desc">3–5 page redesign, performance and accessibility fixes.</div>
                <div className="service-price">₹25,000 – ₹45,000</div>
              </div>

              <div className="service">
                <div className="service-title">Interactive Hero</div>
                <div className="service-desc">Three.js micro-interaction to elevate brand impression.</div>
                <div className="service-price">₹45,000+</div>
              </div>
            </div>
          </div>
        </section>

        <section id="writing" className="section">
          <div className="container">
            <h2 className="section-title">Writing</h2>
            <p className="section-sub">Technical & long-form writing that blends history, strategy and clarity.</p>

            <div className="write-list">
              <article className="write-item">
                <h4>On Leaving Toxic Jobs</h4>
                <p className="muted">Why dignity matters more than a title — personal essay + practical steps.</p>
              </article>

              <article className="write-item">
                <h4>Tech & Stoicism</h4>
                <p className="muted">A focused approach to creative work through stoic practices.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section light">
          <div className="container contact-grid">
            <div className="contact-card">
              <h2 className="section-title">Contact</h2>
              <p className="section-sub">I take a small number of clients. For straightforward scope and reliable delivery, email me.</p>

              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thanks — replace this with real form handling.'); }}>
                <label>
                  <div className="label">Name</div>
                  <input required name="name" placeholder="Jane Doe" />
                </label>

                <label>
                  <div className="label">Email</div>
                  <input required name="email" type="email" placeholder="jane@company.com" />
                </label>

                <label>
                  <div className="label">Message</div>
                  <textarea required name="message" rows="5" placeholder="Short description..." />
                </label>

                <button type="submit" className="btn primary full">Send message</button>
              </form>
            </div>

            <aside className="quick-contacts">
              <div className="box">
                <h4>Quick contacts</h4>
                <p className="muted">Email: hello@norsecoder.com</p>
                <p className="muted">LinkedIn: /in/norsecoder</p>
                <p className="muted">Twitter: @norsecoder</p>
              </div>

              <div className="box">
                <h4>Availability</h4>
                <p className="muted">Remote freelance · Short retainers · Clear timelines</p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Norse Coder — Built with care and clarity.</div>
      </footer>
    </div>
  );
}
