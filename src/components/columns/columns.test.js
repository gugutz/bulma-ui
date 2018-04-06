import React from 'react'
import renderer from 'react-test-renderer'
import Columns from './columns'

describe('<Columns /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Columns>
          <div>Some content</div>
        </Columns>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isCentered prop', () => {
    const tree = renderer
      .create(
        <Columns isCentered>
          <div>Some content</div>
        </Columns>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
