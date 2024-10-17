import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "w-[13%] h-[23%] md:w-[7%] md:h-[15%] flex xl:hidden lg:hidden justify-center align-middle border-2",
  {
    variants: {
      variant: {
        primary: "border-orange-300 border-orange-300 ",
        secondary: "border-white bg-orange-300",
        default: "bg-white border-black text-black",
      },
    },
  }
);
export const iconStyles = cva("h-[100%] w-[100%]", {
  variants: {
    variant: {
      primary: "text-orange-300 bg-white",
      secondary: "bg-orange-300 text-white border-orange-300",
      default: "bg-white border-black text-black",
    },
  },
});
