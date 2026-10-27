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
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">Português (Nativo)</span>
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">English (Fluente)</span>
                  <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700">Français (Profissional)</span>
                </div>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-emerald-400 flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Presença Global & Conexão B
