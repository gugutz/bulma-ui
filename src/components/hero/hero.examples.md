[Checkout Bulma documentation](https://bulma.io/documentation/layout/hero/).

An imposing hero banner to showcase something.

### Basic Usage

```jsx
<Hero>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Hero title
      </h1>
      <h2 class="subtitle">
        Hero subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

### Colors
You can choose one of the 7 different colors: 

```jsx
<Hero color="primary">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Primary title
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="info">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Info title
      </h1>
      <h2 class="subtitle">
        Info subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="success">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Success title
      </h1>
      <h2 class="subtitle">
        Success subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="warning">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Warning title
      </h1>
      <h2 class="subtitle">
        Warning subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="danger">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Danger title
      </h1>
      <h2 class="subtitle">
        Danger subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="light">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Light title
      </h1>
      <h2 class="subtitle">
        Light subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="dark">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Dark title
      </h1>
      <h2 class="subtitle">
        Dark subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

## Gradients
By adding the `isBold` prop, you can generate a subtle gradient:

```jsx
<Hero color="primary" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Primary title
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="info" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Info title
      </h1>
      <h2 class="subtitle">
        Info subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="success" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Success title
      </h1>
      <h2 class="subtitle">
        Success subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="warning" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Warning title
      </h1>
      <h2 class="subtitle">
        Warning subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="danger" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Danger title
      </h1>
      <h2 class="subtitle">
        Danger subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="light" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Light title
      </h1>
      <h2 class="subtitle">
        Light subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero color="dark" isBold>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Dark title
      </h1>
      <h2 class="subtitle">
        Dark subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

### Sizes

You can have even more imposing banners by using one of 3 different sizes: 

```jsx
<Hero size="medium">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Medium title
      </h1>
      <h2 class="subtitle">
        Medium subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero size="large">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Large title
      </h1>
      <h2 class="subtitle">
        Large subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

```jsx
<Hero size="fullheight">
  <Hero.Body>
    <Container>
      <h1 class="title">
        Fullheight title
      </h1>
      <h2 class="subtitle">
        Fullheight subtitle
      </h2>
    </Container>
  </Hero.Body>
</Hero>
```

### Head and Foot

You can split the hero in 3 vertical parts:
- `Hero.Head` always at the top
- `Hero.Body` always vertically centered
- `Hero.Foot` always at the bottom

```jsx
<Hero>
  <Hero.Head>
    <Container>
      <h1 class="title">
        Head
      </h1>
    </Container>
  </Hero.Head>
  <Hero.Body>
    <Container>
      <h1 class="title">
        Body
      </h1>
    </Container>
  </Hero.Body>
  <Hero.Foot>
    <Container>
      <h1 class="title">
        Foot
      </h1>
    </Container>
  </Hero.Foot>
</Hero>
```
