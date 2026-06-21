import { useState } from 'react';
import { FileText, Smartphone, ShieldCheck, Zap, Play, Globe } from 'lucide-react';
import clsx from 'clsx';
import MobileMockup from './components/MobileMockup';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import { useI18n, Language } from './i18n';

type TabType = 'privacy' | 'terms';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('privacy');
  const { lang, setLang, t } = useI18n();

  const handleLangChange = (l: Language) => {
    setLang(l);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-red selection:text-white pb-20">
      {/* Header Mobile / Desktop */}
      <header className="bg-brand-red text-white py-4 md:py-6 px-4 md:px-6 border-b-4 border-brand-dark sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
            <div className="bg-white p-2.5 rounded-2xl shadow-lg shrink-0">
              <FileText className="w-7 h-7 text-brand-red" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">VaptPDF</h1>
              <p className="text-red-100 font-medium text-xs md:text-sm tracking-wide">{t.header.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-3 md:gap-4">
            {/* Language Switcher */}
            <div className="flex bg-black/20 p-1 rounded-xl w-full md:w-auto overflow-x-auto no-scrollbar">
              {(['pt', 'en', 'es', 'de', 'fr'] as Language[]).map(l => (
                  <button
                    key={l}
                    onClick={() => handleLangChange(l)}
                    className={clsx(
                      "flex-1 md:flex-none px-4 md:px-3 py-2 md:py-1.5 rounded-lg text-xs font-bold uppercase transition-all whitespace-nowrap",
                      lang === l ? "bg-white text-brand-red shadow-sm" : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {l === 'pt' ? 'PT' : l === 'en' ? 'EN' : l === 'es' ? 'ES' : l === 'de' ? 'DE' : 'FR'}
                  </button>
              ))}
            </div>

            {/* Desktop/Tablet Tabs */}
            <nav className="flex items-center gap-1 bg-black/10 p-1 rounded-xl backdrop-blur-sm self-stretch flex-1 md:flex-none">
              <button
                onClick={() => setActiveTab('privacy')}
                className={clsx(
                  'px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-[11px] md:text-sm font-semibold transition-all duration-300 flex-1 md:flex-none text-center',
                  activeTab === 'privacy' 
                    ? 'bg-white text-brand-red shadow-sm' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                )}
              >
                {t.header.privacy}
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={clsx(
                  'px-3 md:px-5 py-2 md:py-2.5 rounded-lg text-[11px] md:text-sm font-semibold transition-all duration-300 flex-1 md:flex-none text-center',
                  activeTab === 'terms' 
                    ? 'bg-white text-brand-red shadow-sm' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                )}
              >
                {t.header.terms}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Split */}
      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-16 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Mockup Context */}
        <div className="w-full lg:w-1/3 flex flex-col items-center gap-6 lg:sticky lg:top-24 relative">
          
          {/* Decorative Backing Glow */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-red/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>

          <div className="bg-white text-brand-dark px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm border border-red-100">
            <Smartphone className="w-4 h-4" />
            {t.sidebar.preview}
          </div>

          <div className="relative">
            {/* Floating Badge 1 (Left) */}
            <div className="absolute -left-6 md:-left-12 top-24 bg-white/90 backdrop-blur-sm px-3 lg:px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-[bounce_4s_ease-in-out_infinite] z-20 hover:scale-105 transition-transform cursor-default">
              <div className="bg-green-100 p-2 rounded-full">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-tight">{t.sidebar.secure}</span>
                <span className="text-sm font-bold text-slate-800 leading-tight">{t.sidebar.offline}</span>
              </div>
            </div>
            
            {/* Floating Badge 2 (Right) */}
            <div className="absolute -right-6 md:-right-12 bottom-32 bg-white/90 backdrop-blur-sm px-3 lg:px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-[bounce_5s_ease-in-out_infinite] z-20 hover:scale-105 transition-transform cursor-default" style={{ animationDelay: '1s' }}>
              <div className="bg-amber-100 p-2 rounded-full">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-tight">{t.sidebar.process}</span>
                <span className="text-sm font-bold text-slate-800 leading-tight">{t.sidebar.fast}</span>
              </div>
            </div>

            {/* The Mockup */}
            <MobileMockup />
            
            {/* Ground Shadow */}
            <div className="w-48 h-3 bg-black/15 rounded-[100%] mx-auto mt-6 blur-md"></div>
          </div>

          {/* Supported Languages Mention */}
          <div className="w-full max-w-[280px] bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden mt-2">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-50 rounded-full blur-2xl"></div>
            <div className="flex items-center gap-2 mb-2 text-brand-red font-bold text-sm">
              <Globe className="w-5 h-5" />
              <span>Idiomas / Languages</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {t.sidebar.langsSupport}
            </p>
          </div>

          {/* Content Below Mockup */}
          <div className="text-center space-y-4 px-2 pb-8 max-w-[320px]">
             <h3 className="font-extrabold text-slate-900 text-[22px] md:text-2xl leading-tight whitespace-pre-line">
              {t.sidebar.cloudTitle}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              {t.sidebar.cloudDesc}
            </p>
            
            <div className="pt-4 flex justify-center">
              <a href="#" className="bg-black text-white px-6 py-3.5 rounded-2xl flex items-center gap-4 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all cursor-pointer">
                <Play className="w-7 h-7 fill-white" />
                <div className="flex flex-col items-start leading-none gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{t.sidebar.download}</span>
                  <span className="text-lg font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Policy Content */}
        <div className="w-full lg:w-2/3 max-w-3xl bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {activeTab === 'privacy' && <PrivacyPolicy />}
          {activeTab === 'terms' && <TermsOfUse />}
        </div>
      </main>

      <footer className="mt-8 text-center px-6">
        <p className="text-slate-500 font-medium text-sm">
          &copy; {new Date().getFullYear()} VaptPDF. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
