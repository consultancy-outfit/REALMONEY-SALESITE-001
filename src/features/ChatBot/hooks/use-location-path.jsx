import { usePathname } from "next/navigation";

export const useLocationPath = () => {
  const pathname = usePathname();
  return { pathname };
};
