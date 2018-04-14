import React from 'react'
import renderer from 'react-test-renderer'
import Level from './level'

describe('<Level /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Level>
          <Level.Left>
            <Level.Item>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Left>
          <Level.Right>
            <Level.Item>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Right>
        </Level>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Level should support isMobile ', () => {
    const tree = renderer
      .create(
        <Level isMobile>
          <Level.Left>
            <Level.Item>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Left>
          <Level.Right>
            <Level.Item>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Right>
        </Level>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Item should support hasTextCentered prop', () => {
    const tree = renderer
      .create(
        <Level isMobile>
          <Level.Left>
            <Level.Item hasTextCentered>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Left>
          <Level.Right>
            <Level.Item hasTextCentered>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Right>
        </Level>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Item should support isNarrow prop', () => {
    const tree = renderer
      .create(
        <Level isMobile>
          <Level.Left>
            <Level.Item isNarrow>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Left>
          <Level.Right>
            <Level.Item isNarrow>item</Level.Item>
            <Level.Item>item</Level.Item>
          </Level.Right>
        </Level>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
