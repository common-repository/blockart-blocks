(()=>{const{$$:a,domReady:o,parseHTML:e,toArray:r}=window.blockartUtils,t=a=>{const o=e(a,1),r=(new XMLSerializer).serializeToString(o);return`data:image/svg+xml;base64,${btoa(r)}`};o((()=>{const o=r(a(".blockart-map[data-map]"));if(o.length&&"object"==typeof google&&"object"==typeof google.maps)for(const a of o){let o=window?.[a.dataset?.map];const e=new google.maps.Map(a,o.map);if(o.marker){o.marker.map=e;const a=new google.maps.Marker(o.marker);o.markerIcon&&a.setIcon(t(o.markerIcon))}}}))})();