import { shallow, mount } from '@vue/test-utils';
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

  it('has async data', (done) => {
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
    const asyncData = new Promise((resolve) => {
      resolve({ ...node });
    });

    const wrapper = mount(VOrgchart, {
      propsData: {
        data: asyncData,
      },
    });

    const updateDataFunction = jest.fn();
    wrapper.vm.$on('update:data', updateDataFunction);

    wrapper.vm.$nextTick(() => {
      expect(updateDataFunction).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('has loading icon when the data is not got yet', () => {
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
    const asyncData = new Promise((resolve) => {
      resolve({ ...node });
    });

    const wrapper = mount(VOrgchart, {
      propsData: {
        data: asyncData,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('matches snapshot', () => {
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

    const wrapper = mount(VOrgchart, {
      propsData: {
        data: node,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
