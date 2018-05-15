import { storiesOf } from '@storybook/vue';

import VOrgchart from '../components/VOrgchart';

storiesOf('VOrgchart', module).add('with children', () => ({
  components: { VOrgchart },
  template: `
  <div id="app">
    <v-orgchart
      :data="data"
    />
  </div>
  `,
  data() {
    return {
      data: {
        name: 'parent',
        id: 1,
        children: [
          {
            name: 'child1',
            id: 11,
            children: [
              {
                name: 'child11',
                id: 111,
              },
            ],
          },
          {
            name: 'child2',
            id: 12,
          },
          {
            name: 'child3',
            id: 13,
          },
        ],
      },
    };
  },
}));
