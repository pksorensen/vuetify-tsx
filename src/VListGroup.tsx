import * as tsx from 'vue-tsx-support';
import { VListGroup } from 'vuetify/lib';

export default tsx.ofType<Props>().convert(VListGroup as any);

type Props = {
  activeClass?: string;
  appendIcon?: string;
  disabled?: boolean;
  group?: string;
  lazy?: boolean;
  noAction?: boolean;
  prependIcon?: string;
  subGroup?: boolean;
  value?: any;
};
