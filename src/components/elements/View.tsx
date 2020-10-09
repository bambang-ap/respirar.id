/* eslint-disable no-eval */
import React, { HTMLAttributes } from 'react';

export interface ViewProps extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
	direction?: 'row' | 'col' | 'col-reverse' | 'row-reverse'
	items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
	content?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly'
	justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
	self?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
	align?: 'left' | 'center' | 'right' | 'justify'
	flex?: boolean
	idComponent?: string
	replaceClass?: boolean
	wrap?: boolean
}
const View = ({
	direction = "col",
	className = "",
	flex,
	justify,
	self,
	items,
	align: text,
	content,
	children,
	idComponent = "view",
	wrap,
	...rest
}: ViewProps) => {
	const classes = ['self', 'justify', 'items', 'content', 'text'].map(c => eval(c) && `${c}-${eval(c)}`).filter(c => c).join(' ')
	className = `flex ${wrap ? 'flex-wrap' : ''} flex-${direction} ${flex ? 'flex-1' : ''} ${classes} ${className}`
		.replace(/\s\s+/g, ' ')
	return <div component-id={idComponent} className={className} {...rest}>{children}</div>
}

export default View