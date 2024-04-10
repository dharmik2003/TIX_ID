import { AppDataSource } from "../../config/data-source";
import { Request, Response } from "express";
import { Error, Success } from "../../utils/response.utils";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { Tickets } from "../../entities/tickets/ticket.entity";



export const getticketService = async (req: any, res: Response) => {
  try {

    const {myticketid}=req.body
    const userId1 = req.decoded ;
    const userId=userId1.details.id
    // const userId=1
    console.log("userId",userId)

    const ticketRepository = AppDataSource.getRepository(Tickets);


    // Check if user exists
    const alldata=await ticketRepository.find({
  relations: ['myShow','user','paymentHistory','myTicketId']
});
console.log("getdatas",alldata)
const existingUser = await alldata.find((ticket)=>ticket.myTicketId.id===myticketid);
console.log("ticketservice",existingUser)
    if (!existingUser) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MYTICKET_FOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    

    
    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.MYTICKET_FOUND),
      HTTP_STATUS_CODES.OK,
      existingUser
    );
  } catch (error) {
    console.log("Error while adding myshow:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.MYTICKET_FOUND),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
