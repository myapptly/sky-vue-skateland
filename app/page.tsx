import Link from 'next/link';
import ShareButton from './ShareButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header & Navigation Menu */}
      <div className="bg-red-600 text-white text-center font-bold py-2 px-4">
  <a href="tel:2524427418" className="hover:text-yellow-300">
    CALL (252) 442-7418
  </a>
</div> 

      <header className="border-b border-gray-200 sticky top-0 bg-blue-700 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="flex-shrink-0">
  <img
    src="/sky-vue-logo.png"
    alt="Sky-Vue Skateland"
    className="h-26 md:h-30 w-auto"
  />
</Link> 
          <nav className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-white font-semibold"> 
            <Link href="https://skyvueskateland.com/plan-visit/" className="hover:text-yellow-300">Plan Visit</Link>
            <Link href="https://skyvueskateland.com/roller-skating-party/" className="hover:text-yellow-300">Birthday Parties</Link>
            <Link href="https://skyvueskateland.com/school-trips-rocky-mount-nc/stem-trips/" className="hover:text-yellow-300">STEM Field Trips</Link>
            <Link href="https://skyvueskateland.com/calendar/" className="hover:text-yellow-300">Events</Link>
            <Link href="https://skyvueskateland.com/about-sky-vue-skateland/" className="hover:text-yellow-300">Our Story</Link>
            <a href="https://skyvueskateland.com/blog/" className="hover:text-yellow-300">Blog</a> 
            <Link href="https://skyvueskateland.com/contact-sky-vue-skateland/" className="hover:text-yellow-300">Contact Us</Link>
          </nav>
        </div>
      </header>

          {/* Hero Section optimized for Google SEO */}
<section className="relative overflow-hidden text-white py-16 px-4 text-center">
  <video autoPlay muted loop playsInline poster="/sky-vue-hero.jpg" className="absolute inset-0 h-full w-full object-cover">
  <source src="/sky-vue-hero.mp4" type="video/mp4" />
</video>
 <div className="absolute inset-0 bg-black/20"></div> 
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4"> 
            Welcome to Sky-Vue Skateland in Rocky Mount, NC
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Family-owned and operated roller skating, birthday parties, and wholesome community fun since 1958! Featuring our classic hardwood floor, awesome music, and innovative STEM field trips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://skyvueskateland.com/plan-visit/" className="bg-yellow-400 hover:bg-yellpw-500 text-black font-bold px-6 py-3 rounded-lg shadow">
              Plan Your Visit
            </Link>
            <Link href="https://skyvueskateland.com/roller-skating-party/" className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow">
              Book a Birthday Party
            </Link>
           <ShareButton/>    
          </div>
        </div>
      </section>

      {/* Main Content Sections for SEO & Text Transparency */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
       
        {/* Quick Overview Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Plan Your Visit</h3>
            <p className="text-gray-600 mb-4">
              Check out our public skating hours, admission rates, skate rentals (regular, speed, and inline), and dress code guidelines.
            </p>
            <Link href="https://skyvueskateland.com/plan-visit/" className="text-blue-600 font-semibold">
              View Hours & Pricing →
            </Link> 
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Birthday Parties</h3>
            <p className="text-gray-600 mb-4">
              Kid-tested and Mom-approved! Let us handle the party details with private table setups, music, and unforgettable roller-skating fun.
            </p>
            <Link
  href="https://skyvueskateland.com/birthday-parties-rocky-mount-nc/roller-skating-party/"
  className="text-blue-600 font-semibold">
  Explore Party Packages →
</Link>
</div> 
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">STEM Field Trips</h3>
            <p className="text-gray-600 mb-4">
              An engaging, hands-on educational experience for schools and youth organizations across eastern North Carolina combining physics and motion.
            </p>
            <Link href="https://skyvueskateland.com/school-trips-rocky-mount-nc/stem-trips/" className= "text-blue-600 font-semibold hover:underline">Learn About STEM Trips &rarr;</Link>
          </div>
        </div>

        {/* Monthly Blog & Updates Section */}
        <section className="border-t border-gray-200 pt-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Monthly News & Family Plans</h2>
            <Link href="/events" className="text-blue-600 font-semibold hover:underline">View All Events</Link>
          </div>
         
          <div className="grid md:grid-cols-3 gap-6">
            <article className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">August 2026</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Family Fun Month at Sky-Vue</h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover our special schedules, themed music nights, and ways to keep kids active and rolling all month long.
              </p>
              <a
  href="https://skyvueskateland.com/blog/"
  className="text-sm font-semibold text-blue-900 hover:underline"
>
  Read Monthly Update →
</a> 
            </article>

            <article className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">July 2026</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Celebrating Summer & Community</h3>
              <p className="text-gray-600 text-sm mb-4">
                A look back at our summer sessions, special group bookings, and celebrating local families on the rink.
              </p>
<a
  href="https://skyvueskateland.com/blog/"
  className="text-sm font-semibold text-blue-900 hover:underline"
>
  Read Monthly Update →
</a>             </article>

            <article className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">June 2026</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Chamber Business Award & Recaps</h3>
              <p className="text-gray-600 text-sm mb-4">
                Celebrating our community support, local milestones, and gearing up for high-energy weekend skating sessions.
              </p>
<a
  href="https://skyvueskateland.com/blog/"
  className="text-sm font-semibold text-blue-900 hover:underline"
>
  Read Monthly Update →
</a>             </article>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sky-Vue Skateland. 13734 US Hwy 64 Alt W, Rocky Mount, NC 27801.</p>
          <p className="mt-4 md:mt-0">Phone: (252) 442-7418</p>
        </div>
      </footer>
    </div>
  );
}

 
