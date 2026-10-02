import type { ElementType, ReactNode } from 'react'

type AnimatedTextProps = { as?: ElementType; children: ReactNode; className?: string; id?: string }

export function AnimatedText({ as: Tag = 'span', children, className = '', id }: AnimatedTextProps) {
  return <Tag id={id} className={`motion-fade-up ${className}`.trim()}>{children}</Tag>
}
