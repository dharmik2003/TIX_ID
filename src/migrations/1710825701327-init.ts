import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1710825701327 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    //users
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "phone_number",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        // foreignKeys: [
        //   {
        //     columnNames: ["paymentHistoriesId"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "payment_history",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE",
        //   },
        //   {
        //     columnNames: ["ticketsId"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "tickets",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE",
        //     name: "FK_tickets_user_id",
        //   },
        //   {
        //     columnNames: ["ordersId"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "orders",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE",
        //     name: "FK_orders_user_id",
        //   },
        // ],
      })
    );

    //comingsoon
    await queryRunner.createTable(
      new Table({
        name: "comingsoon",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "date",
            type: "varchar",
          },
          {
            name: "type1",
            type: "varchar",
          },
          {
            name: "type2",
            type: "varchar",
          },
          {
            name: "type3",
            type: "varchar",
          },
          {
            name: "tag",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    //news
    await queryRunner.createTable(
      new Table({
        name: "news",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "date",
            type: "varchar",
          },
          {
            name: "tag",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "trailer",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "like",
            type: "int",
            default: 0,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    //Voucher
    await queryRunner.createTable(
      new Table({
        name: "vouchers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "code",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "price",
            type: "decimal",
          },

          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
    //theaters
    await queryRunner.createTable(
      new Table({
        name: "theaters",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "badge",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
    //movies
    await queryRunner.createTable(
      new Table({
        name: "movies",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "image",
            type: "varchar",
          },
          {
            name: "duration",
            type: "varchar",
          },
          {
            name: "rate",
            type: "varchar",
          },
          {
            name: "tag",
            type: "varchar",
          },
          {
            name: "director",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        // foreignKeys: [
        //   {
        //     columnNames: ["movieId"],
        //     referencedColumnNames: ["id"],
        //     referencedTableName: "movies",
        //     onDelete: "CASCADE",
        //     onUpdate: "CASCADE",
        //   },
        // ],
      })
    );
    //theater movies
    await queryRunner.createTable(
      new Table({
        name: "theater_movies",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "theaterId",
            type: "int",
            isNullable: false,
          },
          {
            name: "movieId",
            type: "int",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["theaterId"],
            referencedColumnNames: ["id"],
            referencedTableName: "theaters",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["movieId"],
            referencedColumnNames: ["id"],
            referencedTableName: "movies",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
    //screen
    await queryRunner.createTable(
      new Table({
        name: "screens",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "dimension",
            type: "varchar",
          },
          {
            name: "theaterId",
            type: "int",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["theaterId"],
            referencedColumnNames: ["id"],
            referencedTableName: "theaters",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
    // showtime
    await queryRunner.createTable(
      new Table({
        name: "show_time",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "date",
            type: "varchar", 
          },
          {
            name: "time",
            type: "varchar", 
          },
          {
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "movieId",
            type: "int",
          },
          {
            name: "screenId",
            type: "int",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["movieId"],
            referencedColumnNames: ["id"],
            referencedTableName: "movies",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["screenId"],
            referencedColumnNames: ["id"],
            referencedTableName: "screens",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );

    //seats
    await queryRunner.createTable(
      new Table({
        name: "seats",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "row_num",
            type: "int",
          },
          {
            name: "seat_num",
            type: "int",
          },
          {
            name: "screenId",
            type: "int",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["screenId"],
            referencedColumnNames: ["id"],
            referencedTableName: "screens",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );

    //seats-label
    await queryRunner.createTable(
      new Table({
        name: "seat_labels",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "seatId",
            type: "int",
          },
          {
            name: "showTimeId",
            type: "int",
          },
          {
            name: "screen",
            type: "int",
          },
          {
            name: "row",
            type: "int",
          },
          {
            name: "col",
            type: "int",
          },
          {
            name: "seat_label",
            type: "varchar",
          },
          {
            name: "is_booked",
            type: "boolean",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["seatId"],
            referencedColumnNames: ["id"],
            referencedTableName: "seats",
            onDelete: "CASCADE",
          },
          {
            columnNames: ["showTimeId"],
            referencedColumnNames: ["id"],
            referencedTableName: "show_time",
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );
    
    // await queryRunner.createTable(
    //   new Table({
    //     name: "seat_labels",
    //     columns: [
    //       {
    //         name: "id",
    //         type: "int",
    //         isPrimary: true,
    //         isGenerated: true,
    //         generationStrategy: "increment",
    //       },
    //       {
    //         name: "seatId",
    //         type: "int",
    //       },
    //       {
    //         name: "screen",
    //         type: "int",
    //       },
    //       {
    //         name: "row",
    //         type: "int",
    //       },
    //       {
    //         name: "col",
    //         type: "int",
    //       },
    //       {
    //         name: "seat_label",
    //         type: "varchar",
    //       },
    //       {
    //         name: "is_booked",
    //         type: "boolean",
    //       },
    //       {
    //         name: "createdAt",
    //         type: "timestamp",
    //         default: "CURRENT_TIMESTAMP",
    //       },
    //       {
    //         name: "updatedAt",
    //         type: "timestamp",
    //         default: "CURRENT_TIMESTAMP",
    //         onUpdate: "CURRENT_TIMESTAMP",
    //       },
    //     ],
    //     foreignKeys: [
    //       {
    //         columnNames: ["seatId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "seats",
    //         onDelete: "CASCADE",
    //       },
    //     ],
    //   }),
    //   true
    // );

    //myshow
    await queryRunner.createTable(
      new Table({
        name: "myshow",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "userId",
            type: "int",
            isNullable: true,
          },
          {
            name: "movieId",
            type: "int",
            isNullable: true,
          },
          {
            name: "screenId",
            type: "int",
            isNullable: true,
          },
          {
            name: "showTimeId",
            type: "int",
            isNullable: true,
          },
          {
            name: "selected_seat",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "seat_price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: "total_seat",
            type: "int",
            isNullable: true,
          },
          {
            name: "total_amount",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: "voucherId",
            type: "int",
            isNullable: true,
          },
          {
            name: "voucher_amount",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: true,
          },

          {
            name: "final_price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: "payment_done",
            type: "boolean",
            default: false,
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["movieId"],
            referencedColumnNames: ["id"],
            referencedTableName: "movies",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["screenId"],
            referencedColumnNames: ["id"],
            referencedTableName: "screens",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["voucherId"],
            referencedColumnNames: ["id"],
            referencedTableName: "vouchers",
            onDelete: "SET NULL", // Or the desired action for voucher deletion
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["showTimeId"],
            referencedColumnNames: ["id"],
            referencedTableName: "show_time",
            onDelete: "CASCADE",
          },
        ],
      }),
      true
    );

    //payment-history

    await queryRunner.createTable(
      new Table({
        name: "payment_history",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "userId",
            type: "int",
            isNullable: false,
          },
          {
            name: "myShowId",
            type: "int",
            isNullable: false,
          },
          {
            name: "transaction_id",
            type: "varchar",
          },
          {
            name: "gst",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "platform_changes",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "total",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "payment_done",
            type: "boolean",
            default: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["myShowId"],
            referencedColumnNames: ["id"],
            referencedTableName: "myshow",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      }),
      true
    );
    //my_ticket
    // await queryRunner.createTable(
    //   new Table({
    //     name: "my_tickets",
    //     columns: [
    //       {
    //         name: "id",
    //         type: "int",
    //         isPrimary: true,
    //         isGenerated: true,
    //         generationStrategy: "increment",
    //       },
    //       {
    //         name: "userId",
    //         type: "int",
    //       },
    //       {
    //         name: "myShowId",
    //         type: "int",
    //       },
    //       {
    //         name: "image",
    //         type: "varchar",
    //         isNullable: true,
    //       },
    //       {
    //         name: "title",
    //         type: "varchar",
    //       },
    //       {
    //         name: "date",
    //         type: "date",
    //       },
    //       {
    //         name: "theater",
    //         type: "varchar",
    //       },
    //       {
    //         name: "screen",
    //         type: "varchar",
    //       },

    //       {
    //         name: "createdAt",
    //         type: "timestamp",
    //         default: "CURRENT_TIMESTAMP",
    //       },
    //       {
    //         name: "updatedAt",
    //         type: "timestamp",
    //         default: "CURRENT_TIMESTAMP",
    //         onUpdate: "CURRENT_TIMESTAMP",
    //       },
    //     ],
    //     foreignKeys: [
    //       {
    //         columnNames: ["userId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "users",
    //         onDelete: "CASCADE",
    //         onUpdate: "CASCADE",
    //       },
    //       {
    //         columnNames: ["myShowId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "myshow",
    //         onDelete: "CASCADE",
    //         onUpdate: "CASCADE",
    //       },
    //     ],
    //   }),
    //   true
    // );

    await queryRunner.createTable(
      new Table({
        name: "my_tickets",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "userId",
            type: "int",
          },
          {
            name: "myShowId",
            type: "int",
          },
          {
            name: "image",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "date",
            type: "date",
          },
          {
            name: "time",
            type: "varchar",
          },
          {
            name: "theater",
            type: "varchar",
          },
          {
            name: "screen",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["myShowId"],
            referencedColumnNames: ["id"],
            referencedTableName: "myshow",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      }),
      true
    );

    //tickets
    // await queryRunner.createTable(
    //   new Table({
    //     name: "tickets",
    //     columns: [
    //       {
    //         name: "id",
    //         type: "int",
    //         isPrimary: true,
    //         isGenerated: true,
    //         generationStrategy: "increment",
    //       },
    //       {
    //         name: "myShowId",
    //         type: "int",
    //         isNullable: false,
    //       },
    //       {
    //         name: "userId",
    //         type: "int",
    //         isNullable: false,
    //       },
    //       {
    //         name: "paymentHistoryId",
    //         type: "int",
    //         isNullable: false,
    //       },
    //       {
    //         name: "myTicketId",
    //         type: "int",
    //         isNullable: false,
    //       },
    //       {
    //         name: "createdAt",
    //         type: "timestamp",
    //         default: "CURRENT_TIMESTAMP",
    //       },
    //       {
    //         name: "updatedAt",
    //         type: "timestamp",
    //         default: "CURRENT_TIMESTAMP",
    //         onUpdate: "CURRENT_TIMESTAMP",
    //       },
    //     ],
    //     foreignKeys: [
    //       {
    //         columnNames: ["myShowId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "myshow",
    //         onDelete: "CASCADE",
    //         onUpdate: "CASCADE",
    //       },
    //       {
    //         columnNames: ["userId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "users",
    //         onDelete: "CASCADE",
    //         onUpdate: "CASCADE",
    //       },
    //       {
    //         columnNames: ["paymentHistoryId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "payment_history",
    //         onDelete: "CASCADE",
    //         onUpdate: "CASCADE",
    //       },
    //       {
    //         columnNames: ["myTicketId"],
    //         referencedColumnNames: ["id"],
    //         referencedTableName: "my_tickets",
    //         onDelete: "CASCADE",
    //         onUpdate: "CASCADE",
    //       },
    //     ],
    //   }),
    //   true
    // );

    await queryRunner.createTable(
      new Table({
        name: "tickets",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "myShowId",
            type: "int",
            isNullable: false,
          },
          {
            name: "userId",
            type: "int",
            isNullable: false,
          },
          {
            name: "paymentHistoryId",
            type: "int",
            isNullable: false,
          },
          {
            name: "myTicketId", // Corrected column name
            type: "int",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["myShowId"],
            referencedColumnNames: ["id"],
            referencedTableName: "myshow",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["paymentHistoryId"],
            referencedColumnNames: ["id"],
            referencedTableName: "payment_history",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["myTicketId"],
            referencedColumnNames: ["id"],
            referencedTableName: "my_tickets",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      }),
      true
    );

    //movie_show
    await queryRunner.createTable(
      new Table({
        name: "movie_shows",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "theaterMovieId",
            type: "int",
            isNullable: false,
          },
          {
            name: "screenId",
            type: "int",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["theaterMovieId"],
            referencedColumnNames: ["id"],
            referencedTableName: "theater_movies",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["screenId"],
            referencedColumnNames: ["id"],
            referencedTableName: "screens",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );

    //orders
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "paymentHistoryId",
            type: "int",
            isNullable: true,
          },
          {
            name: "voucher",
            type: "int",
            isNullable: true,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          // {
          //   columnNames: ["userId"],
          //   referencedColumnNames: ["id"],
          //   referencedTableName: "users",
          //   onDelete: "CASCADE",
          //   onUpdate: "CASCADE",
          // },
          // {
          //   columnNames: ["paymentHistoryId"],
          //   referencedColumnNames: ["id"],
          //   referencedTableName: "payment_history",
          //   onDelete: "SET NULL",
          //   onUpdate: "CASCADE",
          // },
        ],
      })
    );

    //booking
    await queryRunner.createTable(
      new Table({
        name: "booking",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "seatId",
            type: "int",
            isNullable: false,
          },
          {
            name: "movieShowId",
            type: "int",
            isNullable: false,
          },
          {
            name: "orderId",
            type: "int",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
        foreignKeys: [
          {
            columnNames: ["seatId"],
            referencedColumnNames: ["id"],
            referencedTableName: "seats",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["movieShowId"],
            referencedColumnNames: ["id"],
            referencedTableName: "movie_shows",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            columnNames: ["orderId"],
            referencedColumnNames: ["id"],
            referencedTableName: "orders",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("booking");
    await queryRunner.dropTable("orders");
    await queryRunner.dropTable("movie_shows");
    await queryRunner.dropTable("tickets");
    await queryRunner.dropTable("my_tickets");
    await queryRunner.dropTable("payment_history");
    await queryRunner.dropTable("myshow");

    await queryRunner.dropTable("seat_labels");
        await queryRunner.dropTable("show_time");
    await queryRunner.dropTable("seats");
    await queryRunner.dropTable("screens");
    await queryRunner.dropTable("theater_movies");
    await queryRunner.dropTable("movies");
    await queryRunner.dropTable("theaters");
    await queryRunner.dropTable("vouchers");
    await queryRunner.dropTable("news");
    await queryRunner.dropTable("comingsoon");
    await queryRunner.dropTable("users");
  }
}

//orders
//  await queryRunner.createTable(
//    new Table({
//      name: "orders",
//      columns: [
//        {
//          name: "id",
//          type: "int",
//          isPrimary: true,
//          isGenerated: true,
//          generationStrategy: "increment",
//        },
//        {
//          name: "userId",
//          type: "int",
//          isNullable: false,
//        },
//        {
//          name: "paymentHistoryId",
//          type: "int",
//          isNullable: true,
//        },
//        {
//          name: "created_at",
//          type: "timestamp",
//          default: "CURRENT_TIMESTAMP",
//        },
//        {
//          name: "updated_at",
//          type: "timestamp",
//          default: "CURRENT_TIMESTAMP",
//          onUpdate: "CURRENT_TIMESTAMP",
//        },
//      ],
//      foreignKeys: [
//        {
//          columnNames: ["userId"],
//          referencedColumnNames: ["id"],
//          referencedTableName: "users",
//          onDelete: "CASCADE",
//          onUpdate: "CASCADE",
//        },
//        {
//          columnNames: ["paymentHistoryId"],
//          referencedColumnNames: ["id"],
//          referencedTableName: "payment_history",
//          onDelete: "SET NULL",
//          onUpdate: "CASCADE",
//        },
//      ],
//    })
//  );
//users
// await queryRunner.createTable(
//   new Table({
//     name: "users",
//     columns: [
//       {
//         name: "id",
//         type: "int",
//         isPrimary: true,
//         isGenerated: true,
//         generationStrategy: "increment",
//       },
//       {
//         name: "name",
//         type: "varchar",
//       },
//       {
//         name: "phone_number",
//         type: "varchar",
//       },
//       {
//         name: "email",
//         type: "varchar",
//       },
//       {
//         name: "password",
//         type: "varchar",
//       },
//       {
//         name: "created_at",
//         type: "timestamp",
//         default: "CURRENT_TIMESTAMP",
//       },
//       {
//         name: "updated_at",
//         type: "timestamp",
//         default: "CURRENT_TIMESTAMP",
//         onUpdate: "CURRENT_TIMESTAMP",
//       },
//     ],
//     foreignKeys: [
//       {
//         columnNames: ["column1"], // Replace column_name1 with the actual column name in your schema
//         referencedColumnNames: ["id"],
//         referencedTableName: "users",
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//         name: "FK_column_name1_user_id", // Unique constraint name
//       },
//       {
//         columnNames: ["column2"], // Replace column_name2 with the actual column name in your schema
//         referencedColumnNames: ["id"],
//         referencedTableName: "users",
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//         name: "FK_column_name2_user_id", // Unique constraint name
//       },
//       {
//         columnNames: ["column3"], // Replace column_name3 with the actual column name in your schema
//         referencedColumnNames: ["id"],
//         referencedTableName: "users",
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//         name: "FK_column_name3_user_id", // Unique constraint name
//       },
//     ],
//   })
// );

//tickets

// await queryRunner.createTable(
//   new Table({
//     name: "tickets",
//     columns: [
//       {
//         name: "id",
//         type: "int",
//         isPrimary: true,
//         isGenerated: true,
//         generationStrategy: "increment",
//       },
//       {
//         name: "orderId",
//         type: "int",
//         isNullable: false,
//       },
//       {
//         name: "userId",
//         type: "int",
//         isNullable: false,
//       },
//       {
//         name: "created_at",
//         type: "timestamp",
//         default: "CURRENT_TIMESTAMP",
//       },
//       {
//         name: "updated_at",
//         type: "timestamp",
//         default: "CURRENT_TIMESTAMP",
//         onUpdate: "CURRENT_TIMESTAMP",
//       },
//     ],
//     foreignKeys: [
//       {
//         columnNames: ["orderId"],
//         referencedColumnNames: ["id"],
//         referencedTableName: "orders",
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//       },
//       {
//         columnNames: ["userId"],
//         referencedColumnNames: ["id"],
//         referencedTableName: "users",
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE",
//       },
//     ],
//   })
// );
