
"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current || sending) return;

    setSending(true);
    setStatus("");
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_0nlxvxe",
        "template_7egz2ww",
        formRef.current,
        {
          publicKey: "2HOtgmHluismpAQCY",
        }
      );

      setSuccess(true);
      setStatus("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Your Name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          placeholder="Your name"
          required
          disabled={sending}
          className="w-full rounded-xl border border-slate-700 bg-[#0b1728] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Your Email
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          placeholder="you@example.com"
          required
          disabled={sending}
          className="w-full rounded-xl border border-slate-700 bg-[#0b1728] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-slate-200"
        >
          Your Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={5000}
          placeholder="Hello, I'd like to talk about..."
          required
          disabled={sending}
          className="w-full resize-y rounded-xl border border-slate-700 bg-[#0b1728] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-[#07111f] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending..." : "Send Message"}
        {!sending && <span aria-hidden="true">➤</span>}
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            success ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
