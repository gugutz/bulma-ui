/* eslint-disable react/jsx-child-element-spacing */
import React from 'react'
import renderer from 'react-test-renderer'
import Content from './content'

describe('<Content /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Content>
          <h1>Medium Content</h1>
          <p>
            Lorem ipsum
            <sup>
              <a>[1]</a>
            </sup>
            dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
            ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
            justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
            sollicitudin vel erat vel, interdum mattis neque. Sub
            <sub>script</sub>
            works as well!
          </p>
        </Content>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Content size={size}>
            <h1>Medium Content</h1>
            <p>
              Lorem ipsum
              <sup>
                <a>[1]</a>
              </sup>
              dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
              ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
              justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
              sollicitudin vel erat vel, interdum mattis neque. Sub
              <sub>script</sub>
              works as well!
            </p>
          </Content>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
