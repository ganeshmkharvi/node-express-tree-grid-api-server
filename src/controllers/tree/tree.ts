import { Request, Response, NextFunction } from 'express';
import service from '../../services/tree';
import * as constants from '../../utility/constants';
import { initSocket } from '../../server/server';

let result: any;

// interface Post {
//     userId: Number;
//     id: Number;
//     title: String;
//     body: String;
// }

// getting all tree records
async function getAllTreeRecords(req: Request, res: Response) {
    result = service.fetchAllTreeRecords();
    return res.status(constants.statusCode200).json({
        result
    });
}

// deleting a task
async function deleteTask(req: Request, res: Response) {
    // get the task id from req.params
    const response = service.deleteTask(parseInt(req.params.id));
    initSocket(service.fetchAllTreeRecords(), true);
    return res.status(constants.statusCode200).json({
        message: response
    });
}

// deleting a sub task
async function deleteSubTask(req: Request, res: Response) {
    const response = service.deleteSubTask(parseInt(req.params.id), parseInt(req.params.subTaskId));
    initSocket(service.fetchAllTreeRecords(), true);
    return res.status(constants.statusCode200).json({
        message: response
    });
}

export default { getAllTreeRecords, deleteTask, deleteSubTask };
