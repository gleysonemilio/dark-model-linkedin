import { ReactElement } from 'react'

interface TitleIconViewProps {
  title: string
  Icon?: () => ReactElement<any, any>
}

export function TitleIconView({ title, Icon }: TitleIconViewProps) {
  return (
    <div>
      <h2>{title}</h2>
      {Icon && (
        <div className="d-flex align-center gap-007">
          <Icon />
          <span>Displayed only to you</span>
        </div>
      )}
    </div>
  )
}
