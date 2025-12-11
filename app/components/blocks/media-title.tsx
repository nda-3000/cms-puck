import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const MediaTitle: ComponentConfig<PuckProps['MediaTitle']> = {
  label: 'Media Title',
  fields: {
    title: { type: 'text', label: 'Title' },
    country: { type: 'text', label: 'Country' },
    year: { type: 'text', label: 'Year' },
    duration: { type: 'text', label: 'Duration' },
    extra_info: {
      type: 'array',
      label: 'Extra Info',
      arrayFields: {
        item: { type: 'text', label: 'Info' },
      },
      getItemSummary: (value) => value.item || 'Info',
      min: 0,
    },
  },

  defaultProps: {
    title: 'Media Title Here',
    country: 'Austria',
    year: '2025',
    duration: '120 min',
    extra_info: [{ item: 'Sci-Fi' }, { item: 'Thriller' }],
  },

  render: ({ title, country, year, duration, extra_info }) => (
    <div className="rounded-md border bg-gray-50 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-1 text-sm text-gray-700">
        {country && <span>{country}</span>}
        {year && <span> • {year}</span>}
        {duration && <span> • {duration}</span>}
      </div>

      {extra_info?.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {extra_info.map((info, index) => (
            <li key={index} className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-700">
              {info.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  ),
};
