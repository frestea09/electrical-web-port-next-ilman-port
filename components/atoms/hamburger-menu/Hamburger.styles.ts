import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "w-[16%] h-[23%] flex justify-center align-middle  border-2",
  {
    variants: {
      variant: {
        primary: "border-orange-400",
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
