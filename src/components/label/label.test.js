import React from 'react'
import renderer from 'react-test-renderer'
import Label from './label'

describe('<Label /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Label>cool label</Label>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
