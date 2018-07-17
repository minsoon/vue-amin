import { mount } from '@vue/test-utils';
import Login from '@/views/Login';

const wrapper = mount(Login);
const defaultData = Login.data();
// const vm = wrapper.vm;

describe('Login.vue', () => {
  it('로그인 페이지 확인', () => {
    expect(defaultData.msg).toBe('login');
  });

  it('에러 메시지가 상황별로 정상 노출 하는가', () => {
    wrapper.find('button[name=submit]').trigger('click');

    const nameMsg = wrapper.findAll('.v-messages__message').at(0);
    expect(nameMsg.text()).toMatch('Name is required');

    const passwordMsg = wrapper.findAll('.v-messages__message').at(1);
    expect(passwordMsg.text()).toBe('Required.');

  });

  it('Lofin Api가 잘 동작하는가', () => {
  });

  it('입력 후 clear 클릭시 삭제 되는가', () => {
  });
});
