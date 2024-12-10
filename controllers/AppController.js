const dbClient = require('../utils/db');

const redisClient = require('../utils/redis');

class AppController {
  static getStatus(req, res) {
    res.status(200).json({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  }

  static getStats(req, res) {
    Promise.all([dbClient.nbUsers(), dbClient.nbFiles()]).then(
      ([usersCount, filesCount]) => {
        res.status(200).json({ users: usersCount, files: filesCount });
      },
    );
  }
}

module.exports = AppController;