import React from 'react'
import renderer from 'react-test-renderer'
import Delete from './delete'

describe('<Delete /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Delete/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isSmall prop', () => {
    const tree = renderer.create(<Delete isSmall/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isMedium prop', () => {
    const tree = renderer.create(<Delete isMedium/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isLarge prop', () => {
    const tree = renderer.create(<Delete isLarge/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
