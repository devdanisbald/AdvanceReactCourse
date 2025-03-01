import React, { FC, ReactNode } from 'react';
import { FontSize } from '@ds.e/foundation';

export interface TextProps {
	size?: keyof typeof FontSize;
	children: ReactNode
}

const Text: FC<TextProps> = ({ size = FontSize.base, children }) => {
	const className = `dse-text dse-text-${size}`;
	return <p className={className}>{children}</p>
}

export default Text
