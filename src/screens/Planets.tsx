import React, {useState, useEffect} from 'react';
import {FlatList, Spinner, Text} from 'native-base';
import Pagination from '../components/Pagination';
import ListItem from '../components/ListItem';

const BASE_URL = 'https://swapi.dev/api/planets/';

function Planets() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const getPlanets = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BASE_URL}?page=${page}`);
        const json = await response.json();

        setHasMore(json.next);
        setData(json.results);
      } catch (error) {
        console.error(error);

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPlanets();
  }, [page]);

  return (
    <>
      {isLoading && <Spinner accessibilityLabel="Loading planets" />}
      {isError && <Text>Something went wrong...</Text>}
      {data && !isLoading && (
        <FlatList
          my={6}
          data={data}
          renderItem={({item}) => <ListItem item={item} />}
          keyExtractor={item => item.name}
        />
      )}
      <Pagination
        page={page}
        onPageChange={setPage}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </>
  );
}

export default Planets;
