import { FileText, AlertCircle, Scale } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Termos de Uso</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          Bem-vindo ao <strong>VaptPDF</strong>. Ao utilizar nosso aplicativo, você concorda com os termos 
          descritos nesta página. Nosso foco é fornecer uma ferramenta simples, rápida e segura para 
          gerenciar seus documentos em PDF.
        </p>
        <p className="text-sm text-slate-500 font-medium">Última atualização: 18 de Junho de 2026</p>
      </section>

      <div className="grid gap-8">
        <section className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Uso do Aplicativo</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            O VaptPDF é fornecido "como está", focado em entregar ferramentas offline para seus documentos.
            Você é o único responsável pelo conteúdo dos arquivos PDF que gerencia, comprime, divide ou mescla 
            utilizando o nosso aplicativo.
          </p>
          <ul className="space-y-3 pt-2 text-slate-600 list-disc list-inside marker:text-blue-500">
            <li>Você concorda em não subverter o uso da ferramenta para fins ilícitos.</li>
            <li>O processamento das ferramentas (como conversões e mesclagens) é feito localmente, dependendo do hardware do seu dispositivo.</li>
          </ul>
        </section>

        <section className="bg-orange-50 border border-orange-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <AlertCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">Limitação de Responsabilidade</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Sendo um app offline que manipula arquivos no seu dispositivo local:
          </p>
          <ul className="space-y-3 pt-2 text-slate-600 list-disc list-inside marker:text-orange-500">
            <li>Não nos responsabilizamos pela perda de documentos caso seu dispositivo seja formatado ou corrompido.</li>
            <li>Recomendamos manter backups periódicos dos seus arquivos importantes antes de realizar operações como divisão ou mesclagem críticas.</li>
            <li>Nós não temos acesso aos seus arquivos para recuperá-los em caso de exclusão acidental.</li>
          </ul>
        </section>
      </div>

      <section className="border-t border-slate-100 pt-8 mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Contato</h2>
        <p className="text-slate-600 mb-4">
          Para assuntos relacionados aos nossos termos de uso, entre em contato através do e-mail:
        </p>
        <a href="mailto:maiconmafra04@gmail.com" className="inline-flex items-center gap-2 text-brand-red hover:text-brand-dark font-semibold transition-colors">
          maiconmafra04@gmail.com
        </a>
      </section>
    </div>
  );
}
