import { useRouter } from "next/navigation";

export const useNavigateRoute = () => {
  const { push } = useRouter();

  return {
    navigate: push,
  };
};
