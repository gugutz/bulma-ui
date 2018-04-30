import React from 'react'
import renderer from 'react-test-renderer'
import Media from './media'

describe('<Media /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Media>
          <Media.Left>
            <div>something</div>
          </Media.Left>
          <Media.Content>
            <div>something</div>
          </Media.Content>
          <Media.Right>
            <div>something</div>
          </Media.Right>
        </Media>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
