import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header & Navigation Menu */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-blue-900">
            Sky-Vue Skateland
          </div>
          <nav className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 text-sm font-semibold text-gray-700">
            <Link href="/plan-visit" className="hover:text-blue-600">Plan Visit</Link>
            <Link href="/birthday-parties" className="hover:text-blue-600">Birthday Parties</Link>
            <Link href="/stem-field-trips" className="hover:text-blue-600">STEM Field Trips</Link>
            <Link href="/events" className="hover:text-blue-600">Events</Link>
            <Link href="/our-story" className="hover:text-blue-600">Our Story</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section optimized for Google SEO */}
      <section className="bg-blue-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to Sky-Vue Skateland in Rocky Mount, NC
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Family-owned and operated roller skating, birthday parties, and wholesome community fun since 1958! Featuring our classic hardwood floor, awesome music, and innovative STEM field trips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/plan-visit" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-6 py-3 rounded-lg shadow">
              Plan Your Visit
            </Link>
            <Link href="/birthday-parties" className="bg-white hover:bg-gray-100 text-blue-900 font-bold px-6 py-3 rounded-lg shadow">
              Book a Birthday Party
            </Link>
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
            <Link href="/plan-visit" className="text-blue-600 font-semibold hover:underline">View Hours & Pricing &rarr;</Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Birthday Parties</h3>
            <p className="text-gray-600 mb-4">
              Kid-tested and Mom-approved! Let us handle the party details with private table setups, music, and unforgettable roller-skating fun.
            </p>
            <Link href="/birthday-parties" className="text-blue-600 font-semibold hover:underline">Explore Party Packages &rarr;</Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 mb-2">STEM Field Trips</h3>
            <p className="text-gray-600 mb-4">
              An engaging, hands-on educational experience for schools and youth organizations across eastern North Carolina combining physics and motion.
            </p>
            <Link href="/stem-field-trips" className="text-blue-600 font-semibold hover:underline">Learn About STEM Trips &rarr;</Link>
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
              <span className="text-sm font-semibold text-blue-900">Read Monthly Update</span>
            </article>

            <article className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">July 2026</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Celebrating Summer & Community</h3>
              <p className="text-gray-600 text-sm mb-4">
                A look back at our summer sessions, special group bookings, and celebrating local families on the rink.
              </p>
              <span className="text-sm font-semibold text-blue-900">Read Monthly Update</span>
            </article>

            <article className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">June 2026</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">Chamber Business Award & Recaps</h3>
              <p className="text-gray-600 text-sm mb-4">
                Celebrating our community support, local milestones, and gearing up for high-energy weekend skating sessions.
              </p>
              <span className="text-sm font-semibold text-blue-900">Read Monthly Update</span>
            </article>
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

 
