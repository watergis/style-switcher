import mapboxgl from 'mapbox-gl';
import { MapboxStyleDefinition, MapboxStyleSwitcherControl } from "../lib/index";
import "../styles.css"


(() => {
    const styles: MapboxStyleDefinition[] = [
        {
            title: "UNVT Original",
            uri:"https://optgeo.github.io/kokoromi-rw/style.json"
        },
        {
            title: "UNVT(WASAC)",
            uri:"https://wasac.github.io/mapbox-stylefiles/unvt/style.json"
        }
    ];
    const defaultStyle = styles[1];

    const map = new mapboxgl.Map({
        container: 'map',
        style: defaultStyle.uri,
        center: [29.898, -2.054],
        zoom: 9,
        hash:true,
    });
    
    map.addControl(new MapboxStyleSwitcherControl(styles, defaultStyle.title));
    
})();