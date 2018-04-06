import React from 'react'
import renderer from 'react-test-renderer'
import Column from './column'

describe('<Column /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Column>
          <div>Some content</div>
        </Column>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isOneThird prop', () => {
    const tree = renderer
      .create(
        <Column isOneThird>
          <div>Some content</div>
        </Column>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isHalf prop', () => {
    const tree = renderer
      .create(
        <Column isHalf>
          <div>Some content</div>
        </Column>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
