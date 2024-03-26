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
import { Screens } from "../../entities/screens/screen.entity";
import { Seats } from "../../entities/seats/seats.entity";
import { SeatLabel } from "../../entities/seat-label/seat-label.entity";

export const addSeatSearvice = async (req: Request, res: Response) => {
  try {
    const { screenId, row_num, seat_num } = req.body;

    const screenRepository = AppDataSource.getRepository(Screens);
    const seatsRepository = AppDataSource.getRepository(Seats);
    const seatlabelRepository = AppDataSource.getRepository(SeatLabel);

    const existingscreen = await screenRepository.findOne({
      where: { id: +screenId },
    });

    if (!existingscreen) {
      return Error(
        ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.SCREEN_NOTFOUND)
      );
    }
    console.log(existingscreen);

    const newData = seatsRepository.create({
      rownum: row_num,
      seatnum: seat_num,
      screen: screenId,
    });

    console.log(newData);
    const seatid = await seatsRepository.save(newData);

    // Define totalRows and seatsPerRow based on input or constants
    const totalRows = row_num;
    const seatsPerRow = seat_num;

    const seatLabels: SeatLabel[] = [];

    // Loop through each row and seat to generate seat labels
    for (let row = 1; row <= totalRows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        // Generate seat label (e.g., A1, A2, A3, ...)
        const label = String.fromCharCode(65 + row - 1) + seat;
        const isBooked = false;

        // Create new SeatLabel entity
        const newSeatLabel = seatlabelRepository.create({
          seat: seatid,
          screen: screenId as number,
          row: row,
          col: seat,
          seatlabel: label,
          isbooked: isBooked,
        });

        seatLabels.push(newSeatLabel);
      }
    }

    // Save seat labels to the database
    await seatlabelRepository.save(seatLabels);

    return Success(
      SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.SEATS_ADDED),
      HTTP_STATUS_CODES.OK,
      newData
    );
  } catch (error) {
    console.log("Error while add-seats.Service:", error);
    return Error(
      ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.SEATS_ADDED),
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
    );
  }
};
