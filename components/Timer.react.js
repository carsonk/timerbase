var React = require('react');

module.exports = TimerApp = React.createClass({
    render: function() {
        var timer = this.props.timer;

        return (
            <li className="timer">
                {timer.title};
            </li>
        )
    }
});
