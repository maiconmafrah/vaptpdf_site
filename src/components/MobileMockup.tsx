import { useState } from 'react';
import { 
  Search, MoreVertical, Image as ImageIcon, FileText, Minimize2, CopyPlus, 
  Split, Lock, Home, LayoutGrid, Heart, Folder, RefreshCw, Pen, Scan, 
  FilePlus, Languages, Trash2, Grid, RotateCw, ListOrdered, ArrowDownUp, 
  ListFilter, FolderPlus, Star
} from 'lucide-react';
import clsx from 'clsx';
import { useI18n } from '../i18n';

type Tab = 'inicio' | 'ferramentas' | 'favoritos' | 'arquivos';

export default function MobileMockup() {
  const [activeTab, setActiveTab] = useState<Tab>('inicio');
  const { t } = useI18n();
  const tm = t.mockup;

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[600px] w-[280px] shadow-2xl overflow-hidden ring-1 ring-white/10 shrink-0">
      <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center w-full">
        <div className="w-20 h-4 bg-black rounded-b-xl"></div>
      </div>
      
      {/* App Content */}
      <div className="w-full h-full bg-[#121212] text-white flex flex-col font-sans overflow-hidden pt-6 relative">
        
        {/* === INÍCIO SCREEN === */}
        <div className={clsx("flex-1 overflow-y-auto pb-20 no-scrollbar transition-opacity duration-300 absolute inset-0 pt-6", activeTab === 'inicio' ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-1.5 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">PDF</span>
              </div>
              <span className="font-bold text-lg">Vapt <span className="text-red-500 text-sm">PDF</span></span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Search className="w-4 h-4" />
              <MoreVertical className="w-4 h-4" />
            </div>
          </div>

          <div className="flex gap-3 px-4 overflow-x-auto pb-2 pt-2 snap-x no-scrollbar">
            <div className="bg-[#1f1f1f] rounded-2xl p-3 min-w-[90px] flex flex-col items-center justify-center gap-2 snap-center">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-red-500" />
              </div>
              <span className="text-[10px] text-gray-300 text-center leading-tight">{tm.pdfImg}</span>
            </div>
            <div className="bg-[#1f1f1f] rounded-2xl p-3 min-w-[90px] flex flex-col items-center justify-center gap-2 snap-center">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-[10px] text-gray-300 text-center leading-tight">{tm.imgPdf}</span>
            </div>
            <div className="bg-[#1f1f1f] rounded-2xl p-3 min-w-[90px] flex flex-col items-center justify-center gap-2 snap-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-500" />
              </div>
              <span className="text-[10px] text-gray-300 text-center leading-tight">{tm.txtPdf}</span>
            </div>
          </div>

          <div className="mt-4 px-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">{tm.quick}</h3>
              <span className="text-red-500 text-[10px] font-medium cursor-pointer" onClick={() => setActiveTab('ferramentas')}>{tm.all}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-[#1f1f1f] border border-gray-800 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 h-16">
                <Minimize2 className="w-4 h-4 text-purple-400" />
                <span className="text-[8px] text-gray-400 text-center leading-tight">{tm.comp}</span>
              </div>
              <div className="bg-[#1f1f1f] border border-gray-800 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 h-16">
                <CopyPlus className="w-4 h-4 text-green-400" />
                <span className="text-[8px] text-gray-400 text-center leading-tight">{tm.merge}</span>
              </div>
              <div className="bg-[#1f1f1f] border border-gray-800 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 h-16">
                <Split className="w-4 h-4 text-orange-400" />
                <span className="text-[8px] text-gray-400 text-center leading-tight">{tm.split}</span>
              </div>
              <div className="bg-[#1f1f1f] border border-gray-800 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 h-16">
                <Lock className="w-4 h-4 text-blue-400" />
                <span className="text-[8px] text-gray-400 text-center leading-tight">{tm.lock}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 px-4">
            <h3 className="font-semibold text-sm mb-6">{tm.recents}</h3>
            <div className="flex items-center justify-center">
              <span className="text-[11px] text-gray-500">{tm.noD}</span>
            </div>
          </div>
        </div>

        {/* === FERRAMENTAS SCREEN === */}
        <div className={clsx("flex-1 overflow-y-auto pb-20 no-scrollbar transition-opacity duration-300 absolute inset-0 pt-6", activeTab === 'ferramentas' ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")}>
          <div className="px-4 py-3">
            <h2 className="font-bold text-lg mb-4">{tm.tools}</h2>
            <div className="bg-[#1f1f1f] rounded-xl flex items-center px-3 py-2 gap-2 mb-4">
              <Search className="w-4 h-4 text-gray-500" />
              <input type="text" placeholder={tm.searchTool} className="bg-transparent border-none outline-none text-xs text-gray-300 placeholder-gray-500 w-full" readOnly />
            </div>

            {/* Converter e Extrair */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <RefreshCw className="w-3.5 h-3.5 text-red-500" />
                <h3 className="text-[11px] font-semibold text-gray-300">{tm.conv}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ToolCard icon={<Scan className="w-4 h-4 text-teal-400" />} title={tm.scan} />
                <ToolCard icon={<ImageIcon className="w-4 h-4 text-amber-500" />} title={tm.jpgPdf} />
                <ToolCard icon={<ImageIcon className="w-4 h-4 text-red-400" />} title={tm.pdfJpg} />
                <ToolCard icon={<FilePlus className="w-4 h-4 text-blue-500" />} title={tm.create} />
                <ToolCard icon={<FileText className="w-4 h-4 text-purple-400" />} title={tm.ext} />
                <ToolCard icon={<Languages className="w-4 h-4 text-blue-400" />} title={tm.trans} />
              </div>
            </div>

            {/* Editar e Organizar */}
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-3">
                <Pen className="w-3.5 h-3.5 text-red-500" />
                <h3 className="text-[11px] font-semibold text-gray-300">{tm.edit}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ToolCard icon={<ArrowDownUp className="w-4 h-4 text-blue-400" />} title={tm.join} />
                <ToolCard icon={<Split className="w-4 h-4 text-orange-400" />} title={tm.split} />
                <ToolCard icon={<Trash2 className="w-4 h-4 text-red-400" />} title={tm.cut} />
                <ToolCard icon={<Grid className="w-4 h-4 text-green-500" />} title={tm.org} />
                <ToolCard icon={<RotateCw className="w-4 h-4 text-blue-400" />} title={tm.rot} />
                <ToolCard icon={<ListOrdered className="w-4 h-4 text-purple-400" />} title={tm.num} />
              </div>
            </div>
          </div>
        </div>

        {/* === FAVORITOS SCREEN === */}
        <div className={clsx("flex-1 overflow-y-auto pb-20 no-scrollbar transition-opacity duration-300 absolute inset-0 pt-6", activeTab === 'favoritos' ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")}>
          <div className="px-4 py-3 h-full flex flex-col">
            <h2 className="font-bold text-lg mb-4">{tm.fav}</h2>
            <div className="flex-1 flex flex-col items-center justify-center pb-20 opacity-60">
              <Heart className="w-16 h-16 mb-4 text-gray-500" strokeWidth={1.5} />
              <span className="text-[11px] text-gray-400">{tm.noFav}</span>
            </div>
          </div>
        </div>

        {/* === ARQUIVOS SCREEN === */}
        <div className={clsx("flex-1 overflow-y-auto pb-20 no-scrollbar transition-opacity duration-300 absolute inset-0 pt-6", activeTab === 'arquivos' ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none")}>
          <div className="px-4 py-3 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-base">{tm.files}</h2>
              <div className="flex items-center gap-3">
                <ListFilter className="w-4 h-4 text-gray-400" />
                <ListOrdered className="w-4 h-4 text-blue-400" />
                <FolderPlus className="w-4 h-4 text-green-500" />
              </div>
            </div>
            
            <div className="bg-[#1f1f1f] rounded-xl flex items-center px-3 py-2 gap-2 mb-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input type="text" placeholder={tm.searchPdf} className="bg-transparent border-none outline-none text-xs text-gray-300 placeholder-gray-500 w-full" readOnly />
            </div>
            <div className="text-[7px] text-gray-500 mb-8 truncate">Caminho: .../data/com.vaptpdf.app/files/VaptPDF</div>

            <div className="flex-1 flex flex-col items-center justify-center pb-20 opacity-60">
              <Folder className="w-16 h-16 mb-4 text-gray-400" strokeWidth={1.5} />
              <span className="text-[11px] text-gray-400">{tm.noFile}</span>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] bg-[#1a1a1a] border-t border-gray-800 flex justify-around items-center px-1 pb-1 z-30">
          <button onClick={() => setActiveTab('inicio')} className="flex flex-col items-center justify-center gap-1 w-16 h-full">
            <Home className={clsx("w-5 h-5", activeTab === 'inicio' ? "text-red-500" : "text-gray-500")} />
            <span className={clsx("text-[9px] truncate w-full text-center", activeTab === 'inicio' ? "text-red-500 font-medium" : "text-gray-500")}>{tm.home}</span>
          </button>
          <button onClick={() => setActiveTab('ferramentas')} className="flex flex-col items-center justify-center gap-1 w-16 h-full">
            <LayoutGrid className={clsx("w-5 h-5", activeTab === 'ferramentas' ? "text-red-500" : "text-gray-500")} />
            <span className={clsx("text-[9px] truncate w-full text-center", activeTab === 'ferramentas' ? "text-red-500 font-medium" : "text-gray-500")}>{tm.tools}</span>
          </button>
          <button onClick={() => setActiveTab('favoritos')} className="flex flex-col items-center justify-center gap-1 w-16 h-full">
            <Heart className={clsx("w-5 h-5", activeTab === 'favoritos' ? "text-red-500" : "text-gray-500")} />
            <span className={clsx("text-[9px] truncate w-full text-center", activeTab === 'favoritos' ? "text-red-500 font-medium" : "text-gray-500")}>{tm.fav}</span>
          </button>
          <button onClick={() => setActiveTab('arquivos')} className="flex flex-col items-center justify-center gap-1 w-16 h-full">
            <Folder className={clsx("w-5 h-5", activeTab === 'arquivos' ? "text-red-500" : "text-gray-500")} />
            <span className={clsx("text-[9px] truncate w-full text-center", activeTab === 'arquivos' ? "text-red-500 font-medium" : "text-gray-500")}>{tm.files}</span>
          </button>
          
          {/* Navigation Tab Indicator Line */}
          <div className="absolute bottom-1 w-[120px] h-1 bg-white/20 rounded-full left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="bg-[#1f1f1f] rounded-xl p-3 flex items-center justify-between border border-transparent hover:border-gray-700 transition-colors cursor-pointer group">
      <div className="flex items-center gap-2.5">
        <div className="bg-[#2a2a2a] p-1.5 rounded-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-[10px] font-medium text-gray-200">{title}</span>
      </div>
      <Star className="w-3.5 h-3.5 text-gray-600" />
    </div>
  );
}
