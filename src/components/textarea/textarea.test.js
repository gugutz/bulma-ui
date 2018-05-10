import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from './textarea'

describe('<Textarea /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Textarea>some content</Textarea>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const types = ['text', 'password', 'email', 'tel']

  for (const type of types) {
    it('should support type prop with ' + type, () => {
      const tree = renderer
        .create(<Textarea type={type}>some content</Textarea>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  it('should support disabled prop', () => {
    const tree = renderer
      .create(<Textarea disabled>some content</Textarea>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support readOnly prop', () => {
    const tree = renderer
      .create(<Textarea readOnly>some content</Textarea>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isStatic prop', () => {
    const tree = renderer
      .create(<Textarea isStatic>some content</Textarea>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support other props from textarea', () => {
    const tree = renderer
      .create(
        <Textarea name="email" placeholder="email@example.com">
          some content
        </Textarea>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const colors = ['primary', 'info', 'success', 'warning', 'danger', 'default']

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer
        .create(<Textarea color={color}>some content</Textarea>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const states = ['hovered', 'focused', 'normal']

  for (const state of states) {
    it('should support state prop with ' + state, () => {
      const tree = renderer
        .create(<Textarea state={state}>some content</Textarea>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(<Textarea size={size}>some content</Textarea>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
