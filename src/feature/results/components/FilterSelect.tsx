import { Radio } from '@mantine/core';

interface Option {
  value: string;
  label: string;
}

interface FilterSelectProps {
  options: Option[];
  onChange: (value: Option) => void;
  initialValue?: string;
}

export function FilterSelect({
  options,
  onChange,
  initialValue = 'any',
}: FilterSelectProps) {
  function handleChange(option: string) {
    const selected = options.find(({ value }) => value === option);
    if (typeof selected === 'undefined') return;
    onChange(selected);
  }

  return (
    <Radio.Group
      value={initialValue}
      onChange={handleChange}
      name="popup-radio-group"
      defaultChecked={false}
      defaultValue={initialValue}
    >
      {options.map(({ value, label }) => (
        <Radio key={value} label={label} value={value} />
      ))}
    </Radio.Group>
  );
}
