import macbook from "/macbook.png";

export default function MacbookMockup({ image }: { image: string }) {
  return (
    <div className="relative h-[110%]">
      <img className="h-full min-w-[341px] aspect-568/327" src={macbook} />
      <div className="absolute top-[5%] bottom-[12%] right-[11.5%] left-[11.5%] hover:shadow-custom hover:cursor-pointer">
        <img src={image} className="brightness-75 hover:brightness-100" />
      </div>
    </div>
  );
}

// TODO - problem with breakpoint, height stays 110% but width shrinks. Why does width shrink before height
