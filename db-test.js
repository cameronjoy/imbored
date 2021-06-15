const db = require('./models');


    db.favorites.destroy({
      where: {
        activityKey: 'Cameron'
      }
    }).then(keyFound => {
      console.log('Deleted: ', keyFound.activityKey)
      process.exit()
    })