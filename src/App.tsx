import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DigitalCardSection } from './components/DigitalCardSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MethodologySection } from './components/MethodologySection';
import { IndustriesSection } from './components/IndustriesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    // Auto-clear after 4.5 seconds
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-navy-900 text-ivory-100 flex flex-col relative selection:bg-gold-500 selection:text-navy-950">
      {/* Sticky Executive Navigation */}
      <Header onShowToast={handleShowToast} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onShowToast={handleShowToast} />

        {/* 2. Digital Business Card Section (Top Priority) */}
        <DigitalCardSection onShowToast={handleShowToast} />

        {/* 3. About Mitesh Ladva */}
        <AboutSection />

        {/* 4. Professional Services */}
        <ServicesSection />

        {/* 5. Consulting Methodology (4-Step Engine) */}
        <MethodologySection />

        {/* 6. Industries & Domain Expertise */}
        <IndustriesSection />

        {/* 7. Experience, Achievements & Verified Metrics */}
        <AchievementsSection />

        {/* 8. Clients & Testimonials */}
        <TestimonialsSection />

        {/* 9. Contact & Connect */}
        <ContactSection onShowToast={handleShowToast} />
      </main>

      {/* Executive Footer */}
      <Footer onShowToast={handleShowToast} />

      {/* Mobile Fixed Bottom Action Bar */}
      <MobileActionBar onShowToast={handleShowToast} />

      {/* Scroll to Top Trigger */}
      <BackToTop />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
