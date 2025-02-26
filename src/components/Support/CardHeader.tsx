import { Heading } from "../shared/Heading/Heading";

interface Props {
  children: React.ReactNode;
}

export const CardHeader = ({ children }: Props) => (
  <Heading
    variant="h4"
    color="green"
    contrast="black"
    className="font-sourceSans text-base font-semibold tablet:text-20 desktop:font-lora desktop:text-28 desktop:font-bold"
  >
    {children}
  </Heading>
);
