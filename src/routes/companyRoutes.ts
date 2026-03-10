
import { Router, Request, Response } from 'express';  
const companyRouter:Router = Router();  

companyRouter.get('/', (req:Request, res:Response) => {  
res.send('Get a list of all companies')  
});  

companyRouter.get('/:id', (req:Request, res:Response) => {  
res.send(`Get the company with id:  ${req.params.id}`)  
});  

companyRouter.post('/', (req:Request, res:Response) => {  
res.send(`Add a new company with ID: ${req.body.id}`)  
});  

companyRouter.patch('/:id', (req:Request, res:Response) => {  
res.send(`Update the data of company ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`)  
});  

companyRouter.delete('/', (req:Request, res:Response) => {  
res.send(`Deleting the company ${req.body.id}`)  
});  

export default companyRouter; 

