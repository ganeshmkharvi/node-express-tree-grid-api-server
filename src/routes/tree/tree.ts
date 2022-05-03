/** source/routes/posts.ts */
import express from 'express';
import controller from '../../controllers/tree/tree';
const router = express.Router();

//router.get('/posts', controller.getPosts);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);
router.get('/api/tree', controller.getAllTreeRecords);
router.delete('/api/tree/:id/subtask/:subTaskId', controller.deleteSubTask);
router.delete('/api/tree/:id', controller.deleteTask);

export = router;