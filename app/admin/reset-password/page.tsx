'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { OWNER_EMAIL } from '@/lib/owner';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState(OWNER_EMAIL);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSending(true);
    try {
      await sendPasswordResetEmail(auth, email, { url: `${window.location.origin}/admin/login` });
      setMessage('If this owner account is active, Firebase has emailed a secure password link.');
    } catch {
      setMessage('The password email could not be sent. Please contact APPTLY.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-7 shadow">
        <p className="text-sm font-bold uppercase tracking-wider text-red-600">Sky-Vue Owner Access</p>
        <h1 className="mt-2 text-3xl font-extrabold text-blue-900">Set Your Password</h1>
        <p className="mt-3 text-slate-600">Enter the owner email address. The secure setup link is sent directly to that inbox.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-slate-300 p-3 text-slate-900" />
          <button disabled={sending} className="w-full rounded-lg bg-blue-700 p-3 font-bold text-white disabled:opacity-60">{sending ? 'Sending…' : 'Email Secure Password Link'}</button>
        </form>
        {message && <p className="mt-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-900">{message}</p>}
        <p className="mt-5 text-center text-sm"><Link href="/admin/login" className="font-semibold text-blue-700 hover:underline">Back to sign in</Link></p>
      </section>
    </main>
  );
}
