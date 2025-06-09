"use client";
import Link from "next/link";
import Head from "next/head";
import { useParams } from "next/navigation";
import "./page.css";

// Sample blog data (should match your listing page)
const blogs = [
    {
        id: 1,
        title: "How to Predict Rain Like a Pro: A Beginner's Guide",
        excerpt: "Learn to read nature's signs for rain prediction beyond weather apps.",
        content: `
      <p>Rain prediction is much more than just looking at a weather app. For centuries, people have relied on natural signs to predict incoming rain. Here are some traditional methods that still work today:</p>
      
      <h3>Cloud Observations</h3>
      <p>Cumulonimbus clouds are the classic rain clouds - tall, dense, and often anvil-shaped. When you see these forming, rain is likely within a few hours.</p>
      
      <h3>Animal Behavior</h3>
      <p>Many animals sense changes in atmospheric pressure. Birds flying lower than usual or ants building steeper mounds can indicate approaching rain.</p>
      
      <h3>Plant Signals</h3>
      <p>Some plants like dandelions close their flowers before rain. Pine cones also close when humidity increases, signaling potential rainfall.</p>
      
      <h3>Modern Techniques</h3>
      <p>While these traditional methods are useful, combining them with modern weather apps gives you the most accurate predictions. Look for apps that provide:</p>
      <ul>
        <li>Real-time radar images</li>
        <li>Barometric pressure trends</li>
        <li>Humidity and dew point data</li>
      </ul>
      
      <p>By learning both traditional and modern methods, you'll become skilled at predicting rain in any situation.</p>
    `,
        image: "/img1.jpg",
        date: "April 18, 2025",
        tags: ["weather", "prediction", "nature"],
        readTime: "8 min read",
        category: "forecasting"
    },

];

export default function BlogDetail() {
    const params = useParams();
    const blogId = parseInt(params.id);
    const blog = blogs.find(blog => blog.id === blogId);

    if (!blog) {
        return (
            <div className="blog-not-found">
                <h1>Article Not Found</h1>
                <p>The article you're looking for doesn't exist or may have been removed.</p>
                <Link href="/blogs" className="back-to-blogs">
                    Return to Blog
                </Link>
            </div>
        );
    }

    return (
        <>

            <Head>
                <link rel="canonical" href="https://www.exploreweather.site/about" />
            </Head>

            <div className="blog-detail-container">
                {/* Back button */}
                <div className="back-nav">
                    <Link href="/blogs" className="back-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Articles
                    </Link>
                </div>

                {/* Blog Header */}
                <header className="blog-header">
                    <div className="blog-meta">
                        <span className="blog-date">{blog.date}</span>
                        <span className="blog-read-time">{blog.readTime}</span>
                        <div className="blog-tags">
                            {blog.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <h1 className="blog-title">{blog.title}</h1>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                </header>

                {/* Featured Image */}
                <div className="blog-featured-image">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        loading="lazy"
                    />
                </div>

                {/* Blog Content */}
                <article
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Related Articles (optional) */}
                <section className="related-articles">
                    <h2>More Articles You Might Like</h2>
                    <div className="related-grid">
                        {blogs
                            .filter(b => b.id !== blog.id && b.category === blog.category)
                            .slice(0, 2)
                            .map(relatedBlog => (
                                <div key={relatedBlog.id} className="related-card">
                                    <Link href={`/blogs/${relatedBlog.id}`}>
                                        <img src={relatedBlog.image} alt={relatedBlog.title} />
                                        <h3>{relatedBlog.title}</h3>
                                        <p>{relatedBlog.excerpt}</p>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </section>

                {/* Back to top button */}
                <button
                    className="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    Back to Top
                </button>
            </div>
        </>
    );
}