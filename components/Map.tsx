// Components==============
import useGetPlacesById from '@/actions/useGetPlacesByIds';
import { DemoContext } from '@/pages';
import GoogleMapReact from 'google-map-react';
import { useContext } from 'react';
import Location from './Location';
// =========================

export default function Maps() {
  const { selectedSport } = useContext(DemoContext);
  const { data: places } = useGetPlacesById(selectedSport || 0);

  const defaultProps = {
    // Amersfoort
    center: {
      lat: 52.1561,
      lng: 5.3878,
    },
    zoom: 8,
  };

  return (
    <div
      className="vtmn-rounded-md vtmn-overflow-hidden vtmn-h-full vtmn-w-full vtmn-grid"
      style={{ minHeight: 200 }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyDrLh7plmZkxkCcexoEVQwk6q46FV64btk' || '',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {places?.map((place, i) => {
          const firstCoordinate = place.geometry.coordinates?.[0];
          const lat = firstCoordinate?.[1];
          const lng = firstCoordinate?.[0];
          if (!lat || !lng) return null;

          return (
            <Location
              key={i}
              // @ts-ignore
              lat={lat}
              // @ts-ignore
              lng={lng}
              text="My Marker"
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
