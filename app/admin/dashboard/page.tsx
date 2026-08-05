'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace('/admin/login');
        return;
      }

      setEmail(user.email ?? '');
      setLoading(false);
    });

    return unsubscribe;
  }, [router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace('/admin/login');
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Checking administrator login...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Sky-Vue Admin Dashboard
            </h1>

            <p className="mt-1 text-slate-600">
              Signed in as {email}
            </p>
          </div>

          <button
            onClick={handleSignOut}
            className="rounded-lg bg-slate-800 px-4 py-2 font-semibold text-white"
          >
            Sign Out
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Monthly Blog</h2>
            <p className="mt-2 text-slate-600">
              Create and manage Sky-Vue’s plain-text monthly updates.
            </p>
          </section>

          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Hours and Pricing</h2>
            <p className="mt-2 text-slate-600">
              Update skating hours, admission prices and rentals.
            </p>
          </section>

          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Events and Announcements</h2>
            <p className="mt-2 text-slate-600">
              Post special events, closings and promotions.
            </p>
          </section>

          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-bold">Parties and Field Trips</h2>
            <p className="mt-2 text-slate-600">
              Manage birthday-party and STEM field-trip information.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 
