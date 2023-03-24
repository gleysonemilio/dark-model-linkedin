'use client'

import { ReactElement, useState } from 'react'
import './styles.css'

interface ViewTextProps {
  text: ReactElement
  skills?: string[]
}

export function ViewText({ text, skills }: ViewTextProps) {
  const [showText, setShowText] = useState(false)

  return (
    <div className="d-flex f-direction gap-007">
      <div className={showText ? 'container-text-show' : 'container-text'}>{text}</div>

      <div className="container-see-more">
        <span onClick={() => setShowText(!showText)}>
          {showText ? '...see less' : '...see more'}{' '}
        </span>
      </div>

      {skills && (
        <div className="container-skills">
          <span>
            <strong>Skills: </strong>
            {skills.map((skill, index) => (
              <>
                {skill} {index !== skills.length - 1 && ' · '}
              </>
            ))}
          </span>
        </div>
      )}
    </div>
  )
}
