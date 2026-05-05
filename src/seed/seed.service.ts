import { Injectable } from '@nestjs/common';

import { PokemonResponse } from './interfaces/poke-.response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel:Model<Pokemon>,
    private readonly http:AxiosAdapter
  ){}
  

 async  executeSeed() {
    // Método 1: Múltiples peticiones resueltas a través de un array con Promise.all
    // await this.pokemonModel.deleteMany({});
    // const insertPromisesArray:any[] = [];
    // const {data} = await this.axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/?limit=10');
    // data.results.forEach(async ({name, url})=>{
    //   const partsUrl = url.split('/');
    //   const no = +partsUrl[partsUrl.length-2];
    //   insertPromisesArray.push(this.pokemonModel.create({name, no}));
    // })
    // const results = await Promise.all(insertPromisesArray);
    // return 'Seed Executed';

    // Método 2: insertMany con parámetro array de documentos
    await this.pokemonModel.deleteMany({});
    const pokemonToInsert:{name:string, no:number}[] = [];
    const data = await this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon/?limit=650');
    data.results.forEach(async ({name, url})=>{
      const partsUrl = url.split('/');
      const no = +partsUrl[partsUrl.length-2];
      pokemonToInsert.push({name, no});
    })
    this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed Executed';
  }
}
