[Checkout Bulma documentation](https://bulma.io/documentation/layout/container/).

### Basic Usage

```jsx
<Container>
  <div>some content</div>
</Container>
```

### Fluid

If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides, add the `isFluid` prop.

```jsx
<Container isFluid>
  <div>some content</div>
</Container>
```

### Widescreen

This container is fullwidth until the `$widescreen` breakpoint. 

```jsx
<Container isWidescreen>
  <div>some content</div>
</Container>
```

### Fullhd

This container is fullwidth until the `$fullhd` breakpoint. 

```jsx
<Container isFullhd>
  <div>some content</div>
</Container>
```
