import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  CloudNetworkIcon,
  BulbIcon,
  TimelineIcon,
  CodeIcon,
} from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <BulbIcon />,
    title: "Discovery",
    description:
      "We analyze your idea, define goals, and explore the best tech solutions.",
  },
  {
    icon: <TimelineIcon />,
    title: "Planning & Architecture",
    description:
      "We design a solid roadmap, select the stack, and create the system architecture.",
  },
  {
    icon: <CodeIcon />,
    title: "Development & Testing",
    description:
      "We build, test, and refine the software to ensure performance and scalability.",
  },
  {
    icon: <CloudNetworkIcon />,
    title: "Deployment & Support",
    description:
      "We launch, monitor, and provide ongoing support to keep your product running smoothly.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        The{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Balles.DEV{" "}
        </span>
        Workflow - Step by Step
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        From idea to deployment, we transform your vision into scalable and
        efficient digital solutions!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <span className="text-[hsl(var(--primary))]">{icon}</span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
