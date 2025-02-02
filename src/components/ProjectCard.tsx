import IPhoneGroup from "./IPhoneGroup";
import MacbookMockup from "./MacbookMockup";

export default function ProjectCard({
  cardType,
  image,
}: {
  cardType?: "IPhone" | "Macbook";
  image: string;
}) {
  return (
    <div
      className={`border border-redAlert bg-gradient-to-r ${cardType === "Macbook" ? "from-shadowBlue" : "from-iceBlue"} to-transparent to-75% rounded-lg w-4/5 flex my-10 justify-between px-10 max-h-[300px]`}
    >
      <div id="text" className="flex flex-col justify-between py-10">
        <div>
          <h1 className="text-4xl mb-2">Company</h1>
          <h3 className="text-sm italic">Job Title</h3>
        </div>
        <p>Summary</p>
        <div>Technologies</div>
      </div>
      <div className="flex items-center justify-center w-1/2 max-h-[325px]">
        {cardType === "Macbook" ? (
          <MacbookMockup image={image} />
        ) : (
          <IPhoneGroup image={image} />
        )}
      </div>
    </div>
  );
}

// 1152/300
