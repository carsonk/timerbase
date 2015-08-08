var React = require('react');

module.exports = TimerApp = React.createClass({
    render: function() {
        var content = this.props.timers.map(function(timer) {
            return (
                <Timer key={timer._id} timer={timer} />
            );
        });

        return (
            <ul className="timer-list">
                {content}
            </ul>
        )
    }
});
