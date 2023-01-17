import { useQuery } from "react-query";

const useGasQuery = () => {
  const gasQuery = async () => {
    const response = await fetch(
      "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=BBDI7FMP1VYJDGFWZRWZP5ZPQTZ5F1UA1G"
    );

    return response.json();
  };

  const { isLoading, isFetching, isError, error, data } = useQuery(
    ["gasQuery"],
    gasQuery
  );

  return { isLoading, isFetching, isError, error, data };
};

export default useGasQuery;
