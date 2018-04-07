import React from 'react'
import renderer from 'react-test-renderer'
import {default as Column, sizes} from './column'

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

  const breakpoints = [
    'mobile',
    'tablet',
    'touch',
    'desktop',
    'widescreen',
    'fullhd'
  ]

  const propNames = breakpoints.reduce(
    (acc, current) => {
      acc.push(`${current}Size`)
      acc.push(`${current}Offset`)
      return acc
    },
    ['size', 'offset']
  )

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
