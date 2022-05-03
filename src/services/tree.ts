import { dataSource, virtualData } from '../data-source/data-source';
import * as _ from "lodash";
import * as constants from '../utility/constants';
let result: any;

function fetchAllTreeRecords(): any {
    if (!result || result.length === 0) {
        dataSource();
        result = _.cloneDeep(virtualData);
    }
    return result;
}

function deleteTask(taskId: number): string {
    result = (!result || result.length === 0) ? fetchAllTreeRecords() : result;
    // delete the task
    const index = result.findIndex((x: { TaskID: number; }) => x.TaskID === taskId);
    if(index === -1) {
        return constants.taskNotFound;
    }
    result.splice(index, 1);
    return constants.taskDeleted;
}

function deleteSubTask(taskId: number, subTaskId: number) {
    result = (!result || result.length === 0) ? fetchAllTreeRecords() : result;
    const index = result.findIndex((x: { TaskID: number; }) => x.TaskID === taskId);
    if(index === -1) {
        return constants.taskNotFound;
    }
    const subTaskIndex = result[index].Crew.findIndex((x: { TaskID: number; }) => x.TaskID === subTaskId);
    if(subTaskIndex === -1) {
        return constants.subTaskNotFound;
    }
    result[index].Crew.splice(subTaskIndex, 1);
    return constants.subTaskDeleted;
}

export default { fetchAllTreeRecords, deleteTask, deleteSubTask };
