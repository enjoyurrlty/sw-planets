import React, {useState, useEffect} from 'react';
import {Box, FlatList, Spinner, Text} from 'native-base';

const BASE_URL = 'https://swapi.dev/api/planets/';

function Planets() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPlanets = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`${BASE_URL}?page=${page}`);
        const json = await response.json();

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

  const renderItem = ({item}: {[key: string]: any}) => {
    return (
      <Box
        alignItems="center"
        px={5}
        py={2}
        w="1/2"
        rounded="md"
        bg="primary.300"
        my={2}
        mx="auto">
        {item.name}
      </Box>
    );
  };

  return (
    <Box flexGrow={1} my={2} px={2} pb={6}>
      {isLoading && <Spinner accessibilityLabel="Loading planets" />}
      {isError && <Text>Something went wrong...</Text>}
      {data && !isLoading && (
        <FlatList
          my={6}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      )}
    </Box>
  );
}

export default Planets;
