'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

export default function AdminBlogPage() {
  const router = useRouter();

  const [checkingLogin, setCheckingLogin] = useState(true);
  const [title, setTitle] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace('/admin/login');
        return;
      }

      setCheckingLogin(false);
    });

    return unsubscribe;
  }, [router]);

  const wordCount = body.trim()
    ? body.trim().split(/\s+/).length
    : 0;

  const showComingSoonMessage = (action: string) => {
    setMessage(
      `${action} is ready. We will connect permanent database saving next.`
    );
  };

  if (checkingLogin) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Checking administrator login...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/dashboard"
          className="font-semibold text-blue-700 hover:underline"
        >
          ← Back to Dashboard
        </Link>

        <div className="mt-5 rounded-xl bg-white p-6 shadow">
          <h1 className="text-3xl font-bold text-slate-900">
            Monthly Blog Editor
          </h1>

          <p className="mt-2 text-slate-600">
            Enter or paste Sky-Vue’s monthly plain-text update.
          </p>

          <div className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block font-semibold text-slate-800"
              >
                Post Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Example: August 2026 Sky-Vue Update"
                className="w-full rounded-lg border border-slate-300 p-3"
              />
            </div>

            <div>
              <label
                htmlFor="publishDate"
                className="mb-2 block font-semibold text-slate-800"
              >
                Publication Date
              </label>

              <input
                id="publishDate"
                type="date"
                value={publishDate}
                onChange={(event) => setPublishDate(event.target.value)}
                className="w-full rounded-lg border border-slate-300 p-3"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block font-semibold text-slate-800"
              >
                SEO Description
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="A short summary that may appear in Google search results."
                rows={3}
                maxLength={160}
                className="w-full rounded-lg border border-slate-300 p-3"
              />

              <p className="mt-1 text-sm text-slate-500">
                {description.length}/160 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="body"
                className="mb-2 block font-semibold text-slate-800"
              >
                Monthly Update
              </label>

              <textarea
                id="body"
                value={body}
                onChange={(event) => setBody(event.target.value)}
                placeholder="Type or paste the monthly blog update here..."
                rows={16}
                className="w-full rounded-lg border border-slate-300 p-3"
              />

              <p className="mt-1 text-sm text-slate-500">
                {wordCount} words
              </p>
            </div>

            {message && (
              <div className="rounded-lg bg-blue-50 p-4 text-blue-900">
                {message}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => showComingSoonMessage('Save Draft')}
                className="rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white"
              >
                Save Draft
              </button>

              <button
                type="button"
                onClick={() => showComingSoonMessage('Publishing')}
                className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white"
              >
                Publish
              </button>
            </div>

            <p className="text-sm text-slate-500">
              Today we are creating the editor. Permanent saving and publishing
              will be connected to Firebase next.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 
