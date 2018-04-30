import { shallow } from '@vue/test-utils';
import VLayer from '@/components/VLayer';

describe('VLayer.vue', () => {
  describe('given a data with children property', () => {
    it('have nodes', () => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          }
        ]
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      expect(wrapper.contains('.nodes')).toBeTruthy();
    });
  });

  describe('given a data without children property', () => {
    it('does not have any nodes', () => {
      const node = {
        name: 'A',
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      expect(wrapper.contains('.nodes')).toBeFalsy();
    });
  });
});
