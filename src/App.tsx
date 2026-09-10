/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Offer from './components/sections/Offer';
import Process from './components/sections/Process';
import Features from './components/sections/Features';
import Metrics from './components/sections/Metrics';
import Industries from './components/sections/Industries';
import Comparison from './components/sections/Comparison';
import AuditCTA from './components/sections/AuditCTA';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';
import AuditModal from './components/ui/AuditModal';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ThankYou from './components/sections/ThankYou';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openAudit = () => setIsAuditModalOpen(true);
  const closeAudit = () => setIsAuditModalOpen(false);
  const handleSubmissionSuccess = () => setIsSubmitted(true);

  if (isSubmitted) {
    return <ThankYou onBack={() => setIsSubmitted(false)} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-200">
      <Navbar onOpenAudit={openAudit} />
      
      <main>
        <Hero onOpenAudit={openAudit} />
        <Problem />
        <Offer />
        <Process />
        <Features />
        <Metrics />
        <Industries onOpenAudit={openAudit} />
        <Comparison />
        <AuditCTA onOpenAudit={openAudit} />
        <FAQ />
        <FinalCTA onOpenAudit={openAudit} />
      </main>

      <Footer />
      
      <WhatsAppButton />
      <AuditModal isOpen={isAuditModalOpen} onClose={closeAudit} onSubmitSuccess={handleSubmissionSuccess} />
    </div>
  );
}
