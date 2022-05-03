import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from '../routes/tree/tree';
import config from '../config/config';

const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
export const httpServer = http.createServer(router);
const PORT: any = config.port ?? 3001;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
initSocket('', false);

export function initSocket(data: any, refresh: boolean) {

    // eslint-disable-next-line 
    const io = require('socket.io')(httpServer, {
        cors: {
            origin: "*", methods: ["GET", "POST", "DELETE"],
            transports: ['websocket', 'polling']
        }, allowEIO3: true
    });

    // eslint-disable-next-line 
    io.on("connection", function (socket: any) {
        if (refresh) {
            socket.emit("update", data);
        } else {
            io.emit('message', "on connection");
        }
    });
}
