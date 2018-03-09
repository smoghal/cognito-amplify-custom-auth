import React from 'react';
import {
  Form,
  Dropdown,
  Label,
  Input,
  Radio,
  Select
} from 'semantic-ui-react';

// custom Input field with Label component
export const LabelInputField = ({
  input,
  label,
  required,
  width,
  inline,
  meta: { touched, error },
  ...rest
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <Input required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

// custom Input field without Label component
export const InputField = ({
  input,
  required,
  width,
  meta: { touched, error },
  ...rest
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width}>
    <Input required={required} {...input} {...rest} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

// custom Checkbox field
export const ToggleField = ({
  input,
  label,
  defaultChecked,
  width,
  ...rest
}) => (
  <Form.Field
    control={Radio}
    toggle
    label={label}
    checked={!!input.value}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(data.checked)}
    width={width}
    {...rest} />
);

// custom Toggle component
export const Toggle = ({
  input,
  label,
  defaultChecked
}) => (
  <Radio
    toggle
    label={label}
    checked={!!input.value}
    defaultChecked={defaultChecked}
    onClick={(event, data) => input.onChange(data.checked)} />
);

// custom Single-Select with Search Dropdown component
export const SelectField = ({
  input,
  label,
  required,
  width,
  inline,
  options,
  meta: { touched, error },
  ...custom
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <Select
      search
      value={input.value}
      required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)}
      {...custom} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

// custom Multiple-Select with Search Dropdown component
export const MultiSelectSearchDropdownField = ({
  input,
  label,
  required,
  width,
  inline,
  options,
  meta: { touched, error },
  ...custom
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <Dropdown
      search
      fluid
      selection
      multiple
      value={input.value}
      required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)}
      {...custom} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);

// custom Multiple-Select with Search and AllowAddition Dropdown component
export const MultiSelectSearchWithAdditionsDropdownField = ({
  input,
  label,
  required,
  width,
  inline,
  options,
  meta: { touched, error },
  ...custom
}) => (
  <Form.Field error={!!(touched && error)} required={required} width={width} inline={inline}>
    {label && <label>{label}</label>}
    <Dropdown
      search
      fluid
      selection
      multiple
      allowAdditions
      value={input.value}
      required={required}
      options={options}
      onChange={(event, data) => input.onChange(data.value)}
      onAddItem={(event, data) => input.onAddItem(data.value)}
      {...custom} />
    {touched && error ? (
      <Label basic color="red" pointing>
        {error}
      </Label>
    ) : null}
  </Form.Field>
);
