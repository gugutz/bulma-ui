import React from 'react'
import renderer from 'react-test-renderer'
import Button from './button'

describe('<Button /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support type prop', () => {
    const tree = renderer.create(<Button type="submit">text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const colors = [
    'white',
    'light',
    'dark',
    'black',
    'text',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer.create(<Button color={color}>text</Button>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer.create(<Button size={size}>text</Button>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  it('should support isOutlined prop', () => {
    const tree = renderer.create(<Button isOutlined>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isInverted prop', () => {
    const tree = renderer.create(<Button isInverted>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isRounded prop', () => {
    const tree = renderer.create(<Button isRounded>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const states = ['normal', 'hovered', 'focused', 'active', 'loading']

  for (const state of states) {
    it('should support state prop with ' + state, () => {
      const tree = renderer.create(<Button state={state}>text</Button>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  it('should support isStatic prop', () => {
    const tree = renderer.create(<Button isStatic>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isSelected prop', () => {
    const tree = renderer.create(<Button isSelected>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isFullWidth prop', () => {
    const tree = renderer.create(<Button isFullWidth>text</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
