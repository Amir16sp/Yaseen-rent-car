import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Car, Shield, Clock, MapPin, Phone, Mail, AlertTriangle, Sparkles, Star, ArrowUp } from 'lucide-react';

const TOC = [
  { id: "overview", label: "Overview", icon: Sparkles },
  { id: "booking-payment", label: "Booking & Payment", icon: Star },
  { id: "usage-rules", label: "Use Rules", icon: Shield },
  { id: "charges-timing", label: "Charges & Timing", icon: Clock },
  { id: "travel-scope", label: "Outstation & Route", icon: MapPin },
  { id: "changes-cancel", label: "Changes & Cancellation", icon: AlertTriangle },
  { id: "vehicle-driver", label: "Vehicle & Driver", icon: Car },
  { id: "liability-legal", label: "Liability & Legal", icon: Shield },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "disputes", label: "Dispute Resolution", icon: Shield },
  { id: "acknowledgment", label: "Acknowledgment", icon: Check },
  { id: "driver-duties", label: "Driver Duties", icon: Car },
  { id: "no-smoking", label: "No-Smoking Policy", icon: AlertTriangle },
  { id: "contact", label: "Contact", icon: Phone },
];

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 -left-8 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-orange-300/25 to-red-200/25 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}

function FloatingElements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div 
        className="absolute w-6 h-6 bg-orange-400/20 rounded-full blur-sm transition-transform duration-1000 ease-out"
        style={{
          left: mousePos.x / 50,
          top: mousePos.y / 50,
        }}
      />
      <div 
        className="absolute w-4 h-4 bg-amber-400/30 rounded-full blur-sm transition-transform duration-700 ease-out"
        style={{
          left: mousePos.x / 30 + 100,
          top: mousePos.y / 40 + 50,
        }}
      />
    </div>
  );
}

function Section({ id, title, children, icon: Icon, highlight = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return (
    <section 
      id={id} 
      className={`scroll-mt-24 transition-all duration-700 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-8 opacity-60'
      }`}
    >
      <div className={`group relative ${highlight ? 'bg-gradient-to-r from-orange-50/50 to-amber-50/50 -mx-4 px-4 py-6 rounded-2xl border border-orange-100' : ''}`}>
        <h2 className="group text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent flex items-center gap-3">
          {Icon && (
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Icon className="w-5 h-5" />
            </span>
          )}
          {title}
          <a
            href={`#${id}`}
            className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-orange-400 hover:text-orange-600 hover:scale-125"
            aria-label="Anchor link"
          >
            #
          </a>
        </h2>
        <div className="mt-6 text-slate-700 leading-8">{children}</div>
      </div>
    </section>
  );
}

function QuickFact({ children, delay = 0 }) {
  return (
    <span 
      className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
      style={{animationDelay: `${delay}ms`}}
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 animate-pulse" />
      {children}
    </span>
  );
}

function StyledList({ items, type = "check" }) {
  const icons = {
    check: Check,
    star: Star,
    alert: AlertTriangle
  };
  const Icon = icons[type];

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50/30 hover:to-amber-50/30 transition-all duration-300">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 mt-0.5">
            <Icon className="w-3 h-3" />
          </span>
          <div dangerouslySetInnerHTML={{ __html: item }} className="flex-1 leading-7" />
        </li>
      ))}
    </ul>
  );
}

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.pageYOffset > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
        showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } hover:scale-110`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observers = TOC.map(section => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        { threshold: 0.6 }
      );

      const element = document.getElementById(section.id);
      if (element) observer.observe(element);

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 relative overflow-hidden">
      <FloatingElements />
      
      {/* HERO SECTION */}
      <header className="relative overflow-hidden">
        <AnimatedBackground />
        
        {/* Decorative grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            color: "#ff3e00",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/50 bg-white/70 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-700 shadow-lg">
                <Car className="w-4 h-4" />
                Chauffeur-Driven Only
              </span>
            </div>
            
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-orange-800 to-amber-900 bg-clip-text text-transparent animate-fade-in" style={{animationDelay: '200ms'}}>
              Car Rental Terms & Conditions
            </h1>
            
            <p className="mt-6 text-xl text-slate-600 leading-8 animate-fade-in max-w-2xl" style={{animationDelay: '400ms'}}>
              Please read these terms carefully before booking a vehicle. By placing an order, you agree to the rental terms and conditions on this page.
            </p>

            {/* Enhanced quick facts */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuickFact delay={600}>50% at booking, 50% pre-departure</QuickFact>
              <QuickFact delay={800}>Tax: 16% ST + 2% IT</QuickFact>
              <QuickFact delay={1000}>Jurisdiction: Lahore, PK</QuickFact>
            </div>

            {/* CTA buttons */}
           

            {/* Mobile quick-nav with enhanced styling */}
            <div className="mt-12 -mx-2 block lg:hidden">
              <div className="flex items-center gap-3 overflow-x-auto px-2 pb-2">
                {TOC.slice(0, 6).map((t, index) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="shrink-0 flex items-center gap-2 rounded-full border bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <t.icon className="w-4 h-4" />
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 lg:gap-12">
          
          {/* Enhanced Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl border border-orange-100/50 bg-white/80 backdrop-blur-sm p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
                <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">On this page</p>
              </div>
              <ul className="space-y-1">
                {TOC.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
                        activeSection === t.id
                          ? 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-amber-50/50'
                      }`}
                    >
                      <t.icon className={`w-4 h-4 transition-all duration-300 ${activeSection === t.id ? 'text-orange-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                      {t.label}
                      {activeSection === t.id && (
                        <ChevronRight className="w-4 h-4 ml-auto text-orange-600" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Enhanced Content card */}
          <div className="rounded-2xl border border-orange-100/50 bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 shadow-xl">
            <div className="space-y-12">
              
              <Section id="overview" title="Overview" icon={Sparkles} highlight>
                <p className="text-lg leading-8">
                  These terms govern your use of our chauffeur-driven rental vehicles. If anything is
                  unclear, please ask before confirming your reservation.
                </p>
              </Section>

              <Section id="booking-payment" title="Booking & Payment" icon={Star}>
                <StyledList items={[
                  '<strong>Payment:</strong> 100% advance required — <em>50% at booking</em> and the remaining <em>50% before departure</em>.',
                  '<strong>Confirmation:</strong> Booking is confirmed only after receiving the advance.',
                  '<strong>Taxes:</strong> Website prices are net of tax. Add <strong>16% service tax</strong> and <strong>2% income tax</strong>.',
                  '<strong>ID required:</strong> Valid CNIC or passport copy.'
                ]} />
              </Section>

              <Section id="usage-rules" title="Vehicle Use Rules" icon={Shield}>
                <StyledList items={[
                  '<strong>Chauffeur-driven only</strong> — self-drive is not allowed.',
                  'Do not exceed the vehicle\'s registered passenger capacity or weight limit.',
                  '<strong>Fuel:</strong> Return the vehicle with a full tank daily. Fuel/mileage calculated from our base station.',
                  '<strong>Route changes:</strong> No deviations once the deal is completed unless agreed in writing.',
                  '<strong>Illegal activity:</strong> No smuggled items, weapons, drugs or alcohol. Intoxicated passengers may be refused service.'
                ]} />
              </Section>

              <Section id="charges-timing" title="Charges & Timing" icon={Clock}>
                <StyledList items={[
                  '<strong>Additional charges:</strong> Basic rent, airport fees, taxes, government fees, parking, tolls; cleaning fee for excessive interior stains/dirt.',
                  '<strong>Local use:</strong> 12-hour basis up to 12:00 AM. Late > 15 min = late charge. Late > 3 hrs = extra full day rent.',
                  '<strong>Outstation:</strong> After 12 hours (local) and 23 hours (outstation), hourly charges apply. Late rules same as above.'
                ]} />
              </Section>

              <Section id="travel-scope" title="Outstation & Route Scope" icon={MapPin}>
                <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                  <p className="text-lg leading-8">
                    Fuel/mileage measured from base station. Travel must follow the agreed route. Any
                    change requires prior written approval.
                  </p>
                </div>
              </Section>

              <Section id="changes-cancel" title="Changes & Cancellation" icon={AlertTriangle}>
                <StyledList items={[
                  '<strong>Monthly rentals:</strong> 7 days\' notice for cancellation/termination.',
                  '<strong>Early termination:</strong> If ended earlier than agreed, per-day rate may change.',
                  '<strong>Vehicle/driver change:</strong> Company may replace vehicle/driver without notice for technical/behavioral reasons.',
                  '<strong>Reservation rights:</strong> Order may be accepted/declined or canceled at company\'s discretion.'
                ]} type="alert" />
              </Section>

              <Section id="vehicle-driver" title="Vehicle & Driver" icon={Car}>
                <StyledList items={[
                  'No obligation to provide a backup vehicle for mechanical/accident/driver issues.',
                  'Drivers handle loading/unloading only. Ensure your presence to avoid misplacement.',
                  'Company not responsible for damages due to miscommunication/vehicle/driver issues.'
                ]} />
              </Section>

              <Section id="liability-legal" title="Liability & Legal" icon={Shield}>
                <StyledList items={[
                  '<strong>Liability:</strong> Customer is responsible for security/legal matters if the vehicle is used in dangerous areas/illegal activity; must resolve at own cost.',
                  '<strong>Governing law:</strong> Pakistan; courts of Lahore have exclusive jurisdiction.',
                  '<strong>Insurance:</strong> Provided as per law; does not cover personal injury/property damage caused by customer/third parties. Obtain additional cover if needed.',
                  '<strong>Termination:</strong> Agreement may be terminated on breach; return vehicle immediately.',
                  '<strong>Indemnification:</strong> Customer indemnifies and holds company harmless from claims/costs.',
                  '<strong>Pricing/Modification:</strong> Services/prices may change; no liability for changes.',
                  '<strong>Severability:</strong> Invalid provision doesn\'t affect the rest.',
                  '<strong>Assignment:</strong> No assignment without written consent.',
                  '<strong>Notices:</strong> In writing, delivered personally or by registered mail.',
                  '<strong>Force majeure:</strong> No liability for delays due to events beyond control (e.g., war, unrest, strikes, fire, flood).',
                  '<strong>No agency:</strong> No partnership/agency/joint venture created.',
                  '<strong>Third-party beneficiaries:</strong> None.',
                  '<strong>Waiver/Non-waiver:</strong> Waiver of one breach isn\'t a waiver of others.',
                  '<strong>Entire agreement:</strong> Supersedes all prior understandings.'
                ]} />
              </Section>

              <Section id="privacy" title="Personal Data & Privacy" icon={Shield}>
                <StyledList items={[
                  '<strong>Personal info:</strong> Used only for rental purposes; not disclosed without consent (subject to law).',
                  '<strong>Privacy policy:</strong> Company complies with applicable privacy laws; policy available on website.',
                  '<strong>Electronic communications:</strong> Emails/electronic notices have the same legal effect as written communications.'
                ]} />
              </Section>

              <Section id="disputes" title="Dispute Resolution" icon={Shield}>
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200">
                  <p className="text-lg leading-8">
                    Disputes shall be resolved by arbitration under the rules of the{" "}
                    <strong>Lahore Chamber of Commerce & Industry</strong>. Language: English.
                  </p>
                </div>
              </Section>

              <Section id="acknowledgment" title="Acknowledgment & Signatures" icon={Check}>
                <StyledList items={[
                  'Customer had the opportunity to review these terms and seek legal advice.',
                  'Electronic signatures have the same force as original signatures.',
                  'Customer warrants authority to enter the agreement (incl. additional drivers).'
                ]} />
              </Section>

              <Section id="driver-duties" title="Driver Responsibilities & Duties" icon={Car}>
                <StyledList items={[
                  'Safe driving; follow safety standards',
                  'Open vehicle doors for passengers',
                  'Load/unload baggage',
                  'Keep the vehicle clean',
                  'Daily safety checks in the morning',
                  'Collect payments where applicable',
                  'Follow schedules on time'
                ]} />
              </Section>

              <Section id="no-smoking" title="No-Smoking Policy" icon={AlertTriangle} highlight>
                <div className="rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-lg leading-8 text-red-900 pr-16">
                    All vehicles are <strong>non-smoking</strong>. De-smoking may require up to{" "}
                    <strong>24 hours</strong> for chemical treatment. A{" "}
                    <strong className="text-red-700">Rs. 1,000</strong> cleaning fee may be charged for smoking inside the vehicle.
                  </p>
                </div>
              </Section>

              <Section id="contact" title="Contact" icon={Phone}>
                <div className="space-y-4">
                  <StyledList items={[
                    'For reservations/inquiries, contact the rental company directly — <em>do not</em> deal with drivers.',
                    'Official notices should be delivered to the address on the website or the address provided at booking.'
                  ]} />
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 text-green-600" />
                        <h4 className="font-bold text-green-800">Phone Support</h4>
                      </div>
                      <p className="text-green-700">Available 24/7 for emergencies</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <h4 className="font-bold text-blue-800">Email Support</h4>
                      </div>
                      <p className="text-blue-700">Response within 2 hours</p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* Enhanced back to top */}
              <div className="pt-8 border-t border-orange-100">
                <a
                  href="#overview"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-orange-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <ArrowUp className="w-4 h-4" />
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />

      {/* Enhanced footer */}
      <footer className="relative pb-20 pt-12">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/50 to-transparent"></div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}