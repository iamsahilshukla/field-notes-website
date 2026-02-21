import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/data/india-states.json";

interface IndiaMapProps {
    highlightedStates: string[];
    setTooltipContent: (content: string) => void;
}

const IndiaMap = ({ highlightedStates, setTooltipContent }: IndiaMapProps) => {
    return (
        <div className="w-full h-full" data-tooltip-id="map-tooltip">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1300,
                    center: [82.5, 23.0]
                }}
                className="w-full h-[600px] sm:h-[700px] lg:h-[800px]"
            >
                <Geographies geography={geoUrl} parseGeographies={(geos: any[]) => {
                    // The topojson contains both 'states' and 'districts'. We only want states.
                    // Usually, st_nm is present. If dt_code is present, it's a district.
                    return geos.filter((geo: any) => !geo.properties.dt_code || geo.properties.dt_code === "");
                }}>
                    {({ geographies }) =>
                        geographies.map((geo: any) => {
                            const stateName = geo.properties.st_nm || 'Unknown State';
                            const isHighlighted = highlightedStates.includes(stateName);

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        setTooltipContent(stateName);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: isHighlighted ? "#d97706" : "#E5E5E5",
                                            stroke: "#FFFFFF",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                            transition: "all 250ms ease"
                                        },
                                        hover: {
                                            fill: isHighlighted ? "#b45309" : "#D4D4D4",
                                            stroke: "#FFFFFF",
                                            strokeWidth: 1,
                                            outline: "none",
                                            cursor: "pointer",
                                            transform: isHighlighted ? "scale(1.02)" : "scale(1)",
                                            transformOrigin: "center"
                                        },
                                        pressed: {
                                            fill: isHighlighted ? "#92400e" : "#D4D4D4",
                                            outline: "none",
                                        },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default memo(IndiaMap);
