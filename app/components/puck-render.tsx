import type { Data } from '@measured/puck';
import { Render } from '@measured/puck';

import { config } from '../../puck.config';

export function PuckRender({ data }: { data: Data }) {
  return <Render metadata={{ articleId: '12345' }} config={config} data={data} />;
}
