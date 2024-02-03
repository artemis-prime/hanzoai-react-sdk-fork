import type Block from './block'

interface HeadingBlock extends Block {
  blockType: 'heading'
  heading: string
  byline?: string
  level?: number
}

export {
  type HeadingBlock as default 
}