import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_95jhdxb",
        "template_ylwgytx",
        form.current,
        "5opmw2KEqojhkkLnw"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        form.current.reset();

        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Message failed. Try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-2xl relative">

        <div className="absolute -inset-1 bg-blue-600/20 blur-2xl rounded-3xl"></div>

        <div className="relative bg-white/5 border border-white/10 backdrop-blur p-10 rounded-3xl shadow-2xl animate-fadeIn">

          <h1 className="text-4xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h1>

          <p className="text-gray-400 mt-2 mb-8">
            Send me a message and I’ll reply as soon as possible.
          </p>

          {sent && (
            <div className="mb-6 bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-xl animate-pulse">
              Message sent successfully 🚀
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              className="w-full p-4 h-40 rounded-xl bg-black/40 border border-white/10 focus:border-blue-500 outline-none transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition transform hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
}

export default Contact;