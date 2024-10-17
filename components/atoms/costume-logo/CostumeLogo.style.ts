import { cva } from "class-variance-authority";

const CostumeLogoStyle = cva(
  "flex flex-row align-middle items-center font-semibold capitalize  justify-start"
);
const LogoStyle = cva("text-orange-300 h-[15%] w-[15%]");
const textStyle = cva("text-xl font-bold", {
  variants: {
    variant: {
      primary: "text-orange-300",
      default: "text-black",
    },
  },
});

export { CostumeLogoStyle, LogoStyle, textStyle };
