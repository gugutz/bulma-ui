import React from 'react'
import renderer from 'react-test-renderer'
import Image from '../image/image'
import Content from '../content/content'
import Media from '../media/media'
import Card from './card'

describe('<Card /> component', () => {
  it('should render correctly card with image', () => {
    const tree = renderer
      .create(
        <Card>
          <Card.Image>
            <Image
              size="4by3"
              alt="Placeholder image"
              src="https://bulma.io/images/placeholders/1280x960.png"
            />
          </Card.Image>
          <Card.Content>
            <Media>
              <Media.Left>
                <Image
                  size="48x48"
                  alt="Placeholder image"
                  src="https://bulma.io/images/placeholders/96x96.png"
                />
              </Media.Left>
              <Media.Content>
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </Media.Content>
            </Media>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </p>
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
          </Card.Content>
        </Card>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly card with title', () => {
    const tree = renderer
      .create(
        <Card>
          <Card.Header>
            <Card.Header.Title>Component</Card.Header.Title>
            <Card.Header.Icon>x</Card.Header.Icon>
          </Card.Header>
          <Card.Content>
            <Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. @bulmaio. #css #responsive
              </p>
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item>Save</Card.Footer.Item>
            <Card.Footer.Item>Edit</Card.Footer.Item>
            <Card.Footer.Item>Delete</Card.Footer.Item>
          </Card.Footer>
        </Card>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly card with title centered', () => {
    const tree = renderer
      .create(
        <Card>
          <Card.Header>
            <Card.Header.Title isCentered>Component</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. @bulmaio. #css #responsive
            </p>
          </Card.Content>
        </Card>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
