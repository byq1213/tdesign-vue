import { mount } from '@vue/test-utils';
import base from '@/examples/checkbox/demos/base.vue';
import link from '@/examples/checkbox/demos/link.vue';
import checkboxAll from '@/examples/checkbox/demos/checkbox-all.vue';
import controlled from '@/examples/checkbox/demos/checkbox-controlled.vue';
import group from '@/examples/checkbox/demos/checkbox-group.vue';

// unit test for component in examples.
describe('Checkbox', () => {
  it('base demo works fine', () => {
    const wrapper = mount(base);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('link demo works fine', () => {
    const wrapper = mount(link);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('checkbox-all demo works fine', () => {
    const wrapper = mount(checkboxAll);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('checkbox group demo works fine', () => {
    const wrapper = mount(group);
    expect(wrapper.element).toMatchSnapshot();
  });
  it('controlled demo works fine', () => {
    const wrapper = mount(controlled);
    expect(wrapper.element).toMatchSnapshot();
  });
});
