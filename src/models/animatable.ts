import { ComponentInterface, EventEmitter } from '@stencil/core'

import { AnimationsType } from '../animations'

export interface IAnimate {
  animation?: AnimationsType
  keyFrames?: Keyframe[]
  keyFramesData?: string
  options?: KeyframeAnimationOptions
  optionsData?: string
  animateId?: string
  delay?: number
  endDelay?: number
  duration?: number
  direction?: PlaybackDirection
  composite?: CompositeOperation
  easing?: string
  fill?: FillMode
  iterations?: number
  iterationStart?: number
  iterationComposite?: IterationCompositeOperation
  autoPlay?: boolean
  fromClassName?: string
  toClassName?: string
  currentTime?: number
  startTime?: number
  playbackRate?: number
  onRun: EventEmitter<HTMLElement>
  onStop: EventEmitter<HTMLElement>
  onCancel: EventEmitter<HTMLElement>
}

export type IAnimateThis = IAnimate & ComponentInterface
