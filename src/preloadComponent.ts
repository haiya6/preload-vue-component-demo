import { getCurrentInstance, h, render } from 'vue'
import type { Component as VueComponent, VNode } from 'vue'

const cache = new Map<string, VNode>()

export function preloading(Component: VueComponent) {
  return new Promise(resolve => {
    const vnode = h(Component, {
      done: resolve
    })
    render(vnode, window.document.createElement('div'))
    vnode.shapeFlag |= 512
    cache.set(Component.name!, vnode)
  })
}

export const PreloadView: VueComponent = {
  props: ['component'],
  setup(props, ctx) {
    const instance = getCurrentInstance() as any
    
    instance.ctx.activate = (vnode: VNode, container: HTMLElement, anchor: ChildNode | null) => {
      container.insertBefore(vnode.component!.subTree.el! as any, anchor)
    }
    
    return () => {
      const { component } = props
      if (!component) return null

      if (cache.has(component.type.name)) {
        const vnode = cache.get(component.type.name)
        cache.delete(component.type.name)
        return vnode
      } else {
        return h(component)
      }
    }
  },
}
