import { PartialType } from '@nestjs/mapped-types';
import { CreateContactList } from './create-contactList.dto';

export class UpdateContactListDto extends PartialType(CreateContactList) {}