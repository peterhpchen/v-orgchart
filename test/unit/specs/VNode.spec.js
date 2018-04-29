// import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import VNode from '@/components/VNode';

describe('VNode.vue', () => {
  it('should match snapshot', () => {
    const node = {
      name: 'A',
    };

    const wrapper = shallow(VNode, {
      propsData: {
        nodeData: node,
      },
      scopedSlots: {
        default: '<div class="name" slot-scope="props">{{props.nodeData.name}}</div>',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
