import React, { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      
      {/* CONTEÚDO PRINCIPAL DO SITE */}
      <div>
        {/* CABEÇALHO / HEADER */}
        <header className="border-b border-slate-800/80 bg-slate-950/80 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-bold tracking-wider text-white">SOLUÇÃO GLOBAL TECH GB</span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-slate-300">
              <span>Leeds, UK</span>
              <span>•</span>
              <span>Guiné-Bissau</span>
            </div>
          </div>
        </header>

        {/* HERO / SECÇÃO PRINCIPAL */}
        <section className="py-20 text-center max-w-4xl mx-auto px-4 space-y-6">
          <span className="bg-emerald-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/40">
            Inovação Tecnológica Global
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Engenharia de TI com Inovação em Google Cloud & IA
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            A Solução Global Tech GB, fundada no Reino Unido, fornece arquiteturas de redes, cibersegurança e soluções avançadas de Inteligência Artificial para padrões internacionais.
          </p>
        </section>

        {/* ========================================================= */}
        {/* SECÇÃO DE PARCEIROS E CLIENTES (LOGO ACIMA DO RODAPÉ)     */}
        {/* ========================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="bg-emerald-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/40">
                Confiança & Credibilidade
              </span>
              <h2 className="text-2xl font-bold text-white">Principais Parceiros & Clientes</h2>
              <p className="text-slate-400 text-sm">Empresas e ecossistemas tecnológicos com os quais a SOLUÇÃO GLOBAL TECH GB colabora.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Cliente Oficial: Granja Sintani (Com Logótipo e Movimento) */}
              <div className="relative group bg-slate-950 border border-emerald-500/40 hover:border-emerald-400 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 space-y-4 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center space-x-4">
                    {/* Logótipo com Flutuação Animada */}
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

                  {/* Badge com Ponto Piscando */}
                  <span className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] px-2.5 py-1 rounded-md border border-emerald-500/30 font-semibold self-start sm:self-auto">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Projeto Ativo</span>
                  </span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed relative z-10">
                  Plataforma web profissional desenvolvida pela SOLUÇÃO GLOBAL TECH GB para apresentar as operações, produtos e loja online da Granja Sintani com elevado desempenho.
                </p>

                {/* Botão de Destaque Animado */}
                <div className="pt-2 relative z-10">
                  <a 
                    href="https://www.granjasintani.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full space-x-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 shadow-lg shadow-emerald-500/20"
                  >
                    <span className="flex items-center space-x-2">
                      <span>🌐</span>
                      <span>Visitar Site Oficial (granjasintani.com)</span>
                    </span>
                    <span className="text-base animate-pulse">↗</span>
                  </a>
                </div>
              </div>

              {/* Parceiro Tecnológico: Google Cloud */}
              <div className="bg-slate-950 border border-slate-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">Google Cloud Ecosystem</h3>
                    <p className="text-xs text-emerald-400 font-medium">Parceiro de Tecnologias de IA & Cloud</p>
                  </div>
                  <span className="bg-slate-800 text-slate-300 text-[10px] px-2.5 py-1 rounded-md border border-slate-700 font-semibold">
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
        </div>
      </div>

      {/* ========================================================= */}
      {/* RODAPÉ INSTITUCIONAL (FICA NO FIM ABSOLUTO DA PÁGINA)       */}
      {/* ========================================================= */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-300 font-bold text-sm">SOLUÇÃO GLOBAL TECH GB</p>
            <p>© 2026 SOLUÇÃO GLOBAL TECH GB. Todos os direitos reservados. Reino Unido & Guiné-Bissau.</p>
            <p className="text-emerald-400 font-semibold pt-1">Powered by Engenheiro Lavi Duarte Indeque</p>
          </div>
          <div className="flex space-x-6 text-slate-400">
            <span>Leeds, UK</span>
            <span>•</span>
            <span>Guiné-Bissau</span>
            <span>•</span>
            <a href="https://wa.me/447404550419" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">WhatsApp Directo</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
