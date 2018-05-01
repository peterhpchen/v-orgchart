import { shallow } from '@vue/test-utils';
import VLayer from '@/components/VLayer';

describe('VLayer.vue', () => {
  describe('given a data with children property', () => {
    it('have a nodes tr in the last row', () => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          },
        ],
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      expect(wrapper.contains('tr:last-child.nodes')).toBeTruthy();
    });

    it('have two lines tr', () => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          },
        ],
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
    it('does not have any nodes tr', () => {
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
