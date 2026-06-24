export default function Footer() {
  return (
    <footer className="mt-24 bg-indigo text-porcelain">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <span className="nastaliq text-3xl text-turquoise">مٹی بولتی ہے</span>
          <p className="mt-3 text-sm leading-relaxed text-porcelain/70">
            The Clay Speaks. Rang-e-Mehk is the independent vision of Ghazal Noor:
            hand-thrown porcelain vessels carrying scent, colour and the memory of
            Multan&apos;s earth.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm uppercase tracking-widest text-mitti">
            The Mitti Manifesto
          </h4>
          <p className="text-sm leading-relaxed text-porcelain/70">
            Every vessel is fired in small kiln runs. We believe a fragrance is not
            sprayed but poured &mdash; a synesthesia of unglazed terracotta, cobalt
            tilework and sun-drenched domes.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm uppercase tracking-widest text-mitti">
            Studio
          </h4>
          <ul className="space-y-2 text-sm text-porcelain/70">
            <li>Multan, Pakistan</li>
            <li>WhatsApp: +92 300 0000000</li>
            <li>hello@rangemehk.pk</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-porcelain/10 py-6 text-center text-xs text-porcelain/50">
        &copy; {new Date().getFullYear()} Rang-e-Mehk by Ghazal Noor. All vessels
        hand-thrown with intention.
      </div>
    </footer>
  );
}
