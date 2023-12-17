import { useCallback, useState } from "react";
import { Architecture } from "../types/architecture";

type Props = {
  id: number;
  architectures: Array<Architecture>;
  onOpen: () => void;
};

export const useSelectArchitecture = () => {
  const [selectedArchitecture, setSelectedArchitecture] =
    useState<Architecture | null>(null);
  const onSelecter = useCallback((props: Props) => {
    const { id, architectures, onOpen } = props;
    const targetArchitecture = architectures.find(
      (architecture) => architecture.id === id
    );
    setSelectedArchitecture(targetArchitecture ?? null);
    onOpen();
  }, []);
  return { onSelecter, selectedArchitecture };
};
