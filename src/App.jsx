import React, { useState } from 'react';
import { 
  ShieldCheck, Cpu, Database, Network, Globe, Award, ExternalLink, 
  ChevronRight, Calculator, ShoppingBag, CheckCircle, Search, ArrowRight,
  Layers, Lock, Server, FileText, CreditCard, RefreshCw, Terminal, Star, Wrench,
  Mail, Phone, MapPin, MessageSquare
} from 'lucide-react';

const SERVICES = [
  {
    id: 'pc-maintenance',
    title: 'Manutenção de Computadores & Suporte',
    category: 'Suporte Técnico',
    priceGBP: 100,
    desc: 'Reparação de PCs/Portáteis, remoção de vírus, otimização de sistema e assistência técnica local ou remota.',
    features: ['Diagnóstico & Otimização', 'Remoção de Malware', 'Instalação de Software', 'Suporte Técnico Rápido']
  },
  {
    id: 'ai-gen',
    title: 'Soluções de IA Generativa & Gemini',
    category: 'Inteligência Artificial',
    priceGBP: 1200,
    desc: 'Integração de modelos Gemini, automação inteligente e pipelines SDLC acelerados por IA.',
    features: ['Modelos Gemini Personalizados', 'Engenharia de Prompts', 'Conformidade com IA Responsável', 'APIs de IA Cloud']
  },
  {
    id: 'cloud-sec',
    title: 'Cibersegurança Cloud & Trust',
    category: 'Cloud & Segurança',
    priceGBP: 1500,
    desc: 'Arquitetura de nuvem segura, encriptação de dados, gestão de identidades (IAM) e conformidade.',
    features: ['Google Cloud Security', 'Políticas IAM & Zero Trust', 'Auditoria de Soberania de Dados', 'Proteção de Infraestruturas']
  },
  {
    id: 'net-infra',
    title: 'Engenharia de Redes & Suporte TI',
    category: 'Infraestruturas',
    priceGBP: 800,
    desc: 'Implementação de redes corporativas, servidores Linux/Windows, diagnóstico remoto e suporte de TI.',
    features: ['Configuração de Redes & Routers', 'Administração Linux/Windows', 'Monitorização em Tempo Real', 'Suporte Técnico L2/L3']
  },
  {
    id: 'db-web',
    title: 'Desenvolvimento Web & Bases de Dados',
    category: 'Desenvolvimento',
    priceGBP: 1000,
    desc: 'Aplicações Web modernas em React/Vite com bases de dados MySQL/Supabase otimizadas.',
    features: ['Sistemas Web Responsivos', 'Modelação MySQL/PostgreSQL', 'Integração Supabase Cloud', 'APIs RESTful de Elevada Performance']
  }
];

const CERTIFICATIONS = [
  { name: 'Gemini for Developers', org: 'Google Cloud', badge: '🤖', date: '2026' },
  { name: 'SDLC with Generative AI', org: 'Google Cloud', badge: '⚙️', date: '2026' },
  { name: 'Trust and Security in Google Cloud', org: 'Google Cloud', badge: '🛡️', date: '2026' },
  { name: 'Responsible AI for Tech Leaders', org: 'Google Cloud', badge: '⚖️', date: '2026' },
  { name: 'Introduction to Large Language Models', org: 'Google Cloud', badge: '🧠', date: '2026' },
  { name: 'Introduction to Generative AI', org: 'Google Cloud', badge: '✨', date: '2026' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState('GBP'); // GBP, USD, EUR, XOF
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [clientData, setClientData] = useState({ name: '', email: '', phone: '', company: '', notes: '' });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [orderCreated, setOrderCreated] = useState(null);
  const [searchOrderId, setSearchOrderId] = useState('');
  const [foundOrder, setFoundOrder] = useState(null);

  // Taxas de conversão
  const rates = { GBP: 1, USD: 1.28, EUR: 1.18, XOF: 775 };
  const currencySymbols = { GBP: '£', USD: '$', EUR: '€', XOF: 'CFA ' };

  const convertPrice = (gbpAmount) => {
    return Math.round(gbpAmount * rates[currency]);
  };

  const toggleCartService = (service) => {
    if (cart.find(s => s.id === service.id)) {
      setCart(cart.filter(s => s.id !== service.id));
    } else {
      setCart([...cart, service]);
    }
  };

  const totalGBP = cart.reduce((acc, curr) => acc + curr.priceGBP, 0);

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const orderId = 'SGT-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('pt-PT'),
      client: clientData,
      services: cart,
      totalAmount: convertPrice(totalGBP),
      currency: currency,
      symbol: currencySymbols[currency],
      paymentMethod,
      status: 'Aguardando Confirmação'
    };
    setOrderCreated(newOrder);
    setCheckoutStep(4);
  };

  const handleSearchOrder = (e) => {
    e.preventDefault();
    if (orderCreated && (searchOrderId === orderCreated.id || searchOrderId.toLowerCase() === orderCreated.client.email.toLowerCase())) {
      setFoundOrder(orderCreated);
    } else {
      setFoundOrder('NOT_FOUND');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Header / Navegação */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              S
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-wider text-white">
                SOLUÇÃO GLOBAL <span className="text-emerald-400">TECH GB</span>
              </span>
              <p className="text-[10px] text-emerald-400 font-semibold tracking-widest uppercase">Tecnologia & IA</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button onClick={() => setActiveTab('home')} className={`hover:text-emerald-400 transition-colors ${activeTab === 'home' ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>Início</button>
            <button onClick={() => setActiveTab('services')} className={`hover:text-emerald-400 transition-colors ${activeTab === 'services' ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>Serviços</button>
            <button onClick={() => setActiveTab('certs')} className={`hover:text-emerald-400 transition-colors ${activeTab === 'certs' ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>Certificações Google</button>
            <button onClick={() => setActiveTab('checkout')} className={`hover:text-emerald-400 transition-colors ${activeTab === 'checkout' ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>Encomendar & Checkout</button>
            <button onClick={() => setActiveTab('track')} className={`hover:text-emerald-400 transition-colors ${activeTab === 'track' ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>Acompanhar Pedido</button>
          </nav>

          <div className="flex items-center space-x-4">
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:border-emerald-500 focus:outline-none"
            >
              <option value="GBP">£ GBP (UK)</option>
              <option value="EUR">€ EUR (Europa)</option>
              <option value="USD">$ USD (Global)</option>
              <option value="XOF">CFA XOF (África)</option>
            </select>

            <a 
              href="https://wa.me/447404550419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 font-semibold px-3 py-1.5 rounded-xl text-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+44 7404 550419</span>
            </a>

            <button 
              onClick={() => setActiveTab('checkout')}
              className="relative bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition-all flex items-center space-x-2 shadow-lg shadow-emerald-500/20"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pedido</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-950 text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Dinâmico */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* INÍCIO (HOME) */}
        {activeTab === 'home' && (
          <div className="space-y-20">
            <div className="text-center max-w-3xl mx-auto space-y-6 pt-8">
              <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-500/30 rounded-full px-4 py-1.5 text-xs text-emerald-400 font-medium">
                <Star className="w-3.5 h-3.5" />
                <span>SOLUÇÃO GLOBAL TECH GB — Especialistas em IA & Cloud Security</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Engenharia de TI com Inovação em <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Google Cloud & IA</span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl font-light leading-relaxed">
                A <strong>SOLUÇÃO GLOBAL TECH GB</strong> foi criada no Reino Unido com uma forte ligação à Guiné-Bissau e alcance global. Fornecemos arquitetura de redes, cibersegurança em nuvem, manutenção e soluções avançadas de Inteligência Artificial com padrões internacionais.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button 
                  onClick={() => setActiveTab('services')}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-base transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20"
                >
                  <span>Explorar Serviços</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveTab('checkout')}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium px-8 py-3.5 rounded-xl text-base transition-all"
                >
                  Pedir Orçamento
                </button>
              </div>
            </div>

            {/* Destaque das Certificações */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
                <h2 className="text-2xl font-bold text-white">Competência Comprovada Google Cloud</h2>
                <p className="text-slate-400 text-sm">6 Certificações Especializadas em Inteligência Artificial, LLMs, Cibersegurança e SDLC</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800/80 hover:border-emerald-500/50 transition-all p-4 rounded-xl flex items-start space-x-3">
                    <span className="text-2xl">{cert.badge}</span>
                    <div>
                      <h3 className="font-semibold text-slate-200 text-sm">{cert.name}</h3>
                      <p className="text-xs text-emerald-400 mt-1">{cert.org} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundador e Credibilidade */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-md">
                  Liderança & Visão
                </div>
                <h2 className="text-3xl font-bold text-white">Engenheiro Lavi Duarte Indeque</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Fundador da <strong>SOLUÇÃO GLOBAL TECH GB</strong>. Com formação internacional no Reino Unido (Leeds City College) e Marrocos (EPSIEL), aliada a uma sólida experiência prática no Ecobank, Lavi combina especialização em redes e infraestruturas críticas com certificações de topo em IA Generativa e Nuvem pela Google Cloud.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">Crioulo (Nativo)</span>
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">Português (Fluente)</span>
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">English (Fluente)</span>
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">Français (Profissional)</span>
                </div>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-emerald-400 flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Presença Global & Conexão Bissau</span>
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Criada e Operacional no Reino Unido (Leeds) para clientes internacionais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Forte presença e apoio tecnológico dedicado ao mercado da Guiné-Bissau</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Faturação e pagamentos em GBP (£), EUR (€), USD ($) e CFA (XOF)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SERVIÇOS */}
        {activeTab === 'services' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h1 className="text-3xl font-bold text-white">Catálogo de Serviços — SOLUÇÃO GLOBAL TECH GB</h1>
              <p className="text-slate-400 text-sm">Selecione os serviços de que a sua empresa ou projeto necessita e adicione ao seu pedido.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service) => {
                const inCart = cart.some(s => s.id === service.id);
                return (
                  <div key={service.id} className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="bg-emerald-950/80 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800/40">
                          {service.category}
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-white">{currencySymbols[currency]}{convertPrice(service.priceGBP)}</span>
                          <p className="text-[10px] text-slate-500">Valor base</p>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>

                      <ul className="space-y-2 pt-2">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs text-slate-300 flex items-center space-x-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-slate-800/80 mt-6">
                      <button 
                        onClick={() => toggleCartService(service)}
                        className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 ${
                          inCart 
                            ? 'bg-emerald-950 border border-emerald-500 text-emerald-400' 
                            : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>Adicionado ao Pedido</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" />
                            <span>Adicionar ao Pedido</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CERTIFICAÇÕES */}
        {activeTab === 'certs' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h1 className="text-3xl font-bold text-white">Certificações Oficiais Google Cloud</h1>
              <p className="text-slate-400 text-sm">Garantia técnica de rigor, inovação ética em IA e cibersegurança em ambientes cloud para os projetos da SOLUÇÃO GLOBAL TECH GB.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-2xl border border-slate-800 shrink-0">
                    {cert.badge}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-xs text-emerald-400 font-medium">{cert.org} • Emitido em {cert.date}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Especialização verificada na plataforma de aprendizagem e desenvolvimento profissional Google Cloud.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CHECKOUT & PEDIDOS */}
        {activeTab === 'checkout' && (
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white">Novo Pedido / Solicitação de Serviço</h1>
              <p className="text-slate-400 text-sm">Configure os serviços e envie o seu pedido para a SOLUÇÃO GLOBAL TECH GB.</p>
            </div>

            {checkoutStep !== 4 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-8 space-y-4">
                    <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                    <p className="text-slate-400 text-sm">Ainda não selecionou nenhum serviço.</p>
                    <button 
                      onClick={() => setActiveTab('services')}
                      className="bg-emerald-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-emerald-400 transition-all"
                    >
                      Ver Catálogo de Serviços
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                    <div className="space-y-3 border-b border-slate-800 pb-6">
                      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Serviços Selecionados</h3>
                      {cart.map(service => (
                        <div key={service.id} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800 text-sm">
                          <div>
                            <p className="font-semibold text-white">{service.title}</p>
                            <p className="text-xs text-slate-500">{service.category}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="font-bold text-emerald-400">{currencySymbols[currency]}{convertPrice(service.priceGBP)}</span>
                            <button 
                              type="button" 
                              onClick={() => toggleCartService(service)}
                              className="text-slate-500 hover:text-red-400 text-xs"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between items-center pt-2 font-bold text-lg text-white">
                        <span>Total Estimado:</span>
                        <span className="text-emerald-400">{currencySymbols[currency]}{convertPrice(totalGBP)}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Dados do Cliente / Empresa</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1">Nome Completo *</label>
                          <input 
                            required
                            type="text" 
                            value={clientData.name}
                            onChange={e => setClientData({...clientData, name: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none"
                            placeholder="Ex: João Silva"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1">E-mail de Contacto *</label>
                          <input 
                            required
                            type="email" 
                            value={clientData.email}
                            onChange={e => setClientData({...clientData, email: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none"
                            placeholder="joao@empresa.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1">Telefone / WhatsApp</label>
                          <input 
                            type="text" 
                            value={clientData.phone}
                            onChange={e => setClientData({...clientData, phone: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none"
                            placeholder="+44 7404 550419"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-400 mb-1">Empresa / Organização</label>
                          <input 
                            type="text" 
                            value={clientData.company}
                            onChange={e => setClientData({...clientData, company: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none"
                            placeholder="Nome da sua empresa"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Notas do Projeto / Requisitos Adicionais</label>
                        <textarea 
                          rows={3}
                          value={clientData.notes}
                          onChange={e => setClientData({...clientData, notes: e.target.value})}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none"
                          placeholder="Descreva brevemente o seu pedido..."
                        />
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-slate-800 pt-6">
                      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Método de Pagamento Preferencial</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <label className={`border p-3 rounded-xl flex items-center space-x-3 cursor-pointer text-sm ${paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-950/30' : 'border-slate-800 bg-slate-950'}`}>
                          <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-emerald-500" />
                          <span>Cartão / Stripe</span>
                        </label>
                        <label className={`border p-3 rounded-xl flex items-center space-x-3 cursor-pointer text-sm ${paymentMethod === 'transfer' ? 'border-emerald-500 bg-emerald-950/30' : 'border-slate-800 bg-slate-950'}`}>
                          <input type="radio" name="payment" checked={paymentMethod === 'transfer'} onChange={() => setPaymentMethod('transfer')} className="accent-emerald-500" />
                          <span>Transferência / Wise</span>
                        </label>
                        <label className={`border p-3 rounded-xl flex items-center space-x-3 cursor-pointer text-sm ${paymentMethod === 'crypto' ? 'border-emerald-500 bg-emerald-950/30' : 'border-slate-800 bg-slate-950'}`}>
                          <input type="radio" name="payment" checked={paymentMethod === 'crypto'} onChange={() => setPaymentMethod('crypto')} className="accent-emerald-500" />
                          <span>Crypto (USDT/BTC)</span>
                        </label>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 rounded-xl text-base transition-all shadow-lg shadow-emerald-500/20"
                    >
                      Confirmar e Finalizar Pedido
                    </button>
                  </form>
                )}
              </div>
            )}

            {checkoutStep === 4 && orderCreated && (
              <div className="bg-slate-900 border border-emerald-500/50 rounded-2xl p-8 space-y-6 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">Pedido Registado na SOLUÇÃO GLOBAL TECH GB!</h2>
                  <p className="text-slate-400 text-sm">O seu código de acompanhamento único é:</p>
                  <p className="text-3xl font-black text-emerald-400 tracking-wider font-mono">{orderCreated.id}</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl text-left space-y-2 text-xs text-slate-300 border border-slate-800">
                  <p><strong>Cliente:</strong> {orderCreated.client.name} ({orderCreated.client.email})</p>
                  <p><strong>Total:</strong> {orderCreated.symbol}{orderCreated.totalAmount} ({orderCreated.currency})</p>
                  <p><strong>Estado:</strong> <span className="text-amber-400 font-semibold">{orderCreated.status}</span></p>
                  <p><strong>Data:</strong> {orderCreated.date}</p>
                </div>

                <p className="text-xs text-slate-400">
                  Enviámos uma cópia de confirmação para o e-mail informado. A nossa equipa entrará em contacto nas próximas horas com a fatura e dados da Wise.
                </p>

                <div className="flex gap-4">
                  <button 
                    onClick={() => { setCart([]); setCheckoutStep(1); setActiveTab('home'); }}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-sm transition-all"
                  >
                    Voltar ao Início
                  </button>
                  <button 
                    onClick={() => setActiveTab('track')}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl text-sm transition-all"
                  >
                    Acompanhar Pedido
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ACOMPANHAR PEDIDO */}
        {activeTab === 'track' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white">Acompanhar Estado do Pedido</h1>
              <p className="text-slate-400 text-sm">Insira o seu ID de Pedido (ex: SGT-123456) ou o e-mail associado para consultar o progresso.</p>
            </div>

            <form onSubmit={handleSearchOrder} className="flex gap-3">
              <input 
                required
                type="text" 
                value={searchOrderId}
                onChange={e => setSearchOrderId(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none"
                placeholder="ID do Pedido (ex: SGT-123456) ou E-mail"
              />
              <button 
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span>Pesquisar</span>
              </button>
            </form>

            {foundOrder === 'NOT_FOUND' && (
              <div className="bg-red-950/40 border border-red-500/30 text-red-300 p-4 rounded-xl text-center text-sm">
                Nenhum pedido encontrado com este código ou e-mail. Verifique os dados e tente novamente.
              </div>
            )}

            {foundOrder && foundOrder !== 'NOT_FOUND' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs text-slate-500">ID do Pedido</span>
                    <h3 className="text-lg font-bold text-white font-mono">{foundOrder.id}</h3>
                  </div>
                  <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-medium">
                    {foundOrder.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-slate-300">
                  <p><strong>Cliente:</strong> {foundOrder.client.name}</p>
                  <p><strong>Data:</strong> {foundOrder.date}</p>
                  <p><strong>Valor Total:</strong> {foundOrder.symbol}{foundOrder.totalAmount} ({foundOrder.currency})</p>
                </div>

                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-400 mb-2">Serviços Contratados:</p>
                  <div className="space-y-1">
                    {foundOrder.services.map((s, idx) => (
                      <div key={idx} className="bg-slate-950 p-2.5 rounded-lg text-xs text-slate-300 flex justify-between">
                        <span>{s.title}</span>
                        <span className="text-emerald-400">{s.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer com Contactos Diretos & Powered By */}
      <footer className="border-t border-slate-800/80 bg-slate-950 mt-20 py-16 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Blocos de Contacto Directo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800/80">
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Telefone & WhatsApp</h4>
              <p className="text-xs text-slate-400">Atendimento rápido e esclarecimento de dúvidas:</p>
              <a 
                href="https://wa.me/447404550419" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-emerald-400 font-semibold hover:underline text-sm"
              >
                +44 7404 550419
              </a>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">E-mail Corporativo</h4>
              <p className="text-xs text-slate-400">Envie-nos propostas, detalhes de projetos ou faturas:</p>
              <div className="space-y-1 font-mono text-xs">
                <a href="mailto:lavi.duarte@solucaoglobaltech.com" className="block text-emerald-400 hover:underline">lavi.duarte@solucaoglobaltech.com</a>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Sede Operacional</h4>
              <p className="text-xs text-slate-400">Engenheiro Lavi Duarte Indeque</p>
              <p className="text-slate-300 text-xs font-medium">32 Conway Place, LS8 5HT, Leeds, UK</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
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

        </div>
      </footer>
    </div>
  );
}
