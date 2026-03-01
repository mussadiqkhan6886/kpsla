import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane, FaFacebook, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              KPSLA
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the next generation of leaders through bold programs, 
              expert mentorship, and a global community of high-performers.
            </p>
            <div className="flex gap-4">
              <Link target="_blank" href="https://www.tiktok.com/@kpsla8?_r=1&_t=ZN-94J3VXzMibm" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <FaTiktok size={18} />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/p/Kp-Students-Leadership-Association-61567282782387/" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <FaFacebook size={18} />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/kp_stdsleadershipassociation/?__d=1%2B" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about-us" className="hover:text-blue-400 transition-colors">Our Mission</Link></li>
              <li><Link href="/registration" className="hover:text-blue-400 transition-colors">Register</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition-colors">Upcoming Events</Link></li>
              <li><Link href="#success-stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#faq" className="hover:text-blue-400 transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 p-3 flex justify-center items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} KPSLA LEADERSHIP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer