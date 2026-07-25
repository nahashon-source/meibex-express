import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calculator, Package, ArrowRight } from "lucide-react";

// Flat base fee + per-kg rate by region. Real rates should come from
// your rate-card API/service later — these are placeholder business
// figures only, kept here because there's no backend endpoint yet.
const REGION_RATES = {
  "East Africa": { base: 15, perKg: 3.5 },
  "Rest of Africa": { base: 25, perKg: 5 },
  Europe: { base: 40, perKg: 8 },
  "North America": { base: 45, perKg: 9 },
  Asia: { base: 35, perKg: 7 },
  Other: { base: 50, perKg: 10 },
};

const REGION_OPTIONS = Object.keys(REGION_RATES);

function ExportQuoteCalculator({ isOpen, onClose, onUseFullForm }) {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("East Africa");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState(null);
  const [estimate, setEstimate] = useState(null);

  const resetState = () => {
    setCountry("");
    setRegion("East Africa");
    setWeight("");
    setError(null);
    setEstimate(null);
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setError(null);

    const weightNum = parseFloat(weight);
    if (!country.trim()) {
      setError("Enter a destination country.");
      return;
    }
    if (!weightNum || weightNum <= 0) {
      setError("Enter a valid cargo weight in kg.");
      return;
    }

    const { base, perKg } = REGION_RATES[region];
    const total = base + weightNum * perKg;
    setEstimate(Math.round(total * 100) / 100);
  };

  const handleUseFullForm = () => {
    onUseFullForm({ country });
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-950 border border-white/10 rounded-2xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              aria-label="Close calculator"
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Calculator size={18} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Instant Export Estimate
                </h3>
                <p className="text-gray-500 text-xs">
                  Rough estimate — final quote may vary
                </p>
              </div>
            </div>

            {estimate === null ? (
              <form onSubmit={handleCalculate} className="flex flex-col gap-4">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                    Destination Country
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. Uganda"
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                    Destination Region
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-gray-900 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors"
                  >
                    {REGION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-xs font-medium mb-1.5 block">
                    Cargo Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 50"
                    className="w-full bg-white/5 border border-white/10 focus:border-orange-500/50 text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors placeholder-gray-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 mt-2"
                >
                  Calculate Estimate
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package size={18} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">
                      Estimated Cost
                    </p>
                    <p className="text-white text-2xl font-bold">
                      ${estimate.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs">
                  This is an indicative estimate for {weight}kg to {country}
                  {" "}({region}). Submit the full form for an accurate,
                  confirmed quote.
                </p>
                <button
                  onClick={handleUseFullForm}
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Use This In Full Form
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setEstimate(null)}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Recalculate
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ExportQuoteCalculator;