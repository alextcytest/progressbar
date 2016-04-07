# requiremenrs

1. phalcon extension
2. NodeJs
3. Bower
3. redis server
4. phpredis extension (php5-redis.so)

# installation

1. Install vendors
    * npm install 
    * bower install

# configuration

1. please change default values in: "public/js/config.js"

# run test sample

1. open first terminal window with command: node server.js
2. open browser page for example: http://your-project.local
3. open second terminal window with command (phalcon cli task push messages to redis): php app/cli.php publish


    