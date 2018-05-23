import { storiesOf } from '@storybook/vue';

import VLoader from '../components/VLoader';

storiesOf('VLoader', module).add('common', () => ({
  components: { VLoader },
  template: `
      <div class="container">
        <v-loader />
      </div>
    `,
}));
