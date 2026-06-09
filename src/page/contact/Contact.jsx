import React, { useState } from "react";
import PageTransition from "../../components/PageTransition";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <PageTransition>
      <div className="contact_page">

        {/* Hero */}
        <div className="contact_hero">
          <div className="container">
            <h1>Contact <span>Us</span></h1>
            <p>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
          </div>
        </div>

        <div className="container">
          <div className="contact_grid">

            {/* Info Cards */}
            <div className="contact_info">
              <h2>Get In Touch</h2>
              <p className="contact_intro">
                Whether you have a question about an order, need styling advice, 
                or just want to say hello — we're here for you.
              </p>

              {[
                { icon: "📍", title: "Our Location", detail: "Cairo, Egypt" },
                { icon: "📞", title: "Phone", detail: "+20 100 000 0000" },
                { icon: "✉️", title: "Email", detail: "hello@noran.com" },
                { icon: "🕐", title: "Working Hours", detail: "Sun – Thu: 9am – 6pm" },
              ].map((info, i) => (
                <div className="info_card" key={i}>
                  <span className="info_icon">{info.icon}</span>
                  <div>
                    <h4>{info.title}</h4>
                    <p>{info.detail}</p>
                  </div>
                </div>
              ))}

              <div className="social_links">
                {["Instagram", "Facebook", "TikTok", "Pinterest"].map((s) => (
                  <a key={s} href="#" className="social_pill">{s}</a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="contact_form_wrapper">
              {submitted ? (
                <div className="success_msg">
                  <span>✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks {form.name}! We'll get back to you at {form.email} within 24 hours.</p>
                  <button className="btn" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact_form" onSubmit={handleSubmit}>
                  <h2>Send a Message</h2>

                  <div className="form_row">
                    <div className="form_group">
                      <label>Full Name *</label>
                      <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form_group">
                      <label>Email *</label>
                      <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form_group">
                    <label>Subject</label>
                    <input name="subject" type="text" placeholder="Order inquiry, styling help..." value={form.subject} onChange={handleChange} />
                  </div>

                  <div className="form_group">
                    <label>Message *</label>
                    <textarea name="message" rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="btn contact_submit_btn">
                    Send Message ✉️
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;