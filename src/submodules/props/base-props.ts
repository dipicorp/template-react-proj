import React from 'react'

interface BaseProps {
  className?: string
  style?: React.CSSProperties,
  children?: React.ReactNode
}

export interface BasePropsComponent extends BaseProps {
  onClick?: (() => void) | ((event: any) => void)
}

export interface BasePropsPage extends BaseProps {
  id?: string
}