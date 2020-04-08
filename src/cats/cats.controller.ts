import { Controller, Get, Req, Redirect, Query } from '@nestjs/common';
import { Request} from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get('profile/:id')
  find(@Req() request: Request): string {
    return  `
            This action returns all cats ${request.params['id']}
            `;
  }
  @Get('docs')  
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
        return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

}
