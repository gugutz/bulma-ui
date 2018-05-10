import React from 'react'
import renderer from 'react-test-renderer'
import Select from './select'

describe('<Select /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Select>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isRounded prop', () => {
    const tree = renderer
      .create(
        <Select isRounded>
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support multiple prop with a value', () => {
    const tree = renderer
      .create(
        <Select multiple="8">
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Brazil">Brazil</option>
          <option value="Suriname">Suriname</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Venezuela">Venezuela</option>
        </Select>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support multiple prop as boolean', () => {
    const tree = renderer
      .create(
        <Select multiple>
          <option value="Argentina">Argentina</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Brazil">Brazil</option>
          <option value="Suriname">Suriname</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Venezuela">Venezuela</option>
        </Select>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support other props from select', () => {
    const tree = renderer
      .create(
        <Select name="email">
          <option>Select dropdown</option>
          <option>With options</option>
        </Select>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const colors = ['primary', 'info', 'success', 'warning', 'danger', 'default']

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer
        .create(
          <Select color={color}>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const states = ['hovered', 'focused', 'normal', 'loading']

  for (const state of states) {
    it('should support state prop with ' + state, () => {
      const tree = renderer
        .create(
          <Select state={state}>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Select size={size}>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
