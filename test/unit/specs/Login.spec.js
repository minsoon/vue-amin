import { mount } from '@vue/test-utils';
import Login from '@/views/Login';
import store from '@/store';

const wrapper = mount(Login);

describe('Login.vue', () => {

  it('1. 아이디 오류시 상활별로 에러 메시지가 정상 노출 하는가', (done) => {
    const input = wrapper.find('input[name=name]');
    input.setValue('mcsung85@gamcil.com');
    expect(wrapper.vm.name).toBe('mcsung85@gamcil.com');
    input.trigger('input');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('.v-messages').at(0).text()).toMatch('Name must be less than 10 characters');
      done();
    });
  });

  it('2. 비밀번호 오류시 상활별로 에러 메시지가 정상 노출 하는가', (done) => {
    const input = wrapper.find('input[name=password]');
    input.setValue('u1234');
    expect(wrapper.vm.password).toBe('u1234');
    input.trigger('input');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('.v-messages').at(1).text()).toMatch('Min 8 characters');
      done();
    });
  });

  it('3. clear 클릭시 삭제가 되는가', () => {
    wrapper.find('input[name=name]').setValue('mcsung85@gamcil.com');
    wrapper.find('input[name=password]').setValue('u1234');
    wrapper.find('button[name=clear]').trigger('click');
    expect(wrapper.vm.$refs.form.$el[0].value).toBe('');
    expect(wrapper.vm.$refs.form.$el[1].value).toBe('');
  });

  it('4. Login Api가 잘 동작하는가', (done) => {
    wrapper.find('input[name=name]').setValue('mcsung85');
    wrapper.find('input[name=password]').setValue('u123456789');
    wrapper.find('button[name=submit]').trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(store.state.user.accessToken).not.toBe('');
      done();
    });
  });
});
