"use client"
import Head from 'next/head';
import { useState } from 'react';

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

    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Your Website Name</title>
        <meta name="description" content="Reach out to our team with any inquiries, feedback, or support requests. We're here to help!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="mb-4 text-center">Contact Us</h1>
            <p className="text-center text-muted mb-4">
              We’d love to hear from you. Please fill out the form below and we’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="border rounded p-4 shadow-sm bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="alert alert-success text-center mt-3">
                  Thank you! Your message has been sent.
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-danger text-center mt-3">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
