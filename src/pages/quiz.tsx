import { useState } from "react";
import Link from "next/link";
import { getProductById } from "@/data/products";

interface Option {
  label: string;
  hint: string;
  scores: Record<string, number>;
}

interface Question {
  prompt: string;
  urdu: string;
  options: Option[];
}

const questions: Question[] = [
  {
    prompt: "Which colour spectrum pulls at you?",
    urdu: "کون سا رنگ آپ کو کھینچتا ہے؟",
    options: [
      {
        label: "Deep cobalt & midnight blue",
        hint: "The glazed tile",
        scores: { "kashi-blue": 2, "noor-e-multan": 0, wisaal: 0 },
      },
      {
        label: "Golden turquoise & saffron",
        hint: "The noon dome",
        scores: { "kashi-blue": 0, "noor-e-multan": 2, wisaal: 0 },
      },
      {
        label: "Burnt terracotta & earth",
        hint: "The raw clay",
        scores: { "kashi-blue": 0, "noor-e-multan": 0, wisaal: 2 },
      },
    ],
  },
  {
    prompt: "Your preferred time of day?",
    urdu: "آپ کا پسندیدہ وقت؟",
    options: [
      {
        label: "Cool, still dusk",
        hint: "Shade of a shrine",
        scores: { "kashi-blue": 2, "noor-e-multan": 0, wisaal: 1 },
      },
      {
        label: "Radiant high noon",
        hint: "Sun on domes",
        scores: { "kashi-blue": 0, "noor-e-multan": 2, wisaal: 0 },
      },
      {
        label: "After the first rain",
        hint: "Petrichor",
        scores: { "kashi-blue": 0, "noor-e-multan": 0, wisaal: 2 },
      },
    ],
  },
  {
    prompt: "Which texture do you reach to touch?",
    urdu: "کون سی ساخت کو چھونا چاہیں گے؟",
    options: [
      {
        label: "Smooth, cold glaze",
        hint: "Polished ceramic",
        scores: { "kashi-blue": 2, "noor-e-multan": 1, wisaal: 0 },
      },
      {
        label: "Warm, soft skin",
        hint: "Amber musk",
        scores: { "kashi-blue": 0, "noor-e-multan": 2, wisaal: 0 },
      },
      {
        label: "Rough, unglazed clay",
        hint: "Bare terracotta",
        scores: { "kashi-blue": 0, "noor-e-multan": 0, wisaal: 2 },
      },
    ],
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    "kashi-blue": 0,
    "noor-e-multan": 0,
    wisaal: 0,
  });
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: Option) => {
    const next = { ...scores };
    Object.entries(option.scores).forEach(([id, val]) => {
      next[id] += val;
    });
    setScores(next);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setScores({ "kashi-blue": 0, "noor-e-multan": 0, wisaal: 0 });
    setStep(0);
    setFinished(false);
  };

  const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const match = getProductById(winnerId);

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-center">
        <span className="nastaliq text-3xl text-cobalt">خوشبو کی تلاش</span>
        <h1 className="mt-2 text-3xl font-semibold text-indigo">
          Synesthetic Scent Finder
        </h1>
        <p className="mt-3 text-sm text-indigo/60">
          Three tactile questions to match you with your vessel.
        </p>
      </div>

      {!finished ? (
        <div className="mt-12 rounded-3xl border border-indigo/10 bg-white p-8 shadow-sm fade-in">
          <p className="text-xs uppercase tracking-widest text-turquoise">
            Question {step + 1} of {questions.length}
          </p>
          <span className="nastaliq mt-2 block text-xl text-mitti">
            {questions[step].urdu}
          </span>
          <h2 className="mt-1 text-2xl font-medium text-indigo">
            {questions[step].prompt}
          </h2>
          <div className="mt-6 space-y-3">
            {questions[step].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(option)}
                className="flex w-full items-center justify-between rounded-2xl border border-indigo/15 px-5 py-4 text-left transition hover:border-mitti hover:bg-porcelain"
              >
                <span className="font-medium text-indigo">{option.label}</span>
                <span className="text-xs uppercase tracking-widest text-mitti">
                  {option.hint}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-12 rounded-3xl border border-indigo/10 bg-white p-8 text-center shadow-sm fade-in">
          <p className="text-xs uppercase tracking-widest text-turquoise">
            Your vessel is
          </p>
          <span className="nastaliq mt-2 block text-3xl text-cobalt">
            {match?.urduName}
          </span>
          <h2 className="text-3xl font-semibold text-indigo">{match?.name}</h2>
          <p className="mt-3 text-indigo/70">{match?.description}</p>

          <div className="mt-6 rounded-2xl bg-porcelain p-5">
            <p className="text-sm text-indigo/70">
              Your exclusive reward &mdash; 10% off with code
            </p>
            <p className="mt-1 text-2xl font-bold tracking-widest text-mitti">
              KASHI10
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-mitti px-7 py-3 font-medium text-porcelain transition hover:bg-cobalt"
            >
              Shop {match?.name}
            </Link>
            <button
              onClick={reset}
              className="rounded-full border border-cobalt px-7 py-3 font-medium text-cobalt transition hover:bg-cobalt hover:text-porcelain"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
