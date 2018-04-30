import { shallow } from '@vue/test-utils';
import VNode from '@/components/VNode';

describe('VNode.vue', () => {
  it('match snapshot', () => {
    const node = {
      name: 'A',
    };

    const wrapper = shallow(VNode, {
      propsData: {
        data: node,
      },
      scopedSlots: {
        default: '<div class="name" slot-scope="slotProps">{{ slotProps.data.name }}</div>',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
