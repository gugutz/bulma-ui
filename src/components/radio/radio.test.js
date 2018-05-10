import React from 'react'
import renderer from 'react-test-renderer'
import Radio from './radio'

describe('<Radio /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Radio name="something">Remember me</Radio>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support disabled prop', () => {
    const tree = renderer
      .create(
        <Radio name="something" disabled>
          Remember me
        </Radio>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support checked prop', () => {
    const tree = renderer
      .create(
        <Radio name="something" checked>
          Remember me
        </Radio>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
