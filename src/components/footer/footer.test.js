import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './footer'

describe('<Footer /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Footer>text</Footer>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
