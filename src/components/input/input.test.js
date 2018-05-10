import React from 'react'
import renderer from 'react-test-renderer'
import Input from './input'

describe('<Input /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Input/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const types = ['text', 'password', 'email', 'tel']

  for (const type of types) {
    it('should support type prop with ' + type, () => {
      const tree = renderer.create(<Input type={type}/>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  it('should support disabled prop', () => {
    const tree = renderer.create(<Input disabled/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support readOnly prop', () => {
    const tree = renderer.create(<Input readOnly/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isStatic prop', () => {
    const tree = renderer.create(<Input isStatic/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support other props from input', () => {
    const tree = renderer
      .create(<Input name="email" placeholder="email@example.com"/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const colors = ['primary', 'info', 'success', 'warning', 'danger', 'default']

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer.create(<Input color={color}/>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const states = ['hovered', 'focused', 'normal']

  for (const state of states) {
    it('should support state prop with ' + state, () => {
      const tree = renderer.create(<Input state={state}/>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer.create(<Input size={size}/>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
