import { useState } from 'react';
import { X, Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

function ContactForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const serviceId = 'service_o6nsudg';
      const templateId = 'template_jhdyiol';
      const publicKey = 'Jqy14o5K_9JAE7xzc';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sjfilmskenya@gmail.com',
        reply_to: formData.email
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          onClose();
          setStatus({ type: '', message: '' });
        }, 2000);
      } else {
        const errorData = await response.text();
        console.error('EmailJS Error:', errorData); // Log error for debugging
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Send error:', error); // Log full error
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-form-overlay">
      <div 
        className="contact-form-backdrop"
        onClick={onClose}
      />

      <div className="contact-form-modal">
        <div className="contact-form-header-gradient" />
        
        <button
          onClick={onClose}
          className="contact-form-close-btn"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="contact-form-content">
          <div className="contact-form-header">
            <div className="contact-form-icon">
              <Mail size={28} />
            </div>
            <h2 className="contact-form-title">Get In Touch</h2>
            <p className="contact-form-subtitle">Send us a message and we'll respond as soon as possible</p>
          </div>

          <div className="contact-form-fields">
            <div className="contact-form-field">
              <label className="contact-form-label">Your Name</label>
              <div className="contact-form-input-wrapper">
                <User className="contact-form-input-icon" size={18} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Your Email</label>
              <div className="contact-form-input-wrapper">
                <Mail className="contact-form-input-icon" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Your Message</label>
              <div className="contact-form-input-wrapper">
                <MessageSquare className="contact-form-input-icon contact-form-textarea-icon" size={18} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="contact-form-input contact-form-textarea"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>

            {status.message && (
              <div className={`contact-form-status ${status.type === 'success' ? 'contact-form-status-success' : 'contact-form-status-error'}`}>
                {status.type === 'success' ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <p>{status.message}</p>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="contact-form-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <div className="contact-form-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="contact-form-send-icon" />
                </>
              )}
            </button>
          </div>

          <div className="contact-form-footer">
            <p className="contact-form-footer-text">
              Or email us directly at{' '}
              <a 
                href="mailto:sjfilmskenya@gmail.com" 
                className="contact-form-email-link"
              >
                sjfilmskenya@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;