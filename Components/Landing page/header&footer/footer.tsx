import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const backgroundImage = ''; // Replace with your actual background image path if needed

    return (
        <footer className="bg-gray-300 py-8" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8">
                    
                    {/* Contact Section */}
                    <div className="footer-section">
                        <a href="#">
                            <img className="mb-4 w-[200px]" src="/FUTURZ LOGO 01.png" alt="logo" />
                        </a>
                        <h4 className="text-sm font-extrabold text-black mb-4">Contact</h4>
                        <p className="text-sm mb-2">
                            <strong>Address:</strong> B/106 Veena Industrial Estate,<br />
                            Landmark - Monginis Cake Factory,<br />
                            Link Road, Andheri West,<br />
                            Mumbai - 400053, Maharashtra, India
                        </p>
                        <p className="text-sm mb-2">
                            <strong>Email:</strong> <a href="mailto:contact.futurz.4x4@gmail.com" className="text-black hover:text-gray-900">contact.futurz.4x4@gmail.com</a>
                        </p>
                        <div className="follow mt-4">
                            <h4 className="text-sm font-extrabold text-black mb-4">Follow Us</h4>
                            <div className="flex space-x-3">
                                <i className="fab fa-facebook-f text-black hover:text-gray-400 cursor-pointer"></i>
                                <i className="fab fa-instagram text-black hover:text-gray-400 cursor-pointer"></i>
                                <i className="fab fa-twitter text-black hover:text-gray-400 cursor-pointer"></i>
                                <i className="fab fa-youtube text-black hover:text-gray-400 cursor-pointer"></i>
                                <i className="fab fa-pinterest-p text-black hover:text-gray-400 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="footer-section">
                        <h3 className="text-sm font-extrabold text-black mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Overview</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Know Us</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Contact Us</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Testimonials</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Portfolio</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Customers</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Enquiry Form</a></li>
                        </ul>
                    </div>

                    {/* Legal and Policies Section */}
                    <div className="footer-section">
                        <h3 className="text-sm font-extrabold text-black mb-4">Legal and Policies</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Shipping Policy</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Terms & Conditions</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Cancellation/Refund</a></li>
                        </ul>
                    </div>

                    {/* Product Categories and Payment Section */}
                    <div className="footer-section">
                        <h3 className="text-sm font-extrabold text-black mb-4">Product Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Suzuki Jimny</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Thar 2020-2024</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Isuzu V-Cross</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Toyota Hilux</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Ironman 4x4</a></li>
                            <li><a href="#" className="text-black font-bold hover:text-gray-400">Products</a></li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="text-sm font-extrabold text-black mb-4">Secured Payment Gateways</h4>
                            <img src="/footer/footerPayment.webp" alt="Secured Payment" className="mt-2" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-200 pt-8 text-center">
                    <p className="text-xs text-gray-600">&copy; 2024 Futurz4x4. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
