import * as React from 'react';
import { Children } from 'react';

interface LayerWrapperProps {
    children: React.ReactNode,
    startingZIndex?: number,
    style?: React.StyleHTMLAttributes<HTMLDivElement>,
    className?: string,
}

const LayerWrapper: React.FC<LayerWrapperProps> = ({ children, startingZIndex = 1, style, className }) => {
    return <div
        className={className}
        style={{
            display: 'grid',
            gridTemplate: '"main" 1fr / 1fr',
            // placeItems: 'center center',
            ...style,
        }}
    >
        {Children.map(children, (child: any, i: number) => child && React.cloneElement(child, { style: { zIndex: (startingZIndex + i), gridArea: 'main', ...child.props.style } }))}
    </div>
}

export default LayerWrapper;