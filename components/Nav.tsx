export default function Nav() {
  return (
    <nav className="border-b border-primary/10 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-primary font-semibold text-lg tracking-tight">
          AW
        </a>
        <div className="flex gap-6 text-sm text-primary/70">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#skills" className="hover:text-accent">Skills</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}
