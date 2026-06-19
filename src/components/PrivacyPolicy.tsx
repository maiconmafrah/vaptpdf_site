import { Shield, HardDrive, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Política de Privacidade</h2>
        <p className="text-lg leading-relaxed text-slate-600">
          A sua privacidade é nossa principal prioridade. Nós do <strong>VaptPDF</strong> acreditamos que os seus documentos 
          são estritamente pessoais. Por isso, construímos o nosso aplicativo com uma arquitetura baseada 100% 
          no seu próprio dispositivo, garantindo máxima segurança e privacidade.
        </p>
        <p className="text-sm text-slate-500 font-medium">Última atualização: 18 de Junho de 2026</p>
      </section>

      <div className="grid gap-8">
        <section className="bg-slate-50 border border-slate-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Shield className="w-8 h-8 text-brand-red" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">100% Offline e Sem Coleta</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            O VaptPDF funciona de maneira <strong>totalmente offline</strong>. O aplicativo não possui conexão com a internet e 
            <strong> não coleta, não armazena e não transmite</strong> nenhum dado pessoal, telemetria, análise de uso ou 
            conteúdo dos seus arquivos para servidores externos.
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">Sem criação de contas ou login.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">Nenhum rastreamento de uso.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 font-medium">Seus arquivos permanecem apenas no seu celular.</span>
            </li>
          </ul>
        </section>

        <section className="bg-red-50 border border-red-100 p-8 rounded-3xl shadow-sm space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <HardDrive className="w-8 h-8 text-brand-red" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 leading-tight">Uso do Armazenamento</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Para cumprir sua função como um gerenciador e leitor de documentos, o VaptPDF solicita a permissão de 
            <strong> Acesso a Todos os Arquivos</strong> (<code>MANAGE_EXTERNAL_STORAGE</code>).
          </p>
          <p className="text-slate-600 leading-relaxed">
            Esta permissão é utilizada <strong>estrita e unicamente</strong> para:
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">Buscar e listar todos os arquivos PDF presentes no armazenamento interno do seu dispositivo.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">Permitir a leitura, organização e interação com os seus documentos localmente.</span>
            </li>
          </ul>
          <div className="bg-white p-4 rounded-xl border border-red-100 text-sm text-slate-600 italic leading-relaxed">
            * O app acessa as pastas do seu celular apenas para gerenciar seus PDFs. Nenhum arquivo é lido para outros fins ou movido para fora do aparelho.
          </div>
        </section>
      </div>

      <section className="border-t border-slate-100 pt-8 mt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Dúvidas?</h2>
        <p className="text-slate-600 mb-4">
          Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato:
        </p>
        <a href="mailto:maiconmafra04@gmail.com" className="inline-flex items-center gap-2 text-brand-red hover:text-brand-dark font-semibold transition-colors">
          maiconmafra04@gmail.com
        </a>
      </section>
    </div>
  );
}
