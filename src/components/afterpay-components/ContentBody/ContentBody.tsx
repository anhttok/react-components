import './ContentBody.scss';
import * as React from 'react';

type ContentBodyProps = {
    color?: string;
    children: React.ReactNode;
    backgroundImage?: string;
};

const ContentBody= (props: ContentBodyProps) => {
    return (
        <div style={{ backgroundColor: props.color, backgroundImage: `url('${props.backgroundImage}')` }} className="content-body-container">
            <div className="content-body">{props.children}</div>
        </div>
    );
};
export default ContentBody;