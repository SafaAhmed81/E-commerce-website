import React from "react";
// import Footer from "../../components/footer/Footer";
import PageTransition from "../../components/PageTransition";
import "./about.css";

const team = [
   
   
];

function About() {
  return (
    <PageTransition>
      <div className="about_page">

        {/* Hero Section */}
        <div className="about_hero">
          <div className="container">
            <h1>About <span>nORAN</span></h1>
            <p>We believe fashion is more than clothing — it's a form of self-expression.</p>
          </div>
        </div>

        {/* Story Section */}
        <div className="about_story">
          <div className="container">
            <div className="story_grid">
              <div className="story_img">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Our Story" />
              </div>
              <div className="story_text">
                <h2>Our Story</h2>
                <p>
                  nORAN was founded in 2020 with a simple mission: to make premium fashion accessible to everyone. 
                  What started as a small boutique has grown into a thriving online destination for style-conscious shoppers.
                </p>
                <p>
                  We carefully curate every piece in our collection, working with trusted designers and manufacturers 
                  to bring you clothing that's not just stylish — but comfortable, durable, and fairly priced.
                </p>
                <div className="story_stats">
                  <div className="stat">
                    <h3>50K+</h3>
                    <p>Happy Customers</p>
                  </div>
                  <div className="stat">
                    <h3>1200+</h3>
                    <p>Products</p>
                  </div>
                  <div className="stat">
                    <h3>4.9★</h3>
                    <p>Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="about_values">
          <div className="container">
            <h2>Why Choose Us</h2>
            <div className="values_grid">
              {[
                { icon: "🚚", title: "Free Shipping", desc: "Free delivery on orders over $50 to your doorstep." },
                { icon: "♻️", title: "Sustainable Fashion", desc: "We partner with eco-friendly manufacturers." },
                { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free return policy on all items." },
                { icon: "🔒", title: "Secure Payment", desc: "Your payment information is always protected." },
              ].map((val, i) => (
                <div className="value_card" key={i}>
                  <span className="value_icon">{val.icon}</span>
                  <h4>{val.title}</h4>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="about_team">
          <div className="container">
            {/* <h2>Meet the Team</h2> */}
            <div className="team_grid">
              {team.map((member, i) => (
                <div className="team_card" key={i}>
                  <img src={member.img} alt={member.name} />
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}

export default About;