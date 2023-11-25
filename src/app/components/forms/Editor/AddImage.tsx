import React, { Component } from 'react'
import styles from './styles.module.css'

export default class ImageAdd extends Component<any, any> {
  // Start the popover closed
  state = {
    url: '',
    open: false
  }

  preventNextClose: boolean | undefined

  // When the popover is open and users click anywhere on the page,
  // the popover should close
  componentDidMount () {
    document.addEventListener('click', this.closePopover)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.closePopover)
  }

  // Note: make sure whenever a click happens within the popover it is not closed
  onPopoverClick = () => {
    this.preventNextClose = true
  }

  openPopover = () => {
    if (!this.state.open) {
      this.preventNextClose = true
      this.setState({
        open: true
      })
    }
  }

  closePopover = () => {
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: false
      })
    }

    this.preventNextClose = false
  }

  addImage = () => {
    console.log('addImage')
    console.log(this.props.modifier)
    const { editorState, onChange } = this.props as any
    onChange(this.props.modifier(editorState, 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'))
  }

  changeUrl = (evt: any) => {
    this.setState({ url: evt.target.value })
  }

  render () {
    const popoverClassName = this.state.open
      ? styles.addImagePopover
      : styles.addImageClosedPopover
    const buttonClassName = this.state.open
      ? styles.addImagePressedButton
      : styles.addImageButton

    return (
      <div className={styles.addImage}>
        <button
          className={buttonClassName}
          onMouseUp={this.openPopover}
          type="button"
        >
          +
        </button>
        <div className={popoverClassName} onClick={this.onPopoverClick}>
          <input
            type="text"
            placeholder="Paste the image url …"
            className={styles.addImageInput}
            onChange={this.changeUrl}
            value={this.state.url}
          />
          <button
            className={styles.addImageConfirmButton}
            type="button"
            onClick={this.addImage}
          >
            Add
          </button>
        </div>
      </div>
    )
  }
}