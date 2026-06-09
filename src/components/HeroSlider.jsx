 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
// import "./hero.css";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    tag: "New Collection 2025",
    title: "Elegant Women\nFashion",
    desc: "Discover the latest trends in women's clothing",
  },
  {
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    tag: "Summer Sale",
    title: "Modern Style\nFor Everyone",
    desc: "Up to 40% off on selected items",
  },
  {
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    tag: "Exclusive Picks",
    title: "Dress To\nImpress",
    desc: "Curated fashion for every occasion",
  },
];

function HeroSlider() {
  return (
    <div className="hero">
      <div className="container">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero_slide_inner">
                <div className="content">
                  <h4>{slide.tag}</h4>
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <Link to="/category/womens-dresses" className="btn">
                    Shop Now
                  </Link>
                </div>
                <div className="hero_img_wrapper">
                  <img src={slide.img} alt={slide.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSlider;