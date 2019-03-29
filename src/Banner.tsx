import React from 'react';
import './css/Banner.css';

export interface ErrorProps {
    message: string;
    isError: boolean;
    closeBanner: () => void;
}

export default class Banner extends React.Component<ErrorProps> {

    render() {
        const {message, closeBanner, isError} = this.props;
        const bannerType = isError? "Banner-error" : "Banner-success";

        return (
            <div className={["Banner", bannerType].join(' ')}>
                <h3 className={"Banner-message"}>{message}</h3>
                <button
                    onClick={closeBanner}
                    className={"Banner-button"}
                    onKeyDown={closeBanner? this.onKeyDown: undefined}

                >X</button>
            </div>
        );
    }

    private readonly onKeyDown = (event : any) => {
        if (event.key == 'Enter') {
            this.props.closeBanner!();
        }
    }
}

