 import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-shade-300 text-gray-300 mt-8 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="/logo-shop.png" alt="Construction Marketplace Logo" className="h-8" />
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>charles@foremangh.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+233 249 911 264</span>
            </div>
            <div className="flex space-x-4">
              <Twitter className="cursor-pointer hover:text-white" size={20} />
              <Instagram className="cursor-pointer hover:text-white" size={20} />
              <Facebook className="cursor-pointer hover:text-white" size={20} />
              <Youtube className="cursor-pointer hover:text-white" size={20} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/shop" className="hover:text-white">Building Materials</a></li>
              <li><a href="/shop" className="hover:text-white">Equipment & Tool Rental</a></li>
              <li><a href="/" className="hover:text-white">Project Management</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/terms_policies" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="/terms_policies/policies" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/dashboard" className="hover:text-white">My Account</a></li>
              <li><a href="/" className="hover:text-white">Shipping & Delivery</a></li>
              {/* <li><a href="#" className="hover:text-white">Safety Resources</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
