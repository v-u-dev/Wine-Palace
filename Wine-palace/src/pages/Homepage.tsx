import Navbar from "../components/Navbar";
import WineCellar from '../assets/Wine cellar.webp';
import Champagne from '../assets/shampane.png';
import WhiteWine from '../assets/White wine.jpg';
import RedWine from '../assets/Red wine.webp';
import ReservedCollcetion from '../assets/Reserve collection.jpg';

import { Wine } from 'lucide-react';

import { IconGlassCocktail } from '@tabler/icons-react';
import { IconGlassChampagne } from '@tabler/icons-react';

import '../styles/Home.css'

function Home () {
    return (
        <>
        <Navbar />

        <section id="hero" className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>Welcome to Dominique Wine Palace</h1>
                <p>Discover the finest selections of wines</p>
                <a href="#services" className="btn">Eplore Our Wines</a>
            </div>
        </section>

        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Us</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>At Dominique Wine Palace, we are passionate about bringing you the most equisite winr experience.</p>
                        <p>Whether you're a seasoned connoissuer or just beginning your wine adventure, we invite you to explore, taste, and celebrate the art of fine wine with us in an atmosphere of timeless elegance</p>
                    </div>
                </div>
                <div className="about-image">
                    <img src={WineCellar} alt="Wine Cellat at Dominique Wine Palace" />
                </div>
            </div>
        </section>

        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title"> Our Wine Collection</h2>
                <div className="services-grid">
                    <div className="services-card">
                        <div className="card-image">
                            <img src={RedWine} alt="Red Wine Selection" />
                        </div>
                        <div className="card-body">
                            <div className="card-icon">
                                <Wine size={24} color="#4a1a2c" strokeWidth={1.5} />
                            </div>
                            <h3>Red Wine</h3>
                            <p>From bold Cabernet Sauvignons to elegant Pinot Noirs, explore our rich selection of red wines sourced from premier vineyards across Bordeaux, Barolo, and beyond.</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="card-image">
                            <img src={WhiteWine} alt="White wine Selection" />
                        </div>
                        <div className="card-body">
                            <div className="card-icon">
                                <Wine size={24} color="#4a1a2c" strokeWidth={1.5} />
                            </div>
                            <h3>White Wine</h3>
                            <p>Discover crisp Chardonnays, refreshing Sauvignon Blancs, and aromatic Rieslings. Our white wine collection offers something for every palate and occasion.</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="card-image">
                            <img src={Champagne} alt="Sparkling wine and champagne" />
                        </div>
                        <div className="card-body">
                            <div className="card-icon">
                                <IconGlassChampagne size={24} color="#4a1a2c" stroke={1.5} />
                            </div>
                            <h3>Sparkling & Champagne</h3>
                            <p>Celebrate life's moments with our exquisite sparkling wines and Champagnes, featuring Brut, Rosé, and vintage selections from the finest houses.</p>
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="card-image">
                            <img src={ReservedCollcetion} alt="Reserve wine collection" />
                        </div>
                        <div className="card-body">
                            <div className="card-icon">
                                <IconGlassCocktail size={24} color="#4a1a2c" stroke={1.5} />
                            </div>
                            <h3>Sparkling & Champagne</h3>
                            <p>Celebrate life's moments with our exquisite sparkling wines and Champagnes, featuring Brut, Rosé, and vintage selections from the finest houses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Visit Us</h3>
                        <p><span className="contact-label">Address:</span>23 Vineyard Lane, Napa Valley, CA 94558</p>
                        <p><span className="contact-label">Phone</span>(555) 123-4567</p>
                        <p><span className="contact-label">Email:</span> info@dominiquewinepalace.com</p>
                        <p><span className="contact-label">Hours</span> Mon-Sat: 10AM - 9PM | Sun: 12PM - 6PM</p>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100559.11235446872!2d-122.36952872167967!3d38.340225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808509b5b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sNapa%20Valley!5e0!3m2!1sen!2sus!4v1"
                        width='100%'
                        height='300'
                        style={{ border: 0, borderRadius: '6px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">You Email</label>
                    <input type="email" id="email" placeholder="john@example.com" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Message">You Message</label>
                    <textarea id="Message" placeholder="How can we help you?" rows={5} required />
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
            </div>
        </section>

        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Dominique Wine Palace. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}

export default Home;