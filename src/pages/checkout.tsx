import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const COD_LIMIT = 15000;

type PaymentMethod = "cod" | "easypaisa" | "jazzcash" | "bank";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    address: "",
    city: "",
  });
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [placed, setPlaced] = useState(false);

  const codBlocked = subtotal > COD_LIMIT;
  const effectivePayment = codBlocked && payment === "cod" ? null : payment;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const canSubmit =
    items.length > 0 &&
    form.name &&
    form.whatsapp &&
    form.address &&
    form.city &&
    effectivePayment !== null &&
    !(codBlocked && payment === "cod");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="mx-auto max-w-xl px-6 py-24 text-center fade-in">
        <span className="nastaliq text-4xl text-cobalt">شکریہ</span>
        <h1 className="mt-3 text-3xl font-semibold text-indigo">
          Order Received
        </h1>
        <p className="mt-4 text-indigo/70">
          Ghazal Noor&apos;s studio will reach out on WhatsApp to coordinate your
          custom kiln run and fragile-safe delivery. Thank you for choosing
          hand-thrown porcelain.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-mitti px-7 py-3 font-medium text-porcelain transition hover:bg-cobalt"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <span className="nastaliq text-3xl text-cobalt">محفوظ ادائیگی</span>
        <h1 className="mt-2 text-3xl font-semibold text-indigo">
          Secured Checkout
        </h1>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-sm uppercase tracking-widest text-turquoise">
            Delivery & WhatsApp Coordination
          </h2>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full rounded-2xl border border-indigo/15 px-5 py-3 outline-none focus:border-mitti"
          />
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp number (for collection coordination)"
            className="w-full rounded-2xl border border-indigo/15 px-5 py-3 outline-none focus:border-mitti"
          />
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Delivery address"
            rows={3}
            className="w-full rounded-2xl border border-indigo/15 px-5 py-3 outline-none focus:border-mitti"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full rounded-2xl border border-indigo/15 px-5 py-3 outline-none focus:border-mitti"
          />

          <h2 className="pt-2 text-sm uppercase tracking-widest text-turquoise">
            Payment Method
          </h2>

          {codBlocked && (
            <p className="rounded-2xl bg-mitti/10 px-4 py-3 text-sm text-mitti">
              Your cart exceeds PKR {COD_LIMIT.toLocaleString()}. To protect
              fragile porcelain in transit, Cash on Delivery is unavailable.
              Please choose a prepaid option.
            </p>
          )}

          <div className="space-y-3">
            {([
              { id: "cod", label: "Cash on Delivery" },
              { id: "easypaisa", label: "Easypaisa (prepaid)" },
              { id: "jazzcash", label: "JazzCash (prepaid)" },
              { id: "bank", label: "Bank Transfer" },
            ] as { id: PaymentMethod; label: string }[]).map((opt) => {
              const disabled = opt.id === "cod" && codBlocked;
              return (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-3 transition ${
                    payment === opt.id
                      ? "border-cobalt bg-porcelain"
                      : "border-indigo/15"
                  } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
                >
                  <input
                    type="radio"
                    name="payment"
                    disabled={disabled}
                    checked={payment === opt.id}
                    onChange={() => setPayment(opt.id)}
                  />
                  <span className="text-indigo">{opt.label}</span>
                </label>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-full bg-mitti px-6 py-3 font-medium text-porcelain transition hover:bg-cobalt disabled:cursor-not-allowed disabled:opacity-40"
          >
            Place Order
          </button>
        </form>

        {/* Summary */}
        <div className="h-fit rounded-3xl border border-indigo/10 bg-white p-8 shadow-sm">
          <h2 className="text-sm uppercase tracking-widest text-turquoise">
            Order Summary
          </h2>
          {items.length === 0 ? (
            <p className="mt-6 text-sm text-indigo/60">
              Your cart is empty.{" "}
              <Link href="/" className="text-mitti underline">
                Browse the vessels
              </Link>
              .
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between text-sm">
                  <span className="text-indigo">
                    {item.name} &times; {item.quantity}
                  </span>
                  <span className="text-cobalt">
                    PKR {(item.price * item.quantity).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex justify-between border-t border-indigo/10 pt-4 text-lg font-semibold">
            <span className="text-indigo">Total</span>
            <span className="text-cobalt">PKR {subtotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
