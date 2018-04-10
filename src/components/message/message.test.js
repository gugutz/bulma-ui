import React from 'react'
import renderer from 'react-test-renderer'
import Message from './message'

describe('<Message /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Message>
          <Message.Header>header</Message.Header>
          <Message.Body>text</Message.Body>
        </Message>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Message size={size}>
            <Message.Header>header</Message.Header>
            <Message.Body>text</Message.Body>
          </Message>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const colors = [
    'dark',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer
        .create(
          <Message color={color}>
            <Message.Header>header</Message.Header>
            <Message.Body>text</Message.Body>
          </Message>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
