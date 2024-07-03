import { FC, ReactNode } from 'react';
import { FontSize } from '@ds.e/foundation';
export interface TextProps {
    size?: keyof typeof FontSize;
    children: ReactNode;
}
declare const Text: FC<TextProps>;
export default Text;
