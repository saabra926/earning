"use client"
import { useState } from 'react';
import "./page.css"

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>


      <div className="bg-cream py-5 min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-chocolate mb-3">Contact Us</h1>
                <p className="lead text-muted">
                  We'd love to hear from you. Please fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="card border-chocolate shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-bold text-chocolate">Full Name *</label>
                      <input
                        type="text"
                        className="form-control bg-light-cream border-chocolate"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-bold text-chocolate">Email Address *</label>
                      <input
                        type="email"
                        className="form-control bg-light-cream border-chocolate"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label fw-bold text-chocolate">Message *</label>
                      <textarea
                        className="form-control bg-light-cream border-chocolate"
                        id="message"
                        name="message"
                        rows="6"
                        required
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-chocolate py-3"
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>

                    {status === 'success' && (
                      <div className="alert alert-success mt-4 text-center">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="alert alert-danger mt-4 text-center">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        Oops! Something went wrong. Please try again later.
                      </div>
                    )}
                  </form>
                </div>
              </div>

              <div className="text-center mt-5">
                <h3 className="h5 text-chocolate mb-3">Other Ways to Reach Us</h3>
                <div className="d-flex justify-content-center gap-4">
                  <a href="mailto:support@weathernow.com" className="text-decoration-none text-chocolate">
                    <i className="bi bi-envelope-fill me-2"></i>Email
                  </a>
                  <a href="tel:+18005551234" className="text-decoration-none text-chocolate">
                    <i className="bi bi-telephone-fill me-2"></i>Phone
                  </a>
                  <a href="https://twitter.com/WeatherNowSupport" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-chocolate">
                    <i className="bi bi-twitter me-2"></i>Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}