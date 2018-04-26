// import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import VNode from '@/components/VNode';

describe('VNode.vue', () => {
  let data;

  beforeEach(() => {
    data = {
      name: 'A',
      id: 1,
      children: [
        {
          name: 'AA',
          id: 11,
          children: [
            {
              name: 'AAA',
              id: 111,
            },
          ],
        },
        {
          name: 'AB',
          id: 12,
        },
        {
          name: 'AC',
          id: 13,
        },
      ],
    };
  });

  it('should match snapshot', () => {
    const wrapper = shallow(VNode, {
      propsData: {
        nodeData: data,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
