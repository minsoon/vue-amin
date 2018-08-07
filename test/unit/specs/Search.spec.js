import { mount, RouterLinkStub } from '@vue/test-utils';
import Search from '@/views/Search';

const wrapperSearch = mount(Search, {
  stubs: {
    RouterLink: RouterLinkStub
  }
});

describe('Search.vue', () => {
  it('검색에 따라 데이터가 잘 노출 되는가', () => {
    const input = wrapperSearch.find('input[name=search]');
    input.setValue('golfzon');
    input.trigger('input');
    expect(wrapperSearch.findAll('.item').length).toBe(44);
    input.setValue('test');
    input.trigger('input');
    expect(wrapperSearch.findAll('.item').length).toBe(0);
    /*
    * TODO : dom 체크가 아닌 app-list 에서 데이터 확인
    * */
  });
});
