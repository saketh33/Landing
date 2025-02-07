import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black rounded-t-[5rem] text-white p-10 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* Products Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Qiskad Shop</a></li>
            <li><a href="#" className="hover:text-gray-400">Desktop App</a></li>
            <li><a href="#" className="hover:text-gray-400">Mobile App</a></li>
            <li><a href="#" className="hover:text-gray-400">Browser Extension</a></li>
            <li><a href="#" className="hover:text-gray-400">View All Products</a></li>
          </ul>
        </div>

        {/* Learn Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Solutions</a></li>
            <li><a href="#" className="hover:text-gray-400">Support</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Why Choose OneKey</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400">Submit a Request</a></li>
            <li><a href="#" className="hover:text-gray-400">System Status</a></li>
            <li><a href="#" className="hover:text-gray-400">Firmware Update</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Career</a></li>
            <li><a href="#" className="hover:text-gray-400">Our Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Media Kits</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">User Agreement</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>© 2019 - {new Date().getFullYear()} OneKey Limited. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400">Help</a>
          <a href="#" className="hover:text-gray-400">Referral</a>
          <a href="#" className="hover:text-gray-400">Co-teached Products</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;