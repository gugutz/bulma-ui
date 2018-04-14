[Checkout Bulma documentation](https://bulma.io/documentation/layout/level/).

A multi-purpose horizontal level, which can contain almost any other element.

### Basic Usage

```jsx
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
```

### Centered level

If you want a centered level, you can use as many `Level.Item` as you want, as long as they are direct children of the `Level` component. 

```jsx
<Level>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </Level.Item>
</Level>
```

### Mobile level

By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the `isMobile` prop on the `Level` component. 

```jsx
<Level isMobile>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </Level.Item>
  <Level.Item hasTextCentered>
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </Level.Item>
</Level>
```
