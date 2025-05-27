import { IconSizeEnum } from "@/types/icon_types"
import type { IconPropsType } from "@/types/icon_types"
import { XCircleIcon } from "lucide-react";

export default function XIcon({
  color = "text-carrot-500",
  size = IconSizeEnum.small,
} : IconPropsType) {

  const iconSizeMap = {
    [IconSizeEnum.small]: 24,
    [IconSizeEnum.medium]: 48,
    [IconSizeEnum.big]: 72
  }

  const iconWidth = iconSizeMap[size] ?? 24;
  

  return (
    <XCircleIcon className={`mr-5 ${color} w-[${iconWidth}px]`}/>
  )
}