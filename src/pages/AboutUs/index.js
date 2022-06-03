import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Input } from "components/Input";
import { Grid } from "components/Grid";

const AboutUsPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="25:314"
        comWidth={1920}
        comHeight={8902}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <header
          className="w-[100%]"
          compId="12"
          comWidth={1920}
          comHeight={130}
          compLeft={0}
          compRight={0}
          compType="Header"
        >
          <Column
            className="bg-bluegray_700 w-[100%]"
            compId="331"
            comWidth={1920}
            comHeight={130}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-between lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
              compId="330"
              comWidth={1920}
              comHeight={100}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start 2xl:ml-[106px] 3xl:ml-[127px] ml-[142px] lg:ml-[82px] xl:ml-[94px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] w-[22%]"
                compId="327"
                comWidth={420}
                comHeight={81}
                compLeft={142}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="items-center w-[100%]"
                  compId="483"
                  comWidth={420}
                  comHeight={34}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] w-[98%]"
                    compId="25:723"
                    comWidth={412}
                    comHeight={34}
                    compLeft={8}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="cursor-pointer hover:font-bold font-bold text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[11%]"
                      compId="25:722"
                      comWidth={47}
                      comHeight={34}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="cursor-pointer hover:font-bold font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[34%]"
                      compId="25:724"
                      comWidth={141}
                      comHeight={34}
                      compLeft={49}
                      compRight={0}
                      compType="Text"
                    >{`Program & Events`}</Text>
                    <Image
                      src={"images/img_chevron1_2.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="25:725"
                      comWidth={16}
                      comHeight={16}
                      compLeft={8}
                      compRight={0}
                      compType="Image"
                      alt="chevron1"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-bold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[25%]"
                      compId="25:728"
                      comWidth={101}
                      comHeight={34}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Alumni Story`}</Text>
                  </Row>
                </Column>
                <div
                  className="bg-gray_300 lg:h-[3px] 2xl:h-[4px] xl:h-[4px] h-[5px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] mt-[42px] w-[15%]"
                  compId="36:236"
                  comWidth={63}
                  comHeight={5}
                  compLeft={0}
                  compRight={10}
                  compType="View"
                ></div>
              </Column>
              <Image
                src={"images/img_logo_2.svg"}
                className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] object-contain w-[10%]"
                compId="25:729"
                comWidth={198}
                comHeight={72}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="logo"
              />
              <Row
                className="items-center justify-center lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[34px] xl:mr-[100px] 2xl:mr-[112px] 3xl:mr-[135px] mr-[150px] lg:mr-[87px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[21%]"
                compId="481"
                comWidth={399}
                comHeight={60}
                compLeft={0}
                compRight={150}
                compType="Row"
              >
                <Text
                  className="font-bold 3xl:my-[11px] my-[13px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[38%]"
                  compId="25:4744"
                  comWidth={150}
                  comHeight={34}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Career Oppurtunity`}</Text>
                <Image
                  src={"images/img_search91_1.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="25:719"
                  comWidth={24}
                  comHeight={24}
                  compLeft={30}
                  compRight={0}
                  compType="Image"
                  alt="search91"
                />
                <Button
                  className="bg-gray_300_33 font-bold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[41%]"
                  compId="25:712"
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
              compId="25:711"
              comWidth={1920}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
          </Column>
        </header>
        <Column
          className="font-lora w-[100%]"
          compId="380"
          comWidth={1920}
          comHeight={8190}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Stack
            className="lg:h-[294px] xl:h-[336px] 2xl:h-[378px] 3xl:h-[454px] h-[503.45px] w-[100%]"
            compId="430"
            comWidth={1920}
            comHeight={503.45}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_background_7.svg"}
              className="absolute lg:h-[294px] xl:h-[336px] 2xl:h-[378px] 3xl:h-[454px] h-[503.45px] inset-[0] object-cover w-[100%]"
              compId="25:655"
              comWidth={1920}
              comHeight={503.45}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="background"
            />
            <Column
              className="absolute bottom-[26%] inset-x-[0] items-center justify-start mx-[auto] w-[34%]"
              compId="25:696"
              comWidth={658}
              comHeight={154.6}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-lora text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[100%]"
                compId="25:697"
                comWidth={658}
                comHeight={79.28}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`About Us`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19.83px] mx-[auto] not-italic text-center xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-white_A700 w-[81%]"
                compId="25:707"
                comWidth={531}
                comHeight={55.5}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            </Column>
          </Stack>
          <Column
            className="bg-white_A700 items-center justify-start 3xl:mt-[107px] mt-[118.93px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="29:6"
            comWidth={1920}
            comHeight={887.98}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="capitalize font-bold font-lora lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] mt-[59.46px] mx-[auto] text-black_902 text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 w-[28%]"
              compId="36:381"
              comWidth={531}
              comHeight={79.28}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Our History`}</Text>
            <Stack
              className="lg:h-[183px] xl:h-[209px] 2xl:h-[236px] 3xl:h-[283px] h-[313.17004px] lg:mt-[57px] xl:mt-[66px] 2xl:mt-[74px] 3xl:mt-[89px] mt-[99.11px] mx-[auto] w-[84%]"
              compId="432"
              comWidth={1619}
              comHeight={313.17004}
              compLeft={10}
              compRight={10}
              compType="Stack"
            >
              <Line
                className="absolute bg-gray_300 h-[3.96px] inset-x-[0] mx-[auto] top-[25%] w-[78%]"
                compId="36:427"
                comWidth={1268}
                comHeight={3.96}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <List
                className="absolute gap-[0] grid grid-cols-5 inset-[0] min-h-[auto] w-[100%]"
                compId="29:109"
                comWidth={1619}
                comHeight={313.17}
                compLeft={0}
                compRight={0}
                compType="List"
                orientation="horizontal"
              >
                <Column
                  className="items-center justify-start rounded-radius2 w-[100%]"
                  compId="386"
                  comWidth={324}
                  comHeight={313.17}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_7.svg"}
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90.19px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.71px] mx-[auto] object-contain w-[28%]"
                    compId="29:112"
                    comWidth={91}
                    comHeight={90.19}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-bold font-lora lg:leading-lh19 xl:leading-lh22 2xl:leading-lh25 3xl:leading-lh30 leading-lh3400 lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[44.59px] mx-[auto] text-bluegray_800 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[55%]"
                    compId="29:116"
                    comWidth={178}
                    comHeight={67.39}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`University Graduated`}</Text>
                  <Text
                    className="font-cairo font-normal lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40.63px] mt-[10.91px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic text-bluegray_800 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[84%]"
                    compId="29:115"
                    comWidth={273}
                    comHeight={27.75}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1892`}</Text>
                </Column>
                <Column
                  className="items-center justify-start rounded-radius2 w-[100%]"
                  compId="387"
                  comWidth={324}
                  comHeight={313.17}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_8.svg"}
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90.19px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.71px] mx-[auto] object-contain w-[28%]"
                    compId="29:126"
                    comWidth={91}
                    comHeight={90.19}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-bold font-lora lg:leading-lh19 xl:leading-lh22 2xl:leading-lh25 3xl:leading-lh30 leading-lh3400 lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[44.59px] mx-[auto] text-bluegray_800 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[84%]"
                    compId="29:130"
                    comWidth={272}
                    comHeight={67.39}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Relations Program Launched`}</Text>
                  <Text
                    className="font-cairo font-normal lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40.63px] mt-[10.91px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic text-bluegray_800 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[84%]"
                    compId="29:129"
                    comWidth={273}
                    comHeight={27.75}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1894`}</Text>
                </Column>
                <Column
                  className="items-center justify-start rounded-radius2 w-[100%]"
                  compId="388"
                  comWidth={323}
                  comHeight={313.17}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_9.svg"}
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90.19px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.71px] mx-[auto] object-contain w-[28%]"
                    compId="29:119"
                    comWidth={91}
                    comHeight={90.19}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-bold font-lora lg:leading-lh19 xl:leading-lh22 2xl:leading-lh25 3xl:leading-lh30 leading-lh3400 lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[44.59px] mx-[auto] text-bluegray_800 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[82%]"
                    compId="29:123"
                    comWidth={264}
                    comHeight={67.39}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Bimonthly Magazine Launched`}</Text>
                  <Text
                    className="font-cairo font-normal lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40.63px] mt-[10.91px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic text-bluegray_800 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[85%]"
                    compId="29:122"
                    comWidth={273}
                    comHeight={27.75}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1977`}</Text>
                </Column>
                <Column
                  className="items-center justify-start rounded-radius2 w-[100%]"
                  compId="389"
                  comWidth={324}
                  comHeight={313.17}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_10.svg"}
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90.19px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.71px] mx-[auto] object-contain w-[28%]"
                    compId="29:133"
                    comWidth={91}
                    comHeight={90.19}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-bold font-lora lg:leading-lh19 xl:leading-lh22 2xl:leading-lh25 3xl:leading-lh30 leading-lh3400 lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[44.59px] mx-[auto] text-bluegray_800 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[76%]"
                    compId="29:137"
                    comWidth={247}
                    comHeight={67.39}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Alumni Official Site Launched`}</Text>
                  <Text
                    className="font-cairo font-normal lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40.63px] mt-[10.91px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic text-bluegray_800 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[84%]"
                    compId="29:136"
                    comWidth={273}
                    comHeight={27.75}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`1999`}</Text>
                </Column>
                <Column
                  className="items-center justify-start rounded-radius2 w-[100%]"
                  compId="390"
                  comWidth={324}
                  comHeight={313.17}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_icon_11.svg"}
                    className="lg:h-[53px] xl:h-[61px] 2xl:h-[68px] 3xl:h-[82px] h-[90.19px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.71px] mx-[auto] object-contain w-[28%]"
                    compId="29:140"
                    comWidth={91}
                    comHeight={90.19}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="icon"
                  />
                  <Text
                    className="font-bold font-lora lg:leading-lh19 xl:leading-lh22 2xl:leading-lh25 3xl:leading-lh30 leading-lh3400 lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] mt-[44.59px] mx-[auto] text-bluegray_800 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[68%]"
                    compId="29:147"
                    comWidth={219}
                    comHeight={67.39}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Worldwide Study Program`}</Text>
                  <Text
                    className="font-cairo font-normal lg:mb-[23px] xl:mb-[27px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40.63px] mt-[10.91px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic text-bluegray_800 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[84%]"
                    compId="29:146"
                    comWidth={273}
                    comHeight={27.75}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`2002`}</Text>
                </Column>
              </List>
            </Stack>
            <Text
              className="font-cairo font-normal lg:leading-lh23 xl:leading-lh26 2xl:leading-lh30 3xl:leading-lh36 leading-lh4000 lg:mb-[46px] xl:mb-[52px] 2xl:mb-[59px] 3xl:mb-[71px] mb-[79.29px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] mt-[59.46px] mx-[auto] not-italic text-black_901 text-center lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 w-[70%]"
              compId="29:5"
              comWidth={1348}
              comHeight={198.21}
              compLeft={10}
              compRight={10}
              compType="Text"
            >
              {
                <>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
                  <br />
                  {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia co`}
                </>
              }
            </Text>
          </Column>
          <Stack
            className="3xl:h-[1089px] h-[1209.08px] lg:h-[706px] xl:h-[807px] 2xl:h-[908px] 3xl:mt-[107px] mt-[118.92px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="434"
            comWidth={1920}
            comHeight={1209.08}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_image_5.svg"}
              className="absolute lg:h-[518px] xl:h-[593px] 2xl:h-[667px] 3xl:h-[800px] h-[887.98px] object-cover top-[0] w-[100%]"
              compId="29:196"
              comWidth={1920}
              comHeight={887.98}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="image"
            />
            <Stack
              className="absolute bottom-[0] h-[1052.49px] lg:h-[614px] xl:h-[703px] 2xl:h-[790px] 3xl:h-[948px] inset-x-[0] mx-[auto] w-[70%]"
              compId="436"
              comWidth={1348}
              comHeight={1052.49}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute bg-gray_300 bottom-[0] lg:h-[493px] xl:h-[564px] 2xl:h-[634px] 3xl:h-[761px] h-[844.3701px] rounded-radius20 w-[100%]"
                compId="438"
                comWidth={1348}
                comHeight={844.3701}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_2.svg"}
                  className="absolute lg:h-[493px] xl:h-[564px] 2xl:h-[634px] 3xl:h-[761px] h-[844.37px] inset-[0] object-cover w-[100%]"
                  compId="36:114"
                  comWidth={1348}
                  comHeight={844.37}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Column
                  className="absolute bottom-[7%] inset-x-[0] items-center justify-start mx-[auto] w-[71%]"
                  compId="393"
                  comWidth={951}
                  comHeight={622.37}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-cairo font-semibold mx-[auto] text-bluegray_700 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 uppercase w-[23%]"
                    compId="36:112"
                    comWidth={221}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Grandmaster Talk`}</Text>
                  <Text
                    className="capitalize font-bold font-lora lg:leading-lh52 xl:leading-lh60 2xl:leading-lh67 3xl:leading-lh81 leading-lh9000 lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] text-black_900 text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 w-[100%]"
                    compId="36:113"
                    comWidth={951}
                    comHeight={178.39}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Education is a progressive discovery of our own ignorance`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 w-[85%]"
                    compId="36:109"
                    comWidth={805}
                    comHeight={158.57}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}</Text>
                  <Image
                    src={"images/img_william_1.svg"}
                    className="lg:h-[38px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] h-[63.43px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] mt-[74.33px] mx-[auto] object-contain w-[17%]"
                    compId="36:111"
                    comWidth={161}
                    comHeight={63.43}
                    compLeft={10}
                    compRight={10}
                    compType="Image"
                    alt="William"
                  />
                  <Text
                    className="font-cairo font-normal mb-[0] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] not-italic text-black_902 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[12%]"
                    compId="36:110"
                    comWidth={113}
                    comHeight={31.71}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`William Durant`}</Text>
                </Column>
              </Stack>
              <Image
                src={"images/img_profile_1.svg"}
                className="absolute lg:h-[196px] xl:h-[224px] 2xl:h-[252px] 3xl:h-[302px] h-[334.51px] inset-x-[0] mx-[auto] object-contain top-[0] w-[25%]"
                compId="36:132"
                comWidth={337.53}
                comHeight={334.51}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="profile"
              />
            </Stack>
          </Stack>
          <Row
            className="bg-white_A700 items-end justify-evenly 3xl:mt-[107px] mt-[118.92px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="340"
            comWidth={1920}
            comHeight={828.51}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Column
              className="items-start justify-start lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[33.46px] mt-[104.06px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[35%]"
              compId="339"
              comWidth={666}
              comHeight={690.99}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="capitalize font-bold font-lora lg:leading-lh46 xl:leading-lh53 2xl:leading-lh60 3xl:leading-lh72 leading-lh8000 mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-black_902 lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-left w-[80%]"
                compId="25:598"
                comWidth={531}
                comHeight={158.57}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Elmna’s Program & Services`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.75px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[100%]"
                compId="25:568"
                comWidth={666}
                comHeight={95.14}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo`}</Text>
              <Row
                className="font-cairo items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.73px] w-[65%]"
                compId="25:4785"
                comWidth={434}
                comHeight={33.7}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_check41.svg"}
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.79px] mb-[4.96px] mt-[4.95px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[6%]"
                  compId="25:4780"
                  comWidth={24}
                  comHeight={23.79}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="check41"
                />
                <Text
                  className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[89%]"
                  compId="25:4784"
                  comWidth={387}
                  comHeight={33.7}
                  compLeft={23}
                  compRight={0}
                  compType="Text"
                >{`Ut enim ad minim veniam, quis nostrud exercitatio`}</Text>
              </Row>
              <Row
                className="font-cairo items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.87px] lg:mt-[8px] xl:mt-[9px] w-[52%]"
                compId="25:4792"
                comWidth={347}
                comHeight={33.7}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_check41_1.svg"}
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.79px] mb-[4.96px] mt-[4.95px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[7%]"
                  compId="25:4794"
                  comWidth={24}
                  comHeight={23.79}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="check41"
                />
                <Text
                  className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[86%]"
                  compId="25:4793"
                  comWidth={300}
                  comHeight={33.7}
                  compLeft={23}
                  compRight={0}
                  compType="Text"
                >{`Quis nostruction sit amet adipiscing elit`}</Text>
              </Row>
              <Row
                className="font-cairo items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.87px] lg:mt-[8px] xl:mt-[9px] w-[47%]"
                compId="25:4798"
                comWidth={312}
                comHeight={33.7}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_check41_2.svg"}
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.79px] mb-[4.96px] mt-[4.95px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[8%]"
                  compId="25:4800"
                  comWidth={24}
                  comHeight={23.79}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="check41"
                />
                <Text
                  className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[85%]"
                  compId="25:4799"
                  comWidth={265}
                  comHeight={33.7}
                  compLeft={23}
                  compRight={0}
                  compType="Text"
                >{`Sed do eismod tempor exercitation`}</Text>
              </Row>
              <Row
                className="font-cairo items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[13.87px] lg:mt-[8px] xl:mt-[9px] w-[54%]"
                compId="25:4786"
                comWidth={361}
                comHeight={33.7}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Image
                  src={"images/img_check41_3.svg"}
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[22px] h-[23.79px] mb-[4.96px] mt-[4.95px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] object-contain w-[7%]"
                  compId="25:4788"
                  comWidth={24}
                  comHeight={23.79}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="check41"
                />
                <Text
                  className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[87%]"
                  compId="25:4787"
                  comWidth={314}
                  comHeight={33.7}
                  compLeft={23}
                  compRight={0}
                  compType="Text"
                >{`Laboris magna aliqua elit ut labore dolore`}</Text>
              </Row>
              <Column
                className="font-cairo lg:mt-[32px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[49px] mt-[55.49px] w-[100%]"
                compId="484"
                comWidth={666}
                comHeight={59.45996}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start w-[100%]"
                  compId="333"
                  comWidth={666}
                  comHeight={59.45996}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="bg-bluegray_700 font-bold leading-lh pb-[12.869873px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] pt-[12.890137px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius58 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[39%]"
                    compId="25:4754"
                    comWidth={262}
                    comHeight={59.46}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Join Elma’s Program`}</Text>
                  <div className="2xl:ml-[14px] 3xl:ml-[17px] bg-transparent border-0 lg:ml-[11px] ml-[19px] w-[36%] xl:ml-[12px] input-wrap">
                    <Image
                      src={"images/img_vector_1.svg"}
                      className="absolute left-[35.26999px] bg-transparent border-0 lg:left-[20px] xl:left-[23px] 2xl:left-[26px] 3xl:left-[31px] my-[auto] inset-y-[0]"
                      compId="25:4865"
                      comWidth={21.45}
                      comHeight={23.79}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Input
                      className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-bold pb-[19.375px] lg:pl-[53px] xl:pl-[61px] 2xl:pl-[69px] 3xl:pl-[82px] pl-[91.98998999999998px] pt-[19.385px] lg:py-[11px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius58 placeholder:text-black_900 text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                      compId="13"
                      comWidth={0}
                      comHeight={59.46}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group13"
                      placeholder={`Watch Videos`}
                    ></Input>
                  </div>
                </Row>
              </Column>
              <Column
                className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.72px] w-[100%]"
                compId="485"
                comWidth={666}
                comHeight={56.71997}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_circleelement_2.svg"}
                  className="lg:h-[34px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] h-[56.72px] 3xl:mx-[11px] mx-[13.32px] lg:mx-[7px] xl:mx-[8px] 2xl:mx-[9px] object-contain w-[11%]"
                  compId="25:576"
                  comWidth={74.68}
                  comHeight={56.72}
                  compLeft={13.32}
                  compRight={13.32}
                  compType="Image"
                  alt="circleElement"
                />
              </Column>
            </Column>
            <Stack
              className="lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] h-[706.62px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[33.69px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] mt-[88.2px] w-[42%]"
              compId="440"
              comWidth={805}
              comHeight={706.62}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_image_6.svg"}
                className="absolute lg:h-[413px] xl:h-[472px] 2xl:h-[531px] 3xl:h-[637px] h-[706.62px] object-contain right-[0] w-[58%]"
                compId="27:5"
                comWidth={467}
                comHeight={706.62}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="image"
              />
              <Image
                src={"images/img_image_7.svg"}
                className="absolute bottom-[13%] lg:h-[223px] xl:h-[255px] 2xl:h-[287px] 3xl:h-[344px] h-[381.55px] left-[0] object-contain w-[58%]"
                compId="27:12"
                comWidth={467}
                comHeight={381.55}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="image"
              />
            </Stack>
          </Row>
          <Column
            className="bg-gray_300 items-center justify-start 3xl:mt-[107px] mt-[118.93px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="396"
            comWidth={1920}
            comHeight={355.79}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[80.27px] mx-[auto] text-center lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 text-gray_700 w-[12%]"
              compId="25:452"
              comWidth={236}
              comHeight={37.66}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Our Partnership`}</Text>
            <Image
              src={"images/img_clientlogo_1.svg"}
              className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60.39px] lg:mb-[48px] xl:mb-[55px] 2xl:mb-[62px] 3xl:mb-[75px] mb-[83.32px] lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] mt-[94.15px] mx-[auto] object-contain w-[68%]"
              compId="25:434"
              comWidth={1308.32}
              comHeight={60.39}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="clientLogo"
            />
          </Column>
          <Stack
            className="font-cairo lg:h-[375px] xl:h-[429px] 2xl:h-[482px] 3xl:h-[579px] h-[642.2002px] 3xl:mt-[107px] mt-[118.92px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="442"
            comWidth={1920}
            comHeight={642.2002}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_background_8.svg"}
              className="absolute lg:h-[375px] xl:h-[429px] 2xl:h-[482px] 3xl:h-[579px] h-[642.2px] inset-[0] object-cover w-[100%]"
              compId="25:504"
              comWidth={1920}
              comHeight={642.2}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="background"
            />
            <Row
              className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[84%]"
              compId="348"
              comWidth={1620}
              comHeight={523.27}
              compLeft={150}
              compRight={150}
              compType="Row"
            >
              <Column
                className="items-start justify-start xl:mb-[108px] 2xl:mb-[121px] 3xl:mb-[146px] mb-[162.52px] lg:mb-[94px] 3xl:mt-[11px] mt-[12.89px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[33%]"
                compId="36:139"
                comWidth={533}
                comHeight={347.86}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-black_902 lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-left w-[87%]"
                  compId="25:560"
                  comWidth={462}
                  comHeight={76.31}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Why Join Elmna`}</Text>
                <Text
                  className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[30.72px] not-italic text-black_902 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                  compId="25:559"
                  comWidth={533}
                  comHeight={126.85}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen`}</Text>
                <Text
                  className="border border-bluegray_700 border-solid font-bold font-cairo leading-lh mb-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[49px] mt-[54.51px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] 3xl:py-[11px] py-[12.879883px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius58 text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[37%]"
                  compId="29:197"
                  comWidth={197}
                  comHeight={59.46}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Learn More`}</Text>
              </Column>
              <Grid
                className="lg:gap-[22px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[34px] gap-[38px] grid grid-cols-2 3xl:ml-[108px] ml-[121px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] w-[60%]"
                compId="479"
                comWidth={966}
                comHeight={523.27}
                compLeft={121}
                compRight={0}
                compType="Grid"
              >
                <Stack
                  className="lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77002px] w-[100%]"
                  compId="444"
                  comWidth={460}
                  comHeight={246.77002}
                  compLeft={0}
                  compRight={506}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] w-[100%]"
                    compId="446"
                    comWidth={460}
                    comHeight={246.77}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-white_A700 lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] rounded-radius8 w-[100%]"
                      compId="25:506"
                      comWidth={460}
                      comHeight={246.77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="absolute items-start justify-start top-[16%] w-[100%]"
                      compId="448"
                      comWidth={460}
                      comHeight={146.68}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_12.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80.27px] lg:mb-[38px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] mb-[66.41px] object-contain w-[18%]"
                        compId="25:508"
                        comWidth={81}
                        comHeight={80.27}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Text
                        className="font-semibold lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63.43px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[74%]"
                        compId="25:511"
                        comWidth={341}
                        comHeight={83.25}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Row>
                  </Stack>
                  <Text
                    className="absolute font-bold left-[26%] text-black_900 lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 text-left top-[21%] w-[33%]"
                    compId="25:507"
                    comWidth={152}
                    comHeight={31.71}
                    compLeft={119}
                    compRight={0}
                    compType="Text"
                  >{`Guaranteed`}</Text>
                </Stack>
                <Stack
                  className="lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77002px] w-[100%]"
                  compId="450"
                  comWidth={460}
                  comHeight={246.77002}
                  compLeft={498}
                  compRight={8}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] w-[100%]"
                    compId="452"
                    comWidth={460}
                    comHeight={246.77}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-white_A700 lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] rounded-radius8 w-[100%]"
                      compId="25:543"
                      comWidth={460}
                      comHeight={246.77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="absolute items-start justify-start top-[16%] w-[100%]"
                      compId="454"
                      comWidth={460}
                      comHeight={146.68}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_13.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80.27px] lg:mb-[38px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] mb-[66.41px] object-contain w-[18%]"
                        compId="25:545"
                        comWidth={81}
                        comHeight={80.27}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Text
                        className="font-semibold lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63.43px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[74%]"
                        compId="25:548"
                        comWidth={341}
                        comHeight={83.25}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Row>
                  </Stack>
                  <Text
                    className="absolute font-bold inset-x-[0] mx-[auto] text-black_900 lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 text-left top-[21%] w-[max-content]"
                    compId="25:544"
                    comWidth={209}
                    comHeight={31.71}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Strong Together`}</Text>
                </Stack>
                <Stack
                  className="lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77002px] w-[100%]"
                  compId="456"
                  comWidth={460}
                  comHeight={246.77002}
                  compLeft={0}
                  compRight={506}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] w-[100%]"
                    compId="458"
                    comWidth={460}
                    comHeight={246.77}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-white_A700 lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] rounded-radius8 w-[100%]"
                      compId="25:513"
                      comWidth={460}
                      comHeight={246.77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="absolute items-start justify-start top-[16%] w-[100%]"
                      compId="460"
                      comWidth={460}
                      comHeight={146.67}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_14.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80.27px] lg:mb-[38px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] mb-[66.4px] object-contain w-[18%]"
                        compId="25:515"
                        comWidth={81}
                        comHeight={80.27}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Text
                        className="font-semibold lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63.42px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[74%]"
                        compId="25:521"
                        comWidth={341}
                        comHeight={83.25}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Row>
                  </Stack>
                  <Text
                    className="absolute font-bold left-[26%] text-black_900 lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 text-left top-[21%] w-[25%]"
                    compId="25:514"
                    comWidth={113}
                    comHeight={31.71}
                    compLeft={119}
                    compRight={0}
                    compType="Text"
                  >{`Learning`}</Text>
                </Stack>
                <Stack
                  className="lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77002px] w-[100%]"
                  compId="462"
                  comWidth={460}
                  comHeight={246.77002}
                  compLeft={498}
                  compRight={8}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] w-[100%]"
                    compId="464"
                    comWidth={460}
                    comHeight={246.77}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-white_A700 lg:h-[144px] xl:h-[165px] 2xl:h-[186px] 3xl:h-[223px] h-[246.77px] inset-[0] rounded-radius8 w-[100%]"
                      compId="25:550"
                      comWidth={460}
                      comHeight={246.77}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="absolute items-start justify-start top-[16%] w-[100%]"
                      compId="466"
                      comWidth={460}
                      comHeight={146.67}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icon_15.svg"}
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80.27px] lg:mb-[38px] xl:mb-[44px] 2xl:mb-[49px] 3xl:mb-[59px] mb-[66.4px] object-contain w-[18%]"
                        compId="25:552"
                        comWidth={81}
                        comHeight={80.27}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icon"
                      />
                      <Text
                        className="font-semibold lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:mt-[36px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] mt-[63.42px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[74%]"
                        compId="25:558"
                        comWidth={341}
                        comHeight={83.25}
                        compLeft={38}
                        compRight={0}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Row>
                  </Stack>
                  <Text
                    className="absolute font-bold left-[26%] text-black_900 lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 text-left top-[21%] w-[35%]"
                    compId="25:551"
                    comWidth={161}
                    comHeight={31.71}
                    compLeft={119}
                    compRight={0}
                    compType="Text"
                  >{`Big Network`}</Text>
                </Stack>
              </Grid>
            </Row>
          </Stack>
          <Stack
            className="2xl:h-[1100px] 3xl:h-[1320px] h-[1464.77px] lg:h-[855px] xl:h-[978px] 3xl:mt-[107px] mt-[118.92px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="468"
            comWidth={1920}
            comHeight={1464.77}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_background_9.svg"}
              className="absolute 2xl:h-[1100px] 3xl:h-[1320px] h-[1464.77px] lg:h-[855px] xl:h-[978px] inset-[0] object-cover w-[100%]"
              compId="36:142"
              comWidth={1920}
              comHeight={1464.77}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="background"
            />
            <Column
              className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
              compId="360"
              comWidth={1620}
              comHeight={1335.92}
              compLeft={150}
              compRight={150}
              compType="Column"
            >
              <Text
                className="capitalize font-bold font-lora mx-[auto] text-black_902 text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 w-[40%]"
                compId="36:144"
                comWidth={647}
                comHeight={79.28}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Elmna’s Team Member`}</Text>
              <Text
                className="font-cairo font-normal leading-lh lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.75px] mx-[auto] not-italic text-bluegray_800 text-center xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 w-[39%]"
                compId="36:143"
                comWidth={635}
                comHeight={59.46}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
              <Grid
                className="font-cairo lg:gap-[21px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[33px] gap-[37.639984px] grid grid-cols-5 lg:mt-[34px] xl:mt-[39px] 2xl:mt-[43px] 3xl:mt-[52px] mt-[58.47px] w-[100%]"
                compId="480"
                comWidth={1620}
                comHeight={1110.96}
                compLeft={0}
                compRight={0}
                compType="Grid"
              >
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="401"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={0}
                  compRight={1326.11}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:149"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[51%]"
                    compId="36:148"
                    comWidth={149.19}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Angela Moss`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="402"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={331.53}
                  compRight={994.58}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_1.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:161"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[50%]"
                    compId="36:160"
                    comWidth={145.82}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Brian Corner`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="403"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={663.06}
                  compRight={663.05}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_2.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:155"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[55%]"
                    compId="36:154"
                    comWidth={161.53}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Randy Orthon`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="404"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={994.58}
                  compRight={331.53}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_3.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:167"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[47%]"
                    compId="36:166"
                    comWidth={137.97}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Louis Vegas`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="405"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={1326.11}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_4.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:173"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[47%]"
                    compId="36:172"
                    comWidth={139.09}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Kevin Smith`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="406"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={0}
                  compRight={1326.11}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_5.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:179"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.81px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[78%]"
                    compId="36:178"
                    comWidth={229}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Lois Hermawan`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="407"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={331.53}
                  compRight={994.58}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_6.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:191"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.81px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[50%]"
                    compId="36:190"
                    comWidth={145.82}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Jackie Kun`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="408"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={663.06}
                  compRight={663.05}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_7.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:185"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.81px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[55%]"
                    compId="36:184"
                    comWidth={161.53}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Taki Hiroshima`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="409"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={994.58}
                  compRight={331.53}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_8.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:197"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.81px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[47%]"
                    compId="36:196"
                    comWidth={137.97}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Mahmud`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="410"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={1326.11}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_9.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:203"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.81px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.78px] mx-[auto] text-bluegray_700 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[47%]"
                    compId="36:202"
                    comWidth={139.09}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Roberto`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="411"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={0}
                  compRight={1326.11}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_10.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:209"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[51%]"
                    compId="36:208"
                    comWidth={149.19}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Daniel Davinci`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="412"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={331.53}
                  compRight={994.58}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_11.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:221"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[71%]"
                    compId="36:220"
                    comWidth={209}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Valentino Pedro`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="413"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={663.06}
                  compRight={663.05}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_12.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:215"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[55%]"
                    compId="36:214"
                    comWidth={161.53}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Fanny`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="414"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={994.58}
                  compRight={331.53}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_13.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:227"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[47%]"
                    compId="36:226"
                    comWidth={137.97}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Erick Law`}</Text>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer items-center justify-start rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="415"
                  comWidth={293.89}
                  comHeight={343.89}
                  compLeft={1326.11}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_profilepicture_14.svg"}
                    className="lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] h-[254.7px] object-cover rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                    compId="36:233"
                    comWidth={293.89}
                    comHeight={254.7}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="profilePicture"
                  />
                  <Text
                    className="font-bold lg:mb-[12px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20.8px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] mx-[auto] text-black_900 text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 w-[47%]"
                    compId="36:232"
                    comWidth={139.09}
                    comHeight={44.6}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`Tommy`}</Text>
                </Column>
              </Grid>
            </Column>
          </Stack>
          <Stack
            className="font-cairo lg:h-[276px] xl:h-[316px] 2xl:h-[355px] 3xl:h-[426px] h-[472.72998px] 3xl:mt-[107px] mt-[118.92px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="470"
            comWidth={1920}
            comHeight={472.72998}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Image
              src={"images/img_background_10.svg"}
              className="absolute lg:h-[276px] xl:h-[316px] 2xl:h-[355px] 3xl:h-[426px] h-[472.73px] inset-[0] object-cover w-[100%]"
              compId="36:238"
              comWidth={1920}
              comHeight={472.73}
              compLeft={0}
              compRight={0}
              compType="Image"
              alt="background"
            />
            <Stack
              className="absolute lg:h-[207px] xl:h-[237px] 2xl:h-[266px] 3xl:h-[319px] h-[353.8px] inset-[0] justify-center m-[auto] w-[86%]"
              compId="472"
              comWidth={1654}
              comHeight={353.8}
              compLeft={150}
              compRight={116}
              compType="Stack"
            >
              <Column
                className="absolute items-start justify-start right-[6%] w-[50%]"
                compId="362"
                comWidth={826}
                comHeight={353.8}
                compLeft={0}
                compRight={99}
                compType="Column"
              >
                <Image
                  src={"images/img_.svg"}
                  className="lg:h-[31px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] h-[52.53px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[8%]"
                  compId="36:241"
                  comWidth={68}
                  comHeight={52.53}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt=""
                />
                <Column
                  className="items-center lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] mt-[42.61px] w-[100%]"
                  compId="486"
                  comWidth={826}
                  comHeight={258.65967}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic text-bluegray_800 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[97%]"
                    compId="36:240"
                    comWidth={805}
                    comHeight={138.75}
                    compLeft={10}
                    compRight={0}
                    compType="Text"
                  >{`“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur”`}</Text>
                  <Row
                    className="items-center justify-between mb-[0] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.74px] w-[100%]"
                    compId="361"
                    comWidth={826}
                    comHeight={92.16992}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Row
                      className="items-end justify-between lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] w-[37%]"
                      compId="417"
                      comWidth={303}
                      comHeight={92.17}
                      compLeft={21}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_placeholder.png"}
                        className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[84px] h-[92.17px] object-contain rounded-radius58 w-[31%]"
                        compId="36:246"
                        comWidth={93}
                        comHeight={92.17}
                        compLeft={0}
                        compRight={0}
                        compType="CircleImage"
                        alt="placeholder"
                      />
                      <Column
                        className="items-start justify-start xl:mb-[1px] lg:mb-[1px] mb-[2.97px] 3xl:mb-[2px] 2xl:mb-[2px] 3xl:mt-[10px] mt-[11.9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[58%]"
                        compId="416"
                        comWidth={176}
                        comHeight={77.299805}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold font-lora text-bluegray_800 lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-left w-[100%]"
                          compId="36:245"
                          comWidth={176}
                          comHeight={35.68}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Jonathan Lee`}</Text>
                        <Text
                          className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 3xl:mt-[10px] mt-[11.89px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_800 text-left w-[50%]"
                          compId="36:247"
                          comWidth={88}
                          comHeight={29.73}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Joe’s Parents`}</Text>
                      </Column>
                    </Row>
                    <Image
                      src={"images/img_rating.svg"}
                      className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] h-[33.7px] lg:mb-[16px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28.74px] lg:mt-[17px] 2xl:mt-[22px] 3xl:mt-[26px] mt-[29.73px] xl:my-[19px] object-contain w-[22%]"
                      compId="36:248"
                      comWidth={178}
                      comHeight={33.7}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="rating"
                    />
                  </Row>
                </Column>
              </Column>
              <Row
                className="absolute bottom-[3%] items-start justify-between w-[100%]"
                compId="368"
                comWidth={1654}
                comHeight={296.31982}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[35%]"
                  compId="36:292"
                  comWidth={584}
                  comHeight={296.32}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="capitalize font-bold font-lora mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-black_902 lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-left w-[63%]"
                    compId="36:263"
                    comWidth={369}
                    comHeight={79.28}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Testimonials`}</Text>
                  <Text
                    className="font-cairo font-normal leading-lh lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] mt-[31.71px] not-italic text-bluegray_800 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[100%]"
                    compId="36:262"
                    comWidth={584}
                    comHeight={52.53}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
                  <Stack
                    className="font-cairo lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67.39px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] mt-[65.41px] w-[57%]"
                    compId="474"
                    comWidth={335}
                    comHeight={67.39}
                    compLeft={0}
                    compRight={10}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_placeholder_1.png"}
                      className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67.39px] left-[0] object-contain rounded-radius66 w-[20%]"
                      compId="36:275"
                      comWidth={68}
                      comHeight={67.39}
                      compLeft={0}
                      compRight={0}
                      compType="CircleImage"
                      alt="placeholder"
                    />
                    <Image
                      src={"images/img_placeholder_2.png"}
                      className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67.39px] left-[16%] object-contain rounded-radius66 w-[21%]"
                      compId="36:276"
                      comWidth={69}
                      comHeight={67.39}
                      compLeft={53}
                      compRight={0}
                      compType="CircleImage"
                      alt="placeholder"
                    />
                    <Image
                      src={"images/img_placeholder_3.png"}
                      className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67.39px] left-[32%] object-contain rounded-radius66 w-[20%]"
                      compId="36:277"
                      comWidth={68}
                      comHeight={67.39}
                      compLeft={107}
                      compRight={0}
                      compType="CircleImage"
                      alt="placeholder"
                    />
                    <Image
                      src={"images/img_placeholder_4.png"}
                      className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67.39px] object-contain right-[32%] rounded-radius66 w-[21%]"
                      compId="36:278"
                      comWidth={69}
                      comHeight={67.39}
                      compLeft={0}
                      compRight={106}
                      compType="CircleImage"
                      alt="placeholder"
                    />
                    <Image
                      src={"images/img_placeholder_5.png"}
                      className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[67.39px] object-contain right-[16%] rounded-radius66 w-[20%]"
                      compId="36:279"
                      comWidth={68}
                      comHeight={67.39}
                      compLeft={0}
                      compRight={53}
                      compType="CircleImage"
                      alt="placeholder"
                    />
                    <Text
                      className="absolute bg-gray_300 font-bold leading-lh outline outline-[4px] outline-white_A700 pb-[16.850098px] 2xl:pl-[10px] 3xl:pl-[12px] pl-[14px] lg:pl-[8px] xl:pl-[9px] pt-[16.839844px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] right-[0] rounded-radius66 text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[20%]"
                      compId="10"
                      comWidth={68}
                      comHeight={67.39}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`24k+`}</Text>
                  </Stack>
                </Column>
                <Image
                  src={"images/img_navigation.svg"}
                  className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[59px] h-[64.42px] 2xl:mb-[104px] 3xl:mb-[125px] mb-[139.74px] lg:mb-[81px] xl:mb-[93px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] mt-[92.16px] object-contain w-[62%]"
                  compId="36:293"
                  comWidth={1028}
                  comHeight={64.42}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="navigation"
                />
              </Row>
            </Stack>
          </Stack>
          <Stack
            className="font-lora lg:h-[510px] xl:h-[584px] 2xl:h-[657px] 3xl:h-[788px] h-[874.1001px] 3xl:mt-[107px] mt-[118.93px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]"
            compId="476"
            comWidth={1920}
            comHeight={874.1001}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Stack
              className="absolute lg:h-[510px] xl:h-[584px] 2xl:h-[657px] 3xl:h-[788px] h-[874.1px] inset-[0] w-[100%]"
              compId="478"
              comWidth={1920}
              comHeight={874.1}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_background_11.svg"}
                className="absolute bottom-[0] lg:h-[390px] xl:h-[446px] 2xl:h-[502px] 3xl:h-[602px] h-[667.96px] object-cover w-[100%]"
                compId="25:399"
                comWidth={1920}
                comHeight={667.96}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="background"
              />
              <Row
                className="absolute bg-bluegray_700 inset-x-[0] items-center justify-center mx-[auto] rounded-radius6 top-[0] w-[84%]"
                compId="370"
                comWidth={1620}
                comHeight={362.72}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:leading-lh44 xl:leading-lh50 2xl:leading-lh57 3xl:leading-lh68 leading-lh7600 my-[106.04px] lg:my-[61px] xl:my-[70px] 2xl:my-[79px] 3xl:my-[95px] not-italic lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-left text-white_A700 w-[39%]"
                  compId="25:4834"
                  comWidth={639}
                  comHeight={150.64}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                <Row
                  className="border border-gray_300 border-solid font-cairo items-center justify-center xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:my-[106px] 3xl:my-[127px] my-[141.72px] lg:my-[82px] xl:my-[94px] rounded-radius60 w-[34%]"
                  compId="369"
                  comWidth={546}
                  comHeight={79.28}
                  compLeft={163}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[16px] mb-[17.83px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27.75px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 text-left w-[37%]"
                    compId="25:4830"
                    comWidth={200}
                    comHeight={33.7}
                    compLeft={37}
                    compRight={0}
                    compType="Text"
                  >{`Enter your email address...`}</Text>
                  <Button
                    className="bg-gray_300 font-bold ml-[102px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[91px] mr-[10.21px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.91px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[13px] pb-[15.415px] lg:pb-[8px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] 2xl:pt-[10px] 3xl:pt-[12px] pt-[13.435px] lg:pt-[7px] xl:pt-[8px] rounded-radius37 shadow-bs2 text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[36%]"
                    compId="25:4831"
                    comWidth={196.79}
                    comHeight={59.46}
                    compLeft={102}
                    compRight={10.21}
                    compType="Button"
                  >{`SUBSCRIBE`}</Button>
                </Row>
              </Row>
            </Stack>
            <Column
              className="absolute bottom-[12%] inset-x-[0] items-center justify-start mx-[auto] w-[42%]"
              compId="372"
              comWidth={805}
              comHeight={329.03}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-lora font-normal mx-[auto] not-italic text-center lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-white_A700 w-[98%]"
                compId="25:416"
                comWidth={789}
                comHeight={75.32}
                compLeft={8}
                compRight={8}
                compType="Text"
              >{`Get our mobile apps now free`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[21.81px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[100%]"
                compId="25:4814"
                comWidth={805}
                comHeight={95.14}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`}</Text>
              <Row
                className="font-lato lg:gap-[18px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] gap-[31px] grid grid-cols-2 items-center justify-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[61.44px] w-[100%]"
                compId="371"
                comWidth={805}
                comHeight={75.32031}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="bg-gray_300 items-start justify-center rounded-radius6 w-[100%]"
                  compId="424"
                  comWidth={231}
                  comHeight={75.32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_2.svg"}
                    className="lg:h-[22px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[34px] h-[37.66px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[21.8px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] mt-[15.86px] lg:mt-[9px] object-contain w-[13%]"
                    compId="25:4808"
                    comWidth={30}
                    comHeight={37.66}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] mb-[15.85px] lg:mb-[9px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] mt-[10.9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                    compId="423"
                    comWidth={107}
                    comHeight={48.569824}
                    compLeft={22}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic text-black_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[100%]"
                      compId="25:4807"
                      comWidth={107}
                      comHeight={23.79}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Download on the`}</Text>
                    <Text
                      className="font-black mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[1px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[84%]"
                      compId="25:4806"
                      comWidth={90}
                      comHeight={23.79}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`App Store`}</Text>
                  </Column>
                </Row>
                <Row
                  className="bg-gray_300 items-end justify-center rounded-radius6 w-[100%]"
                  compId="426"
                  comWidth={231}
                  comHeight={75.32}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_3.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[24px] 3xl:h-[29px] h-[31.71px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.82px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] mt-[23.79px] object-contain w-[11%]"
                    compId="25:4813"
                    comWidth={26}
                    comHeight={31.71}
                    compLeft={25}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[11px] 3xl:mb-[14px] mb-[15.85px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[44px] mr-[49px] mt-[10.9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                    compId="425"
                    comWidth={107}
                    comHeight={48.569824}
                    compLeft={24}
                    compRight={49}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-black_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[63%]"
                      compId="25:4812"
                      comWidth={67}
                      comHeight={23.79}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`GET IT ON`}</Text>
                    <Text
                      className="font-black mt-[1px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                      compId="25:4811"
                      comWidth={107}
                      comHeight={23.79}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Google Play`}</Text>
                  </Column>
                </Row>
              </Row>
            </Column>
          </Stack>
        </Column>
        <footer
          className="font-cairo w-[100%]"
          compId="25:317"
          comWidth={1920}
          comHeight={583}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-black_900 items-center justify-start w-[100%]"
            compId="25:319"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Line
              className="bg-gray_100_14 h-[1px] w-[100%]"
              compId="25:4835"
              comWidth={1920}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-start justify-start 2xl:mt-[100px] 3xl:mt-[120px] mt-[134px] lg:mt-[78px] xl:mt-[89px] mx-[auto] w-[84%]"
              compId="25:330"
              comWidth={1610}
              comHeight={303}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Column
                className="items-start justify-start w-[33%]"
                compId="25:331"
                comWidth={530}
                comHeight={303}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_logo_3.svg"}
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                  compId="25:332"
                  comWidth={198}
                  comHeight={72}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="logo"
                />
                <Text
                  className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[100%]"
                  compId="25:340"
                  comWidth={530}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                <Column
                  className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                  compId="487"
                  comWidth={530}
                  comHeight={99}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="384"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[12%]"
                      compId="25:354"
                      comWidth={66}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[100%]"
                      compId="488"
                      comWidth={530}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="383"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_social01.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                          compId="25:343"
                          comWidth={12.08}
                          comHeight={22.15}
                          compLeft={5}
                          compRight={0}
                          compType="Image"
                          alt="social01"
                        />
                        <Image
                          src={"images/img_social03.svg"}
                          className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                          compId="25:347"
                          comWidth={51}
                          comHeight={51}
                          compLeft={48.92}
                          compRight={0}
                          compType="Image"
                          alt="social03"
                        />
                        <Image
                          src={"images/img_social02.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                          compId="25:345"
                          comWidth={31.47}
                          comHeight={22.66}
                          compLeft={40.29}
                          compRight={0}
                          compType="Image"
                          alt="social02"
                        />
                        <Image
                          src={"images/img_social04.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.6px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                          compId="25:350"
                          comWidth={24.17}
                          comHeight={23.16}
                          compLeft={51.6}
                          compRight={0}
                          compType="Image"
                          alt="social04"
                        />
                        <Image
                          src={"images/img_social05.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                          compId="25:352"
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
                compId="25:390"
                comWidth={99}
                comHeight={216}
                compLeft={104}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                  compId="25:391"
                  comWidth={99}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Why Elmna`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="25:392"
                  comWidth={88}
                  comHeight={162}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[1px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[99%]"
                    compId="25:393"
                    comWidth={87}
                    comHeight={30}
                    compLeft={0}
                    compRight={1}
                    compType="Text"
                  >{`About elmna`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[81%]"
                    compId="25:394"
                    comWidth={71}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Enterprise`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                    compId="25:395"
                    comWidth={88}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Alumni Story`}</Text>
                  <Text
                    className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[90%]"
                    compId="25:396"
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
                compId="25:382"
                comWidth={90}
                comHeight={260}
                compLeft={164}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                  compId="25:389"
                  comWidth={90}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Resources`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="25:383"
                  comWidth={80}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[86%]"
                    compId="25:384"
                    comWidth={69}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Download`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                    compId="25:385"
                    comWidth={80}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Help Center`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[59%]"
                    compId="25:386"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Events`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[59%]"
                    compId="25:387"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Guides`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[65%]"
                    compId="25:388"
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
                compId="25:374"
                comWidth={100}
                comHeight={260}
                compLeft={124}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                  compId="25:381"
                  comWidth={100}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Community`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                  compId="25:375"
                  comWidth={72}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[85%]"
                    compId="25:376"
                    comWidth={61}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About us`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                    compId="25:377"
                    comWidth={72}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact us`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[51%]"
                    compId="25:378"
                    comWidth={37}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Login`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[72%]"
                    compId="25:379"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Sign Up`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[39%]"
                    compId="25:380"
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
                compId="25:355"
                comWidth={285}
                comHeight={226}
                compLeft={114}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[62%]"
                  compId="25:356"
                  comWidth={176}
                  comHeight={37}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Get in Touch with Us`}</Text>
                <Column
                  className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                  compId="489"
                  comWidth={285}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start w-[100%]"
                    compId="25:357"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_pin51_1.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:359"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="pin51"
                    />
                    <Text
                      className="font-semibold leading-lh xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[86%]"
                      compId="25:358"
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
                  compId="25:362"
                  comWidth={163}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_telephonecall_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="25:364"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="telephonecall"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[76%]"
                    compId="25:363"
                    comWidth={124}
                    comHeight={30}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`+123 345123 556`}</Text>
                </Row>
                <Row
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[64%]"
                  compId="25:368"
                  comWidth={183}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_inbox21_2.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="25:370"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="inbox21"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[79%]"
                    compId="25:369"
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
              className="bg-black_900 items-center justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
              compId="385"
              comWidth={1920}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-gray_100_14 h-[1px] w-[100%]"
                compId="25:326"
                comWidth={1920}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Row
                className="items-center justify-start xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] mx-[auto] lg:my-[15px] w-[84%]"
                compId="25:321"
                comWidth={1620}
                comHeight={30}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-semibold xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[23%]"
                  compId="25:327"
                  comWidth={372}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                <Row
                  className="items-center justify-center lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[227px] ml-[253px] w-[23%]"
                  compId="482"
                  comWidth={367}
                  comHeight={30}
                  compLeft={253}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[11%]"
                    compId="25:324"
                    comWidth={41}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[8%]"
                    compId="25:323"
                    comWidth={28}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`FAQ`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[25%]"
                    compId="25:322"
                    comWidth={92}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Privacy Policy`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[15%]"
                    compId="25:325"
                    comWidth={56}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Sitemap`}</Text>
                </Row>
                <Text
                  className="font-semibold lg:ml-[257px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[398px] ml-[442px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-right text-white_A700 w-[11%]"
                  compId="25:329"
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

export default AboutUsPage;
