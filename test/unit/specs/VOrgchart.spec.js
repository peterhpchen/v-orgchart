import { shallow } from '@vue/test-utils';
import VOrgchart from '@/components/VOrgchart';
import VLayer from '@/components/VLayer';

describe('VOrgchart.vue', () => {
  it('has VLayer', () => {
    const node = {
      name: 'A',
    };

    const wrapper = shallow(VOrgchart, {
      propsData: {
        data: node,
      },
    });

    expect(wrapper.contains(VLayer)).toBeTruthy();
  });
});