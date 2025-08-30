import {Check} from "lucide-react"

export default function Pricing() {
  const plans = [
    // {
    //   name: "Anonymous",
    //   price: "$0",
    //   features: ["No account required", "1 file every 24 hours"],
    //   cta: "Try free now",
    //   highlighted: false,
    // },
    {
      name: "Registered",
      price: "$0",
      features: ["Registration is free", "2 files every 24 hours"],
      cta: "Register / Sign in",
      highlighted: false,
    },
    {
      name: "Pay-as-you-go",
      price: "$1",
      features: ["One-time purchase", "No subscription"],
      cta: "Buy 10 credits",
      highlighted: true,
    },
  ];

  
  const handleCTAClick = (index: number) => {
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (index === 1) {
      console.log("logging in");
    } else if (index === 2) {
      console.log("paying 1 dollar");
    }
  };

  return (
    <div className="bg-tfwhite dark:bg-tfblack py-12 border-b border-gray-200 dark:border-gray-900 ">
      <div className="flex items-center justify-center flex-col gap-2 text-center">
        <h2 className="text-tfblack dark:text-white font-bold text-4xl">
          Pricing
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg ">
          Simple tiers that scale with your needs.
        </p>
      </div>
      <div className="cards-container flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 mt-12 mx-4">
        {plans.map((plan, index) => {
          return (
            <div
              key={index}
              className={`card border rounded-lg p-6 flex flex-col text-center w-full md:w-1/3 ${
                plan.highlighted
                  ? "border-tforange shadow-lg shadow-tforange/40"
                  : "border-tfblue shadow-lg shadow-tfblue/20"
              }`}
            >
              <h3 className="dark:text-tfwhite text-tfblack font-bold text-2xl mb-4">
                {plan.name}
              </h3>

              <p className="dark:text-tfwhite text-tfblack font-extrabold text-5xl mb-8">
                {plan.price}
              </p>

              <div className="flex-grow">
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature, i) => {
                    return (
                      <li className="flex items-center gap-2" key={i}>
                        <Check className="h-5 w-5 text-emerald-500" />
                        <span className="dark:text-tfwhite text-tfblack">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <button
                onClick={() => handleCTAClick(index)}
                className={`w-full py-3 rounded-lg text-tfwhite font-semibold transition-colors ${
                  index === 0 || index === 1
                    ? "bg-tfblue hover:bg-blue-950"
                    : "bg-tforange hover:bg-orange-800"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
