import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.entity';

@Controller('world')
export class CitiesController {
    constructor(private service: CityService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getWorlds(params.id);
    }

    @Post()
    create(@Body() city: City) {
        console.log('City >> ', city);
        
        return this.service.create(city);
    }

    @Put()
    update(@Body() city: City) {
        return this.service.updateWorld(city);
    }

    @Delete(':id')
    deleteWorld(@Param() params) {
        return this.service.deleteWorld(params.id);
    }
}