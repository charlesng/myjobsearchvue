import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import JobBanner from '../JobBanner.vue';

describe('JobBanner.vue', () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });
  test('Initial Render', () => {
    const wrapper = shallowMount(JobBanner, {
      propsData: {},
    });
    expect(wrapper.text()).toMatch('My Job Search');
  });
});
