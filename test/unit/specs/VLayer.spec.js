import { shallow } from '@vue/test-utils';
import VLayer from '@/components/VLayer';

describe('VLayer.vue', () => {
  describe('given a data with children property', () => {
    it('have two lines tr in the second row', () => {
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

      expect(wrapper.contains('tr:nth-child(2).lines')).toBeTruthy();
    });

    it('have two lines tr in the third row', () => {
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

      expect(wrapper.contains('tr:nth-child(3).lines')).toBeTruthy();
    });

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
