import { FC } from "react";

export type widthDivTypes = {
  height?: string;
  content: any;
};

const WidthDiv: FC<widthDivTypes> = ({ height = "4/6", content }) => {
  return (
    <>
      <div className={`w-screen h-4/6 sm:h-screen`}>
        <div className={`container mx-auto h-${height}`}>{content}</div>
      </div>
    </>
  );
};

export default WidthDiv;
