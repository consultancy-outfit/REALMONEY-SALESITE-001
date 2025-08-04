import { useSearchParams } from "next/navigation";

export const useRedirectRoute = (props = {}) => {
  const { key = "redirect" } = props;
  const query = useSearchParams();
  const redirectRoute = query?.get(key) === null ? "/" : query?.get(key);
  return {
    redirectRoute,
  };
};
