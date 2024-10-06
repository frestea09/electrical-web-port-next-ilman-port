import { Button } from "../ui/button";

export const CustomeButton = ({ children, variant, label, ...props }: any) => {
  return <Button className={``}>{label}</Button>;
};
