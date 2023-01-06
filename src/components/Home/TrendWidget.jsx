import React from 'react';

export default function TrendWidget({ title, description, category }) {
    return (
        <div className="">
            <div className="text-xs font-thin ">{category}</div>
            <div className="text-sm font-bold ">{title}</div>
            <div className="text-xs font-thin">{description}</div>
        </div>
    );
}
