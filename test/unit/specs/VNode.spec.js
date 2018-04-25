import Vue from 'vue';
import VNode from '@/components/VNode';

describe('VNode.vue', () => {
  const data = {
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
  };
  it('should match snapshot', () => {
    const Constructor = Vue.extend(VNode);
    const vm = new Constructor({
      propsData: {
        nodeData: data,
      },
      // slots: {
      //   default: {
      //     render(h) {
      //       return h('template');
      //     },
      //   },
      // },
    }).$mount();
    expect(vm.$el.outerHTML).toMatchSnapshot();
  });
});
