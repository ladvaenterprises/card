import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  UserCheck 
} from 'lucide-react';
import { MITESH_CONFIG } from '../config/miteshData';
import { downloadVCard } from '../utils/vcfGenerator';
import { openWhatsAppChat } from '../utils/whatsappShare';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const { contact } = MITESH_CONFIG;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: 'Management Consulting',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in required fields (Name, Email, Message)');
      return;
    }

    setSubmitting(true);
    // Simulate swift executive form processing
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Consultation request received! Mitesh will respond within 4 hours.');
    }, 700);
  };

  const handleSaveContact = () => {
    downloadVCard(() => {
      onShowToast('Contact file downloaded (.vcf). Tap to add to your contacts!');
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Guaranteed 4-Hour Response SLA</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Initiate an Executive Dialogue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-300">
            Connect directly with Mitesh Ladva to evaluate strategic transformations, operational restructuring, or data analytics advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="p-6 sm:p-7 rounded-2xl bg-navy-850 border border-navy-750 shadow-navy-elevated space-y-5">
              <h3 className="font-heading text-xl font-bold text-white">
                Direct Contact Information
              </h3>

              {/* Phone Click-to-Call */}
              <a
                href={`tel:${contact.phoneInternational}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-800 hover:border-gold-500/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-400">
                    Direct Mobile & WhatsApp
                  </p>
                  <p className="text-base font-bold text-white font-mono group-hover:text-gold-300 transition-colors">
                    {contact.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Direct WhatsApp Chat */}
              <button
                onClick={() => openWhatsAppChat()}
                className="w-full flex items-center gap-4 p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-600/30 transition-colors text-left group"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald-900/50 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400/80">
                    Instant Messaging
                  </p>
                  <p className="text-base font-bold text-emerald-300">
                    Chat Directly on WhatsApp
                  </p>
                </div>
              </button>

              {/* Email */}
              <a
                href={`mailto:${contact.primaryEmail}`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-800 hover:border-gold-500/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-400">
                    Business Email
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-gold-300 transition-colors break-all">
                    {contact.primaryEmail}
                  </p>
                </div>
              </a>

              {/* Headquarters Location */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                <div className="w-11 h-11 rounded-lg bg-navy-800 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-400">
                    Operating Headquarters
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {contact.addressDisplay}
                  </p>
                </div>
              </div>

              {/* Save Contact CTA */}
              <button
                onClick={handleSaveContact}
                className="w-full py-3 px-4 rounded-xl bg-navy-800 hover:bg-navy-750 border border-gold-500/40 text-gold-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <UserCheck className="w-4 h-4" />
                <span>Save Contact to Phonebook (.vcf)</span>
              </button>
            </div>

            {/* Corporate Profile Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-navy-850 to-navy-950 border border-navy-800 text-xs space-y-2 text-muted-300">
              <div className="flex items-center justify-between pb-2 border-b border-navy-800">
                <span>Enterprise Portal</span>
                <a href={contact.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline font-medium flex items-center gap-1">
                  <span>ladvaenterprises.com</span>
                  <Globe className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span>LinkedIn Profile</span>
                <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline font-medium">
                  linkedin.com/in/mitesh-ladva
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-navy-850 border border-navy-750 shadow-navy-elevated">
              
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Book a Strategic Consultation
                </h3>
                <p className="text-xs sm:text-sm text-muted-300 mt-1">
                  Submit your inquiry and challenge outline. All discussions are conducted under 100% strict professional confidentiality.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    Thank You, {formData.name}
                  </h4>
                  <p className="text-sm text-muted-300 max-w-md mx-auto leading-relaxed">
                    Your consultation brief regarding <strong className="text-gold-300 font-semibold">{formData.practiceArea}</strong> has been transmitted to Mitesh Ladva. You will receive an executive response within 4 hours.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => openWhatsAppChat(`Hi Mitesh, I just submitted an inquiry on your portfolio regarding ${formData.practiceArea}.`)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ping on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          practiceArea: 'Management Consulting',
                          message: ''
                        });
                      }}
                      className="px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-750 text-muted-300 font-medium text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-300 mb-1.5">
                        Your Full Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-750 rounded-xl text-white text-sm placeholder:text-muted-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-300 mb-1.5">
                        Corporate Email <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rajesh@company.com"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-750 rounded-xl text-white text-sm placeholder:text-muted-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-300 mb-1.5">
                        Contact Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-750 rounded-xl text-white text-sm placeholder:text-muted-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-300 mb-1.5">
                        Organization / Enterprise Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Industries"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-750 rounded-xl text-white text-sm placeholder:text-muted-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-300 mb-1.5">
                      Consulting Area of Interest
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-750 rounded-xl text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="Management Consulting">Management Consulting & Organizational Restructuring</option>
                      <option value="Strategy & Growth">Strategy & Commercial Market Expansion</option>
                      <option value="IT & Digital Transformation">IT & Digital Transformation (BigQuery, Looker, ERP)</option>
                      <option value="HR & Talent Strategy">HR & Executive Talent Strategy</option>
                      <option value="Legal & Compliance">Legal & ISO Compliance (9001, 14001, 45001)</option>
                      <option value="Financial Advisory">Financial Advisory & Working Capital Optimization</option>
                      <option value="General Strategic Inquiry">General Executive Advisory Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-300 mb-1.5">
                      Challenge Summary / Message <span className="text-gold-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your primary organizational bottlenecks, desired timeline, and strategic goals..."
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-750 rounded-xl text-white text-sm placeholder:text-muted-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-400 pt-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Your inquiry is covered by complete executive non-disclosure confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-sm tracking-wide shadow-gold-glow transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Transmitting Request...' : 'Submit Strategic Consultation Brief'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
