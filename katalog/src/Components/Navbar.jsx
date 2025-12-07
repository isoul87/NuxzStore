// src/components/Navbar.jsx
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300" id="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <i className="fas fa-shopping-bag text-white text-lg"></i>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Nuxzstore
                    </span>
                </div>

               
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">Home</a>
                    <a href="#products" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">Produk</a>
                    <a href="#features" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">Fitur</a>
                    <a href="#contact" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">Kontak</a>
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Login
                    </button>
                </div>

               
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" id="mobile-menu-btn">
                    <i className="fas fa-bars text-gray-700 text-xl"></i>
                </button>
            </div>
        </div>

       
        <div className="md:hidden hidden bg-white border-t" id="mobile-menu">
            <div className="px-4 py-2 space-y-2">
                <a href="#home" className="block py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
                <a href="#products" className="block py-2 text-gray-700 hover:text-primary transition-colors">Produk</a>
                <a href="#features" className="block py-2 text-gray-700 hover:text-primary transition-colors">Fitur</a>
                <a href="#contact" className="block py-2 text-gray-700 hover:text-primary transition-colors">Kontak</a>
                <button className="w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg">
                    Login
                </button>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
