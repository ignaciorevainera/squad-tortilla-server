import { useState } from 'react';
import { Download, CheckCircle, Copy, Check } from 'lucide-react';
import { modsList } from './data/mods';

export default function App() {
  const [copied, setCopied] = useState(false);
  const serverIp = "sqt1-LhDk.aternos.me:24241";

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen w-full bg-[#0c0d0f] text-[#e0e0e0] font-sans flex flex-col overflow-hidden select-none selection:bg-[#7a49a5]/30">
      
      {/* Header: Branding & Core Stats */}
      <header className="h-[80px] flex-shrink-0 bg-[#16181d] border-b border-[#2d2f36] px-4 md:px-8 flex items-center justify-between shadow-lg z-10">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 bg-[#ffc72c] rounded flex items-center justify-center text-[#0c0d0f] font-bold text-xl shadow-[0_0_15px_rgba(255,199,44,0.4)]">T</div>
          <div>
            <h1 className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight">SQUAD TORTILLA SERVER</h1>
            <p className="text-[10px] md:text-xs text-[#8e9299] font-mono leading-tight">PROYECTO SURVIVAL • ATERNOS SERVER</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#8e9299] uppercase tracking-widest font-bold">Versión Loader</span>
            <span className="text-sm text-[#ffd659] font-semibold">Fabric 0.15.11</span>
          </div>
          <div className="h-10 w-px bg-[#2d2f36]"></div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-[#8e9299] uppercase tracking-widest font-bold">IP del Servidor</span>
            <button 
              onClick={copyIp} 
              className="flex items-center gap-1.5 text-sm text-[#4ade80] font-mono hover:text-[#ffd659] focus:outline-none transition-colors" 
              title="Copiar IP"
            >
              {serverIp}
              {copied ? <Check className="w-3.5 h-3.5 text-[#4ade80]" /> : <Copy className="w-3.5 h-3.5 text-[#8e9299] hover:text-[#ffd659]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main View */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left: Mod List (Density Focus) */}
        <section className="flex-1 p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-[#2d2f36] bg-[#0f1115] flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <h2 className="text-[10px] md:text-xs font-bold text-[#8e9299] uppercase tracking-[0.2em]">
              Repositorio de Mods ({modsList.length} Archivos)
            </h2>
            <button className="px-3 py-1.5 bg-[#2d2f36] hover:bg-[#3d404a] text-[10px] md:text-[11px] font-semibold text-white rounded transition-colors border border-[#444] shadow-sm">
              Descargar Todo (.zip)
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { title: 'Dependencias', type: 'dependency' },
              { title: 'Mods del Servidor', type: 'mod' },
              { title: 'Shaders y Gráficos', type: 'shader' }
            ].map((group) => {
              const items = modsList.filter(m => m.type === group.type);
              if (items.length === 0) return null;
              
              return (
                <div key={group.type} className="mb-6 last:mb-0">
                  <div className="flex items-center gap-3 sticky top-0 bg-[#0f1115] pt-0 pb-3 z-30 hidden md:flex">
                    <h3 className="text-[10px] font-bold text-white uppercase tracking-widest">{group.title}</h3>
                    <div className="h-px bg-[#2d2f36] flex-1"></div>
                    <span className="text-[9px] font-mono text-[#8e9299]">{items.length} items</span>
                  </div>
                  
                  <div className="space-y-2">
                    {items.map((mod, index) => (
                      <div key={mod.id} className="bg-[#1a1c23] border border-[#2d2f36] p-3 rounded flex items-center gap-3 hover:border-[#ffc72c] transition-all group relative overflow-hidden">
                        <div className="w-8 h-8 flex-shrink-0 bg-[#2d2f36] rounded flex items-center justify-center text-xs font-mono text-[#8e9299] group-hover:text-white transition-colors relative z-10">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1 min-w-0 relative z-10 flex flex-col justify-center">
                          <div className="flex items-center justify-start gap-1.5 md:gap-2 mb-0.5 md:mb-1 flex-wrap">
                            <h3 className="text-xs md:text-sm font-semibold text-white flex items-center gap-1.5 mr-1">
                              {mod.name}
                              {mod.isRequired && <CheckCircle className="w-3 h-3 text-[#ffc72c] flex-shrink-0" title="Requerido" />}
                            </h3>
                            <span className={`flex-shrink-0 text-[8px] md:text-[9px] px-1.5 py-0.5 bg-[#14151a] rounded uppercase font-semibold border ${
                              mod.type === 'dependency' ? 'text-[#8e9299] border-[#2d2f36]' : 
                              mod.type === 'mod' ? 'text-[#4ade80] border-[#1e4a32]' : 
                              'text-[#ffd659] border-[#8a6100]'
                            }`}>
                              {mod.type}
                            </span>
                            <span className="flex-shrink-0 text-[8px] md:text-[9px] px-1.5 py-0.5 bg-[#0f1115] border border-[#2d2f36] rounded uppercase font-semibold text-[#8e9299]">
                              {mod.contentCategory}
                            </span>
                          </div>
                          <p className="text-[10px] md:text-[11px] text-[#8e9299] truncate" title={mod.description}>
                            {mod.description}
                          </p>
                          {mod.dependencies && mod.dependencies.length > 0 && (
                            <div className="text-[9px] md:text-[10px] text-[#5b5e66] truncate mt-0.5">
                              <span className="text-[#ffd659]/70 font-semibold mr-1">Requiere:</span>
                              {mod.dependencies.join(' • ')}
                            </div>
                          )}
                        </div>
                        <a 
                          href={mod.downloadUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#2d2f36]/50 hover:bg-[#ffc72c]/20 text-[#ffd659] border border-transparent hover:border-[#ffc72c]/50 transition-all ml-2"
                        >
                          <span className="hidden sm:inline text-[10px] font-bold">DESCARGAR</span>
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Right: Status & Quick Info */}
        <aside className="w-full lg:w-[380px] p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-[#0c0d0f] overflow-y-auto custom-scrollbar flex-shrink-0">
          
          {/* Tutorial / Micro-guide */}
          <div className="bg-[#1a1c23] rounded-xl border border-[#2d2f36] p-5 flex flex-col shrink-0">
            <h3 className="text-[11px] md:text-xs font-bold text-white uppercase tracking-widest mb-4">Cómo Instalar</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ffc72c] flex items-center justify-center text-[10px] font-bold text-[#0c0d0f] shadow-[0_0_8px_rgba(255,199,44,0.4)]">1</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Descarga el cargador de <a href="https://fabricmc.net/use/installer/" target="_blank" rel="noreferrer" className="text-white hover:text-[#ffd659] hover:underline transition-colors">Fabric Loader</a> para la v1.21.10.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ffc72c] flex items-center justify-center text-[10px] font-bold text-[#0c0d0f] shadow-[0_0_8px_rgba(255,199,44,0.4)]">2</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Presiona <span className="text-white">Win + R</span>, escribe <code className="bg-[#0c0d0f] px-1 py-0.5 rounded text-[#ffd659] border border-[#2d2f36]">%appdata%</code> y entra a <code className="text-white">.minecraft/mods</code>.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ffc72c] flex items-center justify-center text-[10px] font-bold text-[#0c0d0f] shadow-[0_0_8px_rgba(255,199,44,0.4)]">3</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Mueve todos los archivos mod descargados (.jar) dentro de esa carpeta.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ffc72c] flex items-center justify-center text-[10px] font-bold text-[#0c0d0f] shadow-[0_0_8px_rgba(255,199,44,0.4)]">4</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Inicia el juego seleccionando el perfil <span className="text-white font-bold">Fabric Loader</span>.</p>
              </div>
            </div>
            <div className="mt-5 p-3 md:p-4 bg-[#ffc72c]/10 border border-[#ffc72c]/30 rounded-lg">
              <p className="text-[9px] md:text-[10px] leading-relaxed text-[#ffe488]">
                * Los mods obligatorios (<CheckCircle className="w-2.5 h-2.5 inline mx-0.5 text-[#ffc72c]" />) son indispensables para conectarse. Los demás son para mejorar tu experiencia en el cliente.
              </p>
            </div>
          </div>

          {/* Tutorial Iris Shaders */}
          <div className="bg-[#1a1c23] rounded-xl border border-[#2d2f36] p-5 flex flex-col shrink-0">
            <h3 className="text-[11px] md:text-xs font-bold text-white uppercase tracking-widest mb-4">Instalar Shaders (Opcional)</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#16181d] border border-[#ffc72c]/50 flex items-center justify-center text-[10px] font-bold text-[#ffd659]">A</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Descarga el <span className="text-white">Universal JAR</span> desde la web oficial de Iris y ábrelo (requiere Java).</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#16181d] border border-[#ffc72c]/50 flex items-center justify-center text-[10px] font-bold text-[#ffd659]">B</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Bajo el selector "Installation type", elige <span className="text-white font-bold">Fabric Install</span> para que siga siendo compatible con el resto de nuestros mods.</p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#16181d] border border-[#ffc72c]/50 flex items-center justify-center text-[10px] font-bold text-[#ffd659]">C</div>
                <p className="text-[10px] md:text-[11px] text-[#8e9299]">Coloca cualquiera de los otros mods en tu carpeta <code className="text-white">mods</code> y juega usando tu nuevo perfil habilitado con Iris.</p>
              </div>
            </div>
          </div>

        </aside>
      </main>
    </div>
  );
}

