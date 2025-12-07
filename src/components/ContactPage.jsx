import { useState } from "react"
import { MapPin, Mail, Instagram, Send } from "lucide-react"

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Create mailto link with form data
    const mailtoLink = `mailto:odelialim04@gmail.com?subject=${encodeURIComponent(subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <div className="flex w-full h-full justify-center items-center font-serif">
        <div className="flex flex-col md:flex-row border-2 border-black mx-4 my-8 md:m-[50px] md:h-[525px] w-full max-w-[800px] rounded-2xl bg-gray-100">
          <div className="w-full md:w-1/2 h-1/2 md:h-full mb-8 p-8 bg-gray-300 border-b-2 md:border-r-2 rounded-2xl border-black">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-3">Contact Information</h1>
              <p className="text-sm leading-relaxed">
                DM @avosfilm for bookings.
              </p>
            </div>
            <div className="flex items-start space-x-4 group">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/40 border border-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-sm">Sydney, Australia</p>
                  <p className="text-sm">Singapore</p>
                </div>
              </div>
            <div className="flex items-start space-x-4 group mt-8">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/40 border border-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:odelialim04@gmail.com" className="text-sm font-sans">odelialim04@gmail.com</a>
                </div>
              </div>
            <div className="flex items-start space-x-4 group mt-8">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/40 border border-black transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Instagram</p>
                  <a
                    className="text-sm font-sans"
                    href="https://instagram.com/avosfilm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @avosfilm
                  </a>
                </div>
              </div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full mb-8 p-8 rounded-2xl border-black">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h1>
              <p className="text-gray-600">I would love to hear from you!</p>
            </div>

            <div className="spacy-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  value={name}
                  placeholder="Enter your name..."
                  onChange={(event) => setName(event.target.value)}
                  className="w-full px-4 py-2 border bg-white border-gray-700 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all mb-4 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  value={email}
                  placeholder="Enter you email..."
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-2 border bg-white border-gray-700 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all mb-4 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  value={subject}
                  placeholder="Enter a subject..."
                  onChange={(event) => setSubject(event.target.value)}
                  className="w-full px-4 py-2 border bg-white border-gray-700 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all mb-4 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <input
                  value={message}
                  placeholder="Enter your message..."
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border bg-white border-gray-700 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all mb-7 text-sm"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit} 
              className="w-full rounded-lg bg-gray-300 border border-black hover:bg-gray-400"
            >
              <span>{isSubmitted ? "Sending Message!" : "Send Message"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}