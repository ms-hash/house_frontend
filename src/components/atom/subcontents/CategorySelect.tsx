import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useAllCategory } from "../../../hooks/useAllCategory";

export const CategorySelect: FC = memo(() => {
  const { categories, loading, categoryData } = useAllCategory();
  const onClickCategory = (id: number) => categoryData(id);

  return (
    <>
      {loading ? (
        <p>Loaing</p>
      ) : (
        categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => onClickCategory(category.id)}
            variant="outline"
            w="100%"
            colorScheme="teal"
            bg={"white"}
            rounded={"md"}
            boxShadow={"2xl"}
            _hover={{
              cursor: "pointer",
              bg: "teal.600",
              color: "white",
              transform: "translateY(-2px)",
              boxShadow: "lg",
              variant: "outline",
            }}
            mt={2}
          >
            {category.name}
          </Button>
        ))
      )}
    </>
  );
});
