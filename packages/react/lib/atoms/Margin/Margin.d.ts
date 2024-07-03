import { FC, ReactNode } from 'react';
import { Spacing } from '@ds.e/foundation';
export interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children: ReactNode;
}
declare const Margin: FC<MarginProps>;
export default Margin;
