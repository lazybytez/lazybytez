import { shallowMount } from '@vue/test-utils'
import Contact from '@/components/Contact'

const factory = () => {
  return shallowMount(Contact, {
  })
}

describe('Contact', () => {
  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
