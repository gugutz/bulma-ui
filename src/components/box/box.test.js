import React from 'react'
import renderer from 'react-test-renderer'
import Box from './box'

describe('<Box /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Box>text</Box>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
