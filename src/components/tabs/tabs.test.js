import React from 'react'
import renderer from 'react-test-renderer'
import Tabs from './tabs'

describe('<Tabs /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Tabs>
          <Tabs.Item isActive>Pictures</Tabs.Item>
          <Tabs.Item>Music</Tabs.Item>
          <Tabs.Item>Videos</Tabs.Item>
          <Tabs.Item>Documents</Tabs.Item>
        </Tabs>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const positions = ['right', 'left', 'center']

  for (const position of positions) {
    it('should support position prop with ' + position, () => {
      const tree = renderer
        .create(
          <Tabs position={position}>
            <Tabs.Item isActive>Pictures</Tabs.Item>
            <Tabs.Item>Music</Tabs.Item>
            <Tabs.Item>Videos</Tabs.Item>
            <Tabs.Item>Documents</Tabs.Item>
          </Tabs>
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
          <Tabs size={size}>
            <Tabs.Item isActive>Pictures</Tabs.Item>
            <Tabs.Item>Music</Tabs.Item>
            <Tabs.Item>Videos</Tabs.Item>
            <Tabs.Item>Documents</Tabs.Item>
          </Tabs>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  it('should support isToggle prop', () => {
    const tree = renderer
      .create(
        <Tabs isToggle>
          <Tabs.Item isActive>Pictures</Tabs.Item>
          <Tabs.Item>Music</Tabs.Item>
          <Tabs.Item>Videos</Tabs.Item>
          <Tabs.Item>Documents</Tabs.Item>
        </Tabs>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isToggleRounded prop', () => {
    const tree = renderer
      .create(
        <Tabs isToggle isToggleRounded>
          <Tabs.Item isActive>Pictures</Tabs.Item>
          <Tabs.Item>Music</Tabs.Item>
          <Tabs.Item>Videos</Tabs.Item>
          <Tabs.Item>Documents</Tabs.Item>
        </Tabs>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isBoxed prop', () => {
    const tree = renderer
      .create(
        <Tabs isBoxed>
          <Tabs.Item isActive>Pictures</Tabs.Item>
          <Tabs.Item>Music</Tabs.Item>
          <Tabs.Item>Videos</Tabs.Item>
          <Tabs.Item>Documents</Tabs.Item>
        </Tabs>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
