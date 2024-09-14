import { Lightbulb, TrendingUp, Zap, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Proven Strategies that Work",
      description:
        "We use smart technologies and data to determine what will help your business develop.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Experience You Can Trust",
      description:
        "We've helped numerous businesses gain more followers and customers.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Creative Ideas That Stand Out",
      description:
        "We come up with new, unique ideas that capture people's attention.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Increase Your Productivity",
      description:
        "Allow us to handle your digital marketing while you focus on what you do best.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-700 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Why should you choose us
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-purple-100">
            We&apos;re committed to helping your business grow with proven
            strategies and creative solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-lg transition-all duration-300 hover:bg-opacity-20 hover:scale-105"
            >
              <div className="p-3 bg-purple-500 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
