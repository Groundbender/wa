import { PosistionCoordinates } from "@/types/weather";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const defaultPosition: PosistionCoordinates = {
  lat: 55,
  lng: 49,
}

export const useGeolocation = () =>  {
  const [isLoading, setIsLoading] = useState(false);
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
        if (error) {
          setError(error.message);
          toast.error("Allow location access to get weather data! \n Current position is Moscow, Russia by default.");
          setPosition(defaultPosition)
        }
        setIsLoading(false);
      }
    );
  }, [])


  return { currentPosition, error, isLoading };
}