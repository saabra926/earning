import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Your Website Name</title>
        <meta name="description" content="Get in touch with us through our contact form. We'd love to hear from you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
