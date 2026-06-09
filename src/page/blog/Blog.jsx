import React, { useState } from "react";
import PageTransition from "../../components/PageTransition";
import "./blog.css";

const posts = [
  {
    id: 1,
    category: "Style Tips",
    title: "10 Ways to Style a White Shirt This Season",
    excerpt: "The white shirt is a wardrobe staple. Here's how to make it work for every occasion from casual to formal.",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80",
    author: "Sara Khaled",
    date: "Jan 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Trends",
    title: "The Colors Dominating Fashion in 2025",
    excerpt: "From mocha mousse to electric blue — discover the palette that's taking over runways and streets alike.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    author: "Noran Ahmed",
    date: "Feb 3, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Sustainable Fashion",
    title: "How to Build a Capsule Wardrobe on a Budget",
    excerpt: "A capsule wardrobe doesn't have to be expensive. Learn how to invest wisely in timeless pieces.",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    author: "Omar Hassan",
    date: "Feb 20, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Style Tips",
    title: "Accessories That Transform Any Outfit",
    excerpt: "The right accessory can elevate even the simplest look. Here are our top picks for the season.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    author: "Sara Khaled",
    date: "Mar 5, 2025",
    readTime: "3 min read",
  },
  {
    id: 5,
    category: "Trends",
    title: "Street Style Inspiration From Around the World",
    excerpt: "We've rounded up the best street style looks from Cairo, Paris, Tokyo, and New York.",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    author: "Noran Ahmed",
    date: "Mar 18, 2025",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Sustainable Fashion",
    title: "Why We're Committed to Ethical Manufacturing",
    excerpt: "Behind every nORAN piece is a story of fair wages, safe conditions, and sustainable practices.",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
    author: "Omar Hassan",
    date: "Apr 1, 2025",
    readTime: "5 min read",
  },
];

const categories = ["All", "Style Tips", "Trends", "Sustainable Fashion"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="blog_page">

        {/* Header */}
        <div className="blog_hero">
          <div className="container">
            <h1>Our <span>Blog</span></h1>
            <p>Fashion tips, trends, and stories from the nORAN team.</p>
          </div>
        </div>

        <div className="container">

          {/* Filter Tabs */}
          <div className="blog_filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter_btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog_grid">
            {filtered.map((post) => (
              <div className="blog_card" key={post.id}>
                <div className="blog_card_img">
                  <img src={post.img} alt={post.title} />
                  <span className="blog_category">{post.category}</span>
                </div>
                <div className="blog_card_body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog_meta">
                    <span className="blog_author">By {post.author}</span>
                    <span className="blog_date">{post.date} · {post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;