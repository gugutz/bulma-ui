import React from 'react'
import renderer from 'react-test-renderer'
import Progress from './progress'

describe('<Progress /> component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Progress value={60}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  const colors = ['primary', 'link', 'info', 'success', 'warning', 'danger']

  for (const color of colors) {
    it('should support color prop with ' + color, () => {
      const tree = renderer
        .create(<Progress value={60} color={color}/>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  const sizes = ['small', 'normal', 'medium', 'large']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer.create(<Progress value={60} size={size}/>).toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
