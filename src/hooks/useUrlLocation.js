import { useSearchParams } from "react-router-dom";

export function useUrlLocation() {
  const [searchPrams] = useSearchParams();
  const lat = searchPrams.get("lat");
  const lng = searchPrams.get("lng");

  return [lat, lng];
}
