import { PortableText } from '@portabletext/react'
import type { PortableTextReactComponents } from '@portabletext/react'

const components: PortableTextReactComponents = {
  types: {},
  marks: {
    link: ({ children, value }) => {
      const href = (value && (value as any).href) as string
      const external = href?.startsWith('http')
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="underline decoration-brand-500 underline-offset-2 hover:text-brand-400"
        >
          {children}
        </a>
      )
    },
  },
}

export default function PT(props: { value: any }) {
  return <PortableText value={props.value} components={components} />
}

