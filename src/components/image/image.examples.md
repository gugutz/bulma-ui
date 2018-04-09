[Checkout Bulma documentation](https://bulma.io/documentation/elements/image/).

Because images can take a few seconds to load (or not at all), use the `Image` component to specify a precisely sized container or the ratio of the image so that your layout isn't broken because of image loading or image errors.

### Basic Usage

```jsx
<Image 
  size="128x128"
  alt="alternate text"
  src="https://bulma.io/images/placeholders/128x128.png" 
/>
```

### Images with fixed size

```jsx
<div style={{width:200}}>
  <Image
    size="16x16" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/16x16.png" 
  />

  <br />
  <Image
    size="24x24" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/24x24.png" 
  />

  <br />
  <Image
    size="48x48" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/48x48.png" 
  />

  <br />
  <Image
    size="64x64" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/64x64.png" 
  />

  <br />
  <Image
    size="96x96" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/96x96.png" 
  />

  <br />
  <Image
    size="128x128" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/128x128.png" 
  />
</div>
```

### Images with fixed ratio

```jsx
<div style={{width:200}}>
  <p>square</p>
  <Image
    size="square" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>1by1</p>
  <Image
    size="1by1" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>5by4</p>
  <Image
    size="5by4" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>4by3</p>
  <Image
    size="4by3" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>3by2</p>
  <Image
    size="3by2" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>5by3</p>
  <Image
    size="5by3" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>16by9</p>
  <Image
    size="16by9" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>2by1</p>
  <Image
    size="2by1" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>3by1</p>
  <Image
    size="3by1" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>4by5</p>
  <Image
    size="4by5" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>3by4</p>
  <Image
    size="3by4" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>2by3</p>
  <Image
    size="2by3" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>3by5</p>  
  <Image
    size="3by5" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>9by16</p>  
  <Image
    size="9by16" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>1by2</p>  
  <Image
    size="1by2" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />

  <br />
  <p>1by3</p>  
  <Image
    size="1by3" 
    alt="alternate text"
    src="https://bulma.io/images/placeholders/empty.png" 
  />
</div>
```

