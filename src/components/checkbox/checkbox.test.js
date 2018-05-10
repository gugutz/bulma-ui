import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from './checkbox'

describe('<Checkbox /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Checkbox>Remember me</Checkbox>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support disabled prop', () => {
    const tree = renderer
      .create(<Checkbox disabled>Remember me</Checkbox>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
