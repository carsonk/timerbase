var JSX = require('node-jsx').install(),
    React = require('react'),
    TimerApp = require('./components/TimerApp.react'),
    Timer = require('./models/Timer');

module.exports = {
    index: function(req, res) {
        Timer.getTimers(0, 0, function(timers, pages) {
            var TimerAppFactory = React.createFactory(TimerApp);

            var markup = TimerAppFactory({timers: timers});

            res.render('home', {
                markup: markup,
                state: JSON.stringify(timers)
            });
        });
    }
}
