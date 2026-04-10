import { useState } from 'react';
import { motion } from 'framer-motion';

export function Calculator() {
  const [verba, setVerba] = useState(3000);
  const [vgv, setVgv] = useState(800000);
  const [taxaSite, setTaxaSite] = useState(2.9);
  const [taxaVisita, setTaxaVisita] = useState(15.0);
  const [taxaVenda, setTaxaVenda] = useState(29);

  // Constants
  const CPL = 40;
  const COMISSAO = 0.05;
  const MESES = 3;

  // Calculated values
  const investTotal = verba * MESES;
  const totalLeads = Math.floor(investTotal / CPL);
  const leads = Math.floor(totalLeads * 0.5); // 50% MQL
  const visitasSite = Math.round(totalLeads / (taxaSite / 100));
  const visitas = Math.floor(leads * (taxaVisita / 100));
  const vendas = Math.floor(visitas * (taxaVenda / 100));
  const vgvTotal = vendas * vgv;
  const comissao = vgvTotal * COMISSAO;
  const cplReal = totalLeads > 0 ? investTotal / totalLeads : 0;
  const gestao90 = 2800 * MESES;
  const roi = gestao90 > 0 ? (comissao / gestao90).toFixed(1) + 'x' : '—';

  // Formatters
  const fmtInt = (n: number) => Math.round(n).toLocaleString('pt-BR');
  const fmtMoney = (n: number) => {
    if (n >= 1000000) return 'R$' + (n / 1000000).toFixed(2).replace('.', ',') + 'M';
    if (n >= 1000) return 'R$' + (n / 1000).toFixed(0) + 'K';
    return 'R$' + n.toFixed(0);
  };

  return (
    <section id="calculadora" className="py-24 md:py-32 relative overflow-hidden bg-background-dark">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(232,113,10,0.07)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 md:px-20 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-dominus uppercase mb-4 block">Simulação interativa</span>
          <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-text-white">
            Projeção <span className="text-dominus">Operacional</span> Dominus
          </h2>
          <p className="text-lg md:text-xl text-text-gray font-regular max-w-2xl mx-auto leading-relaxed">
            Insira os dados da OArco e visualize o funil de resultado em 90 dias. Números baseados em benchmarking real do mercado imobiliário.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-background-medium/60 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="bg-dominus px-8 py-6 flex flex-wrap items-center gap-4">
            <div className="font-black text-2xl text-white">
              ⬡ Projeção Operacional Dominus
            </div>
            <div className="text-xs font-bold tracking-widest uppercase text-white/80 ml-auto">
              Simulação em tempo real · 90 dias
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* INPUTS */}
            <div className="p-8 md:p-12 md:border-r border-white/5">
              <h3 className="text-sm font-bold tracking-widest uppercase text-text-gray mb-8">PARÂMETROS DO PROJETO</h3>

              <div className="mb-8">
                <label className="block text-xs font-bold tracking-widest uppercase text-text-gray mb-3">Verba de anúncios (mensal)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-dominus pointer-events-none">R$</span>
                  <input 
                    type="number" 
                    value={verba} 
                    onChange={(e) => setVerba(Number(e.target.value))} 
                    min="500" max="50000" step="500"
                    className="w-full bg-background-dark border border-white/10 rounded-xl py-4 pr-4 pl-12 text-white text-lg font-bold outline-none focus:border-dominus transition-colors"
                  />
                </div>
                <div className="text-sm text-text-gray mt-2">Investimento mensal em Google Ads (apart da gestão)</div>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold tracking-widest uppercase text-text-gray mb-3">VGV médio por imóvel</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-dominus pointer-events-none">R$</span>
                  <input 
                    type="number" 
                    value={vgv} 
                    onChange={(e) => setVgv(Number(e.target.value))} 
                    min="100000" max="10000000" step="50000"
                    className="w-full bg-background-dark border border-white/10 rounded-xl py-4 pr-4 pl-12 text-white text-lg font-bold outline-none focus:border-dominus transition-colors"
                  />
                </div>
                <div className="text-sm text-text-gray mt-2">Valor médio dos imóveis do portfólio da OArco</div>
              </div>

              <div className="mt-12 p-6 bg-background-dark rounded-xl border border-white/5">
                <h4 className="text-xs font-bold tracking-widest uppercase text-dominus mb-4">Taxas de Conversão (Benchmark)</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-text-gray">Site → Lead:</span>
                    <span className="text-white font-bold">{taxaSite.toFixed(1)}%</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-text-gray">Qualificação (MQL):</span>
                    <span className="text-white font-bold">50%</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-text-gray">Lead MQL → Visita:</span>
                    <span className="text-white font-bold">{taxaVisita.toFixed(1)}%</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-text-gray">Visita → Venda:</span>
                    <span className="text-white font-bold">{taxaVenda}%</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* OUTPUT */}
            <div className="p-8 md:p-12 flex flex-col bg-background-dark/30">
              <h3 className="text-sm font-bold tracking-widest uppercase text-text-gray mb-8">FUNIL EM 90 DIAS</h3>
              
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div className="p-6 rounded-2xl flex items-center justify-between transition-all duration-300 bg-dominus/10 border border-dominus/20">
                  <div className="text-xs font-bold tracking-widest uppercase text-text-gray">Leads MQL Gerados</div>
                  <div className="text-3xl font-black text-white tracking-tight">{fmtInt(leads)}</div>
                </div>
                
                <div className="p-6 rounded-2xl flex items-center justify-between transition-all duration-300 bg-dominus border border-dominus/50 shadow-[0_4px_20px_rgba(232,113,10,0.3)]">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white">Fechamentos (Estimativa baseada em mercado)</div>
                  </div>
                  <div className="text-4xl font-black text-white tracking-tight">{fmtInt(vendas)}</div>
                </div>
              </div>

              <div className="mt-8 bg-background-medium rounded-2xl p-8 border border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-text-gray mb-2">VGV Gerado (90 dias)</div>
                  <div className="text-3xl font-black text-white tracking-tight leading-none mb-1">{fmtMoney(vgvTotal)}</div>
                  <div className="text-xs text-text-gray">Volume Geral de Vendas</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-text-gray mb-2">Comissão estimada (5%)</div>
                  <div className="text-3xl font-black text-dominus tracking-tight leading-none mb-1">{fmtMoney(comissao)}</div>
                  <div className="text-xs text-text-gray">VGC, retorno para a OArco</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-text-gray mb-2">CPL estimado</div>
                  <div className="text-3xl font-black text-white tracking-tight leading-none mb-1">R${Math.round(cplReal)}</div>
                  <div className="text-xs text-text-gray">Custo por lead</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-text-gray mb-2">ROI sobre gestão</div>
                  <div className="text-3xl font-black text-white tracking-tight leading-none mb-1">{roi}</div>
                  <div className="text-xs text-text-gray">Retorno vs. R$2.800/mês</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <p className="text-center mt-8 text-sm text-text-gray leading-relaxed">
          Projeção baseada em benchmarking: Kenlo, Hypnobox, RD Station, Leadster, Zap Imóveis e OLX.<br className="hidden md:block"/>
          CPL estimado de R$40 por lead gerado via Google Ads.
        </p>
      </div>
    </section>
  );
}
