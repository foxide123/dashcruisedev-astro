import { IconMenu2 } from '@tabler/icons-react';

export default function HamburgerIconCustom({stroke, width, height}:
     {
        stroke?: number;
        width?: number;
        height?: number;}) {
  return <IconMenu2 stroke={stroke} width={width} height={height}/>;
}
