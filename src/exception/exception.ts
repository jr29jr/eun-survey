import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { GraphQLNonNull } from 'graphql';

/*
  @Catch(HttpException)은
  http 통신의 예외를 캐치하겠다는 뜻입니다. 
  만약 모든 예외를 캐치하고 싶다면
  
  @Catch()로 적용하시면 됩니다.
*/
@Catch(GraphQLNonNull)
export class notNUllException implements ExceptionFilter {
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(status);
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}