var ewdjs = require('ewdjs');

var params = {
      poolSize: 2,
      httpPort: 8080,
	  https: {
	    enabled: false,
      },
      traceLevel: 3,
      database: {
        type: 'mongodb'
      },
      management: {
        password: 'keepThisSecret!'
     }
};

ewdjs.start(params);