import { DottedMap } from "@/components/ui/dotted-map"

const markers = [
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
  }, // New York
  {
    lat: 34.0522,
    lng: -118.2437,
    size: 0.3,
  }, // Los Angeles
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.3,
  }, // London
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.3,
  }, // Sydney
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.3,
  }, // Paris
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.3,
  }, // Tokyo
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.3,
  }, // Moscow
  {
    lat: 39.9042,
    lng: 116.4074,
    size: 0.3,
  }, // Beijing
  {
    lat: 28.6139,
    lng: 77.209,
    size: 0.3,
  }, // New Delhi
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.3,
  }, // São Paulo
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
  }, // Singapore
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 0.3,
  }, // Dubai
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.3,
  }, // Berlin
  {
    lat: 19.4326,
    lng: -99.1332,
    size: 0.3,
  }, // Mexico City
  {
    lat: -26.2041,
    lng: 28.0473,
    size: 0.3,
  }, // Johannesburg
]

export function DottedMapContext() {
  return (
    <div className="relative h-full w-full min-h-[320px] overflow-hidden rounded-none border border-border bg-background p-2">
      <div className="relative h-full w-full overflow-hidden border border-border">
        <DottedMap markers={markers} />
      </div>
      <div className="flex items-center justify-between pt-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        <span>MAP // TANA</span>
        <span>-18.8792 / 47.5078</span>
      </div>
    </div>
  )
}
