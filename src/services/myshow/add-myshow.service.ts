import { AppDataSource } from "../../config/data-source";
import { Request, Response } from "express";
import { Screens } from "../../entities/screens/screen.entity";
import { Theaters } from "../../entities/theaters/theater.entity";
import { Error, Success } from "../../utils/response.utils";
import {
  ALL_ERROR_MESSAGES,
  ALL_SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  HTTP_STATUS_CODES,
  SUCCESS_MESSAGES,
} from "../../constants";
import { User } from "../../entities/auth/user.entity";
import { Movies } from "../../entities/movies/movie.entity";
import { Voucher } from "../../entities/voucher/voucher.entity";
import { SeatLabel } from "../../entities/seat-label/seat-label.entity";
import { ShowTime } from "../../entities/show-time/showtime.entity";
import { MyShow } from "../../entities/myshow/myshow.entity";



export const addMyShowService = async (req: any, res: Response) => {
  try {
    const {  movieId, showtimeId, ScreenId, voucher, Seats } = req.body;
    console.log(movieId);
    console.log(ScreenId);

    const userId1 = req.decoded;
    const userId = userId1.details.id
    console.log("userId", userId)
    // const userId=1

    const userRepository = AppDataSource.getRepository(User);
    const movieRepository = AppDataSource.getRepository(Movies);
    const voucherRepository = AppDataSource.getRepository(Voucher);
    const seatlabelRepository = AppDataSource.getRepository(SeatLabel);
    const showtimeRepository = AppDataSource.getRepository(ShowTime);
    const myshowRepository = AppDataSource.getRepository(MyShow);

    // Check if user exists
    const existingUser = await userRepository.findOne({
      where: { id: userId },
    });
    if (!existingUser) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.USER_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    // Check if movie exists
    const existingMovie = await movieRepository.findOne({
      where: { id: movieId },
    });
    if (!existingMovie) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MOVIE_NOTFOUND),
        HTTP_STATUS_CODES.NOT_FOUND
      );
    }

    // Check if seats are available
    const errors = [];
    const seatlabel=[];
    let totalPrice = 0;
    if(Array.isArray(Seats)  && Seats.length>=1){
      for (const seatid of Seats) {
      const existingSeat = await seatlabelRepository.findOne({
        where: { id: seatid},
      });
      if (!existingSeat || existingSeat.isbooked) {
        errors.push(`Seat ${existingSeat?.seatlabel} is not available.`);
      } else {
        seatlabel.push(existingSeat.seatlabel)
        existingSeat.isbooked = true;
        await seatlabelRepository.save(existingSeat);

        // Fetch the price of one seat
        // const existingShowtime = await showtimeRepository.findOne({
        //   where: { movie: movieId, screen: ScreenId },
        // });

        // const existingShowtime = await showtimeRepository.find();

        // if (!existingShowtime) {
        //   return Error(
        //     ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SHOWTIME_NOTFOUND),
        //     HTTP_STATUS_CODES.NOT_FOUND
        //   );
        // }

        // console.log("existingShowtime", existingShowtime);

        // Calculate total price for all selected seats
        // Check if showtime exists
        const existingshowtime = await showtimeRepository.findOne({
          where: { id: showtimeId },
        });
        if (!existingshowtime) {
          return Error(
            ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SHOWTIME_NOTFOUND),
            HTTP_STATUS_CODES.NOT_FOUND
          );
        }
        console.log(existingshowtime);
        totalPrice = existingshowtime.price;
        console.log(totalPrice);
      }
      }
    }




    if (errors.length > 0) {
      return Error(errors.join(" "), HTTP_STATUS_CODES.BAD_REQUEST);
    }

    // Fetch voucher information
    const existingVoucher = await voucherRepository.findOne({
      where: { id: voucher },
    });
    console.log(existingVoucher);

    if (!existingVoucher || existingVoucher.id !== voucher) {
      return Error(
        ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_INVALID),
        HTTP_STATUS_CODES.BAD_REQUEST
      );
    }

    // Calculate final price after applying voucher
    let finalPrice
    let totalseatacodingprice = +(+totalPrice * +Seats.length)
    if(totalseatacodingprice >=+existingVoucher.price ){
    finalPrice = totalseatacodingprice - +existingVoucher.price;
    }
    else{
      return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.VOUCHER_NOTAPPLY),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
    }
    const formattedSelectedSeats = Seats.join(" ");

    const newMyShow = new MyShow();
    newMyShow.user = existingUser;
    newMyShow.movie = existingMovie;
    newMyShow.screen = ScreenId;
    newMyShow.showTime = showtimeId;
    newMyShow.selectedSeats = seatlabel;
    newMyShow.seatPrice = totalPrice;
    newMyShow.totalSeats = Seats.length;
    newMyShow.totalAmount = totalPrice * Seats.length;
    newMyShow.voucher = existingVoucher;
    newMyShow.voucherAmount = existingVoucher.price;
    newMyShow.finalPrice = finalPrice;

    const savedMyShow = await myshowRepository.save(newMyShow);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.MYSHOW_ADDED),
      HTTP_STATUS_CODES.OK,
      savedMyShow
    );
  } catch (error) {
    console.log("Error while adding myshow:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.MYSHOW_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
