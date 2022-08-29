import React from 'react';
import {Button, HStack, Text} from 'native-base';

type PaginationProps = {
  page: number;
  hasMore: boolean;
  isLoading: boolean;
  onPageChange: (page: number) => void;
};

type PaginationButtonProps = Pick<PaginationProps, 'isLoading'> & {
  onPageChange: () => void;
  isDisabled: boolean;
  text: string;
};

function PaginationButton({
  onPageChange,
  isDisabled,
  isLoading,
  text,
}: PaginationButtonProps) {
  return (
    <Button
      onPress={onPageChange}
      isDisabled={isDisabled || isLoading}
      bg="#6200ee"
      flexGrow={1}
      mx={1}
      variant="ghost">
      <Text color="white" fontSize="20" fontWeight="bold">
        {text}
      </Text>
    </Button>
  );
}

function Pagination({page, hasMore, isLoading, onPageChange}: PaginationProps) {
  const isFirstPage = page === 1;
  const isLastPage = !hasMore;

  return (
    <HStack mt="auto">
      <PaginationButton
        onPageChange={() => onPageChange(page - 1)}
        isDisabled={isFirstPage}
        isLoading={isLoading}
        text="Prev"
      />
      <PaginationButton
        onPageChange={() => onPageChange(page + 1)}
        isDisabled={isLastPage}
        isLoading={isLoading}
        text="Next"
      />
    </HStack>
  );
}

export default Pagination;
