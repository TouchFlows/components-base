import { h } from '@stencil/core'
import { getAssetPath, Host } from '@stencil/core/internal'

/**
 * Wrapper to style components with Tailwind
 * @source
 * @param attrs
 * @param children
 * @returns VNode | VNode[]
 */
export const TailwindHost: typeof Host = (attrs, children) => {
  return (
    <Host {...attrs}>
      <link rel="stylesheet" href={getAssetPath('components-base.css')} />
      {children}
    </Host>
  )
}
