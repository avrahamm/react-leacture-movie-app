import React from 'react'
import './styles.scss'

export const Panel = ({ children, title }) => (
  <div className="app-panel">
    <div>{title}</div>
    <div className="app-panel__content">{children}</div>
  </div>
)
