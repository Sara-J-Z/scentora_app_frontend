import React from 'react';
import '../style/AboutUsPage.css';

function AboutUsPage() {
    return (
        <div className="about-us-page">
            <header className="about-us-header">
                <h1>About Scenota</h1>
            </header>
            <section className="about-us-content">
                <p>
                    Welcome to **Scentora**, your premier destination for all things beauty and fragrance.
                    We are a dedicated online platform created to showcase a curated selection of high-quality
                    **makeup and perfumes**.
                </p>
                <p>
                    Our journey begins with two core categories: Makeup and Perfumes, bringing you a collection
                    of products designed to enhance your natural beauty and personal style. While we are
                    currently focused on displaying these exquisite items, we are excited to announce that
                    we are working hard to expand our platform to include full e-commerce functionality,
                    allowing you to shop for your favorite products directly from our site.
                </p>
                <p>
                    At Scentora, we believe in the power of scent and the artistry of makeup. Our mission is
                    to provide a seamless and inspiring experience as you explore the world of beauty.
                </p>
            </section>
        </div>
    );
}

export default AboutUsPage;