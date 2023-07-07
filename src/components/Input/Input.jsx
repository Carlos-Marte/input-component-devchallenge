import PropTypes from 'prop-types';

export const Input = ({ errorState, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline, row = 4 }) => {
  const errorClass = errorState ? 'border-red focus:border-red' : '';
  const helperTextClass = errorState ? 'text-red' : '';
  const iconPaddingClass = startIcon ? 'pl-10' : endIcon ? 'pr-10' : '';
  const iconPositionClass = multiline === true ? 'items-start mt-4' : 'items-center';
  const heightClass = size === 'sm' ? 'h-[40px]' : size === 'md' ? 'h-[56px]' : '';
  const fullWidthClass = fullWidth && 'w-full';
  const typeInput =
  multiline === true
    ? <textarea
        id="inputText"
        rows={row}
        disabled={disabled}
        placeholder="Placeholder"
        defaultValue={value}
        className={`text-gray1 text-base py-[15px] px-3 ${iconPaddingClass} w-full ${heightClass} border border-gray3 rounded-lg placeholder:text-gray3 hover:border-gray1 focus:border-blue outline-none disabled:border-gray5 disabled:bg-gray6 ${errorClass} resize-none`}
      />
    : <input
            id="inputText"
            type="text"
            disabled={disabled}
            placeholder="Placeholder"
            defaultValue={value}
            className={`text-gray1 text-base py-[15px] px-3 ${iconPaddingClass} w-full ${heightClass} border border-gray3 rounded-lg placeholder:text-gray3 hover:border-gray1 focus:border-blue outline-none disabled:border-gray5 disabled:bg-gray6 ${errorClass}`}
      />;

  return (
    <>
      <label htmlFor="inputText" className={`flex flex-col gap-1 text-xs w-[200px] ${fullWidthClass}`}>
        Label

        <div className={'relative'}>
          {typeInput}

          {Boolean(startIcon) &&
            <span className={`absolute inset-y-0 left-0 pl-3 flex ${iconPositionClass} pointer-events-none material-symbols-outlined`}>
              {startIcon}
            </span>
          }

          {Boolean(endIcon) &&
            <span className={`absolute inset-y-0 right-0 pr-3 flex ${iconPositionClass} pointer-events-none material-symbols-outlined`}>
              {endIcon}
            </span>
          }
        </div>

        {Boolean(helperText) && <p className={`text-gray text-[10px] ${helperTextClass}`}>{helperText}</p>}
      </label>
    </>
  );
};

Input.propTypes = {
  errorState: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  row: PropTypes.number
};
