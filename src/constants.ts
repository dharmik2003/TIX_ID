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
  MOVIE_ADDED: "New Movie Added",
  MOVIE_FETCH: "Data Fetch",

  THEATER_ADDED: "New Theater Added",
  THEATER_FETCH: "Movie Data Fetch",

  SCREEN_ADDED: "New Screen Added",

  SHOWTIME_ADDED: "New Showtime added.",

  SEATS_ADDED: "New Seats added.",

  SEAT_LABELS_ADDED: "Site Label Fetch",

  //voucher
  VOUCHER_USED: "New Voucher Add",
  VOUCHER_FOUND: "New Voucher Found",
  VOUCHER_UPDATE: "New Voucher Update",
  VOUCHER_DELETE: "New Voucher Delete",
};
export const ALL_ERROR_MESSAGES = {
  MOVIE_ADDED: "New Movie not Add",
  MOVIE_FETCH: "Movies Data not Fetch",
  MOVIE_NOTFOUND: "Movies Not Found",

  THEATER_ADDED: "New Theater not Added",
  THEATER_FETCH: "Theater Data not Fetch",
  THEATER_NOTFOUND: "Theater Not Found",

  SCREEN_NOTFOUND: "Screen Not Found",

  SHOWTIME_ADDED: "New Showtime Not added.",

  SEATS_ADDED: "New seats Not added.",

  SEAT_LABELS_ADDED: "Site Label Not Fetch",
  SEAT_LABELS_NOTFOUND: "Seat label not found.",

  //voucher
  VOUCHER_USED: "New Voucher not Add",
  VOUCHER_NOTFOUND: "New Voucher not Found",
  VOUCHER_UPDATE: "New Voucher not Update",
  VOUCHER_DELETE: "New Voucher not Delete",
};
