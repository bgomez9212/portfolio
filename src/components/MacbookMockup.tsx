import macbook from "/demos/macbook.png";

export default function MacbookMockup({ image }: { image: string }) {
  return (
    <div className="relative max-w-[550px]">
      <img src={macbook} />
      <div className="absolute top-[5%] bottom-[12%] right-[11.5%] left-[11.5%] hover:shadow-custom hover:cursor-pointer overflow-hidden">
        <img
          src={image}
          className="brightness-75 hover:brightness-100 object-fill w-full h-full"
        />
      </div>
    </div>
  );
}
