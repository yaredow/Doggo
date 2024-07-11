import { useQuery } from "@tanstack/react-query";

const fetchDogOwners = async (breedId: string) => {
  const response = await fetch(`/api/user/dog-owners/${breedId}`);
  const data = await response.json();
  return data;
};

export default function useGetDogOwners(breedId: string) {
  const { data: dogOwners, isFetching } = useQuery({
    queryKey: ["dog-owners", breedId],
    queryFn: () => fetchDogOwners(breedId),
  });

  return {
    dogOwners,
    isFetching,
  };
}
