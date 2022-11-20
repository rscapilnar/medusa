import { SVGAttributes } from "react";
import { ReactComponent as MedusaLogo } from "../../Assets/medusa-icon.svg";

type LogoProps = Pick<SVGAttributes<SVGSVGElement>, "width" | "height"> & {};

const Logo = ({ width, height }: LogoProps) => {
  return <MedusaLogo width={width} height={height ? height : width} />;
};

export default Logo;
