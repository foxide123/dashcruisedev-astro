import { Menu } from "lucide-react";

export default function HamburgerIconCustom({stroke, width, height}:
     {
        stroke?: number;
        width?: number;
        height?: number;}) {
/*   return <IconMenu2 stroke={stroke} width={width} height={height}/>; */
return <Menu size={40} className=""/>
}
