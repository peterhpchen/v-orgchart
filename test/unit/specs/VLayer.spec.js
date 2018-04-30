import { shallow } from '@vue/test-utils';
import VLayer from '@/components/VLayer';

describe('VLayer.vue', () => {
  it('should not have any children node', () => {
    const node = {
      name: 'A'
    };

    const wrapper = shallow(VLayer, {
      propsData: {
        data: node,
      },
    });

    expect(wrapper.contains('.nodes')).toBeFalsy();
  });
});
