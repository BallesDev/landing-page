import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import autoScroll from "embla-carousel-auto-scroll";

export const Technologies = () => {
  const technologies = [
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

  // Agregar "*" entre cada elemento
  const formattedTechnologies = technologies.flatMap((tech, index) =>
    index < technologies.length - 1 ? [tech, " * "] : [tech]
  );

  return (
    <section id="technologies" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-center">
        <h2 className="text-left text-4xl font-bold text-primary">
          Technologies
        </h2>

        {/* Contenedor del carrusel con efecto de desvanecimiento */}
        <div className="relative w-full overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              autoScroll({
                speed: 2,
              }),
            ]}
            className="relative mask-fade"
          >
            <CarouselContent>
              {[...formattedTechnologies, ...formattedTechnologies].map(
                (item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                      {" "}
                      {item}
                    </h2>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
