import { Button } from "~/src/components";
import {
  Box,
  Image,
  Title,
  Text,
  Stack,
  Space,
  Grid,
  Flex,
  ScrollArea,
} from "@mantine/core";
import type { ReactNode } from "react";

function YearLayout({
  children,
  headerNode,
  bgColor,
}: {
  children: ReactNode;
  headerNode: ReactNode;
  bgColor: string;
}) {
  return (
    <Box
      style={{
        background: bgColor,
        width: "114%",
        left: "-7%",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Stack p="xl" spacing={30}>
        <Grid
          columns={4}
          gutter={0}
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <Grid.Col span={3}>{headerNode}</Grid.Col>
          <Grid.Col span={1}>
            <Flex
              direction="row"
              justify={"flex-end"}
              align={"flex-end"}
              h="100%"
            >
              <Button orientation="down" size="sm" />
            </Flex>
          </Grid.Col>
        </Grid>
        {children}
        <Space h="2dvh" />
      </Stack>
    </Box>
  );
}

export function Year1800s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>1800s</Title>
      <Title order={3}>Serving Up a Taste of Home</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#8CF2E6" headerNode={headerNode}>
        <Image
          src="/images/street-to-table/1800s/1.webp"
          alt=""
          fit="cover"
          caption="A street hawker serving food on porcelain ware, c. 1965  | Ministry of Culture Collection, courtesy of National Archives of Singapore"
        />
        <Text>
          Food hawkers have been part of Singapore&apos;s landscape since its
          days as a port city. They used a variety of packaging, depending on
          the dishes sold. Materials extracted from nature, such as opeh and
          banana leaves, were used alongside porcelain crockery that were
          modelled after the ones in China, where the majority of immigrants in
          Singapore came from. The crockery was often painted with motifs such
          as flowers and roosters, designs that were used across Southeast Asia
          too.
        </Text>
        <Image
          src="/images/street-to-table/1800s/2.webp"
          alt=""
          fit="cover"
          caption="A porcelain bowl featuring Chinese motifs once used to sell laksa. | ROOTS"
        />
      </YearLayout>
    </>
  );
}

export function Year1900s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>1900s</Title>
      <Title order={3}>Battling the “Evils of Hawking”</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#CDBAFF" headerNode={headerNode}>
        <Text>
          While hawkers plied the city streets and brought about colourful
          sights and sounds, they also caused much concern for the authorities.
          Those selling food had no easy access to water or proper disposal
          facilities and posed a threat to public health and hygiene. They also
          obstructed traffic and attracted exploitation by secret societies.
        </Text>

        <Image
          src="/images/street-to-table/1900s/1.webp"
          alt=""
          fit="cover"
          caption="Hawkers on the streets of Singapore, 1920s | Courtesy of National Archives of Singapore"
        />

        <Text>
          As a result, the British colonial government launched various
          initiatives to counter the “evils of hawking”—as described in a 1931
          government report. They included licensing hawkers to restrict where
          and when they could operate, and later, building dedicated shelters
          for them. Such efforts were accelerated after Singapore gained
          independence in 1965 and sought to become a modern nation.
        </Text>

        <Image
          src="/images/street-to-table/1900s/2.webp"
          alt=""
          fit="cover"
          caption="Public health inspectors checking on the hygiene of street hawkers near Arab Street, 1963 | Ministry of Information and the Arts Collection, courtesy of National Archives of Singapore"
        />
      </YearLayout>
    </>
  );
}

export function Year1970s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>1970s</Title>
      <Title order={3}>A Crackdown for Better Hygiene</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#F8C40B" headerNode={headerNode}>
        <Text>
          Along with a nation-wide drive to resettle tens of thousands of street
          hawkers into government-built hawker centres, the 1973 Environmental
          Public Health (Food Handlers) Regulations were introduced to raise
          food hygiene standards. Some examples include restricting food
          handlers from preparing food with their bare hands or blowing open
          bags with their breath.
        </Text>

        <ScrollArea
          left={"0%"}
          w={"100%"}
          h={"auto"}
          style={{ overflowX: "scroll" }}
        >
          <Image
            src="/images/street-to-table/1970s/1.webp"
            alt=""
            fit="cover"
            style={{ width: "150%" }}
            caption="A series of pamphlets published by the Ministry of Environment in the 1970s. | Ministry of the Environment"
          />
        </ScrollArea>

        <Text>
          They could also no longer use chipped, broken or cracked plates, cups
          or saucers. Those caught breaking the law were fined S$500 for their
          first offence and paid double for the second. As a result, hawkers
          began seeking out more durable alternatives to porcelain tableware,
          which were prone to wear out under heavy use.
        </Text>

        <ScrollArea
          left={"0%"}
          w={"100%"}
          h={"auto"}
          style={{ overflowX: "scroll" }}
        >
          <Image
            src="/images/street-to-table/1970s/2.webp"
            alt=""
            fit="cover"
            style={{ width: "280%" }}
            caption="The 1973 food handling pamphlets outlined the new regulations, including avoiding the use of chipped or cracked tableware. | Ministry of the Environment"
          />
        </ScrollArea>

        <Title order={3}>“Miraculous” Melamine</Title>
        <Text>
          One popular solution with hawkers was tableware made out of melamine.
          The compound was first synthesised by German chemist Justus von Liebig
          in 1834, but it was only during the Second World War that melamine was
          used to mass-produce tableware for hospitals and troops due to a short
          supply of traditional materials such as metal.
        </Text>
        <Text>
          The popularity of such plastic tableware grew after the war,
          particularly with American families, as they were durable and came in
          all sorts of colours and patterns. Such “miraculous” qualities were
          touted by retailers in Singapore when they began importing the
          Australian-made British Plastics and Japanese Noritake melamine
          tableware in the 1960s.
        </Text>

        <Image
          src="/images/street-to-table/1970s/3.webp"
          alt=""
          fit="cover"
          caption="A 1974 advertisement in the Nanyang Siang Pau promoting Yee Cheong Plastic's new line of melamine tableware."
        />

        <Text>
          But it was the local plastic manufacturers—Hoover Melamine, Yee Cheong
          Plastic Manufacturers, Singa Plastics, Eagle and Hiap Huat Pottery
          (later renamed Landex)—who popularised their adoption in the 1970s. As
          part of a state-driven industrialisation drive, they expanded their
          product offerings to include melamine tableware that offered hawkers a
          more affordable and readily available supply. Although still more
          costly than porcelain tableware, hawkers made the switch since they
          lasted longer and were less likely to chip.
        </Text>
      </YearLayout>
    </>
  );
}

export function Year1980s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>1980s</Title>
      <Title order={3}>The Many Colours of Melamine</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#C8F255" headerNode={headerNode}>
        <Text>
          Local melamine tableware originally came in just a few colours, such
          as pink, blue and orange. However, a demand for more variety emerged
          in the 1970s as the government resettled hawkers from the streets into
          hawker centres. Tableware of different colours helped hawkers
          differentiate and retrieve their own used ones in centres that housed
          up to hundreds of stalls.
        </Text>

        <Image
          src="/images/street-to-table/1980s/1.webp"
          alt=""
          fit="cover"
          caption="A customer eating from orange melamine tableware at a hawker centre in the 1980s. | Singapore Tourist Promotion Board Collection, courtesy of National Archives of Singapore"
        />

        <Text>
          By 1987, when all street hawkers had been resettled, they could choose
          from over 10 colours of melamine tableware offered by local
          manufacturers, including red, purple, lemon green, dark green, white
          and cream.
        </Text>

        <Image
          src="/images/street-to-table/1980s/2.webp"
          alt=""
          fit="cover"
          caption="A page from a 1982 guide for food handlers, which showcases melamine tableware as an example of clean utensils. | Ministry of the Environment"
        />

        <Title order={3}>An Experiment with Disposables</Title>

        <Text>
          In 1987, the government rolled out a two-year pilot to use disposable
          tableware in five hawker centres, including Cuppage, Newton, Adam
          Road, Whitley Road and Serangoon Gardens.
        </Text>

        <Image
          src="/images/street-to-table/1980s/3.webp"
          alt=""
          fit="cover"
          caption="Tourists eating on disposable tableware at Newton Food Centre. | Singapore Tourist Promotion Board Collection, courtesy of National Archives of Singapore"
        />

        <Text>
          It was hoped that polystyrene plates and cups as well as plastic
          utensils could resolve the persistent hygiene problems by relieving
          hawkers off the need to wash their dishes. Many were struggling to
          hire assistants and dishwashers, and the lack of manpower meant used
          tableware was often left uncollected, which drew pests and deprived
          customers of clean tables. Hawkers pressed for time also washed their
          crockery poorly—simply dipping them into a pail of soap water that was
          used for the whole day.
        </Text>

        <Text>
          The pilot, however, ended with a return to the status quo as
          disposable tableware proved deeply unpopular. Customers found it
          difficult to cut food with plastic cutlery, and the light and airy
          tableware was easily blown off by the wind along with half eaten food
          and drinks. Many hawkers switched back to melamine tableware when the
          pilot ended.
        </Text>
      </YearLayout>
    </>
  );
}
export function Year1990s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>1990s</Title>
      <Title order={3}>The Return and Rise of Melamine</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#FFAB87" headerNode={headerNode}>
        <Text>
          The light and durable melamine tableware grew in popularity especially
          as self-service became the norm at hawker centres with the continuing
          manpower crunch. It even became a selling point for the privately-run
          Tanjong Pagar Food Court at Amara Shopping Centre who claimed that
          “[i]t&apos;s not only healthier to use Melamine and steel utensils but
          they are environment friendly too.”
        </Text>

        <Image
          src="/images/street-to-table/1990s-2000s/1.webp"
          alt=""
          fit="cover"
          caption="A 1994 newsletter from the Ministry of Environment featuring food on colourful melamine plates. | Ministry of the Environment"
        />

        <Text>
          Despite the unsuccessful disposable tableware pilot, the government
          continued exploring other ways to raise the hygiene standards of
          hawkers. It became mandatory in 1990 for all food sellers to attend a
          hygiene course. In 1997, an annual grading system for hygiene and
          cleanliness was introduced for all food establishments. To meet these
          rising hygiene standards, hawkers began outsourcing the collection of
          used tableware to cleaning service providers from the 2000s. The
          durability of melamine tableware, however, ensured they remained the
          default choice for hawkers despite the various policy changes.
        </Text>

        <Image
          src="/images/street-to-table/1990s-2000s/2.webp"
          alt=""
          fit="cover"
          caption="A government poster from the 2000s advocating ways to keep hawker centres clean. Note the depiction of melamine-like tableware and metal cutlery that had become the norm. | National Environment Agency"
        />
      </YearLayout>
    </>
  );
}

export function Year2010s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>2010s</Title>
      <Title order={3}>Streamlining at the New Hawker Centres</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#A5E6FE" headerNode={headerNode}>
        <Text>
          After a hiatus of 26 years, the government announced in 2011 that it
          would build hawker centres again. Such facilities offered Singaporeans
          access to a variety of affordable meals, created jobs for residents
          and had became part of everyday life in the city-state. A panel of
          experts was appointed to improve hawker centre operations. Their
          recommendations included appointing social enterprises to manage them,
          and to centralise dishwashing to ease the load of ageing hawkers.
        </Text>

        <Image
          src="/images/street-to-table/2010s/1.webp"
          alt=""
          fit="cover"
          caption="Opened in 2022, One Punggol Hawker Centre is part of a new generation of such facilities in Singapore."
        />

        <Text>
          One of the earliest new generation hawker centres to be completed in
          2015 was at Bukit Panjang and was run by NTUC Foodfare. Instead of the
          traditional array of colourful melamine tableware chosen by each
          hawker, the ones used in Bukit Panjang are in standardised white
          (non-halal) or grey (halal) emblazoned with the operator&apos;s logo.
          This practice was first popularised in the 1990s by food courts,
          essentially privately-run hawker centres, as they allowed for more
          efficient cleaning and distribution of tableware.
        </Text>

        <Image
          src="/images/street-to-table/2010s/2.webp"
          alt=""
          fit="cover"
          caption="Privately-run food courts such as the one at Junction 8 shopping mall in Bishan provided standardised tableware, c. 1990s. | Ministry of Information and the Arts Collection, courtesy of National Archives of Singapore"
        />
      </YearLayout>
    </>
  );
}

export function Year2020s() {
  const headerNode = (
    <Stack spacing={0}>
      <Title order={4}>2020s</Title>
      <Title order={3}>Colourful No More?</Title>
    </Stack>
  );
  return (
    <>
      <YearLayout bgColor="#FFA337" headerNode={headerNode}>
        <Text>
          The practice of having privately-run hawker centres has continued with
          the 11 new ones that have been built by the government since 2015.
          Many have taken up recommendations by the Hawker Centre 3.0 Committee
          appointed by the state in 2016, including centralising operations such
          as dishwashing to raise productivity. While such measures can help
          make the trade more sustainable, they have inadvertently taken away
          hawkers&apos; ability to make decisions independently, including the
          selection of their own tableware.
        </Text>

        <Image
          src="/images/street-to-table/2020s/1.gif"
          alt=""
          fit="cover"
          caption="Centralised dishwashing systems in new hawker centres have led to standardised coloured tableware."
        />
      </YearLayout>
    </>
  );
}
