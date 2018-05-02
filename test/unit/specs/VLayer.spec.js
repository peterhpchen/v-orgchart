import { shallow } from '@vue/test-utils';
import VLayer from '@/components/VLayer';

describe('VLayer.vue', () => {
  describe('given a data with single child', () => {
    let wrapper;

    beforeEach(() => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          },
        ],
      };

      wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });
    });

    it('has lines tr in the second row', () => {
      expect(wrapper.contains('tr:nth-child(2).lines')).toBeTruthy();
    });

    it('has downLine in the second row', () => {
      expect(wrapper.contains('tr:nth-child(2) > td > div.downLine')).toBeTruthy();
    });

    it('has rightLine in the first td of the third tr', () => {
      expect(wrapper.contains('tr:nth-child(3) > td:first-child.rightLine')).toBeTruthy();
    });
    it('has leftLine in the last td of the third tr', () => {
      expect(wrapper.contains('tr:nth-child(3) > td:last-child.leftLine')).toBeTruthy();
    });

    it('has lines tr in the third row', () => {
      expect(wrapper.contains('tr:nth-child(3).lines')).toBeTruthy();
    });

    it('has a nodes tr in the last row', () => {
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
