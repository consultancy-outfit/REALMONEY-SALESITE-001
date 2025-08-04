import { useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const query = useSearchParams();
  const queryParam = (key) => query?.get(key);
  return { queryParam };
};
