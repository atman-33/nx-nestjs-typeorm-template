import { Controller, Get } from '@nestjs/common';
import { Region } from '../entities/region.entity';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {

    constructor(private readonly regionsService: RegionsService){}

    @Get()
    async findAll(): Promise<Region[]> {
        return await this.regionsService.findAll();
    }
}
