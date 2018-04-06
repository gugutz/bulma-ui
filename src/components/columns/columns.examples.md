[Checkout Bulma documentation](https://bulma.io/documentation/columns/basics/).


### Import 

```jsx static
import {Columns} from 'bulma-ui'
```

### Basic Usage

```jsx
<Columns>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```

### Centered

```jsx
<Columns isCentered>
  <Column isHalf>Single column</Column>
</Columns>
```

### Mobile

By default, columns are only activated from tablet onwards. This means columns are stacked on top of each other on mobile.
If you want columns to work on mobile too, just add the `isMobile` prop on the `Columns` component.

```jsx
<Columns isMobile>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```

### Desktop

If you only want columns on desktop upwards, just use the `isDesktop` prop on the `Columns` component.

```jsx
<Columns isDesktop>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```

### Multiline

```jsx
<Columns isMultiline>
  <Column isHalf>First column</Column>
  <Column isHalf>Second column</Column>
  <Column isHalf>Third column</Column>
</Columns>
```

### Gapless

If you want to remove the space between the columns, add the `isGapless`  prop on the `Columns` component.

```jsx
<Columns isGapless>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```

You can combine it with the multiline columns.

```jsx
<Columns isMultiline isGapless>
  <Column isHalf>First column</Column>
  <Column isHalf>Second column</Column>
  <Column isHalf>Third column</Column>
</Columns>
```

### Variable gap 

Experimental feature from Bulma only available on browsers that support [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables). Checkout the Bulma [official documentation](https://bulma.io/documentation/columns/gap/#variable-gap) for more information.
You can specify a custom gap from 0 to 8. 0 will remove any gap. 3 is the default value, equivalent to the 0.75rem value. 8 is the maximum gap of 2rem.

```jsx
<Columns gap={0}>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```

```jsx
<Columns gap={8}>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```
