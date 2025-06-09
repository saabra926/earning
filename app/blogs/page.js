"use client";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import "./page.css";

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "How to Predict Rain Like a Pro: A Beginner's Guide",
      excerpt: "Learn to read nature's signs for rain prediction beyond weather apps.",
      content: "Rain prediction is much more than just looking at a weather app...",
      image: "/img1.jpg",
      date: "April 18, 2025",
      tags: ["weather", "prediction", "nature"],
      readTime: "8 min read",
      category: "forecasting"
    },
    {
      id: 2,
      title: "Understanding Extreme Weather Patterns",
      excerpt: "How climate change is affecting weather extremes worldwide.",
      content: "In recent years, we've seen unprecedented weather events...",
      image: "/img2.jpg",
      date: "May 5, 2025",
      tags: ["climate", "extreme weather", "science"],
      readTime: "10 min read",
      category: "climate"
    },
    {
      id: 3,
      title: "The Future of Weather Technology",
      excerpt: "Emerging technologies that are revolutionizing meteorology.",
      content: "From AI-powered forecasting to satellite advancements...",
      image: "/img3.jpg",
      date: "June 12, 2025",
      tags: ["technology", "innovation", "forecasting"],
      readTime: "6 min read",
      category: "technology"
    },
    {
      id: 4,
      title: "Weather Survival Guide for Outdoor Enthusiasts",
      excerpt: "Essential tips to stay safe in unpredictable weather conditions.",
      content: "When venturing into the wilderness, weather can change rapidly...",
      image: "/img4.jpg",
      date: "July 8, 2025",
      tags: ["survival", "outdoors", "safety"],
      readTime: "12 min read",
      category: "survival"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setFilteredBlogs(blogs);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let results = blogs;
    
    // Apply search filter
    if (searchTerm.trim() !== "") {
      results = results.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )}
    
    // Apply category filter
    if (activeFilter !== "all") {
      results = results.filter(blog => blog.category === activeFilter);
    }
    
    setFilteredBlogs(results);
  }, [searchTerm, activeFilter]);

  return (
<>
      <Head>
        <link rel="canonical" href="https://www.exploreweather.site/blogs" />
      </Head>

    <div className="blogs-container">
      {/* Information Header */}
      <header className="blogs-header">
        <div className="header-content">
          <h1 className="header-title">Weather Insights Blog</h1>
          <p className="header-description">
            Discover expert articles on weather forecasting, climate science, and survival strategies
          </p>
          
          <div className="search-filter-container">
            <div className="search-box">
              <input 
                type="search" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                All Topics
              </button>
              <button 
                className={`filter-btn ${activeFilter === "forecasting" ? "active" : ""}`}
                onClick={() => setActiveFilter("forecasting")}
              >
                Forecasting
              </button>
              <button 
                className={`filter-btn ${activeFilter === "climate" ? "active" : ""}`}
                onClick={() => setActiveFilter("climate")}
                >
                Climate
              </button>
              <button 
                className={`filter-btn ${activeFilter === "technology" ? "active" : ""}`}
                onClick={() => setActiveFilter("technology")}
                >
                Technology
              </button>
              <button 
                className={`filter-btn ${activeFilter === "survival" ? "active" : ""}`}
                onClick={() => setActiveFilter("survival")}
              >
                Survival
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="blogs-main">
        {isLoading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading articles...</p>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="blogs-columns">
            {/* First Column */}
            <div className="blog-column">
              {filteredBlogs.filter((_, index) => index % 2 === 0).map(blog => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-image-container">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      loading="lazy"
                    />
                    <span className="read-time">{blog.readTime}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-tags">
                      {blog.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h2 className="blog-title">
                      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h2>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-footer">
                      <Link href={`/blogs/${blog.id}`} className="read-more">
                        Read Article
                      </Link>
                      <span className="publish-date">{blog.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Second Column */}
            <div className="blog-column">
              {filteredBlogs.filter((_, index) => index % 2 === 1).map(blog => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-image-container">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      loading="lazy"
                    />
                    <span className="read-time">{blog.readTime}</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-tags">
                      {blog.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h2 className="blog-title">
                      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h2>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-footer">
                      <Link href={`/blogs/${blog.id}`} className="read-more">
                        Read Article
                      </Link>
                      <span className="publish-date">{blog.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filters</p>
            <button 
              className="reset-filters"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
              }}
              >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      
    </div>
              </>
  );
}