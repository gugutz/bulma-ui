[Checkout Bulma documentation](https://bulma.io/documentation/columns/basics/).

### Import 

```jsx static
import {Column} from 'bulma-ui'
```

### Basic Usage

Each column will have an equal width, no matter the number of columns.

```jsx
<Columns>
  <Column>First column</Column>
  <Column>Second column</Column>
  <Column>Third column</Column>
</Columns>
```

### Changing sizes

If you want to change the size of a single column, you can use one of the following modifiers:

- narrow - will only take the space it needs
- full - will take the entire row
- 1/2 - half
- 1/3 - one third
- 2/3 - two thirds
- 1/4 - one quarter
- 3/4 - three quarters
- 1/5 - one fifth
- 2/5 - two fifths
- 3/5 - three fifths
- 4/5 - four fifths
- 1 - one column of 12
- 2 - two columns of 12
- 3 - three columns of 12
- 4 - fours columns of 12
- 5 - five columns of 12
- 6 - six columns of 12
- 7 - seven columns of 12
- 8 - eight columns of 12
- 9 - nine columns of 12
- 10 - ten columns of 12
- 11 - eleven columns of 12

The other columns will fill up the remaining space automatically.

```jsx
<Columns isMultiline>
  <Column size="narrow" style={{width: '200px'}}>
    will only take the space it needs
  </Column>
  <Column>Auto</Column>
  <Column size="full">will take the entire row</Column>
  <Column size="1/2">half</Column>
  <Column size="1/3">one third</Column>
  <Column size="2/3">two thirds</Column>
  <Column size="1/4">one quarter</Column>
  <Column size="3/4">three quarters</Column>
  <Column size="1/5">one fifth</Column>
  <Column size="2/5">two fifths</Column>
  <Column size="3/5">three fifths</Column>
  <Column size="4/5">four fifths</Column>
  <Column size="1/5">one fifth</Column>  
  <Column size="1">one column of 12</Column>
  <Column size="11">eleven columns of 12</Column>  
  <Column size="2">two columns of 12</Column>
  <Column size="10">ten columns of 12</Column>
  <Column size="3">three columns of 12</Column>
  <Column size="9">nine columns of 12</Column>
  <Column size="4">fours columns of 12</Column>
  <Column size="8">eight columns of 12</Column>
  <Column size="5">five columns of 12</Column>
  <Column size="7">seven columns of 12</Column>
  <Column size="6">six columns of 12</Column>
  <Column size="6">six columns of 12</Column>
</Columns>
```

### Offset

You can use offset to create empty column, you can use the same size from size props.


```jsx
<Columns>
  <Column size="1/2" offset="1/4">
    <p>half</p>
    <p>offset one quarter</p>
  </Column>
</Columns>
<Columns>
  <Column size="3/5" offset="1/5">
    <p>three fifth</p>
    <p>offset one fifth</p>
  </Column>
</Columns>
<Columns>
  <Column size="4" offset="8">
    <p>fours columns of 12</p>
    <p>offset eight columns</p>
  </Column>
</Columns>
<Columns>
  <Column size="11" offset="1">
    <p>eleven columns of 12</p>
    <p>offset one column</p>
  </Column>
</Columns>
```

### Responsiveness

You can define a column size and a offset for each viewport size: mobile, tablet, touch, desktop, widescreen and fullhd. You can see [here a detailed comparison between the breakpoints](https://bulma.io/documentation/overview/responsiveness/).


```jsx
<Columns>
  <Column 
    size="1/2" 
    offset="1/4" 
    mobileSize="6" 
    mobileOffset="4"
    tabletSize="7" 
    tabletOffset="5"
    touchSize="11" 
    touchOffset="1"
    desktopSize="10" 
    desktopOffset="2"
    widescreenSize="3/5" 
    widescreenOffset="2/5"
    fullhdSize="1/2"
    fullhdOffset="1/2"
  >
    <p>Size: one half</p>
    <p>Offset: one quarter</p>
    <p>Mobile Size: 6 columns</p>
    <p>Mobile Offset: 4 columns</p>
    <p>Tablet Size: 7 columns</p>
    <p>Tablet Offset: 5 columns</p>
    <p>Touch Size: 11 columns</p>
    <p>Touch Offset: 1 columns</p>
    <p>Desktop Size: 10 columns</p>
    <p>Desktop Offset: 2 columns</p>
    <p>Widescreen Size: three fifths</p>
    <p>Widescreen Offset: two fifths</p>
    <p>Fullhd Size: one half</p>
    <p>Fullhd Offset: one half</p>
  </Column>
</Columns>
```
