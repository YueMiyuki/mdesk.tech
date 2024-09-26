import Logo from '@/components/Logo'

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-8">
    <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
      <div className="w-full md:w-1/3 text-center md:text-left">
        <Logo />
        <p className="mt-2">Designing and hosting your digital future.</p>
      </div>
      <div className="w-full md:w-1/3 mt-4 md:mt-0">
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-indigo-400">Home</a></li>
          <li><a href="/services" className="hover:text-indigo-400">Services</a></li>
          <li><a href="/about" className="hover:text-indigo-400">About</a></li>
          <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>
      <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-right">
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p>hello@mdesk.tech</p>
      </div>
    </div>
  </footer>
)

export default Footer