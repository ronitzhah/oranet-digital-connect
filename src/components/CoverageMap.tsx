import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const CoverageMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [tokenSubmitted, setTokenSubmitted] = useState(false);

  // Coverage areas with coordinates (approximate)
  const locations = [
    { name: "Indore", coordinates: [75.8577, 22.7196] },
    { name: "Palda", coordinates: [75.8350, 22.7400] },
    { name: "Jetpura", coordinates: [75.8700, 22.7300] },
    { name: "Pansamal", coordinates: [75.8800, 22.7500] },
    { name: "Panchemal", coordinates: [75.8900, 22.7600] },
    { name: "Khetiya", coordinates: [74.6197, 22.6186] },
    { name: "Amarkantak", coordinates: [81.7590, 22.6773] },
    { name: "Binagunj", coordinates: [76.4319, 24.6169] },
    { name: "Depalpur", coordinates: [75.5425, 22.8508] },
    { name: "Deroi", coordinates: [75.9000, 22.8000] },
    { name: "Sendwa", coordinates: [75.0911, 21.9747] },
    { name: "Jhabua", coordinates: [74.5906, 22.7676] },
    { name: "Kakanwani", coordinates: [75.9200, 22.7800] },
    { name: "Rajgarh", coordinates: [76.7275, 24.0073] },
  ];

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setTokenSubmitted(true);
    }
  };

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    try {
      // Set Mapbox access token
      mapboxgl.accessToken = mapboxToken;

      // Initialize map centered on Madhya Pradesh
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [76.5, 22.9], // Center of coverage area
        zoom: 7,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: false,
        }),
        "top-right"
      );

      // Add markers for each location
      locations.forEach((location) => {
        // Create a custom marker element
        const markerEl = document.createElement("div");
        markerEl.className = "custom-marker";
        markerEl.style.width = "32px";
        markerEl.style.height = "32px";
        markerEl.style.backgroundColor = "hsl(220, 90%, 56%)";
        markerEl.style.borderRadius = "50%";
        markerEl.style.border = "3px solid white";
        markerEl.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
        markerEl.style.cursor = "pointer";
        markerEl.style.display = "flex";
        markerEl.style.alignItems = "center";
        markerEl.style.justifyContent = "center";

        // Add icon to marker
        const icon = document.createElement("div");
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
        markerEl.appendChild(icon);

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false,
        }).setHTML(`
          <div style="padding: 8px;">
            <h3 style="font-weight: 600; font-size: 16px; margin-bottom: 8px; color: hsl(220, 15%, 15%);">
              ${location.name}
            </h3>
            <p style="margin: 0; font-size: 14px; color: hsl(220, 10%, 46%);">
              High-speed internet available
            </p>
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid hsl(220, 15%, 90%);">
              <p style="margin: 4px 0; font-size: 12px; color: hsl(220, 10%, 46%);">
                ✓ Fiber Optic
              </p>
              <p style="margin: 4px 0; font-size: 12px; color: hsl(220, 10%, 46%);">
                ✓ DSL & Cable
              </p>
              <p style="margin: 4px 0; font-size: 12px; color: hsl(220, 10%, 46%);">
                ✓ 24/7 Support
              </p>
            </div>
            <a 
              href="#contact" 
              style="
                display: inline-block;
                margin-top: 12px;
                padding: 6px 12px;
                background: hsl(25, 95%, 53%);
                color: white;
                text-decoration: none;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
              "
            >
              Get Connection
            </a>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat(location.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Fit map to show all markers
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach((location) => {
        bounds.extend(location.coordinates as [number, number]);
      });
      map.current.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
      });
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  if (!tokenSubmitted) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-card border border-border bg-card">
        <div className="aspect-video bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Interactive Coverage Map</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Enter your Mapbox public token to view the interactive map with all 14 service locations.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Paste your Mapbox public token here"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="border-input"
              />
              <Button
                onClick={handleTokenSubmit}
                disabled={!mapboxToken.trim()}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Load Map
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Get your free token at{" "}
                <a
                  href="https://account.mapbox.com/access-tokens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-card border border-border">
      <div ref={mapContainer} className="w-full h-[500px]" />
    </div>
  );
};

export default CoverageMap;
