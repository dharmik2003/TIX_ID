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
import { MyTickets } from "../../entities/mytickets/mytickets.entity";



export const getmyticketService = async (req: any, res: Response) => {
  try {

    console.log("myticketservice")
    const userId1 = req.decoded ;
    const userId=userId1.details.id
    // const userId=1
    console.log("userId",userId)

    const myticketRepository = AppDataSource.getRepository(MyTickets);


    // Check if user exists
const allUsersShows = await myticketRepository.find({
  relations: ['myShowId','user']
});
console.log("allUsersShows",allUsersShows)

const existingUser = allUsersShows.filter((myticket)=>myticket.user.id==userId)
console.log("existingUser",existingUser)




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
