type ComponentList =
    | 'Button'
    | 'Card'
    | 'Container'
    | 'Divider'
    | 'Input';

export interface IComponent {
    type: ComponentList;
    data: {
        id: string;
        embeddedView?: IComponent;
        items?: Array<IComponent>;
        [key: string]: unknown;
    };
}
