const express = require('express');
const mongoose = require('mongoose');

const url = "mongodb+srv://patoasesino69:DVnolMGIPsiKJypZ@elclustersito68.jrgaxcl.mongodb.net/test";

//rutas mi zo
const usersRouter = require("./src/router/router.model.js")

class Server {
    constructor() {
        this.app = express();
        this.port = 3001;
        this.databaseConnection =  mongoose.connect(url);
        this.router();
        this.listen();
    }

    router() {
        this.app.get('/', (req, res) => {
            res.send('Te perdiste???');
        });
        // Configurar routers aqui
        this.app.use("/api/v1",usersRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`corriendo en port ${this.port}`);
        });
    }
}


new Server();
