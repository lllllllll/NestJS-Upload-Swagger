import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {

    constructor(@InjectRepository(City) private citiesRepository: Repository<City>) { }

    async getWorlds(getWorld: City): Promise<City[]> {
        return await this.citiesRepository.find();
    }

    async getWorld(_id: number): Promise<City[]> {
        return await this.citiesRepository.find({
            select: ["name", "countryCode", "population"],
            where: [{ "id": _id }]
        });
    }

    async create(city: City) {
        console.log('City citiesRepository >> ', city);
        this.citiesRepository.save(city)
    }

    async updateWorld(city: City) {
        this.citiesRepository.save(city)
    }

    async deleteWorld(city: City) {
        this.citiesRepository.delete(city);
    }
}