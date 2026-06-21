import { Shield, HardDrive, CheckCircle2, Megaphone } from 'lucide-react';
import { useI18n } from '../i18n';

export default function PrivacyPolicy() {
  const { t } = useI18n();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.privacy.title}</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          {t.privacy.intro}
        </p>
        <p className="text-sm text-slate-500 font-medium">{t.privacy.updated}</p>
      </section>

      <div className="grid gap-8">
        {/* AdMob Section */}
        <section className="bg-blue-50 border border-blue-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Megaphone className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{t.privacy.adTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {t.privacy.adDesc}
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">{t.privacy.ad1}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">{t.privacy.ad2}</span>
            </li>
          </ul>
        </section>

        {/* 100% Offline Reinforced Section */}
        <section className="bg-green-50 border border-green-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{t.privacy.offTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            <strong>{t.privacy.offDesc}</strong>
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">{t.privacy.off1}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">{t.privacy.off2}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">{t.privacy.off3}</span>
            </li>
          </ul>
        </section>

        {/* Storage Access */}
        <section className="bg-red-50 border border-red-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <HardDrive className="w-8 h-8 text-brand-red" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">{t.privacy.stTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {t.privacy.stDesc}
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{t.privacy.st1}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{t.privacy.st2}</span>
            </li>
          </ul>
          <div className="bg-white p-4 rounded-xl border border-red-100 text-sm text-slate-600 italic leading-relaxed">
            {t.privacy.stN}
          </div>
        </section>
      </div>

      <section className="border-t border-slate-100 pt-8 mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">{t.privacy.contactTitle}</h2>
        <p className="text-slate-600 mb-4">{t.privacy.contactDesc}</p>
        <a href="mailto:maiconmafra04@gmail.com" className="inline-flex items-center gap-2 text-brand-red hover:text-brand-dark font-semibold transition-colors">
          maiconmafra04@gmail.com
        </a>
      </section>
    </div>
  );
}
