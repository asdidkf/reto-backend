import { Router, Request, Response } from 'express';
import companyRoutes from './companyRoutes';  
import userRoutes from './userRoutes';

const apiRouter:Router = Router();  

apiRouter.use('/company', companyRoutes);  
apiRouter.use('/user', userRoutes);  

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 