// import express, { Request, Response } from "express";
// import { AppDataSource } from "../../config/data-source";
// import {
//   ALL_ERROR_MESSAGES,
//   ALL_SUCCESS_MESSAGES,
//   ERROR_MESSAGES,
//   HTTP_STATUS_CODES,
//   SUCCESS_MESSAGES,
// } from "../../constants";
// import { Error, Success } from "../../utils/response.utils";
// import { Theaters } from "../../entities/theaters/theater.entity";
// import { User } from "../../entities/auth/user.entity";
// import { MyShow } from "../../entities/myshow/myshow.entity";
// import { PaymentHistory } from "../../entities/payment-history/payment-history.entity";

// export const addTheaterService = async (req: Request, res: Response) => {
//   try {
//     const { userId, myshowId } = req.body;
//     const userRepository = await AppDataSource.getRepository(User);
//     const myshowRepository = await AppDataSource.getRepository(MyShow);
//     const paymentRepository = await AppDataSource.getRepository(PaymentHistory);

//     const existingUser = await userRepository.findOne({
//       where: { id: +userId },
//     });
//     if (!existingUser) {
//       return Error(
//         ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.USER_NOTFOUND),
//         HTTP_STATUS_CODES.NOT_FOUND
//       );
//     }
//     const existingMyshowId = await myshowRepository.findOne({
//       where: { id: +myshowId },
//     });

//     if (!existingMyshowId) {
//       return Error(
//         ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MYSHOW_NOTFOUND),
//         HTTP_STATUS_CODES.NOT_FOUND
//       );
//     }

//     //GST Total amount 18%
//     const gstvalue = 18;

//     //platformcharge
//     const charge = 26;

//     //total amount
//     const totalamount = existingMyshowId.finalPrice + gstvalue + charge;

//     const newPayment = paymentRepository.create({
//       user: existingUser.id,
//       myShowId: existingMyshowId.id,
//       gst: gstvalue,
//       platformChanges: charge,
//       total: totalamount,
//       state: true,
//       transactionId: "",
//     });

//     await paymentRepository.save(newPayment);

//     return Success(
//       SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.THEATER_ADDED),
//       HTTP_STATUS_CODES.OK,
//       newPayment
//     );
//   } catch (error) {
//     console.log("Error while add-theater.Service:", error);
//     return Error(
//       ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.THEATER_ADDED),
//       HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
//     );
//   }
// };

import express, { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { Error, Success } from "../../utils/response.utils";
import { Theaters } from "../../entities/theaters/theater.entity";
import { User } from "../../entities/auth/user.entity";
import { MyShow } from "../../entities/myshow/myshow.entity";
import { PaymentHistory } from "../../entities/payment-history/payment-history.entity";
import { Tickets } from "../../entities/tickets/ticket.entity";
import { number } from "joi";
import { MyTickets } from "../../entities/mytickets/mytickets.entity";
import { ShowTime } from "../../entities/show-time/showtime.entity";
import { Screens } from "../../entities/screens/screen.entity";

// export const paymentHistoryService = async (req: Request, res: Response) => {
//   try {
//     const { userId, myshowId } = req.body;
//     const userRepository = await AppDataSource.getRepository(User);
//     const myshowRepository = await AppDataSource.getRepository(MyShow);
//     const paymentRepository = await AppDataSource.getRepository(PaymentHistory);
//     const ticketsRepository = await AppDataSource.getRepository(Tickets);
//     const myticketsRepository = await AppDataSource.getRepository(MyTickets);
//     const showtimeRepository = await AppDataSource.getRepository(ShowTime);

//     const existingUser = await userRepository.findOne({
//       where: { id: +userId },
//     });
//     if (!existingUser) {
//       return Error(
//         ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.USER_NOTFOUND),
//         HTTP_STATUS_CODES.NOT_FOUND
//       );
//     }
//     const existingMyshowId = await myshowRepository.findOne({
//       where: { id: +myshowId },
//     });

//     if (!existingMyshowId) {
//       return Error(
//         ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MYSHOW_NOTFOUND),
//         HTTP_STATUS_CODES.NOT_FOUND
//       );
//     }

//     console.log(existingMyshowId.finalPrice);
//     const gstvalue: number = 18;
//     const totalgst: number = Number(
//       existingMyshowId.finalPrice * (gstvalue / 100)
//     );
//     console.log(totalgst);
//     const charge: number = 10;
//     const totalticketprice: number = Number(existingMyshowId.finalPrice);
//     const totalamount: number = totalticketprice + totalgst + charge;

//     console.log(totalamount);

//     const newPayment = paymentRepository.create({
//       user: existingUser,
//       myShow: existingMyshowId,
//       gst: totalgst,
//       platformChanges: charge,
//       total: totalamount,
//       paymentDone: true,
//       transactionId: "0xdijpeigveprnbvprne",
//     });

//     const data = await paymentRepository.save(newPayment);
//     if (data.paymentDone) {
//       existingMyshowId.paymentDone = true;
//       await myshowRepository.save(existingMyshowId);
//     }
//     if (data.paymentDone && existingMyshowId.paymentDone) {

//     const existingshowtime = await showtimeRepository.findOne({
//       where: { id: +existingMyshowId.screen },
//     });
//     if (!existingshowtime) {
//       return Error(
//         ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND),
//         HTTP_STATUS_CODES.NOT_FOUND
//       );
//     }

//       const myticketdata = myticketsRepository.create({
//         user: userId,
//         myShowId: myshowId,
//         image: existingMyshowId.movie.image,
//         title: existingMyshowId.movie.title,
//         theater: existingMyshowId.screen.theater.name,
//         screen: existingMyshowId.screen.dimension,
//         date: existingshowtime.time.toISOString(),
//       });

//     const myticketid=await myticketsRepository.save(myticketdata)

//      if (myticketid) {
//        const ticketsdata = ticketsRepository.create({
//          user: userId,
//          myShow: myshowId,
//          paymentHistory: myticketid,
//        });
//        const ticketid = await ticketsRepository.save(ticketsdata);
//      }
//     }

//     return Success(
//       SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.PAYMENTHISTORY_DONE),
//       HTTP_STATUS_CODES.OK,
//       newPayment
//     );
//   } catch (error) {
//     console.log("Error while add-theater.Service:", error);
//     return Error(
//       ERROR_MESSAGES._FunctionCatchError(
//         ALL_ERROR_MESSAGES.PAYMENTHISTORY_DONE
//       ),
//       HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
//     );
//   }
// };

export const paymentHistoryService = async (req: any, res: Response) => {
  try {
    const { myshowId } = req.body;

    const userId1 = req.decoded;
    const userId = userId1.details.id;

    console.log("userId",userId)
    console.log("myshowId",myshowId)



    const userRepository = await AppDataSource.getRepository(User);
    const myshowRepository = await AppDataSource.getRepository(MyShow);
    const paymentRepository = await AppDataSource.getRepository(PaymentHistory);
    const ticketsRepository = await AppDataSource.getRepository(Tickets);
    const myticketsRepository = await AppDataSource.getRepository(MyTickets);
    const showtimeRepository = await AppDataSource.getRepository(ShowTime);
    const screenRepository = await AppDataSource.getRepository(Screens);

    const existingUser = await userRepository.findOne({
      where: { id: +userId },
    });
    console.log("existingUser",existingUser)
    if (!existingUser) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.USER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }
    const existingMyshowId = await myshowRepository.findOne({
      where: { id: +myshowId },
      relations: [
        "user",
        "movie",
        "screen",
        "screen.theater",
        "voucher",
        "showTime",
      ],
    });

    if (!existingMyshowId) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MYSHOW_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    // console.log(existingMyshowId);

    // const existingscreen = await myshowRepository.findOne({
    //   where: { id: +existingMyshowId.screen },
    //   relations: [],
    // });

    // if (!existingMyshowId) {
    //   return Error(
    //     ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MYSHOW_NOTFOUND),
    //     HTTP_STATUS_CODES.NOT_FOUND
    //   );
    // }

    // console.log(existingMyshowId);

    // console.log(existingMyshowId.finalPrice)
    // // Calculate GST
    // const gstRate: number = 0.18; // 18%
    // const gstAmount: number = existingMyshowId.finalPrice * gstRate;
    // console.log("gstAmount", gstAmount);
    // // Platform charge
    // const platformCharge: number = 10;
    // // Calculate total amount
    // const totalAmount: number =
    //   existingMyshowId.finalPrice + gstAmount + platformCharge;
    // console.log("totalAmount",totalAmount)

    // Calculate GST
    const gstRate: number = 0.18; // 18%
    const finalwithdiscound: number = existingMyshowId.finalPrice;
    const gstAmount: number = finalwithdiscound * gstRate;

    // Platform charge
    const platformCharge: number = 10;

    let newTicket = gstAmount + platformCharge;

    // Calculate total amount
    const totalAmount: number = +finalwithdiscound + +newTicket;
    console.log("totalAmount", totalAmount); 

    // Create payment history
    const newPayment = paymentRepository.create({
      user: existingUser,
      myShow: existingMyshowId,
      gst: gstAmount,
      platformChanges: platformCharge,
      total: totalAmount,
      paymentDone: true,
      transactionId: "0xdijpeigveprnbvprne",
    });


    console.log("newPayment",newPayment)

    // Save payment history
    const savedPayment = await paymentRepository.save(newPayment);
    console.log(savedPayment);

    // Update myshow payment status
    if (savedPayment) {
      existingMyshowId.paymentDone = true;
      await myshowRepository.save(existingMyshowId);
    }

    console.log("*******************************");
    console.log(
      existingMyshowId.movie.image,
      existingMyshowId.movie.title,
      existingMyshowId.showTime.time
    );
    


    // Combine date and time
    // const formattedDateTime: string = `${formattedDate} ${formattedTime}`;

    // console.log(formattedDateTime);
    console.log(existingMyshowId.screen.theater.name);

    console.log("*******************************");
    //error here
    const myTicket = myticketsRepository.create({
      user: existingUser,
      myShowId: existingMyshowId,
      image: existingMyshowId.movie.image,
      title: existingMyshowId.movie.title,
      theater: existingMyshowId.screen.theater.name,
      screen: existingMyshowId.screen.dimension,
      date: existingMyshowId.showTime.date,
      time: existingMyshowId.showTime.time
    });
    console.log("myTicket------------------------------");
    console.log("myTicket", myTicket);
    console.log("myTicket------------------------------");

    const savedMyTicket = await myticketsRepository.save(myTicket);
    console.log(savedMyTicket);
    // Create tickets entry
    const ticket = ticketsRepository.create({
      user: existingUser,
      myShow: existingMyshowId,
      paymentHistory: savedPayment,
      myTicketId: savedMyTicket,
    });
    console.log("ticket", ticket);

    await ticketsRepository.save(ticket);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.PAYMENTHISTORY_DONE),
      HTTP_STATUS_CODES.OK,
      savedPayment
    );
  } catch (error) {
    console.log("Error while paymentHistoryService:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(
        ALL_ERROR_MESSAGES.PAYMENTHISTORY_DONE
      ),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
