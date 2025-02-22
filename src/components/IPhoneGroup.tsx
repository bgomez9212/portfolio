import IPhoneMockup from "./IPhoneMockup";

export default function IPhoneGroup({
  image1,
  image2,
  image3,
  siteLink,
}: {
  image1: string;
  image2: string;
  image3: string;
  siteLink: string;
}) {
  return (
    <div className="flex relative justify-center items-center w-full mx-[8%]">
      <div className="translate-x-10 -rotate-12">
        <a href={siteLink} target="_blank">
          <IPhoneMockup image={image1} />
        </a>
      </div>
      <div className="-translate-y-3">
        <a href={siteLink} target="_blank">
          <IPhoneMockup image={image2} />
        </a>
      </div>
      <div className="-translate-x-10 rotate-12">
        <a href={siteLink} target="_blank">
          <IPhoneMockup image={image3} />
        </a>
      </div>
    </div>
  );
}
