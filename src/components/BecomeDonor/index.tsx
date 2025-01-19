import { Button } from "../shared/Button/Button";
import { Heading } from "../shared/Heading/Heading";

export const BecomeDonor = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4">
      <Heading variant="h2" color="white" contrast="yellow" underline>
        Zostań darczyńcą
      </Heading>
      <Button label="Wesprzyj" ariaDescription="Wesprzyj" />
    </section>
  );
};
