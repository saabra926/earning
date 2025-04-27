import Head from 'next/head';

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Weather Blogs | ExplorerAds</title>
        <meta
          name="description"
          content="Explore in-depth weather blogs on forecasting rain, top weather apps, climate change impact, extreme survival strategies, and global climate differences, curated by ExplorerAds."
        />
        <meta name="keywords" content="weather blogs, how to predict rain, best weather apps 2025, climate change impact, extreme weather survival, global climate variations, ExplorerAds" />
        <meta name="author" content="ExplorerAds Team" />
      </Head>

      {/* Blog Content */}
      <main className="min-vh-100 bg-white py-5 px-3">
        <div className="container">
          <header className="text-center mb-5">
            <h1 className="fw-bold" style={{ color: '#556B2F' }}>Weather Blogs by ExplorerAds</h1>
            <p className="fs-5" style={{ color: '#6c757d' }}>
              Dive into our expert-crafted blogs covering weather predictions, must-have apps, climate change, extreme weather survival tips, and fascinating weather phenomena worldwide.
            </p>
          </header>

          <section className="row g-4">
            {/* Blog Card */}
            {[...Array(5)].map((_, idx) => (
              <article className="col-12" key={idx}>
                <div className="card shadow-sm border-0 h-100" style={{ backgroundColor: '#f9f9f9' }}>
                  <img src={`img${idx + 1}.jpg`} className="card-img-top" alt="Blog Image" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h2 className="card-title fw-semibold fs-4 mb-3" style={{ color: '#556B2F' }}>
                      {/* Add specific blog titles manually if you want */}
                      Blog Title {idx + 1}
                    </h2>
                    <p className="card-text" style={{ color: '#495057' }}>
                      {/* Add specific blog texts manually if you want */}
                      Blog description content goes here. Learn tips, tricks, and in-depth insights into weather, apps, climate change, and survival strategies from ExplorerAds.
                    </p>
                    <p className="text-muted small mt-3">Published: April {18 - idx * 2}, 2025 | ExplorerAds</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
