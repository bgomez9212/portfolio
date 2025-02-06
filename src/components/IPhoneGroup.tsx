import IPhoneMockup from "./IPhoneMockup";

export default function IPhoneGroup({
  image1,
  image2,
  image3,
}: {
  image1: string;
  image2: string;
  image3: string;
}) {
  return (
    <div className="flex relative justify-center items-center w-full mx-[8%]">
      <div className="translate-x-10 -rotate-12">
        <IPhoneMockup image={image1} />
      </div>
      <div className="-translate-y-3">
        <IPhoneMockup image={image2} />
      </div>
      <div className="-translate-x-10 rotate-12">
        <IPhoneMockup image={image3} />
      </div>
    </div>
  );
}
