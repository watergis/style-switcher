import mapboxgl from 'mapbox-gl';
import { MapboxStyleDefinition, MapboxStyleSwitcherControl } from "../lib/index";
import "../styles.css"


(() => {
    const map = new mapboxgl.Map({
        container: 'map',
        style:'https://optgeo.github.io/kokoromi-rw/style.json',
        center: [29.898, -2.054],
        zoom: 9,
        hash:true,
    });
    
    const styles: MapboxStyleDefinition[] = [
        {
            title: "UNVT",
            uri:"https://optgeo.github.io/kokoromi-rw/style.json"
        },
        {
            title: "UNVT with Water",
            uri:"https://wasac.github.io/mapbox-stylefiles/unvt/style.json"
        }
    ];
    
    map.addControl(new MapboxStyleSwitcherControl(styles));
    
})();