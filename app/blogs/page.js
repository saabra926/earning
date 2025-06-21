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
    // 1st blog
    {
      id: 1,
      title: "Understanding 10-Day Weather Forecasts",
      excerpt: "10-Day Weather Forecast: Accurate Predictions for Your Area",
      content: "10-Day Weather forecast is much more than just looking at a weather app...",
      image: "/img1.jpg",
      alt: '10-Day Weather Forecasts',
      date: "1 hour ago",
      tags: ["weather", "prediction", "nature", "forecast"],
      readTime: "12 min read",
      category: "forecasting"
    },
    // 2nd blog
    {
      id: 2,
      title: "Understanding Extreme Weather Alerts",
      excerpt: "Extreme Weather Alerts: How to Stay Safe During Storms.",
      content: "In recent years, we've seen unprecedented weather events...",
      image: "/img2.jpg",
      alt: 'Extreme Weather Alerts',
      date: "35 min ago",
      tags: ["climate", "extreme weather", "science"],
      readTime: "10 min read",
      category: "climate"
    },
    // 3rd blog
    {
      id: 3,
      title: "AccuWeather – Best for Hyper-Local Forecasts",
      excerpt: "Best Weather Apps in 2025: Real-Time Updates & Radar..",
      content: "From AI-powered forecasting to satellite advancements...",
      image: "/img3.jpg",
      alt: 'Best for Hyper-Local Forecasts',
      date: "9 min ago",
      tags: ["technology", "innovation", "forecasting"],
      readTime: "6 min read",
      category: "technology"
    },
    // 4th blog
    {
      id: 4,
      title: "Weather Survival Guide for Outdoor Enthusiasts",
      excerpt: "How Does Climate Change Affect Weather Patterns?",
      content: "When venturing into the wilderness, weather can change rapidly...",
      image: "/img4.jpg",
      alt: 'Guide for Outdoor Enthusiasts',
      date: "17 min ago",
      tags: ["survival", "outdoors", "safety"],
      readTime: "12 min read",
      category: "technology"
    },
    // 5th blog
    {
      id: 5,
      title: "Why Winter Storms Are Dangerous",
      excerpt: "Winter Storm Preparedness: Essential Tips for Safety.",
      content: "When that winter start, what should we do ...",
      image: "/snowy.jpg",
      alt: 'Winter Storms Are Dangerous',
      date: "29 min ago",
      tags: ["survival", "outdoors", "safety", "winters"],
      readTime: "10 min read",
      category: "survival"
    },
    // 6th blog
    {
      id: 6,
      title: "Why Was 2024 So Destructive?",
      excerpt: "Hurricane Season 2024: Predictions & Survival Guide.",
      content: "the Hidden fact about the year 2024 ...",
      image: "/pic4.jpg",
      alt: '2024 So Destructive',
      date: "31 min ago",
      tags: ["survival", "outdoors", "safety", "hurricane"],
      readTime: "10 min read",
      category: "survival"
    },
    // 7th blog
    {
      id: 7,
      title: "What Causes Thunderstorms?",
      excerpt: "What Causes Thunderstorms? The Science Behind the Storms.",
      content: "Causes of Thunderstorms and the relation of science ...",
      image: "/pic1.jpg",
      alt: 'Causes Thunderstorms',
      date: "11 min ago",
      tags: ["survival", "outdoors", "safety", "Thunderstorms"],
      readTime: "10 min read",
      category: "climate"
    },
     // 8th blog
    {
      id: 8,
      title: "How to Stay Cool in Extreme Heat?",
      excerpt: "Heat Wave Safety Tips: How to Stay Cool in Extreme Heat.",
      content: "Causes of heatwaves and the their safety tips ...",
      image: "/img18.jpg",
      alt: 'Stay Cool in Extreme Heat',
      date: "13 min ago",
      tags: ["survival", "outdoors", "safety", "heat" ,"extreme"],
      readTime: "10 min read",
      category: "survival"
    },

    // 9th blog
    {
      id: 9,
      title: "What Are El Niño and La Niña?",
      excerpt: "El Niño vs. La Niña: How They Impact Global Weather.",
      content: "Today we knwoing diference between El Niño and La Niña  ...",
      image: "/img12.jpg",
      alt: 'El Niño and La Niña',
      date: "2 hours ago",
      tags: ["survival", "outdoors", "weather", "global" ,"impact"],
      readTime: "9 min read",
      category: "technology"
    },

      // 10th blog
    {
      id: 10,
      title: "Understanding Seasonal Travel Weather",
      excerpt: "Best Time to Travel: Weather Conditions Around the World.",
      content: "Today we knwoing Weather Conditions Around the World  ...",
      image: "/img18.png",
      alt: 'Understanding Seasonal Travel Weather',
      date: "13 hours ago",
      tags: ["survival", "outdoors", "weather", "conditions" ,"travel"],
      readTime: "9 min read",
      category: "climate"
    },
    
      // 11th blog
    {
      id: 11,
      title: "How to Read a Weather Radar Like a Meteorologist",
      excerpt: "Read weather like an expert with all features.",
      content: "Now you will also be able to read weather like an expert  ...",
      image: "/expert.jpg",
      alt: 'Read like an expert',
      date: "1 hours ago",
      tags: ["outdoors", "weather", "conditions" ],
      readTime: "9 min read",
      category: "climate"
    },

      // 12th blog
    {
      id: 12,
      title: "Tornado Warning Signs & How to Protect Your Family",
      excerpt: "Protect your family in serious situations.",
      content: "Learn how to behave in hallarious situations  ...",
      image: "/protect.jpg",
      alt: 'Emergency situation',
      date: "11 min ago",
      tags: ["outdoors", "weather", "conditions" , "safety"],
      readTime: "8 min read",
      category: "Survival"
    },

      // 13th blog
    {
      id: 13,
      title: "Monsoon Season Explained: What to Expect & How to Prepare",
      excerpt: "How the moonsoon season enter in the country ",
      content: "Style of moonsoon in different countries  ...",
      image: "/moonsoon.jpg",
      alt: 'Moonsoon season',
      date: "41 min ago",
      tags: ["outdoors", "weather", "conditions" , "climate"],
      readTime: "7 min read",
      category: "Climate"
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
      )
    }

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
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
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