import NewFixtureV from './new-fixture.vue'; // import on-map component
import NewFixtureButtonV from './new-button.vue';

import { FixtureInstance } from '@/api';

class NewFixture extends FixtureInstance {
    added(): void {
        this.$iApi.component('new-fixture-new-button', NewFixtureButtonV);

        const { el } = this.mount(NewFixtureV, {
            app: this.$element,
            props: { message: 'This is a new fixture.', fixture: this }
        });

        this.$vApp.$el.appendChild(el.childNodes[0]);
    }

    removed(): void {
        // console.log(`[fixture] ${this.id} removed`);
        // this.$vApp.$el.removeChild(newfixture);
        // this.$iApi.fixture.remove(this);
    }
}

export default NewFixture;
