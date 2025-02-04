import { Badge } from "./ui/badge";

const featureList: string[] = [
  "NodeJS",
  "React Native",
  "NestJS",
  "NextJS",
  "Java",
  ".Net Core",
  "Python",
  "Figma",
  "Docker",
  "Kubernetes",
  "Workflows",
  "Google Cloud",
  "Azure",
  "Terraform",
  "Pulumi",
];

export const Technologies = () => {
  return (
    <section id="technologies" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Main{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Technologies
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="outline" className="text-md">
              {feature}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
};
