'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, db } from '@/lib/firebase';
import { isOwnerEmail } from '@/lib/owner';

type SiteContent = {
  announcement: string; hoursSummary: string; hoursUrl: string;
  eventsSummary: string; eventsUrl: string;
  blogTitle: string; blogSummary: string; blogUrl: string;
  partiesSummary: string; partiesUrl: string;
  fieldTripsSummary: string; fieldTripsUrl: string;
};

const defaults: SiteContent = {
  announcement: '',
  hoursSummary: 'Check the current public skating schedule, seasonal hours, admission and rental information.',
  hoursUrl: 'https://skyvueskateland.com/hours-pricing/',
  eventsSummary: 'Find upcoming special skates, family events, promotions and other activities.',
  eventsUrl: 'https://skyvueskateland.com/calendar/',
  blogTitle: 'News From Sky-Vue',
  blogSummary: 'Read Sky-Vue’s newest announcement or monthly update directly from the rink.',
  blogUrl: 'https://skyvueskateland.com/blog/',
  partiesSummary: 'Plan an active, family-friendly birthday at the rink.',
  partiesUrl: 'https://skyvueskateland.com/birthday-parties-rocky-mount-nc/roller-skating-party/',
  fieldTripsSummary: 'Bring science to life with motion, physics and skating.',
  fieldTripsUrl: 'https://skyvueskateland.com/school-trips-rocky-mount-nc/stem-trips/',
};

const sections = [
  { id: 'hours', label: 'Hours & Pricing' }, { id: 'events', label: 'Events & Announcements' },
  { id: 'blog', label: 'Monthly Blog' }, { id: 'parties', label: 'Parties & Field Trips' },
] as const;

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [email, setEmail] = useState('');
  const [active, setActive] = useState<(typeof sections)[number]['id']>('hours');
  const [content, setContent] = useState<SiteContent>(defaults);
  const [message, setMessage] = useState('');

  useEffect(() => onAuthStateChanged(auth, async (user) => {
    if (!user || !isOwnerEmail(user.email)) {
      if (user) await signOut(auth);
      router.replace('/admin/login'); return;
    }
    setEmail(user.email ?? '');
    try {
      const snapshot = await getDoc(doc(db, 'siteContent', 'main'));
      if (snapshot.exists()) setContent({ ...defaults, ...(snapshot.data() as Partial<SiteContent>) });
    } catch { setMessage('Content could not be loaded. Please check the Firebase connection.'); }
    finally { setLoading(false); }
  }), [router]);

  const update = (field: keyof SiteContent, value: string) => setContent((current) => ({ ...current, [field]: value }));
  const save = async () => {
    setSaving(true); setMessage('');
    try {
      await setDoc(doc(db, 'siteContent', 'main'), { ...content, updatedAt: serverTimestamp(), updatedBy: email }, { merge: true });
      setMessage('Saved. The public Sky-Vue app will show these changes automatically.');
    } catch { setMessage('Nothing was saved. Please check the database permissions and try again.'); }
    finally { setSaving(false); }
  };

  if (loading) return <main className="flex min-h-screen items-center justify-center"><p>Checking owner login…</p></main>;

  const renderField = (label: string, name: keyof SiteContent, rows = 3) => <label className="block"><span className="mb-2 block font-semibold text-slate-800">{label}</span><textarea value={content[name]} onChange={(e) => update(name, e.target.value)} rows={rows} className="w-full rounded-lg border border-slate-300 p-3 text-slate-900 focus:border-blue-600 focus:outline-none" /></label>;
  const renderUrlField = (label: string, name: keyof SiteContent) => <label className="block"><span className="mb-2 block font-semibold text-slate-800">{label}</span><input type="url" value={content[name]} onChange={(e) => update(name, e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 text-slate-900 focus:border-blue-600 focus:outline-none" /></label>;

  return <main className="min-h-screen bg-slate-100 p-4 md:p-6"><div className="mx-auto max-w-5xl">
    <header className="mb-6 rounded-2xl bg-blue-900 p-5 text-white shadow md:flex md:items-center md:justify-between"><div><p className="text-sm font-bold uppercase tracking-wider text-yellow-300">Owner Access</p><h1 className="text-3xl font-extrabold">Sky-Vue Dashboard</h1><p className="mt-1 text-blue-100">Signed in as {email}</p></div><div className="mt-4 flex gap-3 md:mt-0"><Link href="/" className="rounded-lg bg-yellow-400 px-4 py-2 font-bold text-black">View App</Link><button onClick={() => signOut(auth).then(() => router.replace('/admin/login'))} className="rounded-lg bg-red-600 px-4 py-2 font-bold text-white">Sign Out</button></div></header>
    <label className="mb-6 block rounded-xl border-2 border-yellow-300 bg-yellow-50 p-5"><span className="mb-2 block font-bold text-slate-900">Top announcement (leave blank to hide)</span><textarea value={content.announcement} onChange={(e) => update('announcement', e.target.value)} rows={3} placeholder="Special hours, closing, promotion or important notice…" className="w-full rounded-lg border border-yellow-400 p-3 text-slate-900" /></label>
    <nav className="mb-5 grid grid-cols-2 gap-2 md:grid-cols-4">{sections.map((section) => <button key={section.id} onClick={() => setActive(section.id)} className={`rounded-xl px-3 py-3 font-bold ${active === section.id ? 'bg-blue-700 text-white' : 'bg-white text-blue-900 shadow'}`}>{section.label}</button>)}</nav>
    <section className="rounded-2xl bg-white p-5 shadow md:p-7">
      {active === 'hours' && <div className="space-y-5"><h2 className="text-2xl font-extrabold text-blue-900">Hours & Pricing</h2>{renderField('Public summary', 'hoursSummary', 5)}{renderUrlField('Full hours and pricing page', 'hoursUrl')}</div>}
      {active === 'events' && <div className="space-y-5"><h2 className="text-2xl font-extrabold text-blue-900">Events & Announcements</h2>{renderField('Events summary', 'eventsSummary', 5)}{renderUrlField('Live calendar page', 'eventsUrl')}</div>}
      {active === 'blog' && <div className="space-y-5"><h2 className="text-2xl font-extrabold text-blue-900">Monthly Blog</h2>{renderField('Latest update title', 'blogTitle', 2)}{renderField('Latest update summary', 'blogSummary', 7)}{renderUrlField('Full blog post or blog page', 'blogUrl')}</div>}
      {active === 'parties' && <div className="space-y-7"><h2 className="text-2xl font-extrabold text-blue-900">Parties & Field Trips</h2><div className="space-y-5"><h3 className="text-xl font-bold">Birthday Parties</h3>{renderField('Party summary', 'partiesSummary')}{renderUrlField('Party details page', 'partiesUrl')}</div><div className="space-y-5 border-t pt-6"><h3 className="text-xl font-bold">STEM Field Trips</h3>{renderField('Field-trip summary', 'fieldTripsSummary')}{renderUrlField('Field-trip details page', 'fieldTripsUrl')}</div></div>}
      {message && <p className={`mt-6 rounded-lg p-4 font-semibold ${message.startsWith('Saved') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-700'}`}>{message}</p>}
      <button onClick={save} disabled={saving} className="mt-7 w-full rounded-xl bg-green-600 px-6 py-3 text-lg font-extrabold text-white hover:bg-green-700 disabled:opacity-60">{saving ? 'Saving…' : 'Save Changes'}</button>
    </section>
  </div></main>;
}
