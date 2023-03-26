import { useEffect, useState } from 'react';

interface UseCoordState {
  latitude: number | null;
  longitude: number | null;
}

const useCoords = () => {
  const [geoCoords, setGeoCoords] = useState<UseCoordState>({
    latitude: null,
    longitude: null,
  });

  const onSuccess = ({
    coords: { latitude, longitude },
  }: GeolocationPosition) => {
    setGeoCoords({ latitude, longitude });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return geoCoords;
};

export default useCoords;
