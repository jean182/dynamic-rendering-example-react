import React from 'react';
import { IComponent } from './dynamic-rendering.interfaces';
import { Components } from './dynamic-rendering.constants';

export function createPage(data?: IComponent): React.ReactNode {
    if (!data) return null;

    function createComponent(item: IComponent): React.ReactNode {
        const { data, type } = item;
        const { items, embeddedView, id, ...rest } = data;
        return React.createElement(
            Components[type] as any,
            {
                ...rest,
                id,
                key: id,
            } as any,
            Array.isArray(items)
                ? items.map(renderer)
                : renderer(embeddedView ?? null),
        );
    }

    function renderer(
        config: IComponent | null,
    ): React.ReactNode {
        if (!config) return null;

        return createComponent(config);
    }

    return renderer(data);
}
