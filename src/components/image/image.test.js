import React from 'react'
import renderer from 'react-test-renderer'
import {default as Image, sizes} from './image'

describe('<Image /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Image
          alt="something"
          src="https://bulma.io/images/placeholders/128x128.png"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Image
            size={size}
            alt="something"
            src="https://bulma.io/images/placeholders/128x128.png"
          />
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
