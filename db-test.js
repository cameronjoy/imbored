const db = require('./models');


    // db.user.create({
    //   where: {
    //     name: 'User'
    //   }
    // })

    db.favorites.sync({force:true}).then(() => process.exit())