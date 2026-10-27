import React, { useState } from 'react';
import { 
  ShieldCheck, Cpu, Database, Network, Globe, Award, ExternalLink, 
  ChevronRight, Calculator, ShoppingBag, CheckCircle, Search, ArrowRight,
  Layers, Lock, Server, FileText, CreditCard, RefreshCw, Terminal, Star
} from 'lucide-react';

const SERVICES = [
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
            {/* Seletor de Moeda */}
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
      <main
