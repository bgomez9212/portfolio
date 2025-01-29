import macbook from "../../public/macbook.png";

export default function MacbookMockup({ image }: { image: string }) {
  return (
    <div className="h-full">
      <div className="relative">
        <img className="block" src={macbook} />
        <div className="absolute top-[5%] bottom-[12%] right-[11.5%] left-[11.5%] overflow-hidden hover:shadow-custom hover:cursor-pointer">
          <img src={image} className="brightness-75 hover:brightness-100" />
        </div>
      </div>
    </div>
  );
}
