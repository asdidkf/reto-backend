import { Router, Request, Response } from 'express';
import companyRoutes from './companyRoutes';  

const apiRouter:Router = Router();  

apiRouter.use('/company', companyRoutes);  

apiRouter.get('/', (req:Request, res: Response) => {  
res.send('Hello World!')  
})  

export default apiRouter; 