import React from 'react'
import renderer from 'react-test-renderer'
import Container from './container'

describe('<Container /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Container>
          <div>some content here</div>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isFluid prop', () => {
    const tree = renderer
      .create(
        <Container isFluid>
          <div>some content here</div>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isWidescreen prop', () => {
    const tree = renderer
      .create(
        <Container isWidescreen>
          <div>some content here</div>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isFullhd prop', () => {
    const tree = renderer
      .create(
        <Container isFullhd>
          <div>some content here</div>
        </Container>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
