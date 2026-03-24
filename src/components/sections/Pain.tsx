import { AlertTriangle } from "lucide-react";

export function Pain() {
  return (
    <section className="py-24 bg-background-alt border-b border-gold/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-dominus" />
            <span className="text-gold font-bold tracking-widest uppercase text-sm">
              O Cenário Atual
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight">
            Você já sabe o que <span className="text-dominus">não funciona.</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-secondary leading-relaxed border-l-2 border-dominus pl-6 md:pl-8">
            <p>
              Agência que some depois do onboarding. Criativo genérico que poderia ser de qualquer imobiliária do Brasil. 
              Relatório cheio de número, vazio de decisão. Reunião mensal que não muda nada.
            </p>
            <p className="text-primary font-medium">
              A Inglaterra não precisa de mais uma conta no Gerenciador de Anúncios. 
              Precisa de alguém que entenda o negócio e construa junto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
