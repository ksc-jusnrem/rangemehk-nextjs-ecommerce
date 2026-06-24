import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-indigo/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container with Hover Reveal */}
      <div
        className="relative h-64 w-full overflow-hidden"
        style={{ backgroundColor: product.color }}
      >
        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Theory Image (Revealed on hover) */}
        {product.theoryImage && (
          <img
            src={product.theoryImage}
            alt={`${product.name} Theory`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-90"
          />
        )}
        
        <span
          className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs uppercase tracking-widest text-white"
          style={{ backgroundColor: product.accent }}
        >
          {product.volume}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="nastaliq text-xl" style={{ color: product.color }}>
          {product.urduName}
        </span>
        <h3 className="mt-1 text-2xl font-semibold text-indigo">
          {product.name}
        </h3>
        <p className="text-sm uppercase tracking-widest text-turquoise">
          {product.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-indigo/70">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.notes.map((note) => (
            <span
              key={note}
              className="rounded-full bg-porcelain px-3 py-1 text-xs text-mitti"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          {/* Updated Price Display */}
          <span className="text-lg font-semibold text-cobalt">
            {product.displayPrice}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="rounded-full bg-mitti px-5 py-2 text-sm font-medium text-porcelain transition hover:bg-cobalt"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
