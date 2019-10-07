import * as React from 'react';
import PropTypes from 'prop-types';

export interface ErrorsListProps {
  errors: any;
  id: string;
}
const ErrorsList: React.FC<ErrorsListProps> = ({
  errors,
  id,
}: ErrorsListProps) =>
  errors.length ? (
    <div className="form-errors-list" data-qa={`ErrorsList${id}`}>
      {errors.map(error => (
        <div className="text-danger" key={`ErrorsListItem_${error}`}>
          {error}
        </div>
      ))}
    </div>
  ) : null;

ErrorsList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.any),
  id: PropTypes.string.isRequired,
};
ErrorsList.defaultProps = {
  errors: [],
};

export default ErrorsList;
