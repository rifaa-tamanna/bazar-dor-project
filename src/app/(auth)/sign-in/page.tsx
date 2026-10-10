"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // এখানে তোমার Better Auth sign-in logic যুক্ত করবে।
    console.log({ email, password });
  };

  return (
    <main className="min-h-screen bg-[#F0F5F0] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[438px]">
        {/* Heading */}
        <header className="mb-7 text-center">
          <h1 className="text-[25px] font-bold leading-tight tracking-tight text-[#26352B] sm:text-[28px]">
            সাইন ইন
          </h1>

          <p className="mt-2 text-[14px] leading-6 text-[#7B857D] sm:text-[15px]">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </header>

        {/* Sign In Card */}
        <section className="rounded-[17px] border border-[#DCE6DC] bg-[#FBFCFB] p-5 sm:p-[25px]">
          <form onSubmit={handleSubmit} className="space-y-[17px]">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-[7px] block text-[14px] font-medium text-[#26352B]"
              >
                ইমেইল
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="h-[43px] w-full rounded-[10px] border border-[#DCE6DC] bg-transparent px-3 text-[14px] text-[#29352D] outline-none transition placeholder:text-[#29352D] focus:border-[#07883F] focus:ring-2 focus:ring-[#07883F]/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-[7px] block text-[14px] font-medium text-[#26352B]"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="current-password"
                className="h-[43px] w-full rounded-[10px] border border-[#DCE6DC] bg-transparent px-3 text-[14px] text-[#29352D] outline-none transition placeholder:text-[#536057] focus:border-[#07883F] focus:ring-2 focus:ring-[#07883F]/10"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end -mt-2">
              <Link
                href="/forgot-password"
                className="text-[13px] text-[#07883F] hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-[43px] w-full cursor-pointer rounded-[9px] bg-[#07883F] text-[14px] font-semibold text-white shadow-[0_3px_4px_rgba(0,100,45,0.25)] transition hover:bg-[#067535] active:scale-[0.99]"
            >
              সাইন ইন
            </button>
          </form>

          {/* Divider */}
          <div className="my-[18px] flex items-center gap-3">
            <div className="h-[2px] flex-1 bg-[#E1E6E1]" />

            <span className="shrink-0 text-[13px] text-[#6F7971]">অথবা</span>

            <div className="h-[2px] flex-1 bg-[#E1E6E1]" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {/* Google */}
            <button
              type="button"
              onClick={() =>
                alert("Google authentication এখনো যুক্ত করা হয়নি।")
              }
              className="flex h-[43px] cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-[#DCE6DC] px-2 text-[13px] font-semibold text-[#26352B] transition hover:bg-[#F0F5F0] sm:text-[14px]"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-[17px] w-[17px] shrink-0"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.7c3.9-3.6 6-8.8 6-15Z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.7-5.1c-1.8 1.2-4 1.9-6.8 1.9-5.2 0-9.6-3.5-11.2-8.2H5.9v5.2A20 20 0 0 0 24 44Z"
                />
                <path
                  fill="#FBBC05"
                  d="M12.8 27.8a12 12 0 0 1 0-7.6V15H5.9a20 20 0 0 0 0 17.9l6.9-5.1Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.9 15l6.9 5.2c1.6-4.7 6-8.1 11.2-8.1Z"
                />
              </svg>
              Google দিয়ে চালিয়ে যান
            </button>

            {/* GitHub */}
            <button
              type="button"
              onClick={() =>
                alert("GitHub authentication এখনো যুক্ত করা হয়নি।")
              }
              className="flex h-[43px] cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-[#DCE6DC] px-2 text-[13px] font-semibold text-[#26352B] transition hover:bg-[#F0F5F0] sm:text-[14px]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[17px] w-[17px] shrink-0"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.4.1-3 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.7 0c2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.2-2.6 5.2-5.1 5.5.4.4.8 1 .8 2v3.1c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-[18px] text-center text-[14px] text-[#37433A]">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-[#07883F] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </section>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[14px] text-[#7B857D] transition hover:text-[#07883F]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}
