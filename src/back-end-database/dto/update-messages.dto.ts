import { PartialType } from '@nestjs/mapped-types';
import { CreateMessages } from './create-messages.dto';

export class UpdateMessagesDto extends PartialType(CreateMessages) {}