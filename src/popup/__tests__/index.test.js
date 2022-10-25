import { mount } from '@vue/test-utils';
import Popup from '@/src/popup/index.ts';
import Button from '@/src/button/index.ts';

describe('Popup', () => {
  describe(':props', () => {
    /** 制定挂载节点  */
    it(':attach', () => {
      const visible = true;
      const wrapper = mount({
        render(h) {
          return <div id="container">
            <Popup trigger='click' attach='#container'>
              <Button variant='outline' id="btn">触发</Button>
              <template slot='content'>
                触发显示
              </template>
          </Popup>
          </div>
        }
      })
      console.log('wrapper.findComponent(Button) :>> ', wrapper.findComponent(Button));
      wrapper.findComponent(Button).trigger('click');
      console.log(wrapper.html());
    });
  });
  describe('@event', () => {
    it('onScroll', () => {

    });

    it('onVisibleChange', () => {

    });
  });
  let cmp;

  beforeEach(() => {
    cmp = mount(Popup, {
      propsData: {
        disabled: true,
        placement: 'top-left',
        visible: false,
        trigger: 'click',
        content: 'txt',
        showArrow: true,
        destroyOnClose: true,
      },
    });
  });

  it('equals disabled to true', () => {
    expect(cmp.vm.disabled).toEqual(true);
  });
});
