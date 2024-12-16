import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-shade-300 text-gray-300 mt-8 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo-shop.png"
              alt="Construction Marketplace Logo"
              width={200}
              height={50}
            />
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:info@foremangh.com">info@foremangh.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:+2330558587833">0558587833</a> /{" "}
              <a href="tel:+233054124783">054124783</a>
            </div>
            <div className="flex space-x-4">
              <Link href={"https://x.com/foreman_gh"}>
                <FaXTwitter
                  className="cursor-pointer hover:text-white"
                  size={20}
                />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/foreman_ghana?igsh=amIxYnNqeXBieGll"
                }
              >
                <FaInstagram
                  className="cursor-pointer hover:text-white"
                  size={20}
                />
              </Link>
              <Link href={"https://web.facebook.com/Myforeman"}>
                <FiFacebook
                  className="cursor-pointer hover:text-white"
                  size={20}
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li>
                <a href="/store" className="hover:text-white">
                  Building Materials
                </a>
              </li>
              <li>
                <a href="/project-management" className="hover:text-white">
                  Project Management
                </a>
              </li>
              <li>
                <a href="/equipment-rental" className="hover:text-white">
                  Equipment & Tool Rental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Information</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms_conditions" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/policies" className="hover:text-white">
                  Delivery and Refunds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/dashboard" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              {/* <li><a href="#" className="hover:text-white">Safety Resources</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
