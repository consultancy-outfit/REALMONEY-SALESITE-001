export class ApiError extends Error {
  constructor(errors = [], message = "Something went wrong", stack = "") {
    super(message);
    this.message = message;
    this.data = null;
    this.isError = true;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
