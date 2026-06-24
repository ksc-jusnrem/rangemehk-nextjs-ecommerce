import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-porcelain">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="nastaliq block text-5xl leading-tight text-cobalt">
              مٹی بولتی ہے
            </span>
            <p className="mt-2 text-sm uppercase tracking-[0.4em] text-mitti">
              The Clay Speaks
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-snug text-indigo md:text-5xl">
              <h1 className="mt-6 text-4xl font-semibold leading-snug text-indigo md:text-5xl">
  Rang-e-Mehk by Ghazal Noor
</h1> into hand-thrown porcelain.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-indigo/70">
              Rang-e-Mehk is Ghazal Noor&apos;s independent meditation on
              synesthesia &mdash; where the cobalt of Multan&apos;s tilework, the
              warmth of unglazed clay, and the aroma of rain on earth become one
              vessel.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="rounded-full bg-mitti px-7 py-3 font-medium text-porcelain transition hover:bg-cobalt"
              >
                Explore the Vessels
              </a>
              <Link
                href="/quiz"
                className="rounded-full border border-cobalt px-7 py-3 font-medium text-cobalt transition hover:bg-cobalt hover:text-porcelain"
              >
                Find Your Scent
              </Link>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-[2.5rem] bg-cobalt">
            <img
              src="hero.JPG"
              alt="Hand-thrown porcelain vessel"
              className="h-full w-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Manifesto / synesthesia narrative */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-turquoise">
          The Synesthesia of Mitti
        </h2>
        <p className="mt-6 text-2xl font-light leading-relaxed text-indigo">
          We believe colour has a temperature, that clay holds a memory, and that
          a single drop of attar can carry the hush of a tiled shrine at dusk.
        </p>
        <p className="mt-6 text-base leading-relaxed text-indigo/70">
          Each 30ml vessel is hand-thrown and fired in small kiln runs. There is
          no mass production here &mdash; only the unhurried dialogue between maker,
          clay and scent. Read slowly. Choose intuitively.
        </p>
      </section>

      {/* Product grid */}
      <section id="collection" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12 text-center">
          <span className="nastaliq text-3xl text-cobalt">تین برتن</span>
          <h2 className="mt-1 text-3xl font-semibold text-indigo">
            The Three Signature Vessels
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
