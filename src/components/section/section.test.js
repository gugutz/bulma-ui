import React from 'react'
import renderer from 'react-test-renderer'
import Section from './section'

describe('<Section /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Section>text</Section>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const sizes = ['normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer.create(<Section size={size}>text</Section>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
