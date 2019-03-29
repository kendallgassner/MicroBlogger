import React from 'react';
import '../css/Button.css';

interface ButtonProps {
    onClick?: () => void;
    label: string;
    type?: "button"|"submit"|"reset";
    form?: string;
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        const {label, onClick, type, form} = this.props;

        return (
            <button
                type={type}
                form={form}
                className={"Button"}
                onClick={onClick}
                onKeyDown={onClick? this.onKeyDown: undefined}
            >
                <h3>{label}</h3>
            </button>
        );
    }


    private readonly onKeyDown = (event : any) => {
        if (event.key == 'Enter') {
            this.props.onClick!();
        }
    }
}

