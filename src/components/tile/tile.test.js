import React from 'react'
import renderer from 'react-test-renderer'
import Box from '../box/box'
import {range} from '../../utils'
import Tile from './tile'

describe('<Tile /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Tile isAncestor>
          <Tile isVertical size={8}>
            <Tile>
              <Tile isParent isVertical>
                <Tile isChild>
                  <Box>Put any content you want</Box>
                </Tile>
                <Tile isChild>
                  <Box>Put any content you want</Box>
                </Tile>
              </Tile>
              <Tile isParent>
                <Tile isChild>
                  <Box>Put any content you want</Box>
                </Tile>
              </Tile>
            </Tile>
            <Tile isParent>
              <Tile isChild>
                <Box>Put any content you want</Box>
              </Tile>
            </Tile>
          </Tile>
          <Tile isParent>
            <Tile isChild>
              <Box>Put any content you want</Box>
            </Tile>
          </Tile>
        </Tile>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  const sizes = range(1, 13)

  for (const size of sizes) {
    it('should support size prop with ' + size, () => {
      const tree = renderer
        .create(
          <Tile size={size}>
            <Box>Put any content you want</Box>
          </Tile>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
