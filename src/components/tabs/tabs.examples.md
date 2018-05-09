[Checkout Bulma documentation](https://bulma.io/documentation/components/tabs/).

### Basic Usage

```jsx
<Tabs>
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

### Alignment

#### Right

```jsx
<Tabs position="right">
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

#### Center

```jsx
<Tabs position="center">
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

### Sizes

#### Small

```jsx
<Tabs size="small">
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

#### Medium

```jsx
<Tabs size="medium">
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

#### Large

```jsx
<Tabs size="large">
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

### Styles

#### Boxed

```jsx
<Tabs isBoxed>
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

#### Toggle

If you want mutually exclusive tabs (like radio buttons where clicking one deselects all other ones), use the `isToggle` prop.

```jsx
<Tabs isToggle>
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

If you use both `isToggle` and `isToggleRounded`, the first and last items will be rounded.

```jsx
<Tabs isToggle isToggleRounded>
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```

#### Fullwidth

```jsx
<Tabs isFullwidth>
  <Tabs.Item isActive>Pictures</Tabs.Item>
  <Tabs.Item>Music</Tabs.Item>
  <Tabs.Item>Videos</Tabs.Item>
  <Tabs.Item>Documents</Tabs.Item>
</Tabs>
```
