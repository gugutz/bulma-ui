import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from './pagination'

describe('<Pagination /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Pagination role="navigation" aria-label="pagination">
          <Pagination.Previous>Previous</Pagination.Previous>
          <Pagination.Next>Next page</Pagination.Next>
          <Pagination.List>
            <li>
              <Pagination.Link>1</Pagination.Link>
            </li>
            <li>
              <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
            </li>
            <li>
              <Pagination.Link>45</Pagination.Link>
            </li>
            <li>
              <Pagination.Link isCurrent>46</Pagination.Link>
            </li>
            <li>
              <Pagination.Link>47</Pagination.Link>
            </li>
            <li>
              <Pagination.Ellipsis>&hellip;</Pagination.Ellipsis>
            </li>
            <li>
              <Pagination.Link>86</Pagination.Link>
            </li>
          </Pagination.List>
        </Pagination>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const positions = ['left', 'right', 'center']

  for (const position of positions) {
    it('should support position prop with ' + position, () => {
      const tree = renderer
        .create(
          <Pagination position={position}>
            <div>children</div>
          </Pagination>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }

  it('should support isRounded prop', () => {
    const tree = renderer
      .create(
        <Pagination isRounded>
          <div>children</div>
        </Pagination>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const sizes = ['small', 'medium', 'large', 'normal']

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Pagination size={size}>
            <div>children</div>
          </Pagination>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
