import * as tslib_1 from 'tslib';
import * as React from 'react';
import { connect } from 'react-redux';
import { FORM_STATUSES } from './constantsForm';
import onSubmitForm from './onSubmitForm';
import selectorForm from './selectorForm';

const SubmitButtonComponent =
  /** @class */
  (function(_super) {
    tslib_1.__extends(SubmitButtonComponent, _super);

    function SubmitButtonComponent() {
      const _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.state = {
        isShakeAnimate: false,
      }; // анимация ошибки валидации

      _this.setShakeAnimate = function(value) {
        const isShakeAnimate = _this.state.isShakeAnimate;

        if (value && isShakeAnimate) {
          return;
        }

        _this.setState({
          isShakeAnimate: value,
        });

        if (value) {
          setTimeout(function() {
            _this.setShakeAnimate(false);
          }, 700);
        }
      };

      _this.isDisableButton = function() {
        const _a = _this.props,
          disabled = _a.disabled,
          isSending = _a.isSending;
        return disabled || isSending;
      };

      _this.handleSubmit = function(e) {
        const onSubmit = _this.props.onSubmit;

        if (onSubmit) {
          const _a = _this.props,
            formAlias = _a.formAlias,
            successNotification = _a.successNotification,
            errorNotification = _a.errorNotification,
            submitParams = _a.submitParams,
            redirectDelay = _a.redirectDelay,
            redirectUrl = _a.redirectUrl,
            actionUrl = _a.actionUrl,
            withoutSend = _a.withoutSend,
            withoutNotification = _a.withoutNotification,
            withoutRedirect = _a.withoutRedirect;
          e.preventDefault();

          const params = tslib_1.__assign(
            {
              formAlias: formAlias,
              redirectDelay: redirectDelay,
              redirectUrl: redirectUrl,
              actionUrl: actionUrl,
              withoutSend: withoutSend,
              withoutNotification: withoutNotification,
              withoutRedirect: withoutRedirect,
              notification: {
                successNotification: successNotification,
                errorNotification: errorNotification,
              },
            },
            submitParams,
          );

          onSubmit(params);
        }
      };

      return _this;
    }

    SubmitButtonComponent.prototype.componentWillReceiveProps = function(
      newProps,
    ) {
      const status = this.props.status;

      if (
        newProps.status === FORM_STATUSES.SUBMIT_ERROR &&
        status !== FORM_STATUSES.SUBMIT_ERROR
      ) {
        this.setShakeAnimate(true);
      }
    };

    SubmitButtonComponent.prototype.render = function() {
      const _a = this.props,
        title = _a.title,
        className = _a.className,
        children = _a.children,
        additionClassName = _a.additionClassName;
      const isShakeAnimate = this.state.isShakeAnimate;
      return (
        <button
          type="submit"
          className={
            className +
            ' ' +
            additionClassName +
            ' ' +
            (isShakeAnimate ? 'animate-shake' : '')
          }
          onClick={this.handleSubmit}
          disabled={this.isDisableButton()}
        >
          {children || title}
        </button>
      );
    };

    SubmitButtonComponent.propTypes = {};
    SubmitButtonComponent.defaultProps = {
      title: 'Сохранить',
      redirectUrl: null,
      redirectDelay: 4000,
      actionUrl: '',
      status: '',
      onSubmit: null,
      children: null,
      successNotification: 'Форма отправлена',
      errorNotification: 'Ошибка при отправке формы',
      payload: {},
      className: 'btn btn-primary',
      additionClassName: '',
      disabled: false,
      isSubmit: false,
      isSending: false,
      withoutSend: false,
      withoutNotification: false,
      withoutRedirect: false,
    };
    return SubmitButtonComponent;
  })(React.PureComponent);

export { SubmitButtonComponent };
export default connect(
  function(state, props) {
    const formState = selectorForm(state, props) || {};
    return {
      isSending: formState.isSending,
    };
  },
  {
    onSubmit: onSubmitForm,
  },
)(SubmitButtonComponent); // export default SubmitButtonComponent;
