import { Meme } from "@/types/Meme";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

type Props = {
  meme: Meme;
};

export const MemeCard: React.FC<Props> = ({ meme }) => {
  return (
    <>
      <Card className="py-4 mb-4 w-70">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{meme.title}</h4>
          <p className="text-tiny uppercase font-bold">{meme.likes} likes</p>
          <a
            target="_blank"
            className="text-tiny text-default-500"
            href={meme.image}
          >
            {meme.url}
          </a>
        </CardHeader>
        <CardBody className="overflow-visible py-2 w-full">
          <Image
            alt="Meme card image"
            className="h-64 w-full object-cover rounded-xl"
            src={meme.image}
            width={300}
            height={300}
          />
        </CardBody>
      </Card>
    </>
  );
};
