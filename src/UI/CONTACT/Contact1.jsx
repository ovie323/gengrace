import React, { useState } from "react";

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Sending data:', formData);
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });
      
      const result = await response.text();
      console.log('Response:', response.status, result);
      
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(`Failed to send message: ${result}`);
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to WhatsApp if backend is not available
      const whatsappMessage = encodeURIComponent(`Hi GenGrace Ventures! \n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      window.open(`https://wa.me/+2348188594189?text=${whatsappMessage}`, '_blank');
      setSubmitMessage('Redirected to WhatsApp since server is unavailable.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 5000);
  };
  return (
    <div className="bg-[#E7EEF7] min-h-screen flex flex-col items-center justify-center text-gray-800 px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1B2A4E] mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions, need assistance, or want to place an order?  
          We’re always happy to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1B2A4E] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1B2A4E] outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1B2A4E] outline-none"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1B2A4E] outline-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1B2A4E] hover:bg-[#16213a] disabled:bg-gray-400 text-white px-10 py-3 rounded-full font-medium transition"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && (
              <p className={`mt-3 text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {submitMessage}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="text-center mt-12 text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p className="mb-2">📞 Phone: +234 801 234 5678</p>
        <p className="mb-2">
          📧 Email:{" "}
          <a
            href="mailto:gengraceventures@gmail.com"
            className="text-[#1B2A4E] underline hover:text-[#3B4D7A]"
          >
            gengraceventures@gmail.com
          </a>
        </p>
        <p>💬 WhatsApp: <a href="https://wa.me/+2348188594189" target="_blank" rel="noopener noreferrer" className="underline text-[#1B2A4E] hover:text-[#3B4D7A]">Chat with us</a></p>
      </div>
    </div>
  );
};

export default Contact1;
