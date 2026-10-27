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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px
