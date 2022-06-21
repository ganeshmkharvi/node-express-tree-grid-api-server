import express from 'express';
import controller from '../../controllers/tree/tree';
const router = express.Router();

router.get('/api/tree', controller.getAllTreeRecords);
router.delete('/api/tree/:id/subtask/:subTaskId', controller.deleteSubTask);
router.delete('/api/tree/:id', controller.deleteTask);

export = router;
