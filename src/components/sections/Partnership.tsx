export function Partnership() {
  const features = [
    {
      title: "WhatsApp dedicado",
      desc: "Um grupo direto com o time. Resposta rápida, alinhamento na hora, sem intermediário."
    },
    {
      title: "Reunião semanal",
      desc: "Toda semana, o que funcionou, o que ajustamos e o que entra. Sem surpresa no fim do mês."
    },
    {
      title: "Relatório com clareza",
      desc: "Não é print de dashboard. É análise do que os números significam para o negócio da Inglaterra."
    },
    {
      title: "Estratégia contínua",
      desc: "Revisamos posicionamento, criativos e público a cada ciclo. Nada no piloto automático."
    }
  ];

  return (
    <section className="py-24 bg-background-alt border-b border-gold/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-16 text-center leading-tight">
            Você não vai ficar <br />
            <span className="text-dominus">esperando resposta.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative">
            {/* Decorative line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
            
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col relative">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-gold font-black text-xl w-8 h-8 flex items-center justify-center border border-gold/30 rounded-full">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                </div>
                <p className="text-lg text-secondary leading-relaxed pl-12">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
