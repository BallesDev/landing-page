import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import autoScroll from "embla-carousel-auto-scroll";

export const Technologies = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-4md lg:text-4xl font-bold mb-20 text-primary">
        Technologies
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            autoScroll({
              stopOnMouseEnter: true,
              speed: 2,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                NodeJS
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                React Native
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                NestJS
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                NextJS{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Java{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                .Net Core{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Python{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Figma{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Docker{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Kubernetes{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                NodeJS{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Workflows{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent"></h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Google Cloud{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Azure{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Terraform{" "}
              </h2>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/6">
              {" "}
              <h2 className="text-4xl font-bold tracking-wide uppercase fill-transparent">
                Pulumi{" "}
              </h2>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
