import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              EDU<span className="text-blue-500">PATH</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the next generation of leaders through bold programs, 
              expert mentorship, and a global community of high-performers.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <FaLinkedinIn size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <FaTwitter size={18} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">Our Mission</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Programs</Link></li>
              <li><Link href="/events" className="hover:text-blue-400 transition-colors">Upcoming Events</Link></li>
              <li><Link href="/success-stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/faq" className="hover:text-blue-400 transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Get the latest leadership insights and event alerts delivered to your inbox.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-blue-600 transition-colors text-white"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1.5 h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} EDUPATH LEADERSHIP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Global</Link>
            <Link href="#" className="hover:text-white transition-colors">Affiliates</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer