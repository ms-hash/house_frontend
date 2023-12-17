import { FC, memo, useCallback, useEffect } from "react";
import { Center, Spinner, useDisclosure } from "@chakra-ui/react";
import { useAllArchitectures } from "../../hooks/useAllArchitectures";
import { useAllCategory } from "../../hooks/useAllCategory";
import { useSelectArchitecture } from "../../hooks/useSelectArchitecture";
import { Card } from "../organisms/Card";
import { CardDetail } from "../molecules/CardDetail";
import { NavList } from "../organisms/NavList";
import { NotFound } from "../organisms/NotFound";

export const MainLayout: FC = memo(() => {
  const { architectures, getArchitectures, loading } = useAllArchitectures();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelecter, selectedArchitecture } = useSelectArchitecture();
  const { getCategories, categories } = useAllCategory();

  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getArchitectures();
  }, []);

  const onClickArchitecture = useCallback(
    (id: number) => {
      onSelecter({ id, architectures, onOpen });
    },
    [architectures, onSelecter, onOpen]
  );

  console.log(categories);
  return (
    <>
      {!loading && !architectures.length ? (
        <NotFound />
      ) : loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <Card onClick={onClickArchitecture} />
          <CardDetail
            architecture={selectedArchitecture}
            isOpen={isOpen}
            onClose={onClose}
          />
        </>
      )}
      <NavList />
    </>
  );
});
