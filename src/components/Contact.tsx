import { SectionWrapper } from './SectionWrapper';
import { Mail, MapPin, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact Me"
      subtitle="Let's connect and discuss opportunities"
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 justify-items-center">
          {/* Contact Information */}
            <div className="space-y-3 w-full">
              <div className="bg-gradient-to-br from-[#5A2653] to-[#7E3F74] rounded-xl p-8 text-white mx-auto max-w-md w-full">
              <h3 className="font-heading mb-6">Get In Touch</h3>
              <p className="font-body mb-8 opacity-90">
                I'm always open to discussing research opportunities, collaborations, 
                or any questions you may have about my work.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:fatima@example.com"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-body">fatima@example.com</span>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-body">+1 (234) 567-8900</span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span className="font-body">City, Country</span>
                </div>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-body">linkedin.com/in/fatima</span>
                </a>
              </div>
            </div>

            
          </div>

         
        
        </div>
      </div>
    </SectionWrapper>
  );
}
