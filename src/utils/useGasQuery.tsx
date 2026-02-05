import { useQuery } from "@tanstack/react-query";

const useGasQuery = () => {
  const gasQuery = async () => {
    const response = await fetch(
      "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=BBDI7FMP1VYJDGFWZRWZP5ZPQTZ5F1UA1G"
    );

    return response.json();
  };

  const { isPending, isFetching, isError, error, data } = useQuery({
    queryKey: ["gasQuery"],
    queryFn: gasQuery,
  });

  return { isLoading: isPending, isFetching, isError, error, data };
};

export default useGasQuery;
