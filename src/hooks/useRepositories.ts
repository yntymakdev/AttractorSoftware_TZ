import { useQuery } from "@tanstack/react-query";
import githubApi from "@/lib/github";

export function useRepositories(visibility: "public" | "private", enabled = true) {
  return useQuery({
    queryKey: ["repositories", visibility],
    queryFn: async () => {
      const { data } = await githubApi.get("/user/repos", {
        params: { visibility },
      });
      return data;
    },
    enabled,
  });
}
