# EEMI Tutorat
### A MERN Stack (Mongo - Express - Reactjs - Nodejs) teaching platform for EEMI.


## Components & setup
Components : Bootstrap, Nodemon, Axios.

## To see the project :

### Install NodeJS and npm

### Install MongoDB
Install [mongodb](https://docs.mongodb.com/manual/administration/install-community/)

Avec linux ubuntu : 
> wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
> echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
> sudo apt-get update
> sudo apt-get install -y mongodb-org
OR
> sudo apt-get install -y mongodb
> sudo systemctl start mongod
> mongo

https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61

### Install the dependencies

* Enter the cloned directory in your terminal : 

```console
cd frontend && npm install
```

```console
cd backend && npm install
```

### Launch the server

```console
cd backend && npm start
```

### See the website in your browser

```console
cd frontend && npm start
```

© Margot RASAMY - 2020