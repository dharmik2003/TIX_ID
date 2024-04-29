import { Request, Response } from "express"
import { razorpay } from "../../config/razorpay.config"
import { AppDataSource } from "../../config/data-source";
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




export const addrazorpayPaymentLink = async (req: any,res:Response) => {

    try {

        const {myshowid}= req.body; 
        const userId1 = req.decoded;
        const userId = userId1.details.id
        // const myshowid=30
        // const userId = 5
        console.log("userId", userId)
        // const userId=1
        // console.log("userId", userId1)
        const {name,phoneNumber,email}=userId1
        const userRepository = AppDataSource.getRepository(User);
        const myshowRepository = AppDataSource.getRepository(MyShow);


        const allfiltermyshowid = await myshowRepository.find({relations:['user']});

        const filtermyshowid = await allfiltermyshowid.filter((myshow)=>{
            return myshow.id == myshowid && myshow.user.id==userId
        });




        console.log("filtermyshowid", filtermyshowid[0].finalPrice)
        if (!filtermyshowid){
            return Error(
                ERROR_MESSAGES._NotFound(ALL_ERROR_MESSAGES.MYSHOW_NOTFOUND),
                HTTP_STATUS_CODES.NOT_FOUND
            );
        }

        const amountInPaisa = Math.round(filtermyshowid[0].finalPrice * 100) || 1000 * 100;
        const amountForLink = amountInPaisa.toString();
        console.log("amountForLink", amountForLink)

      
        const paymentlink = await razorpay.paymentLink.create({


            "amount": +amountForLink, 
                "currency": "INR",
                //   "accept_partial": false,
                //   "first_min_partial_amount": 100,
            "expire_by": new Date().setMinutes(new Date().getMinutes() + 15),
            "reference_id": `${myshowid}`,
                "description": "Payment for policy no #23456",
                "customer": {
                    "name": `${name}`,
                    "contact": `${phoneNumber}`,
                    "email": email
                    // "name": "dk",
                    // "contact": "9874563210",
                    // "email": "dkk@gmail.com"
                    // "name": userId1.name,
                    // "contact": userId1.phoneNumber,
                    // "email": userId1.email
                },
                "notify": {
                    "sms": true,
                    "email": true
                },
                "reminder_enable": true,
                "notes": {
                    "policy_name": "Jeevan Bima"
                },
            "callback_url": "http://localhost:3000/movie/1/sitehomepage/confirm_payment/PaymentPage",
                "callback_method": "get",
                options: {
                    checkout: {
                        name: "TIX ID",
                        method: {
                            netbanking: true,
                            card: true,
                            upi: true,
                            wallet: true,
                        },
                    },
                }

            })

            const paymentID = paymentlink.id

            const paymenturl = paymentlink.short_url





        return Success(
            SUCCESS_MESSAGES._SUCCESSFULLY(ALL_SUCCESS_MESSAGES.RAZORPAY),
            HTTP_STATUS_CODES.OK,
            {
                paymentID, paymenturl
            }
        );
    } catch (error) {
        console.log("Error while adding myshow:", error);
        return Error(
            ERROR_MESSAGES._FunctionCatchError(ALL_ERROR_MESSAGES.RAZORPAY),
            HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
        );
    }

    };

