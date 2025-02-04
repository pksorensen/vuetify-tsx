import { ofType } from 'vue-tsx-support';
import { VTabsSlider } from 'vuetify/lib';

import { Colorable } from './types';

export default ofType<Props, Events>().convert(VTabsSlider as any);

type Props = Colorable;

interface Events {}
