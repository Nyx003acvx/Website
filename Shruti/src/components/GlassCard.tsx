import type { PropsWithChildren } from 'react'

type GlassCardProps = PropsWithChildren<{ className?: string; raised?: boolean }>

export function GlassCard({ children, className = '', raised = false }: GlassCardProps) {
  return <div className={`surface-glass${raised ? ' surface-glass--raised' : ''} ${className}`.trim()}>{children}</div>
}
