import { PosistionCoordinates } from "@/types";
import { useEffect, useMemo, useState } from "react";

export const useGeolocation = () =>  {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<PosistionCoordinates | null>(null);

  const currentPosition = useMemo(() => position, [position]);

  useEffect(() => {
    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        if (error instanceof Error) {
          setError(error.message);
        }
        setIsLoading(false);
      }
    );
  }, [])


  return { currentPosition, error, isLoading };
}