import { FixtureInstance } from '../../api';
declare class SwipeFixture extends FixtureInstance {
    addLeadingLayers: (esriLayers: Array<__esri.Layer>) => void;
    addTrailingLayers: (esriLayers: Array<__esri.Layer>) => void;
    added(): Promise<void>;
}
export default SwipeFixture;
