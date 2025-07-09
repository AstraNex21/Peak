import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'Peak Elevator Group',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback: Create mailto link if EmailJS fails
  const handleFallbackSubmit = () => {
    const subject = `Contact Form Submission - ${formData.service || 'General Inquiry'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:Admin@peakelevatorgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {submitStatus === 'success' && (
        <div className="mb-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 text-green-800 rounded-xl shadow-lg">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-6 bg-gradient-to-r from-red-100 to-rose-100 border border-red-300 text-red-800 rounded-xl shadow-lg">
          <p className="mb-2">There was an error sending your message.</p>
          <button
            onClick={handleFallbackSubmit}
            className="text-red-600 underline hover:text-red-800 transition-colors"
          >
            Click here to send via email instead
          </button>
          <p className="mt-2 text-sm">Or call us directly at +91 9990858886</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 disabled:opacity-50 shadow-lg transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 disabled:opacity-50 shadow-lg transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 disabled:opacity-50 shadow-lg transition-all duration-300"
            />
          </div>
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 disabled:opacity-50 shadow-lg transition-all duration-300"
            >
              <option value="" className="text-gray-500">Select Service</option>
              <option value="Machine Room Lift" className="text-gray-900">Machine Room Lift</option>
              <option value="Machine Room Less Lift" className="text-gray-900">Machine Room Less Lift</option>
              <option value="Hydraulic Passenger Lift" className="text-gray-900">Hydraulic Passenger Lift</option>
              <option value="Hydraulic Goods Lift" className="text-gray-900">Hydraulic Goods Lift</option>
              <option value="Car Lift" className="text-gray-900">Car Lift</option>
              <option value="Car Parking Stacker" className="text-gray-900">Car Parking Stacker</option>
              <option value="Lift Modernisation" className="text-gray-900">Lift Modernisation</option>
              <option value="AMC Services" className="text-gray-900">AMC Services</option>
              <option value="Emergency Repair" className="text-gray-900">Emergency Repair</option>
              <option value="General Inquiry" className="text-gray-900">General Inquiry</option>
            </select>
          </div>
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows={4}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 placeholder-gray-500 resize-none disabled:opacity-50 shadow-lg transition-all duration-300"
          ></textarea>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleFallbackSubmit}
            className="flex-1 sm:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Send via Email
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">Or contact us directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919990858886" 
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              📞 +91 9990858886
            </a>
            <a 
              href="mailto:Admin@peakelevatorgroup.com" 
              className="text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              ✉️ Admin@peakelevatorgroup.com
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;