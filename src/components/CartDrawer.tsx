import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    increment,
    decrement,
    removeFromCart,
    subtotal,
  } = useCart();

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-indigo/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-porcelain shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-indigo/10 px-6 py-5">
          <div>
            <span className="nastaliq text-lg text-cobalt">ٹوکری</span>
            <h2 className="text-xl font-semibold text-indigo">Your Ledger</h2>
          </div>
          <button
            onClick={closeCart}
            className="text-2xl text-indigo/60 transition hover:text-mitti"
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-indigo/60">
              Your collection of vessels is empty. The clay awaits.
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div
                    className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl"
                    style={{ backgroundColor: item.color }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover opacity-90"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="font-medium text-indigo">{item.name}</span>
                    <span className="text-xs text-turquoise">{item.volume}</span>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => decrement(item.id)}
                        className="h-6 w-6 rounded-full border border-indigo/20 text-indigo"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increment(item.id)}
                        className="h-6 w-6 rounded-full border border-indigo/20 text-indigo"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-xs uppercase tracking-widest text-mitti"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-cobalt">
                    PKR {(item.price * item.quantity).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-indigo/10 px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-lg">
            <span className="text-indigo/70">Subtotal</span>
            <span className="font-semibold text-cobalt">
              PKR {subtotal.toLocaleString()}
            </span>
          </div>
          <Link
            href="/checkout"
            onClick={closeCart}
            className={`block rounded-full bg-mitti px-6 py-3 text-center font-medium text-porcelain transition hover:bg-cobalt ${
              items.length === 0 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            Proceed to Checkout
          </Link>
        </div>
      </aside>
    </>
  );
}
