import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Wifi, Shield, Headphones } from "lucide-react";

const CoverageMap = () => {
  // Coverage areas with coordinates (approximate)
  const locations = [
    { name: "Indore", coordinates: [22.7196, 75.8577] as [number, number] },
    { name: "Palda", coordinates: [22.7400, 75.8350] as [number, number] },
    { name: "Jetpura", coordinates: [22.7300, 75.8700] as [number, number] },
    { name: "Pansamal", coordinates: [22.7500, 75.8800] as [number, number] },
    { name: "Panchemal", coordinates: [22.7600, 75.8900] as [number, number] },
    { name: "Khetiya", coordinates: [22.6186, 74.6197] as [number, number] },
    { name: "Amarkantak", coordinates: [22.6773, 81.7590] as [number, number] },
    { name: "Binagunj", coordinates: [24.6169, 76.4319] as [number, number] },
    { name: "Depalpur", coordinates: [22.8508, 75.5425] as [number, number] },
    { name: "Deroi", coordinates: [22.8000, 75.9000] as [number, number] },
    { name: "Sendwa", coordinates: [21.9747, 75.0911] as [number, number] },
    { name: "Jhabua", coordinates: [22.7676, 74.5906] as [number, number] },
    { name: "Kakanwani", coordinates: [22.7800, 75.9200] as [number, number] },
    { name: "Rajgarh", coordinates: [24.0073, 76.7275] as [number, number] },
  ];

  // Calculate bounds to fit all markers
  const bounds: LatLngBoundsExpression = [
    [21.5, 74.0], // Southwest
    [24.8, 82.0], // Northeast
  ];

  // Custom marker icon using SVG
  const customIcon = new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.3"/>
          </filter>
        </defs>
        <path d="M16 0C9.373 0 4 5.373 4 12c0 8 12 24 12 24s12-16 12-24c0-6.627-5.373-12-12-12z" 
              fill="hsl(220, 90%, 56%)" 
              stroke="white" 
              stroke-width="2"
              filter="url(#shadow)"/>
        <circle cx="16" cy="12" r="5" fill="white"/>
      </svg>
    `)}`,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -40],
  });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-card border border-border">
      <MapContainer
        bounds={bounds}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={true}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.coordinates}
            icon={customIcon}
          >
            <Popup className="custom-popup" maxWidth={300}>
              <div className="p-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {location.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  High-speed internet available in your area
                </p>

                <div className="space-y-2 mb-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Wifi className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Fiber Optic & DSL</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Headphones className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">24/7 Local Support</span>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full py-2 px-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md font-medium text-sm transition-smooth"
                >
                  Get Connection
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Attribution */}
      <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs text-muted-foreground z-10 border border-border">
        Free map powered by OpenStreetMap
      </div>
    </div>
  );
};

export default CoverageMap;
