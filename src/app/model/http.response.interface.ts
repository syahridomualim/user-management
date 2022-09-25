import { User } from "./user.interface";

export interface HttpResponse {
    time: Date;
    statusCode: number;
    httpStatus: number;
    reason: string;
    message: string;
    data: {
        users?: User[], data?: User
    };
}