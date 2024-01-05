import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              key={id}
              style={{
                backgroundColor: `${
                  '#' + Math.floor(Math.random() * 16777215).toString(16)
                }`,
              }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}&#37;</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
