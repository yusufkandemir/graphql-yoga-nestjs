import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class RecipesArgs {
  @Field(type => Int, { description: 'number of items to skip' })
  @Min(0)
  skip = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take = 25;
}
