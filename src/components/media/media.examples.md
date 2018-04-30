[Checkout Bulma documentation](https://bulma.io/documentation/layout/media-object/).

The famous media object prevalent in social media interfaces, but useful in any context.

### Basic Usage

```jsx
<Media>
  <Media.Left>
    <Image 
      size="64x64"
      alt="alternate text"
      src="https://bulma.io/images/placeholders/128x128.png" 
    />
  </Media.Left>
  <Media.Content>
    <Content>
      <p>
        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </Content>
    <Level isMobile>
      <Level.Left>
        <Level.Item><a>like</a></Level.Item>
        <Level.Item><a>reply</a></Level.Item>
      </Level.Left>
    </Level>
  </Media.Content>
  <Media.Right>
    <Delete />
  </Media.Right>
</Media>
```
