import macbook from "../../public/macbook.png";

export default function Macbook({ screenshot }: { screenshot: string }) {
  return (
    <div className="relative">
      <img className="block" src={macbook} />
      <div className="absolute top-[5%] bottom-[12%] right-[11.5%] left-[11.5%] overflow-hidden hover:shadow-custom hover:cursor-pointer">
        <img src={screenshot} className="brightness-75 hover:brightness-100" />
      </div>
    </div>
  );
}
