import { Props } from './common'

export interface LayoutProps extends Props {
  domain: string
}

export interface HeaderProps {
  title: string
  favicon: string
  description: string
  domain: string
}

export interface NavbarProps {
  domain: string
}

export interface FooterProps {
  domain: string
}

export interface CarouselProps {
  domain: string
}
