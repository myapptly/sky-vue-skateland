'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import ShareButton from './ShareButton';

const defaultContent = {
  announcement: '',
  hoursSummary: 'Check the current public skating schedule, seasonal hours, admission and rental information.',
  hoursUrl: 'https://skyvueskateland.com/hours-pricing/',
  eventsSummary: 'Find upcoming special skates, family events, promotions and other activities on Sky-Vue’s live calendar.',
  eventsUrl: 'https://skyvueskateland.com/calendar/',
  blogTitle: 'News From Sky-Vue',
  blogSummary: 'Read Sky-Vue’s newest announcement or monthly update directly from the rink.',
  blogUrl: 'https://skyvueskateland.com/blog/',
  partiesSummary: 'Plan an active, family-friendly birthday at the rink.',
  partiesUrl: 'https://skyvueskateland.com/birthday-parties-rocky-mount-nc/roller-skating-party/',
  fieldTripsSummary: 'Bring science to life with motion, physics and skating.',
  fieldTripsUrl: 'https://skyvueskateland.com/school-trips-rocky-mount-nc/stem-trips/',
};

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=13734+US+Hwy+64+Alt+W+Rocky+Mount+NC+27801';

const quickActions = [
  {
    label: 'Hours & Pricing',
    detail: 'See the current skating schedule and admission information.',
    href: 'https://skyvueskateland.com/hours-pricing/',
    accent: 'bg-yellow-400 text-black hover:bg-yellow-500',
  },
  {
    label: 'What’s Happening',
    detail: 'Check current events, special skates and family activities.',
    href: 'https://skyvueskateland.com/calendar/',
    accent: 'bg-red-600 text-white hover:bg-red-700',
  },
  {
    label: 'Birthday Parties',
    detail: 'See party options and start planning a celebration.',
    href: 'https://skyvueskateland.com/birthday-parties-rocky-mount-nc/roller-skating-party/',
    accent: 'bg-blue-700 text-white hover:bg-blue-800',
  },
  {
    label: 'STEM Field Trips',
    detail: 'Explore hands-on educational trips for schools and groups.',
    href: 'https://skyvueskateland.com/school-trips-rocky-mount-nc/stem-trips/',
    accent: 'bg-blue-700 text-white hover:bg-blue-800',
  },
  {
    label: 'Call Sky-Vue',
    detail: 'Talk directly with the rink about parties, groups or questions.',
    href: 'tel:2524427418',
    accent: 'bg-red-600 text-white hover:bg-red-700',
  },
  {
    label: 'Get Directions',
    detail: 'Open directions to Sky-Vue Skateland in Rocky Mount.',
    href: directionsUrl,
    accent: 'bg-yellow-400 text-black hover:bg-yellow-500',
  },
];

export default function Home() {
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    getDoc(doc(db, 'siteContent', 'main')).then((snapshot) => {
      if (snapshot.exists()) setContent({ ...defaultContent, ...snapshot.data() });
    }).catch(() => undefined);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold md:justify-between">
          <a href="tel:2524427418" className="hover:text-yellow-300">
            CALL (252) 442-7418
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-yellow-300"
          >
            📍 13734 US Hwy 64 Alt W, Rocky Mount, NC
          </a>
          <ShareButton />
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-blue-800 bg-blue-700 shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-4 py-3 md:flex-row">
          <Link href="/" className="flex-shrink-0">
            <img
              src="/sky-vue-logo.png"
              alt="Sky-Vue Skateland"
              className="h-24 w-auto md:h-28"
            />
          </Link>
          <nav className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold text-white md:mt-0">
            <a href="https://skyvueskateland.com/plan-visit/" className="hover:text-yellow-300">Plan Visit</a>
            <a href="https://skyvueskateland.com/hours-pricing/" className="hover:text-yellow-300">Hours</a>
            <a href="https://skyvueskateland.com/calendar/" className="hover:text-yellow-300">Events</a>
            <a href="https://skyvueskateland.com/birthday-parties-rocky-mount-nc/roller-skating-party/" className="hover:text-yellow-300">Parties</a>
            <a href="https://skyvueskateland.com/school-trips-rocky-mount-nc/stem-trips/" className="hover:text-yellow-300">STEM</a>
            <a href="https://skyvueskateland.com/blog/" className="hover:text-yellow-300">News</a>
          </nav>
        </div>
      </header>

      {content.announcement && (
        <div className="bg-yellow-300 px-4 py-4 text-center font-extrabold text-slate-950">
          {content.announcement}
        </div>
      )}

      <section className="relative overflow-hidden px-4 py-16 text-center text-white md:py-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/sky-vue-hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/sky-vue-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-yellow-300">
            The Place to Skate Since 1958
          </p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
            Sky-Vue Skateland
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-blue-50 md:text-xl">
            Family roller skating, birthday parties, STEM field trips and wholesome community fun in Rocky Mount, North Carolina.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://skyvueskateland.com/hours-pricing/"
              className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black shadow hover:bg-yellow-500"
            >
              Hours & Pricing
            </a>
            <a
              href="https://skyvueskateland.com/calendar/"
              className="rounded-lg bg-red-600 px-6 py-3 font-bold text-white shadow hover:bg-red-700"
            >
              See What’s Happening
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-16 px-4 py-12">
        <section>
          <div className="mb-7 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-600">Quick Access</p>
            <h2 className="text-3xl font-extrabold text-blue-900">What do you want to do?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-gray-600">
              Get to the information families use most without hunting through menus.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`rounded-2xl p-5 shadow-sm transition-transform hover:-translate-y-0.5 ${action.accent}`}
              >
                <h3 className="text-xl font-extrabold">{action.label}</h3>
                <p className="mt-2 text-sm opacity-90">{action.detail}</p>
                <p className="mt-4 text-sm font-bold">Open →</p>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-600">Live From Sky-Vue</p>
              <h2 className="text-3xl font-extrabold text-blue-900">Right Now at the Rink</h2>
              <p className="mt-2 max-w-2xl text-gray-700">
                These links use Sky-Vue’s own website as the source of truth, so current schedules, events and announcements stay under Sky-Vue’s control.
              </p>
            </div>
            <a
              href="https://skyvueskateland.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-700 hover:underline"
            >
              Visit Full Website →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Current Schedule</span>
              <h3 className="mt-2 text-xl font-bold text-blue-900">Hours & Admission</h3>
              <p className="mt-2 text-sm text-gray-600">
                {content.hoursSummary}
              </p>
              <a href={content.hoursUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-bold text-blue-700 hover:underline">
                Check Current Hours →
              </a>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Current Events</span>
              <h3 className="mt-2 text-xl font-bold text-blue-900">What’s Happening</h3>
              <p className="mt-2 text-sm text-gray-600">
                {content.eventsSummary}
              </p>
              <a href={content.eventsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-bold text-blue-700 hover:underline">
                View Live Calendar →
              </a>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Latest Update</span>
              <h3 className="mt-2 text-xl font-bold text-blue-900">{content.blogTitle}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {content.blogSummary}
              </p>
              <a href={content.blogUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-bold text-blue-700 hover:underline">
                Read Latest Update →
              </a>
            </article>
          </div>
        </section>

        <section>
          <div className="mb-7 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-600">More Ways to Roll</p>
            <h2 className="text-3xl font-extrabold text-blue-900">Make Sky-Vue Part of the Family Routine</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a href={content.partiesUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-red-300">
              <h3 className="text-xl font-bold text-blue-900">Birthday Parties</h3>
              <p className="mt-2 text-gray-600">{content.partiesSummary}</p>
              <p className="mt-4 font-bold text-red-600">See Party Options →</p>
            </a>

            <a href={content.fieldTripsUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-300">
              <h3 className="text-xl font-bold text-blue-900">STEM Field Trips</h3>
              <p className="mt-2 text-gray-600">{content.fieldTripsSummary}</p>
              <p className="mt-4 font-bold text-blue-700">Explore STEM Trips →</p>
            </a>

            <a href="https://skyvueskateland.com/plan-visit/membership/" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-yellow-300">
              <h3 className="text-xl font-bold text-blue-900">Sky-Vue Crew Membership</h3>
              <p className="mt-2 text-gray-600">See membership benefits for families and frequent skaters.</p>
              <p className="mt-4 font-bold text-blue-700">Membership Details →</p>
            </a>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl bg-blue-900 text-white shadow-lg">
          <div className="grid gap-8 p-7 md:grid-cols-[auto_1fr] md:items-center md:p-9">
            <div className="mx-auto rounded-2xl bg-white p-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fsky-vue-skateland.vercel.app"
                alt="QR code to open the Sky-Vue app"
                className="h-36 w-36 md:h-40 md:w-40"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-yellow-300">Keep Sky-Vue in Your Pocket</p>
              <h2 className="mt-2 text-3xl font-extrabold">Add Sky-Vue to Your Home Screen</h2>
              <p className="mt-3 max-w-2xl text-blue-100">
                Open Sky-Vue anytime for fast access to current hours, events, parties, directions and more.
              </p>
              <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                <p className="rounded-xl bg-blue-800 p-4"><strong>Android:</strong> Open in Chrome, tap ⋮, then choose Add to Home screen or Install app.</p>
                <p className="rounded-xl bg-blue-800 p-4"><strong>iPhone:</strong> Open in Safari, tap Share, then choose Add to Home Screen.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 bg-gray-900 px-4 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} Sky-Vue Skateland. 13734 US Hwy 64 Alt W, Rocky Mount, NC 27801.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2524427418" className="hover:text-white">(252) 442-7418</a>
            <a href="https://skyvueskateland.com/contact-sky-vue-skateland/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact</a>
            <Link href="/admin/login" className="hover:text-white">Owner Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
