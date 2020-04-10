import { Controller, Get, Req, Redirect, Query, Res, Param, Post, Body } from '@nestjs/common';
import { Request, Response} from 'express';
import {CreateCatDto} from './dto/create-cat.dto'
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService:CatsService){
  }
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
  @Get('toto')
  findToto(@Res() response): string {
    return response.status(209).send();
  }
  @Get('docs')  
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
        return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  @Get(':id')
  findOne(@Param() params): string {
   console.log(params.id);
   return `This action returns a #${params.id} cat`;
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto, @Res() res: Response): Promise<any> {
    //return `This action adds a new cat${createCatDto.age} || ${createCatDto.name}`;
    return res.json({
      name: 'no',
      breed: 'no',
      age: 34
    });
  }
  
  

}
