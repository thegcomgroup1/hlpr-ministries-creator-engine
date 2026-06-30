import {
  Mic, Headphones, Youtube, Instagram, Facebook, Mail, Send,
  Calendar, Heart, Flame, Shield, Play, ExternalLink,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  Mic, Headphones, Youtube, Instagram, Facebook, Mail, Send,
  Calendar, Heart, Flame, Shield, Play, ExternalLink,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...rest }: { name: IconName } & React.ComponentProps<LucideIcon>) {
  const Cmp = iconMap[name];
  return <Cmp {...rest} />;
}