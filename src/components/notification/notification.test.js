import React from 'react'
import renderer from 'react-test-renderer'
import Notification from './notification'

describe('<Notification /> component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Notification>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isPrimary prop', () => {
    const tree = renderer
      .create(
        <Notification isPrimary>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isLink prop', () => {
    const tree = renderer
      .create(
        <Notification isLink>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isInfo prop', () => {
    const tree = renderer
      .create(
        <Notification isInfo>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isSuccess prop', () => {
    const tree = renderer
      .create(
        <Notification isSuccess>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isWarning prop', () => {
    const tree = renderer
      .create(
        <Notification isWarning>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should support isDanger prop', () => {
    const tree = renderer
      .create(
        <Notification isWarning>
          <div>Some content</div>
        </Notification>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
