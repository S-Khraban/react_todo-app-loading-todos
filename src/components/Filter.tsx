import cn from 'classnames';

export type FilterStatus = 'all' | 'active' | 'completed';

type Props = {
  value: FilterStatus;
  onChange: (nextStatus: FilterStatus) => void;
};

const FILTERS: FilterStatus[] = ['all', 'active', 'completed'];
const getHref = (status: FilterStatus) =>
  status === 'all' ? '#/' : `#/${status}`;
const toTitle = (status: FilterStatus) =>
  status[0].toUpperCase() + status.slice(1);

export const Filter: React.FC<Props> = ({ value, onChange }) => {
  const handleLinkClick = (
    nextStatus: FilterStatus,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    onChange(nextStatus);
  };

  return (
    <nav className="filter" data-cy="Filter">
      {FILTERS.map(status => (
        <a
          key={status}
          href={getHref(status)}
          className={cn('filter__link', { selected: value === status })}
          data-cy={`FilterLink${toTitle(status)}`}
          onClick={event => handleLinkClick(status, event)}
          aria-current={value === status ? 'page' : undefined}
        >
          {toTitle(status)}
        </a>
      ))}
    </nav>
  );
};
