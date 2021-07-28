import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useRandomDog() {
  const { data, error } = useSWR(
    'https://dog.ceo/api/breeds/image/random',
    fetcher,
  );

  return {
    data: data?.message,
    isLoading: !error && !data,
    isError: error,
  };
}
