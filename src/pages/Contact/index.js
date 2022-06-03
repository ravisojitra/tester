import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { List } from "components/List";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Row } from "components/Row";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";
import { Button } from "components/Button";

const ContactPage = () => {
  return (
    <>
      <Column
        className="bg-gray_51 font-opensans mx-[auto] w-[100%]"
        compId="25:2086"
        comWidth={1920}
        comHeight={3650}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="items-center justify-start w-[100%]"
          compId="885"
          comWidth={1920}
          comHeight={3068}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Stack
            className="3xl:h-[1128px] h-[1252px] lg:h-[731px] xl:h-[836px] 2xl:h-[940px] w-[100%]"
            compId="901"
            comWidth={1920}
            comHeight={1252}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Stack
              className="absolute 3xl:h-[1128px] h-[1252px] lg:h-[731px] xl:h-[836px] 2xl:h-[940px] inset-[0] w-[100%]"
              compId="903"
              comWidth={1920}
              comHeight={1252}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_background_16.svg"}
                className="absolute lg:h-[520px] xl:h-[594px] 2xl:h-[668px] 3xl:h-[802px] h-[890px] object-cover top-[0] w-[100%]"
                compId="37:117"
                comWidth={1920}
                comHeight={890}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="background"
              />
              <Stack
                className="absolute bottom-[0] lg:h-[455px] xl:h-[520px] 2xl:h-[585px] 3xl:h-[702px] h-[779px] inset-x-[0] mx-[auto] w-[70%]"
                compId="905"
                comWidth={1348}
                comHeight={779}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <div
                  className="absolute bg-white_A700 lg:h-[455px] xl:h-[520px] 2xl:h-[585px] 3xl:h-[702px] h-[779px] inset-x-[7%] inset-y-[0] rounded-radius20 shadow-bs1 w-[86%]"
                  compId="37:192"
                  comWidth={1154}
                  comHeight={779}
                  compLeft={97}
                  compRight={97}
                  compType="View"
                ></div>
                <Column
                  className="absolute bg-white_A700 inset-[0] items-start justify-start rounded-radius20 w-[100%]"
                  compId="877"
                  comWidth={1348}
                  comHeight={779}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] mt-[70px] w-[100%]"
                    compId="914"
                    comWidth={1348}
                    comHeight={280}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <List
                      className="xl:gap-[100px] 2xl:gap-[112px] 3xl:gap-[135px] gap-[150px] lg:gap-[87px] grid grid-cols-2 min-h-[auto] mx-[auto] w-[80%]"
                      compId="873"
                      comWidth={1080}
                      comHeight={115}
                      compLeft={10}
                      compRight={10}
                      compType="List"
                      orientation="horizontal"
                    >
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="37:57"
                        comWidth={465}
                        comHeight={115}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal font-opensans ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[18%]"
                          compId="37:60"
                          comWidth={85}
                          comHeight={32}
                          compLeft={2}
                          compRight={10}
                          compType="Text"
                        >{`Full Name`}</Text>
                        <Text
                          className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] text-black_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[34%]"
                          compId="37:61"
                          comWidth={159}
                          comHeight={32}
                          compLeft={2}
                          compRight={10}
                          compType="Text"
                        >{`Jimmy Newtron`}</Text>
                        <Column
                          className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                          compId="916"
                          comWidth={465}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Line
                            className="h-[1px] w-[100%]"
                            compId="37:58"
                            comWidth={465}
                            comHeight={1}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                        </Column>
                      </Column>
                      <Column
                        className="items-start justify-start w-[100%]"
                        compId="37:73"
                        comWidth={465}
                        comHeight={115}
                        compLeft={150}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal font-opensans ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[26%]"
                          compId="37:76"
                          comWidth={119}
                          comHeight={32}
                          compLeft={2.05}
                          compRight={10}
                          compType="Text"
                        >{`Email Address`}</Text>
                        <Text
                          className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] text-black_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[57%]"
                          compId="37:77"
                          comWidth={265}
                          comHeight={32}
                          compLeft={2.05}
                          compRight={10}
                          compType="Text"
                        >{`jimmynewtron@mail.com`}</Text>
                        <Column
                          className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                          compId="917"
                          comWidth={465}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Line
                            className="h-[1px] w-[100%]"
                            compId="37:74"
                            comWidth={465}
                            comHeight={1}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                        </Column>
                      </Column>
                    </List>
                    <Row
                      className="xl:gap-[100px] 2xl:gap-[112px] 3xl:gap-[135px] gap-[150px] lg:gap-[87px] grid grid-cols-2 items-center justify-between lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] mt-[50px] 3xl:pl-[118px] pl-[132px] lg:pl-[77px] xl:pl-[88px] 2xl:pl-[99px] 2xl:pr-[102px] 3xl:pr-[122px] pr-[136px] lg:pr-[79px] xl:pr-[90px] w-[100%]"
                      compId="874"
                      comWidth={1348}
                      comHeight={115}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="items-start w-[100%]"
                        compId="37:62"
                        comWidth={465}
                        comHeight={115}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal font-opensans ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[28%]"
                          compId="37:65"
                          comWidth={129}
                          comHeight={32}
                          compLeft={2}
                          compRight={10}
                          compType="Text"
                        >{`Phone Number`}</Text>
                        <Input
                          className="placeholder:bg-transparent bg-transparent border-0 border-b-[2px] border-gray_300 border-solid font-cairo font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] lg:pb-[17px] xl:pb-[20px] 2xl:pb-[22px] 3xl:pb-[27px] pb-[30px] pl-[1px] xl:pt-[2px] lg:pt-[2px] 3xl:pt-[3px] 2xl:pt-[3px] pt-[4px] placeholder:text-black_900 text-black_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[100%]"
                          compId="39"
                          comWidth={465}
                          comHeight={58}
                          compLeft={0}
                          compRight={0}
                          compType="EditText"
                          name="Group39"
                          placeholder={`+12 3456 789`}
                        ></Input>
                      </Column>
                      <Column
                        className="items-start w-[100%]"
                        compId="37:78"
                        comWidth={465}
                        comHeight={115}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal font-opensans ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[29%]"
                          compId="37:81"
                          comWidth={136}
                          comHeight={32}
                          compLeft={2.05}
                          compRight={10}
                          compType="Text"
                        >{`Company Name`}</Text>
                        <Text
                          className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] text-black_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[42%]"
                          compId="37:82"
                          comWidth={195}
                          comHeight={32}
                          compLeft={2.05}
                          compRight={10}
                          compType="Text"
                        >{`Workgroup Studios`}</Text>
                        <Column
                          className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                          compId="918"
                          comWidth={465}
                          comHeight={1}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Line
                            className="h-[1px] w-[100%]"
                            compId="37:79"
                            comWidth={465}
                            comHeight={1}
                            compLeft={0}
                            compRight={0}
                            compType="Line"
                          />
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-normal lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] mt-[50px] 2xl:mx-[100px] 3xl:mx-[120px] mx-[134px] lg:mx-[78px] xl:mx-[89px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[5%]"
                    compId="37:70"
                    comWidth={74}
                    comHeight={32}
                    compLeft={134}
                    compRight={134}
                    compType="Text"
                  >{`Message`}</Text>
                  <Stack
                    className="font-cairo lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] 2xl:mx-[100px] 3xl:mx-[120px] mx-[134px] lg:mx-[78px] xl:mx-[89px] w-[12%]"
                    compId="907"
                    comWidth={168}
                    comHeight={32}
                    compLeft={134}
                    compRight={134}
                    compType="Stack"
                  >
                    <Text
                      className="absolute font-semibold inset-[0] text-black_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[100%]"
                      compId="37:71"
                      comWidth={168}
                      comHeight={32}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Dear Sir/Madam`}</Text>
                    <Line
                      className="absolute bg-bluegray_700 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] inset-y-[0] my-[auto] right-[1%] w-[2px]"
                      compId="37:72"
                      comWidth={2}
                      comHeight={24}
                      compLeft={0}
                      compRight={1}
                      compType="Line"
                    />
                  </Stack>
                  <Column
                    className="items-center lg:mb-[55px] xl:mb-[63px] 2xl:mb-[71px] 3xl:mb-[85px] mb-[95px] lg:mt-[43px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[67px] mt-[75px] w-[100%]"
                    compId="915"
                    comWidth={1348}
                    comHeight={120}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Line
                      className="h-[2px] mx-[auto] w-[80%]"
                      compId="37:68"
                      comWidth={1080}
                      comHeight={2}
                      compLeft={10}
                      compRight={10}
                      compType="Line"
                    />
                    <Row
                      className="items-center justify-between lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[49px] w-[100%]"
                      compId="875"
                      comWidth={1348}
                      comHeight={69}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <CheckBox
                        className="font-normal font-opensans mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 3xl:ml-[118px] ml-[132px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[17%]"
                        inputClassName="2xl:h-[31px] 2xl:w-[30px] 3xl:h-[37px] 3xl:w-[36px] border-2 border-gray_700 border-solid h-[40px] lg:h-[24px] lg:w-[23px] rounded-radius4 w-[40px] xl:h-[27px] xl:w-[26px] mr-[5px]"
                        compId="40"
                        comWidth={235}
                        comHeight={40}
                        compLeft={132}
                        compRight={0}
                        compType="CheckBox"
                        name="Group40"
                        label={`Accept terms & conditions`}
                      ></CheckBox>
                      <Button
                        className="bg-bluegray_700 font-bold font-cairo 2xl:mr-[102px] 3xl:mr-[122px] mr-[136px] lg:mr-[79px] xl:mr-[90px] lg:pb-[11px] xl:pb-[13px] 2xl:pb-[14px] 3xl:pb-[17px] pb-[19.545px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[13px] 3xl:pt-[16px] pt-[18.545px] rounded-radius95 text-bluegray_50 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[19%]"
                        compId="37:51"
                        comWidth={257}
                        comHeight={69}
                        compLeft={0}
                        compRight={136}
                        compType="Button"
                      >{`SEND`}</Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <header
                className="absolute font-cairo top-[0] w-[100%]"
                compId="38"
                comWidth={1920}
                comHeight={130}
                compLeft={0}
                compRight={0}
                compType="Header"
              >
                <Column
                  className="bg-bluegray_700 w-[100%]"
                  compId="872"
                  comWidth={1920}
                  comHeight={130}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                    compId="871"
                    comWidth={1920}
                    comHeight={100}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] mb-[47px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[2%]"
                      compId="37:173"
                      comWidth={47}
                      comHeight={34}
                      compLeft={150}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Row
                      className="items-center justify-center lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] mb-[47px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[9%]"
                      compId="37:175"
                      comWidth={165}
                      comHeight={34}
                      compLeft={49}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[85%]"
                        compId="37:176"
                        comWidth={141}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Program & Events`}</Text>
                      <Image
                        src={"images/img_chevron1_11.svg"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        compId="37:177"
                        comWidth={16}
                        comHeight={16}
                        compLeft={8}
                        compRight={0}
                        compType="Image"
                        alt="chevron1"
                      />
                    </Row>
                    <Column
                      className="lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[5%]"
                      compId="171:28"
                      comWidth={91}
                      comHeight={81}
                      compLeft={38}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="items-start w-[100%]"
                        compId="919"
                        comWidth={91}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mr-[11px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[75%]"
                          compId="37:179"
                          comWidth={68}
                          comHeight={34}
                          compLeft={12}
                          compRight={11}
                          compType="Text"
                        >{`Contacts`}</Text>
                      </Column>
                      <div
                        className="bg-gray_300 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] h-[5px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] w-[100%]"
                        compId="37:174"
                        comWidth={91}
                        comHeight={5}
                        compLeft={0}
                        compRight={0}
                        compType="View"
                      ></div>
                    </Column>
                    <Image
                      src={"images/img_logo_8.svg"}
                      className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] lg:ml-[187px] xl:ml-[214px] 2xl:ml-[240px] 3xl:ml-[289px] ml-[321px] object-contain w-[10%]"
                      compId="37:184"
                      comWidth={198}
                      comHeight={72}
                      compLeft={321}
                      compRight={0}
                      compType="Image"
                      alt="logo"
                    />
                    <Row
                      className="items-center justify-center lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[34px] lg:ml-[182px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] ml-[312px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[21%]"
                      compId="912"
                      comWidth={399}
                      comHeight={60}
                      compLeft={312}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold 3xl:my-[11px] my-[13px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[38%]"
                        compId="37:183"
                        comWidth={150}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Career Oppurtunity`}</Text>
                      <Image
                        src={"images/img_search91_5.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="37:180"
                        comWidth={24}
                        comHeight={24}
                        compLeft={30}
                        compRight={0}
                        compType="Image"
                        alt="search91"
                      />
                      <Button
                        className="bg-gray_300_33 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[41%]"
                        compId="37:169"
                        comWidth={163}
                        comHeight={60}
                        compLeft={32}
                        compRight={0}
                        compType="Button"
                      >{`Join Now`}</Button>
                    </Row>
                  </Row>
                  <Line
                    className="bg-bluegray_600 h-[1px] w-[100%]"
                    compId="37:168"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
              </header>
            </Stack>
            <Column
              className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[20%] w-[34%]"
              compId="37:135"
              comWidth={658}
              comHeight={156}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-lora text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[100%]"
                compId="37:136"
                comWidth={658}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Contact Us`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] mx-[auto] not-italic text-center xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-white_A700 w-[81%]"
                compId="37:137"
                comWidth={531}
                comHeight={56}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            </Column>
          </Stack>
          <Stack
            className="font-lora lg:h-[404px] xl:h-[462px] 2xl:h-[519px] 3xl:h-[623px] h-[691px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] mx-[auto] w-[84%]"
            compId="909"
            comWidth={1611}
            comHeight={691}
            compLeft={10}
            compRight={10}
            compType="Stack"
          >
            <Image
              src={"images/img_map.svg"}
              className="absolute lg:h-[269px] xl:h-[307px] 2xl:h-[346px] 3xl:h-[415px] h-[460px] object-cover top-[0] w-[100%]"
              compId="37:108"
              comWidth={1611}
              comHeight={460}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="map"
            />
            <Column
              className="absolute bg-white_A700 bottom-[0] items-start justify-center lg:py-[35px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[54px] py-[60px] right-[8%] rounded-radius20 shadow-bs1 w-[42%]"
              compId="896"
              comWidth={669}
              comHeight={514}
              compLeft={0}
              compRight={136}
              compType="Column"
            >
              <Text
                className="capitalize font-bold lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] text-black_902 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left w-[41%]"
                compId="37:193"
                comWidth={271}
                comHeight={80}
                compLeft={60}
                compRight={60}
                compType="Text"
              >{`Our Locations`}</Text>
              <Row
                className="font-cairo items-center justify-start lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] w-[68%]"
                compId="37:85"
                comWidth={458}
                comHeight={90}
                compLeft={60}
                compRight={60}
                compType="Row"
              >
                <Image
                  src={"images/img_icon_16.svg"}
                  className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] h-[65px] mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] object-contain lg:w-[37px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px] w-[65px]"
                  compId="37:87"
                  comWidth={65}
                  comHeight={65}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Text
                  className="font-semibold leading-lh lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] text-black_902 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[81%]"
                  compId="37:86"
                  comWidth={369}
                  comHeight={90}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >
                  {
                    <>
                      {`832  Thompson Drive, San Fransisco`}
                      <br />
                      {`CA 94107, United States`}
                    </>
                  }
                </Text>
              </Row>
              <Row
                className="font-cairo items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] w-[41%]"
                compId="37:93"
                comWidth={275}
                comHeight={65}
                compLeft={60}
                compRight={60}
                compType="Row"
              >
                <Image
                  src={"images/img_icon_17.svg"}
                  className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] h-[65px] object-contain lg:w-[37px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px] w-[65px]"
                  compId="37:95"
                  comWidth={65}
                  comHeight={65}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Text
                  className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-black_902 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[68%]"
                  compId="37:94"
                  comWidth={186}
                  comHeight={45}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`+123 345123 556`}</Text>
              </Row>
              <Row
                className="font-cairo items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] w-[45%]"
                compId="37:100"
                comWidth={304}
                comHeight={65}
                compLeft={60}
                compRight={60}
                compType="Row"
              >
                <Image
                  src={"images/img_icon_18.svg"}
                  className="lg:h-[38px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] h-[65px] object-contain lg:w-[37px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px] w-[65px]"
                  compId="37:102"
                  comWidth={65}
                  comHeight={65}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="icon"
                />
                <Text
                  className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] text-black_902 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[71%]"
                  compId="37:101"
                  comWidth={215}
                  comHeight={45}
                  compLeft={24}
                  compRight={0}
                  compType="Text"
                >{`support@elmna.com`}</Text>
              </Row>
            </Column>
          </Stack>
          <Column
            className="bg-gray_51 font-lora items-center justify-start xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] mt-[160px] lg:mt-[93px] w-[100%]"
            compId="898"
            comWidth={1920}
            comHeight={359}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] text-black_902 text-center lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 w-[12%]"
              compId="25:2224"
              comWidth={236}
              comHeight={38}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Our Partnership`}</Text>
            <Image
              src={"images/img_clientlogo_3.svg"}
              className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60.94px] lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84.06px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] mt-[95px] mx-[auto] object-contain w-[68%]"
              compId="25:2206"
              comWidth={1308.32}
              comHeight={60.94}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="clientLogo"
            />
          </Column>
          <Stack
            className="bg-black_900 font-lora lg:h-[214px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] h-[366px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
            compId="911"
            comWidth={1920}
            comHeight={366}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_maskgroup_5.svg"}
              className="absolute lg:h-[214px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] h-[366px] inset-[0] object-cover w-[100%]"
              compId="25:2173"
              comWidth={1920}
              comHeight={366}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="MaskGroup"
            />
            <Row
              className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
              compId="880"
              comWidth={1619}
              comHeight={152}
              compLeft={152}
              compRight={149}
              compType="Row"
            >
              <Text
                className="font-normal lg:leading-lh44 xl:leading-lh50 2xl:leading-lh57 3xl:leading-lh68 leading-lh7600 not-italic lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-left text-white_A700 w-[49%]"
                compId="25:2188"
                comWidth={789}
                comHeight={152}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
              <Row
                className="bg-black_900 border border-gray_300 border-solid font-cairo items-center justify-between lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] rounded-radius60 w-[34%]"
                compId="879"
                comWidth={546}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:mb-[10px] xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[18px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_600 text-left w-[37%]"
                  compId="25:2184"
                  comWidth={200}
                  comHeight={34}
                  compLeft={37}
                  compRight={0}
                  compType="Text"
                >{`Enter your email address...`}</Text>
                <Button
                  className="bg-bluegray_700 font-bold mr-[10.21px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] my-[10px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius37 shadow-bs2 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[36%]"
                  compId="25:2185"
                  comWidth={196.79}
                  comHeight={60}
                  compLeft={0}
                  compRight={10.21}
                  compType="Button"
                >{`SUBSCRIBE`}</Button>
              </Row>
            </Row>
          </Stack>
        </Column>
        <footer
          className="font-cairo w-[100%]"
          compId="25:2089"
          comWidth={1920}
          comHeight={583}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-white_A700 items-center justify-end w-[100%]"
            compId="899"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start 2xl:mt-[101px] 3xl:mt-[121px] mt-[135px] lg:mt-[78px] xl:mt-[90px] mx-[auto] w-[84%]"
              compId="25:2102"
              comWidth={1610}
              comHeight={303}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Column
                className="items-start justify-start w-[33%]"
                compId="25:2103"
                comWidth={530}
                comHeight={303}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_logo_9.svg"}
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                  compId="25:2104"
                  comWidth={198}
                  comHeight={72}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="logo"
                />
                <Text
                  className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[100%]"
                  compId="25:2112"
                  comWidth={530}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                <Column
                  className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                  compId="920"
                  comWidth={530}
                  comHeight={99}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="889"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[12%]"
                      compId="25:2126"
                      comWidth={66}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[100%]"
                      compId="921"
                      comWidth={530}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="888"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_social01_3.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                          compId="25:2115"
                          comWidth={12.08}
                          comHeight={22.15}
                          compLeft={5}
                          compRight={0}
                          compType="Image"
                          alt="social01"
                        />
                        <Image
                          src={"images/img_social03_3.svg"}
                          className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                          compId="25:2119"
                          comWidth={51}
                          comHeight={51}
                          compLeft={48.92}
                          compRight={0}
                          compType="Image"
                          alt="social03"
                        />
                        <Image
                          src={"images/img_social02_3.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                          compId="25:2117"
                          comWidth={31.47}
                          comHeight={22.66}
                          compLeft={40.29}
                          compRight={0}
                          compType="Image"
                          alt="social02"
                        />
                        <Image
                          src={"images/img_social04_3.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.6px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                          compId="25:2122"
                          comWidth={24.17}
                          comHeight={23.16}
                          compLeft={51.6}
                          compRight={0}
                          compType="Image"
                          alt="social04"
                        />
                        <Image
                          src={"images/img_social05_3.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                          compId="25:2124"
                          comWidth={22.15}
                          comHeight={22.15}
                          compLeft={57.64}
                          compRight={0}
                          compType="Image"
                          alt="social05"
                        />
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[6%]"
                compId="25:2162"
                comWidth={99}
                comHeight={216}
                compLeft={104}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                  compId="25:2163"
                  comWidth={99}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Why Elmna`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="25:2164"
                  comWidth={88}
                  comHeight={162}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[1px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[99%]"
                    compId="25:2165"
                    comWidth={87}
                    comHeight={30}
                    compLeft={0}
                    compRight={1}
                    compType="Text"
                  >{`About elmna`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[81%]"
                    compId="25:2166"
                    comWidth={71}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Enterprise`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[100%]"
                    compId="25:2167"
                    comWidth={88}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Alumni Story`}</Text>
                  <Text
                    className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[90%]"
                    compId="25:2168"
                    comWidth={79}
                    comHeight={30}
                    compLeft={0}
                    compRight={9}
                    compType="Text"
                  >{`Community`}</Text>
                </Column>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] ml-[164px] lg:ml-[95px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[6%]"
                compId="25:2154"
                comWidth={90}
                comHeight={260}
                compLeft={164}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                  compId="25:2161"
                  comWidth={90}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Resources`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="25:2155"
                  comWidth={80}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[86%]"
                    compId="25:2156"
                    comWidth={69}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Download`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[100%]"
                    compId="25:2157"
                    comWidth={80}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Help Center`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[59%]"
                    compId="25:2158"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Events`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[59%]"
                    compId="25:2159"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Guides`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[65%]"
                    compId="25:2160"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Partner`}</Text>
                </Column>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[6%]"
                compId="25:2146"
                comWidth={100}
                comHeight={260}
                compLeft={124}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                  compId="25:2153"
                  comWidth={100}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Community`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                  compId="25:2147"
                  comWidth={72}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[85%]"
                    compId="25:2148"
                    comWidth={61}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About us`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[100%]"
                    compId="25:2149"
                    comWidth={72}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact us`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[51%]"
                    compId="25:2150"
                    comWidth={37}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Login`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[72%]"
                    compId="25:2151"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Sign Up`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[39%]"
                    compId="25:2152"
                    comWidth={28}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`FAQ`}</Text>
                </Column>
              </Column>
              <Column
                className="items-start justify-start lg:mb-[43px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] 3xl:ml-[102px] ml-[114px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[18%]"
                compId="25:2127"
                comWidth={285}
                comHeight={226}
                compLeft={114}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[62%]"
                  compId="25:2128"
                  comWidth={176}
                  comHeight={37}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Get in Touch with Us`}</Text>
                <Column
                  className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                  compId="922"
                  comWidth={285}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start w-[100%]"
                    compId="25:2129"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_pin51_5.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:2131"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="pin51"
                    />
                    <Text
                      className="font-semibold leading-lh xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[86%]"
                      compId="25:2130"
                      comWidth={246}
                      comHeight={60}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >
                      {
                        <>
                          {`832  Thompson Drive, San Fransisco`}
                          <br />
                          {`CA 94107, United States`}
                        </>
                      }
                    </Text>
                  </Row>
                </Column>
                <Row
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[57%]"
                  compId="25:2134"
                  comWidth={163}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_telephonecall_7.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="25:2136"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="telephonecall"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[76%]"
                    compId="25:2135"
                    comWidth={124}
                    comHeight={30}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`+123 345123 556`}</Text>
                </Row>
                <Row
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[64%]"
                  compId="25:2140"
                  comWidth={183}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_inbox21_6.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="25:2142"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="inbox21"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[79%]"
                    compId="25:2141"
                    comWidth={144}
                    comHeight={30}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`support@elmna.com`}</Text>
                </Row>
              </Column>
            </Row>
            <Column
              className="bg-white_A700 items-center justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
              compId="890"
              comWidth={1920}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-gray_100_14 h-[1px] w-[100%]"
                compId="25:2098"
                comWidth={1920}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Row
                className="items-center justify-start xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] mx-[auto] lg:my-[15px] w-[84%]"
                compId="25:2093"
                comWidth={1620}
                comHeight={30}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-semibold text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[23%]"
                  compId="25:2099"
                  comWidth={372}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                <Row
                  className="items-center justify-center lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[227px] ml-[253px] w-[23%]"
                  compId="913"
                  comWidth={367}
                  comHeight={30}
                  compLeft={253}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[11%]"
                    compId="25:2096"
                    comWidth={41}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[8%]"
                    compId="25:2095"
                    comWidth={28}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`FAQ`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[25%]"
                    compId="25:2094"
                    comWidth={92}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Privacy Policy`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[15%]"
                    compId="25:2097"
                    comWidth={56}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Sitemap`}</Text>
                </Row>
                <Text
                  className="font-semibold lg:ml-[257px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[398px] ml-[442px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-right w-[11%]"
                  compId="25:2101"
                  comWidth={186}
                  comHeight={30}
                  compLeft={442}
                  compRight={0}
                  compType="Text"
                >{`Made with ♥ by Peterdraw`}</Text>
              </Row>
            </Column>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ContactPage;
