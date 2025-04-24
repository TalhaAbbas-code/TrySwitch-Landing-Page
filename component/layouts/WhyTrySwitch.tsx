import { features } from "@/constants/features";
import { FeatureCard } from "../FeaturedCard";


const WhyTrySwitch = () => {
  return (
    <div className="mb-10  section-padding">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-primary-strong">
          TrySwitch?
        </span>
      </h2>

      <div className=" h-[85vh] max-md:h-auto ">
        <section className="relative py-10 h-[60%] bg-[url('/images/solutins.png')] bg-cover bg-center">
          <div className="max-w-6xl top-[50%] mx-auto grid md:grid-cols-3 max-md:gap-5  md:gap-32 px-4 z-10 relative">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyTrySwitch;
