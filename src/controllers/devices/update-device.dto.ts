
import { Protocol } from '../../entities/protocol';

export class UpdateDeviceDto {

  srn: string;
  url: string;
  protocol: Protocol;
  state: number;

}
