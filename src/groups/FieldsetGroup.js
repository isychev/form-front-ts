import * as React from 'react';
import getChildrenGroup from './childrenGroup';

const FieldsetGroup = function(props) {
  const group = props.group;
  const _a = group.props,
    groupProps = _a === void 0 ? {} : _a;
  const _b = groupProps.title,
    title = _b === void 0 ? '' : _b,
    _c = groupProps.help,
    help = _c === void 0 ? '' : _c;
  return (
    <div className="form-group-wrap ">
      {title
        ? <div className="row my-4">
        <div className="col">
          <h5>
            {title}
          </h5>
          {help
            ? <p className="text-muted">
            {help}
          </p>
            : null}
        </div>
      </div>
        : null}
      {getChildrenGroup(props)}
    </div>
  );
};
FieldsetGroup.defaultProps = {};
export default FieldsetGroup;
