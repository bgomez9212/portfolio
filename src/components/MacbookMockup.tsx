import macbook from "/macbook.png";

export default function MacbookMockup({ image }: { image: string }) {
  return (
    <div className="relative max-w-[600px]">
      <img src={macbook} className="max-h-full" />
      <div className="absolute top-[5%] bottom-[12%] right-[11.5%] left-[11.5%] hover:shadow-custom hover:cursor-pointer border border-red-500">
        <img src={image} className="brightness-75 hover:brightness-100" />
      </div>
    </div>
  );
}
