import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Who{" "}
                </span>
                We Are
              </h2>
              <p className="text-l text-muted-foreground mt-4">
                BallesDEV is a software development startup founded in Villa
                Ballester, Buenos Aires, Argentina. Our name,{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Balles
                </span>
                , comes from our place of origin, a reflection of where our
                journey began. Over time, we have expanded our reach, delivering
                cutting-edge technology solutions to businesses worldwide. We
                specialize in designing, developing, and implementing custom
                software solutions, helping companies enhance their digital
                presence through cloud computing, web & mobile applications, and
                software modernization.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
