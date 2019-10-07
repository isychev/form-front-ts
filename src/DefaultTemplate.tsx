import * as React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ErrorsList from './ErrorsList';

const REQUIRED_FIELD_SYMBOL = '*';

export interface LabelProps {
  label: React.ReactNode;
  required: boolean;
  id: string;
  hasError: boolean;
  options: any;
}

const Label: React.FC<LabelProps> = ({
  label,
  required,
  id,
  hasError,
  options,
}: LabelProps) => (
  <label
    className={cn({
      'col-md-4': !options.inline,
      'col-12': options.inline,
      'col-form-label d-flex align-items-top pt-2 form-default-template-label': true,
      'text-danger': hasError,
    })}
    id={`label_${id}`}
    htmlFor={id}
    data-qa={`BaseLabel${id}`}
  >
    <span>
      {`${label} `}
      {required ? (
        <span
          className="text-danger font-weight-bold"
          data-qa={`BaseLabel${id}Required`}
        >
          {REQUIRED_FIELD_SYMBOL}
        </span>
      ) : (
        ''
      )}
    </span>
    {/* {help ? 'help' : null} */}
  </label>
);

Label.defaultProps = {
  label: '',
  required: false,
  id: '',
  hasError: false,
  options: {},
};

Label.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
  hasError: PropTypes.bool,
  options: PropTypes.objectOf(PropTypes.any),
};

export interface DefaultTemplateProps {
  id: string;
  classNames: string;
  label: string;
  children: React.ReactNode;
  rawErrors: any;
  rawHelp: any;
  hidden: boolean;
  required: boolean;
  uiSchema: any;
  formContext: any;
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  id,
  classNames,
  label,
  children,
  rawErrors,
  rawHelp,
  hidden,
  required,
  uiSchema,
  formContext,
}: DefaultTemplateProps) => {
  const options = uiSchema['ui:options'] || {};

  if (hidden || !label || options.label === false) {
    return (
      <div
        className={cn({
          'form-default-template-widget form-default-widget-empty': true,
          'has-error': rawErrors.length,
        })}
        data-qa={`DefaultTemplate${id}`}
      >
        {children}
        <ErrorsList errors={rawErrors} id={id} />
      </div>
    );
  }

  return (
    <div
      className={cn({
        'row no-gutters': formContext.adaptiveClassName,
      })}
    >
      <div
        className={cn([
          formContext.adaptiveClassName,
          formContext.paddingClassName,
        ])}
      >
        <div
          className={cn({
            'row form-group form-default-template': true,
            [classNames]: true,
          })}
        >
          <Label
            label={label}
            required={required}
            help={rawHelp}
            id={id}
            hasError={rawErrors.length > 0}
            options={options}
          />
          <div
            className={cn({
              'col-md-8': !options.inline,
              'col-12': options.inline,
              'px-2 form-default-template-widget': true,
              'has-error': rawErrors.length,
            })}
            data-qa={`DefaultTemplate${id}`}
          >
            {children}
            {rawHelp ? (
              <div>
                <i className="text-muted">{rawHelp}</i>
              </div>
            ) : null}
            <ErrorsList errors={rawErrors} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

DefaultTemplate.defaultProps = {
  hidden: false,
  required: false,
  id: '',
  classNames: '',
  label: '',
  rawErrors: [],
  rawHelp: '',
  uiSchema: {},
  formContext: {},
};

DefaultTemplate.propTypes = {
  id: PropTypes.string,
  classNames: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  rawErrors: PropTypes.arrayOf(PropTypes.any),
  rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hidden: PropTypes.bool,
  required: PropTypes.bool,
  uiSchema: PropTypes.objectOf(PropTypes.any),
  formContext: PropTypes.objectOf(PropTypes.any),
};

export default DefaultTemplate;
