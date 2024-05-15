import { mount } from '@vue/test-utils'

export function mount(component: any, options: any) {
  return mount(component, {
    ...options,
    global: {
      ...options.global,
      warnHandler(warning) {
        // Logic check if it's a required prop warning
        throw new Error('Vue warn was called', warning)
      }
    },
  })
}
