import onRedirectAction from 'base-front-ts/onRedirect';
import PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import onResetForm from './onResetForm';

export interface CancelButtonProps {
  onClick: ({ formAlias }: { formAlias: string }) => void;
  onRedirect: ({ redirectUrl }: { redirectUrl: string }) => void;
  formAlias: string;
  redirectUrl?: string;
  title?: string;
  className?: string;
}

const CancelButtonComponent: React.FC<CancelButtonProps> = (
  props: CancelButtonProps,
): React.ReactNode => {
  const {
    className,
    onClick,
    onRedirect,
    title,
    formAlias,
    redirectUrl,
  } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick({ formAlias });
        if (redirectUrl && onRedirect) {
          onRedirect({ redirectUrl });
        }
      }}
    >
      {title}
    </button>
  );
};

CancelButtonComponent.defaultProps = {
  redirectUrl: '',
  title: 'Cancel',
  className: 'btn btn-outline-secondary form-cancel-button',
};

CancelButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
  formAlias: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string,
  title: PropTypes.node,
  className: PropTypes.string,
};

export { CancelButtonComponent };

export default connect(
  null,
  {
    onClick: onResetForm,
    onRedirect: onRedirectAction,
  },
)(CancelButtonComponent);
