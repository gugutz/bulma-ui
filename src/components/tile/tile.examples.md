[Checkout Bulma documentation](https://bulma.io/documentation/layout/tiles/).

### Basic Usage

```jsx
<Tile isAncestor>
  <Tile isVertical size={8}>
    <Tile>
      <Tile isParent isVertical>
        <Tile isChild>
          <p>Put any content you want</p>
        </Tile>
        <Tile isChild>
          <p>Put any content you want</p>
        </Tile>
      </Tile>
      <Tile isParent>
        <Tile isChild>
          <p>Put any content you want</p>
        </Tile>
      </Tile>
    </Tile>
    <Tile isParent>
      <Tile isChild>
        <p>Put any content you want</p>
      </Tile>
    </Tile>
  </Tile>
  <Tile isParent>
    <Tile isChild>
      <p>Put any content you want</p>
    </Tile>
  </Tile>
</Tile>
```
