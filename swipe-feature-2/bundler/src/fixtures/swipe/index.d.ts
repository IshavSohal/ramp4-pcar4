import { FixtureInstance } from '../../api';
declare class SwipeFixture extends FixtureInstance {
    addLeadingLayers: (layerIds: Array<string>) => void;
    addTrailingLayers: (layerIds: Array<string>) => void;
    added(): Promise<void>;
}
export default SwipeFixture;
