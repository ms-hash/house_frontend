import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { client } from "../utils/axios";

import { userArchitectureState } from "../store/architectureAtom";
import { Architecture } from "../types/architecture";

export const useAllArchitectures = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [architectures, setArchitectures] = useRecoilState(
    userArchitectureState
  );
  const getArchitectures = useCallback(async () => {
    try {
      setLoading(true);
      const fetchArchitectures = await client.get(
        "/architectures"
      );
      setArchitectures(fetchArchitectures.data);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchData = useCallback(
    async (text: string) => {
      try {
        setLoading(true);
        const fetchArchitectures = await client.get(
          "/architectures"
        );
        const searchdArchitecture = fetchArchitectures.data.filter(
          (item: Architecture) => {
            return new RegExp(item.name).test(text);
          }
        );
        setArchitectures(searchdArchitecture);
      } finally {
        setLoading(false);
      }
    },
    [setArchitectures]
  );
  return {
    architectures,
    loading,
    getArchitectures,
    searchData,
    setArchitectures,
  };
};
