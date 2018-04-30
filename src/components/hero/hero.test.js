import React from 'react'
import renderer from 'react-test-renderer'
import Hero from './hero'

describe('<Hero /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Hero>
          <Hero.Head>header</Hero.Head>
          <Hero.Body>body</Hero.Body>
          <Hero.Foot>footer</Hero.Foot>
        </Hero>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isBold prop', () => {
    const tree = renderer
      .create(
        <Hero isBold>
          <Hero.Body>text</Hero.Body>
        </Hero>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const colors = [
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'light',
    'dark'
  ]

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer
        .create(
          <Hero color={color}>
            <Hero.Body>text</Hero.Body>
          </Hero>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const sizes = ['medium', 'large', 'fullheight']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Hero size={size}>
            <Hero.Body>text</Hero.Body>
          </Hero>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
