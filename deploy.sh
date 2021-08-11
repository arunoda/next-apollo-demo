#! /bin/bash

cd client
heroku container:login
heroku container:push web --app nextjsgraphdemo
heroku container:release web --app nextjsgraphdemo

cd ../server
heroku container:login
heroku container:push web --app nextjsgraphdemo-api
heroku container:release web --app nextjsgraphdemo-api
