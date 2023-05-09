import { Grid, Image, UnstyledButton } from '@mantine/core';

const numkeys = [
  { num: '1' },
  { num: '2' },
  { num: '3' },
  { num: '4' },
  { num: '5' },
  { num: '6' },
  { num: '7' },
  { num: '8' },
  { num: '9' },
  { num: '' },
  { num: '0' },
  { num: '' },
];

export const Numpad = ({ onTap }: { onTap: (arg: string) => void }) => {
  return (
    <Grid style={{ height: '100%', width: '90%' }} gutter={0}>
      {numkeys.map((key, idx) => {
        if (key.num === '') return <Grid.Col span={4} key={idx} />;
        return (
          <Grid.Col span={4} key={idx}>
            <UnstyledButton
              onClick={() => onTap(key.num)}
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                alt=""
                src={`/images/table_numbers/${key.num}.webp`}
                width="16dvw"
                height="10dvh"
              />
            </UnstyledButton>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
