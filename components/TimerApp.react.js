var React = require('react');
var TimerList = require('./TimerList.react.js');

module.exports = TimerApp = React.createClass({
    getInitialState: function(props) {
        props = props || this.props;

        return {
            timers: props.timers,
            timersCount: 0
        };
    },

    render: function() {
        return (
            <div className="timer-app">
                <TimerList timers={this.state.timers} />
            </div>
        )
    }
});
