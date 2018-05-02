import { shallow } from '@vue/test-utils';
import VLayer from '@/components/VLayer';

describe('VLayer.vue', () => {
  describe('given a data with children property', () => {
    it('has lines tr in the second row', () => {
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

    it('has downline in the second row', () => {
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

      expect(wrapper.contains('tr:nth-child(2) > td > div.downline')).toBeTruthy();
    });

    it('has lines tr in the third row', () => {
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

    it('has a nodes tr in the last row', () => {
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
    it('does not have any lines tr', () => {
      const node = {
        name: 'A',
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      expect(wrapper.contains('.lines')).toBeFalsy();
    });
  });
});
