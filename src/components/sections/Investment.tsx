export function Investment() {
  return (
    <section className="py-24 bg-background border-b border-dominus/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
              O investimento.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-secondary leading-relaxed">
              <p>
                Para uma imobiliária que trabalha com imóveis a partir de R$300mil, uma venda gerada pelo canal cobre anos de parceria.
              </p>
              <p className="text-primary font-medium">
                A pergunta não é se R$2.500 é caro. A pergunta é: quanto custa manter uma agência que não entende o seu negócio?
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="bg-background-alt border border-gold/30 p-10 md:p-12 text-center relative overflow-hidden group hover:border-gold transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-dominus" />
              
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                Valor Mensal
              </span>
              <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                R$ 2.500
              </div>
              <span className="text-secondary text-lg">/ mês</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
