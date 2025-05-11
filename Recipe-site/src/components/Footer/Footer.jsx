import React from 'react';
import './Footer.css'; // ניתן להוסיף סגנונות כאן

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>מתכונים טעימים</h2>
                <p>© {new Date().getFullYear()} כל הזכויות שמורות</p>
                <ul className="footer-links">
                    <li><a href="/about">עלינו</a></li>
                    <li><a href="/contact">צור קשר</a></li>
                    <li><a href="/privacy">מדיניות פרטיות</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
