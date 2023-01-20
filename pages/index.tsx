// Components==============
import useGetSports from '@/actions/useGetSports';
import Maps from '@/components/Map';
import SportCard from '@/components/SportCard';
import { VtmnSearch } from '@vtmn/react';
import Head from 'next/head';
import { createContext, useMemo, useState } from 'react';
// =========================

type DemoContextType = {
  selectedSport: number;
  setSelectedSport: React.Dispatch<React.SetStateAction<number>>;
};

export const DemoContext = createContext({} as DemoContextType);

export default function Demo() {
  const [selectedSport, setSelectedSport] = useState(0);

  const { data: sports } = useGetSports();

  const sport = sports?.[0];

  const values = useMemo(
    () => ({
      selectedSport,
      setSelectedSport,
    }),
    [selectedSport]
  );

  return (
    <>
      <Head>
        <title>Decathlon Dev Case</title>
      </Head>
      <DemoContext.Provider value={values}>
        <div
          className="vtmn-grid vtmn-gap-6 vtmn-mb-4 vtmn-p-5 vtmn-w-full "
          style={{ gridTemplateColumns: 'auto 1fr' }}
        >
          <div className="vtmn-w-max">
            <div className="vtmn-px-2">
              <VtmnSearch disabled />
            </div>
            <div
              className="vtmn-mt-4 vtmn-grid vtmn-gap-4 vtmn-overflow-auto vtmn-p-2"
              style={{ height: 'calc(100vh - 235px)' }}
            >
              {sports?.map(
                (s) => !!sport && <SportCard sport={s} key={s.id} />
              )}
            </div>
          </div>
          <Maps />
        </div>
      </DemoContext.Provider>
    </>
  );
}
