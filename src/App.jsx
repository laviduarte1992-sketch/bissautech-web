import React, { useState } from 'react';

export default function App() {
  const [currency, setCurrency] = useState('GBP');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans">
      
      {/* 1. CABEÇALHO / NAVBAR COMPLETA ORIGINAL */}
      <header className="border-b border-slate-800 bg-slate-950/90 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          
          {/* LOGÓTIPO & ASSINATURA SUPERIOR */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-xl shadow-lg shadow-emerald-500/10">
              S
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-white flex items-center gap-1.5">
                SOLUÇÃO GLOBAL TECH
                <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800/50">GB</span>
              </div>
              <p className="text-[10px] text-emerald-400 font-medium">TECNOLOGIA & IA</p>
              <p className="text-[9px] text-slate-400">Powered by Engenheiro Lavi Duarte Indeque</p>
            </div>
          </div>

          {/* LINKS DE NAVEGAÇÃO */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-semibold text-slate-300">
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-emerald-400 transition-colors">Serviços</a>
            <a href="#certificacoes" className="hover:text-emerald-400 transition-colors">Certificações Google</a>
            <a href="#checkout" className="hover:text-emerald-400 transition-colors">Encomendar & Checkout</a>
            <a href="#acompanhar" className="hover:text-emerald-400 transition-colors">Acompanhar Pedido</a>
          </nav>

          {/* SELETOR DE MOEDA E BOTÃO DE PEDIDO */}
          <div className="flex items-center space-x-3">
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
            >
              <option value="GBP">£ GBP (UK)</option>
              <option value="EUR">€ EUR (EU)</option>
              <option value="USD">$ USD (US)</option>
              <option value="XOF">FCFA (GW)</option>
            </select>

            <a 
              href="https://wa.me/447404550419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              <span>📞</span>
              <span>+44 7404 550419</span>
            </a>

            <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center space-x-1.5">
              <span>🛍️</span>
              <span>Pedido</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. SECÇÃO PRINCIPAL DOS PARCEIROS & CLIENTES */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="bg-emerald-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/40">
              Confiança & Credibilidade
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Principais Parceiros & Clientes
            </h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Empresas e ecossistemas tecnológicos com os quais a SOLUÇÃO GLOBAL TECH GB colabora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* CARTÃO 1: Granja Sintani (Cliente Oficial) */}
            <div className="relative group bg-slate-950 border border-emerald-500/40 hover:border-emerald-400 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 space-y-4 overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center space-x-4">
                  
                  {/* Logótipo Animado */}
                  <div className="relative flex-shrink-0 animate-bounce" style={{ animationDuration: '2.5s' }}>
                    <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-emerald-400 p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-500/30">
                      <img 
                        src="https://www.granjasintani.com/logo.png" 
                        alt="Granja Sintani Logo" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://www.granjasintani.com/favicon.ico";
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Granja Sintani
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">Cliente Oficial • Presença Digital & Web</p>
                  </div>
                </div>

                {/* Badge de Projeto Ativo */}
                <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] px-2.5 py-1 rounded-md border border-emerald-500/30 font-semibold self-start sm:self-auto">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Caso de Sucesso</span>
                </span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed relative z-10">
                Plataforma web profissional desenvolvida pela SOLUÇÃO GLOBAL TECH GB para apresentar as operações e produtos da Granja Sintani com alto desempenho.
              </p>

              <div className="pt-2 relative z-10">
                <a 
                  href="https://www.granjasintani.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 text-xs font-bold transition-colors"
                >
                  <span>Visitar granjasintani.com</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </div>

            {/* CARTÃO 2: Google Cloud Ecosystem (Parceiro Tecnológico) */}
            <div className="bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all space-y-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Google Cloud Ecosystem</h3>
                  <p className="text-xs text-emerald-400 font-medium">Parceiro de Tecnologias de IA & Cloud</p>
                </div>
                <span className="bg-slate-800 text-slate-300 text-[10px] px-2.5 py-1 rounded-md border border-slate-700 font-semibold whitespace-nowrap">
                  Certificação Oficial
                </span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                Infraestrutura de nuvem, modelos de IA Generativa (Gemini) e arquitetura de Cibersegurança validados e certificados oficialmente pela Google Cloud.
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400">
                  6 Certificações Ativas (2026)
                </span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 3. RODAPÉ INSTITUCIONAL (NO FINAL ABSOLUTO) */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-300 font-bold text-sm">SOLUÇÃO GLOBAL TECH GB</p>
            <p>© 2026 SOLUÇÃO GLOBAL TECH GB. Todos os direitos reservados. Reino Unido & Guiné-Bissau.</p>
            <p className="text-emerald-400 font-semibold pt-1">Powered by Engenheiro Lavi Duarte Indeque</p>
          </div>

          <div className="flex items-center space-x-6 text-slate-400">
            <span>Leeds, UK</span>
            <span>•</span>
            <span>Guiné-Bissau</span>
            <span>•</span>
            <a 
              href="https://wa.me/447404550419" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
