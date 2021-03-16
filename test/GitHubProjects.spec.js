import { shallowMount } from '@vue/test-utils'
import GitHubProjects from '@/components/GitHubProjects'

jest.mock('axios', () => ({
  get: Promise.resolve('value')
}))

const factory = () => {
  return shallowMount(GitHubProjects, {
  })
}

describe('GitHubProjects', () => {
  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
