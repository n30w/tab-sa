import Logo from "../Logo";
import WidthDiv from "../WidthDiv";

export default function Main() {
  return (
    <>
      <WidthDiv
        content={
          <>
            <div className="scale-75 sm:scale-100">
              <Logo></Logo>
            </div>
          </>
        }
      />
    </>
  );
}
