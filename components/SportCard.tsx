// Components==============
import useGetPlacesById from '@/actions/useGetPlacesByIds';
import { DemoContext } from '@/pages';
import { VtmnButton, VtmnCard, VtmnLoader } from '@vtmn/react';
import { useContext } from 'react';
// =========================

export default function SportCard({ sport }: { sport: SportEntity }) {
  const { setSelectedSport, selectedSport } = useContext(DemoContext);
  const { isLoading } = useGetPlacesById(selectedSport || 0);

  const { name } = sport.attributes;
  const image = sport?.relationships.images.data?.[0]?.url;

  const isActive = selectedSport === sport.id;

  // content is not fit for display
  if (!name || !image) return null;

  return (
    <div className="vtmn-max-w-xs">
      <VtmnCard
        title={name}
        img={<img src={image} alt={name} />}
        fullImage
        variant="top-image"
      >
        <p className="vtmn-text-sm vtmn-text-color-dark vtmn-mb-3">
          {sport.attributes.description}
        </p>
        <div className="vtmn-grid vtmn-grid-flow-col vtmn-gap-4 vtmn-justify-start vtmn-items-center ">
          <VtmnButton
            size="medium"
            variant={isActive ? 'conversion' : 'primary'}
            onClick={() => setSelectedSport(sport.id)}
          >
            Toon locaties
          </VtmnButton>
          {isLoading && isActive && <VtmnLoader />}
        </div>
      </VtmnCard>
    </div>
  );
}
