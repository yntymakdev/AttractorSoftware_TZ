import { useQuery } from "@tanstack/react-query";
import githubApi from "@/lib/github";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await githubApi.get("/user");
      return data;
    },
  });
}
