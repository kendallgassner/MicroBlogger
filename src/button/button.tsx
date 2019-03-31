import React from 'react';
import '../css/Button.css';

interface ButtonProps {
  /** the text inside the button. */
  label: string;
  /** The callback that will be called onClick and onKeyDown. */
  onClick?: () => void;
  /** the type of the button. */
  type?: 'button' | 'submit' | 'reset';
  /** The form the button is attached to. */
  form?: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    const {label, onClick, type, form} = this.props;

    return (
      <button
        type={type}
        form={form}
        className={'Button'}
        onClick={onClick}
        onKeyDown={onClick ? this.onKeyDown : undefined}
      >
        <h3 className={'Button-label'} title={label}>
          {label}
        </h3>
      </button>
    );
  }

  private readonly onKeyDown = (event: any) => {
    if (event.key == 'Enter') {
      this.props.onClick!();
    }
  };
}
