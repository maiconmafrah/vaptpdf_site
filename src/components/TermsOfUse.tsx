import { AlertCircle, Scale } from 'lucide-react';
import { useI18n } from '../i18n';

export default function TermsOfUse() {
  const { t } = useI18n();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{t.terms.title}</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          {t.terms.intro}
        </p>
        <p className="text-sm text-slate-500 font-medium">{t.terms.updated}</p>
      </section>

      <div className="grid gap-8">
        <section className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{t.terms.useTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {t.terms.useDesc}
          </p>
          <ul className="space-y-3 pt-2 text-slate-600 list-disc list-inside marker:text-blue-500">
            <li>{t.terms.use1}</li>
            <li>{t.terms.use2}</li>
          </ul>
        </section>

        <section className="bg-orange-50 border border-orange-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">{t.terms.limTitle}</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            {t.terms.limDesc}
          </p>
          <ul className="space-y-3 pt-2 text-slate-600 list-disc list-inside marker:text-orange-500">
            <li>{t.terms.lim1}</li>
            <li>{t.terms.lim2}</li>
            <li>{t.terms.lim3}</li>
          </ul>
        </section>
      </div>

      <section className="border-t border-slate-100 pt-8 mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">{t.terms.conTitle}</h2>
        <p className="text-slate-600 mb-4">{t.terms.conDesc}</p>
        <a href="mailto:maiconmafra04@gmail.com" className="inline-flex items-center gap-2 text-brand-red hover:text-brand-dark font-semibold transition-colors">
          maiconmafra04@gmail.com
        </a>
      </section>
    </div>
  );
}
