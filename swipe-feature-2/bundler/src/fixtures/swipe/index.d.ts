import { FixtureInstance, LayerInstance } from '../../api';
declare class SwipeFixture extends FixtureInstance {
    addLeadingLayer: (layer: LayerInstance) => void;
    addTrailingLayer: (layer: LayerInstance) => void;
    added(): Promise<void>;
}
export default SwipeFixture;
