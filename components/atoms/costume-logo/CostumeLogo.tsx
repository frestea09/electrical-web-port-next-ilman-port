import { AiOutlineThunderbolt } from "react-icons/ai";
import { CostumeLogoStyle, LogoStyle, textStyle } from "./CostumeLogo.style";
import { CutomeLogoType } from "./CostumeLogo.type";
export const CostumeLogo = ({ logoName, variant }: CutomeLogoType) => {
  return (
    <>
      <div className={CostumeLogoStyle()}>
        <AiOutlineThunderbolt size={100} className={LogoStyle()} />
        <p className={textStyle({ variant })}>{logoName}</p>
      </div>
    </>
  );
};
