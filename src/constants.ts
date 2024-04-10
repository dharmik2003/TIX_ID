export const ERROR_MESSAGES = {
  // helpers Function
  _NotFound(str: string, appender = "") {
    const finalAppender = appender ? appender : ", not available in system";
    return `${str} ${finalAppender}`;
  },
  _InternalServerError(str: string, appender = "") {
    const finalAppender = appender ? appender : "Server Error";
    return `${str} ${finalAppender}`;
  },
  _FunctionCatchError(str: string, appender = "") {
    const finalAppender = appender ? appender : `Error while ${str}`;
    return `${finalAppender}`;
  },
  _Unauthorized(str: string, appender = "") {
    const finalAppender = appender ? appender : ", unauthorized access";
    return `${str} ${finalAppender}`;
  },
  _InputMisssing(str: string, appender = "") {
    const finalAppender = appender ? appender : ", Missing Data";
    return `${str} ${finalAppender}`;
  },

  //Download file from server side
  FILE_DWNLD_FAILED: "",
};

export const SUCCESS_MESSAGES = {
  _FETCHED(str: string, appender = "") {
    const finalAppender = appender ? appender : "available in system";
    return `${str} ${finalAppender}`;
  },
  _SUCCESSFULLY(str: string, appender = "") {
    const finalAppender = appender ? appender : `${str} successfully`;
    return ` ${finalAppender}`;
  },
};

export const FILE_ENCODINGS = {
  UTF_8: "utf-8",
};

export const HTTP_STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  VALIDATION_FAILED: 417,
  INTERNAL_SERVER_ERROR: 500,
};

export const ALL_SUCCESS_MESSAGES = {
  //News
  NEWS_ADDDED: "New news Addded",

  //comingsoon
  COMINGSOON_ADDED: "New UpComing Movie Added",
  COMINGSOON_FETCH: "New UpComing Movie Fetched",

  NEWS_FETCh: "New Fetch",

  //user
  USER_ADDED: "New user Added",
  USER_UPDATE: "User Updated",
  USER_DELETE: "User Deleted",
  USER_FOUND: "User Found",

  //movies
  MOVIE_ADDED: "New Movie Added",
  MOVIE_FETCH: "Movie Fetch",
  MOVIE_DELETE: "Movie deleted",
  MOVIE_UPDATE: "Movie Updated",

  //Theater
  THEATER_ADDED: "New Theater Added",
  THEATER_FETCH: "Theater Data Fetch",
  THEATER_DELETE: "Theater Deleted",
  THEATER_UPDATE: "Theater not Update",

  //screen
  SCREEN_ADDED: "New Screen added.",
  SCREEN_UPDATE: "Screen UpdateD.",
  SCREEN_FETCH: "Screen Fetch",
  SCREEN_DELETE: "Screen Deleted.",

  //ShowTime
  SHOWTIME_ADDED: "New Showtime added.",
  SHOWTIME_UPDATE: "Showtime UpdateD.",
  SHOWTIME_FETCH: "ShowTime Fetch",
  SHOWTIME_DELETE: "Showtime Deleted.",

  SEATS_ADDED: "New Seats added.",

  SEAT_LABELS_ADDED: "Site Label Fetch",

  //voucher
  VOUCHER_USED: "New Voucher Add",
  VOUCHER_FOUND: "New Voucher Found",
  VOUCHER_UPDATE: "New Voucher Update",
  VOUCHER_DELETE: "New Voucher Delete",

  //Myshow
  MYSHOW_ADDED: "My Show Added",

  //payment-history
  PAYMENTHISTORY_FETCH: "Payment History Fetched",
  PAYMENTHISTORY_DONE: "Payment",


  //myticket
  MYTICKET_FOUND: 'Tickets Found',


};


export const ALL_ERROR_MESSAGES = {
  //News
  NEWS_ADDDED: "New news not Add",
  NEWS_FETCh: "New Not Fetch",

  //comingsoon
  COMINGSOON_ADDED: "New UpComing Movie not Add",
  COMINGSOON_FETCH: "New UpComing Movie not Fetch",

  //id
  ID_NOT_PROVIDED: "Id is required field",

  //user
  USER_ADDED: "New user not Added",
  USER_UPDATE: "User not Updated",
  USER_NOTFOUND: "User not Found",
  USER_GET: "User Get, not Found",
  USER_DELETE: "User not Delete",

  //movies
  MOVIE_ADDED: "New Movie not Add",
  MOVIE_FETCH: "Movies Data not Fetch",
  MOVIE_NOTFOUND: "Movies Not Found",
  MOVIE_DELETE: "Movie not deleted",
  MOVIE_UPDATE: "Movie not Update",

  //Theater
  THEATER_ADDED: "New Theater not Added",
  THEATER_FETCH: "Theater Data not Fetch",
  THEATER_NOTFOUND: "Theater Not Found",
  THEATER_DELETE: "Theater not Delete",
  THEATER_UPDATE: "Theater not Update",

  //Screen
  SCREEN_ADDED: "New Screen Not added.",
  SCREEN_NOTFOUND: "Screen Not Found",
  SCREEN_UPDATE: "Screen not Update.",
  SCREEN_FETCH: "Screen not Fetch",
  SCREEN_DELETE: "Screen not Delete.",

  //ShowTime
  SHOWTIME_ADDED: "New Showtime Not added.",
  SHOWTIME_NOTFOUND: "ShowTime Not Found",
  SHOWTIME_UPDATE: "Showtime not Update.",
  SHOWTIME_FETCH: "ShowTime not Fetch",
  SHOWTIME_DELETE: "Showtime not Delete.",

  SEATS_ADDED: "New seats Not added.",

  SEAT_LABELS_ADDED: "Site Label Not Fetch",
  SEAT_LABELS_NOTFOUND: "Seat label not found.",

  //voucher
  VOUCHER_USED: "New Voucher not Add",
  VOUCHER_NOTFOUND: "New Voucher not Found",
  VOUCHER_UPDATE: "New Voucher not Update",
  VOUCHER_DELETE: "New Voucher not Delete",
  VOUCHER_INVALID: "Invalied Voucher Code",

  //Myshow
  MYSHOW_ADDED: "My Show Not Added",
  MYSHOW_NOTFOUND: "My Show Not Found",

  //payment
  PAYMENTHISTORY_DONE: "Payment not Done",

  //Missing
  PhoneNumber_SYSTEM:"already phone number then in system",

  //token verify
  TOKEN_VERIFY:"Wrong token",

  //voucher
  VOUCHER_NOTAPPLY:"Voucher not Apply",

  //mytickets

  MYTICKET_FOUND: 'No Tickets Found',


};
