const express = require('express');

export default class RestApi {
    app;
    port = 9898;
    constructor() {
        this.app = express();
    }
    sayHello() {
        this.app.get('/hello', (req, res) => {
            res.status(200).send("Hello There...");
        });
    }

    getApp(){
        return this.app;
    }
    
    startServer() {
        this.app.listen(this.port, () => {
            "Server is running on port no." + this.port;
        });
    }
}