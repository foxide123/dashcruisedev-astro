import type {IconPropsType} from "@/types/icon_types";
import { IconSizeEnum } from "@/types/icon_types";
import { CheckIcon as CheckIconLucide } from 'lucide-react';

export default function CheckIcon({
  size = IconSizeEnum.small,
  color = "text-carrot-500",
  marginTop = "0"
} : IconPropsType) {

  //object lookup
  const iconSizeMap = {
    [IconSizeEnum.small]: 24,
    [IconSizeEnum.medium]: 48,
    [IconSizeEnum.big]: 72
  };

  const iconWidth = iconSizeMap[size] ?? 24; //default to 24

  return (
    <CheckIconLucide className={`mr-5 ${color} w-[${iconWidth}px] mt-${marginTop}`} />
  )
}