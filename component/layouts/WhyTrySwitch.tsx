import Image from "next/image";
import {features} from '@/constants/features'

const FeatureCard = ({
  title,
  description,
  image,
  bg,
}: {
  title: string;
  description: string;
  image: string;
  bg: string;
}) => (
  <div
    className="rounded-2xl shadow-lg p-6 bg-cover bg-center flex flex-col items-center text-center "
    style={{ backgroundImage: `url(${bg})` }}
  >
    <Image
      src={image}
      alt={title}
      width={200}
      height={300}
      className="mb-4 rounded-xl object-contain"
     
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyTrySwitch = () => {
  return (
    <div className="mb-10 border  border-red-500">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-primary-strong">
          TrySwitch?
        </span>
      </h2>

      <div className="h-[90vh] max-sm:h-auto section-padding">
        <section className="relative py-10 h-[60%] rounded-lg bg-[url('/images/solutins.png')] bg-cover bg-center">
          <div className="max-w-6xl top-[50%] mx-auto grid md:grid-cols-3 gap-8 px-4 z-10 relative">
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
