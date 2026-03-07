export default function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-primary/40 text-sm">
        &copy; {new Date().getFullYear()} Alistair Walsh
      </div>
    </footer>
  );
}
