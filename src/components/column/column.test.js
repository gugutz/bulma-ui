import React from 'react'
import renderer from 'react-test-renderer'
import {default as Column, sizes, propNames} from './column'

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

  for (const size of sizes) {
    for (const propName of propNames) {
      it(`should support ${propName} prop with ${size}`, () => {
        const props = {[propName]: size}
        const tree = renderer
          .create(
            <Column {...props}>
              <div>Some content</div>
            </Column>
          )
          .toJSON()
        expect(tree).toMatchSnapshot()
      })
    }
  }
})
