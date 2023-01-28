
import dynamic from 'next/dynamic';

const MapLazy = dynamic(() => import('./Map'), {
  ssr: false
});

export default MapLazy;