import { useQuery } from "@tanstack/react-query";

const useGasQuery = () => {
  const gasQuery = async () => {
    const response = await fetch(
      "https://api.etherscan.io/v2/api?chainid=1&module=gastracker&action=gasoracle&apikey=BBDI7FMP1VYJDGFWZRWZP5ZPQTZ5F1UA1G"
    );

    const data = await response.json();
    if (data?.status !== "1") {
      throw new Error(data?.message ?? "Gas API failed");
    }

    return data;
  };

  const { isPending, isFetching, isError, error, data } = useQuery({
    queryKey: ["gasQuery"],
    queryFn: gasQuery,
  });

  return { isLoading: isPending, isFetching, isError, error, data };
};

export default useGasQuery;
