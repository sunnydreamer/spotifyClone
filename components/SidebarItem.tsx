import { IconType } from "react-icons";
import Link from "next/link";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active,
  href,
}) => {
  return <Link href={href}>Sidebar Item</Link>;
};

export default SidebarItem;
