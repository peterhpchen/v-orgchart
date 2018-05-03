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

  describe('given a data with children', () => {
    it('has twice td of number of children in the third row', () => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          },
          {
            name: 'C',
          },
          {
            name: 'D',
          },
        ],
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      expect(wrapper.findAll('tr:nth-child(3).lines > td').length).toBe(node.children.length * 2);
    });

    it('has rightLine in the odd td in the third row', () => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          },
          {
            name: 'C',
          },
          {
            name: 'D',
          },
        ],
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      const oddTd = wrapper.findAll('tr:nth-child(3).lines > td:nth-child(odd)');

      expect(oddTd.filter(w => w.classes().includes('rightLine')).length).toBe(oddTd.length);
    });

    it('has leftLine in the even td in the third row', () => {
      const node = {
        name: 'A',
        children: [
          {
            name: 'B',
          },
          {
            name: 'C',
          },
          {
            name: 'D',
          },
        ],
      };

      const wrapper = shallow(VLayer, {
        propsData: {
          data: node,
        },
      });

      const evenTd = wrapper.findAll('tr:nth-child(3).lines > td:nth-child(even)');

      expect(evenTd.filter(w => w.classes().includes('leftLine')).length).toBe(evenTd.length);
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
