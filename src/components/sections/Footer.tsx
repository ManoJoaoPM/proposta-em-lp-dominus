export function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img 
          src="/logo-institucional-white.png" 
          alt="Dominus Logo" 
          className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
        />
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Dominus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
