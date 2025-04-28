import { useQuery } from "@tanstack/react-query";
import githubApi from "@/lib/github";

export function useSearchUsers(query: string) {
  return useQuery({
    queryKey: ["search-users", query],
    queryFn: async () => {
      const { data } = await githubApi.get("/search/users", {
        params: { q: query },
      });
      return data;
    },
    enabled: !!query,
  });
}
