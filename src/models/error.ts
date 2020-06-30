/**
 * @author Mohammed Arqam Ali Saad<arqam.ali16@gmail.com>
 * @description Model for Error Handler
 */

class HttpError extends Error {
  code: number;
  constructor(message: string, errorCode: number) {
    super(message);
    this.code = errorCode;
  }
}

export default HttpError;
