import { SectionWrapper } from './SectionWrapper';
import { Mail, MapPin, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
export function Contact() {
  const { t } = useTranslation();
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
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      className="bg-gradient-to-br from-white to-[#F6E1F0]"
    >
      <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 justify-items-center">
          {/* Contact Information */}
            <div className="space-y-3 w-full">
              <div className="bg-gradient-to-br from-[#5A2653] to-[#7E3F74] rounded-xl p-8 text-white mx-auto max-w-md w-full">
              <h3 className="font-heading mb-6">{t('contact.getInTouchTitle')}</h3>
              <p className="font-body mb-8 opacity-90">
                {t('contact.message')}
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:fatima.mushtaq40@gmail.com"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-body">fatima.mushtaq40@gmail.com</span>
                </a>

                <a
                  href="tel:+923305865867"
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-body">+92 330 5865867</span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                  <span className="font-body">{t('contact.location')}</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/fatima-m-mushtaq-186999384"
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
