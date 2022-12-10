import { ComponentInterface, FunctionalComponent, h } from '@stencil/core'
import { getAssetPath, Host, HTMLStencilElement, JSXBase } from '@stencil/core/internal'

import { JSX } from '../components'

/**
 * HOC to wrap components with Animatable component
 * @param WrappedComponent - Component to be animated with Animatable component
 */
export function createAnimatableComponent<Props>(WrappedComponent: FunctionalComponent) {
  type ComponentProps = Props &
    ComponentInterface &
    JSX.AnimateThis &
    JSXBase.HTMLAttributes<HTMLElement> &
    JSXBase.HTMLAttributes<HTMLStencilElement> &
    JSXBase.HTMLAttributes<HTMLAnimateThisElement>

  return (props: ComponentProps): FunctionalComponent<ComponentProps> => {
    const {
      ref,
      animation,
      keyFrames,
      keyFramesData,
      options,
      optionsData,
      animateId,
      delay,
      endDelay,
      duration,
      direction,
      composite,
      easing,
      fill,
      iterations,
      iterationStart,
      iterationComposite,
      autoPlay,
      fromClassName,
      toClassName,
      currentTime,
      startTime,
      playbackRate,
      onRun,
      onStop,
      onCancel,
      ...rest
    } = props
    return (
      <animate-this
        ref={ref}
        animation={animation}
        keyFrames={keyFrames}
        keyFramesData={keyFramesData}
        options={options}
        optionsData={optionsData}
        animateId={animateId}
        delay={delay}
        endDelay={endDelay}
        duration={duration}
        direction={direction}
        composite={composite}
        easing={easing}
        fill={fill}
        iterations={iterations}
        iterationStart={iterationStart}
        iterationComposite={iterationComposite}
        autoPlay={autoPlay}
        fromClassName={fromClassName}
        toClassName={toClassName}
        currentTime={currentTime}
        startTime={startTime}
        playbackRate={playbackRate}
        onRun={onRun}
        onStop={onStop}
        onCancel={onCancel}
      >
        <WrappedComponent {...rest} />
      </animate-this>
    )
  }
}
/**
 * Wrapper to style components with Tailwind
 * @source
 * @param attrs
 * @param children
 * @returns VNode | VNode[]
 */
export const TailwindCss: typeof Host = (attrs, children) => {
  return (
    <Host {...attrs}>
      <link rel="stylesheet" href={getAssetPath('buzzcasting-common.css')} />
      {children}
    </Host>
  )
}
