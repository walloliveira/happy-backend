import { Router } from 'express';
import GetOrphanagesController from './controllers/GetOrphanagesController';
import PostOrphanagesController from './controllers/PostOrphanageControllers';
import multer from 'multer';
import UploadConfig from './config/upload';

const routes = Router();

const upload = multer(UploadConfig);

routes.post('/orphanages', upload.array('images'), PostOrphanagesController.create);
routes.get('/orphanages', GetOrphanagesController.list);
routes.get('/orphanages/:id', GetOrphanagesController.show);

export default routes;
