import React, { Component } from 'react';

class Countdown extends Component {
    state = {

    }

    render() {
        return (
            <div className="countdown_wrapper">
                <div className="countdown_top">Event starts in</div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            160
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            22
                        </div>
                        <div className="countdown_tag">
                            Hrs
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            43
                        </div>
                        <div className="countdown_tag">
                            Mins
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Countdown;