import { ReactElement } from 'react'
import { Button } from '../Button'

interface TitleIconViewProps {
  title: string
  subTitle?: string
  titleButton?: string
  Icon?: () => ReactElement<any, any>
}

export function TitleIconView({ title, subTitle, titleButton, Icon }: TitleIconViewProps) {
  return (
    <div>
      <div className="d-flex j-space-between">
        <h2>{title}</h2>
        {titleButton && <Button text={titleButton} />}
      </div>
      {Icon && (
        <div className="d-flex align-center gap-007">
          <Icon />
          <span>Displayed only to you</span>
        </div>
      )}

      {subTitle && <span>{subTitle}</span>}
    </div>
  )
}
