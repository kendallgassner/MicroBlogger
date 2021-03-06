import React from 'react';
import '../css/Banner.css';

export interface ErrorProps {
  /** The notification message to be displayed in the banner. */
  message: string;
  /** Determines if the notification is an error. */
  isError: boolean;
  /** The command to remove the banner from the screen. */
  closeBanner: () => void;
}

export default class Banner extends React.Component<ErrorProps> {
  render() {
    const {message, closeBanner, isError} = this.props;
    const bannerType = isError ? 'Banner-error' : 'Banner-success';

    return (
      <div className={['Banner', bannerType].join(' ')}>
        <div role="alert" aria-label={message} aria-live={isError ? 'assertive' : 'polite'} />
        <h3 className={'Banner-message'} title={message}>
          {message}
        </h3>
        <button
          onClick={closeBanner}
          aria-label={'exit'}
          title={'exit'}
          className={'Banner-button'}
        >
          X
        </button>
      </div>
    );
  }
}
