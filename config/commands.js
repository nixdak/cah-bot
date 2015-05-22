var Games = require('../app/controllers/games.js');

module.exports = function(app) {
    var games = new Games();

    // Public commands
    app.cmd('start', '', games.start);
    app.cmd('stop', 'o', games.stop);
    app.cmd('join', '', games.join);
    app.cmd('j', '', games.join);
    app.cmd('quit', '', games.quit);
    app.cmd('cards', '', games.cards);
    app.cmd('play', '', games.play);
    app.cmd('players', '', games.list);
    app.cmd('list', '', games.list);
    app.cmd('winner', '', games.winner);
    app.cmd('w', '', games.winner);
    app.cmd('points', '', games.points);
    app.cmd('status', '', games.status);
    app.cmd('pause', '', games.pause);
    app.cmd('resume', '', games.resume);
    app.cmd('pick', '', games.pick);
    app.cmd('p', '', games.pick);
    app.cmd('discard', '', games.discard);

    // Private commands
    app.msg('play', '', games.play);
    app.msg('pick', '', games.pick);
    app.msg('p', '', games.pick);
};
