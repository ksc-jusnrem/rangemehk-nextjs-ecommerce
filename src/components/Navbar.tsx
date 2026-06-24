import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-indigo/10 bg-porcelain/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="nastaliq text-2xl text-cobalt">رنگِ مہک</span>
          <span className="text-xs uppercase tracking-[0.3em] text-mitti">
            Rang-e-Mehk
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm uppercase tracking-widest text-indigo md:flex">
          <Link href="/" className="transition hover:text-mitti">
            Home
          </Link>
          <Link href="/quiz" className="transition hover:text-mitti">
            Scent Finder
          </Link>
          <Link href="/checkout" className="transition hover:text-mitti">
            Checkout
          </Link>
        </div>

        <button
          onClick={openCart}
          className="relative rounded-full border border-cobalt px-5 py-2 text-sm font-medium text-cobalt transition hover:bg-cobalt hover:text-porcelain"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-mitti text-xs text-porcelain">
              {totalItems}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
