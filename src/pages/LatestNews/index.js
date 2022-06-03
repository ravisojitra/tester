import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { List } from "components/List";

const LatestNewsPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="25:2529"
        comWidth={1920}
        comHeight={4772}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="956"
          comWidth={1920}
          comHeight={4189}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Stack
            className="lg:h-[320px] xl:h-[366px] 2xl:h-[412px] 3xl:h-[494px] h-[548px] w-[100%]"
            compId="990"
            comWidth={1920}
            comHeight={548}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Stack
              className="absolute lg:h-[320px] xl:h-[366px] 2xl:h-[412px] 3xl:h-[494px] h-[548px] inset-[0] w-[100%]"
              compId="992"
              comWidth={1920}
              comHeight={548}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_background_17.svg"}
                className="absolute lg:h-[297px] xl:h-[339px] 2xl:h-[382px] 3xl:h-[458px] h-[508px] object-cover top-[0] w-[100%]"
                compId="37:411"
                comWidth={1920}
                comHeight={508}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="background"
              />
              <div className="absolute bg-transparent border-0 bottom-[0] mb-[0] w-[42%] input-wrap">
                <div className="input-wrap">
                  <Image
                    src={"images/img_circle2017.svg"}
                    className="absolute h-[20.05px] right-[62.01001px] bg-transparent border-0 lg:h-[12px] lg:right-[36px] xl:h-[14px] xl:right-[41px] 2xl:h-[16px] 2xl:right-[46px] 3xl:h-[19px] 3xl:right-[55px] my-[auto] inset-y-[0]"
                    compId="37:435"
                    comWidth={20.05}
                    comHeight={20.05}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="circle2017"
                  />
                  <Input
                    className="placeholder:bg-transparent bg-white_A700 border-0 font-normal inset-x-[0] not-italic lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] xl:pr-[109px] 2xl:pr-[123px] 3xl:pr-[147px] pr-[164.12000999999995px] lg:pr-[95px] lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.545px] rounded-radius20 shadow-bs1 placeholder:text-black_900 text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                    compId="53"
                    comWidth={0}
                    comHeight={92}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group53"
                    placeholder={`Search topics`}
                  ></Input>
                </div>
              </div>
              <header
                className="absolute top-[0] w-[100%]"
                compId="52"
                comWidth={1920}
                comHeight={191}
                compLeft={0}
                compRight={0}
                compType="Header"
              >
                <Column
                  className="w-[100%]"
                  compId="25:2923"
                  comWidth={1920}
                  comHeight={191}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="bg-bluegray_900 w-[100%]"
                    compId="928"
                    comWidth={1920}
                    comHeight={61}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                      compId="927"
                      comWidth={1920}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_telephonecall_8.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="25:2957"
                        comWidth={24}
                        comHeight={24}
                        compLeft={150}
                        compRight={0}
                        compType="Image"
                        alt="telephonecall"
                      />
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic text-bluegray_50 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[5%]"
                        compId="25:2956"
                        comWidth={97}
                        comHeight={30}
                        compLeft={21}
                        compRight={0}
                        compType="Text"
                      >{`+12 345 6789`}</Text>
                      <Image
                        src={"images/img_inbox21_7.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="39:130"
                        comWidth={24}
                        comHeight={24}
                        compLeft={56}
                        compRight={0}
                        compType="Image"
                        alt="inbox21"
                      />
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic text-bluegray_50 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[7%]"
                        compId="25:2962"
                        comWidth={142}
                        comHeight={30}
                        compLeft={21}
                        compRight={0}
                        compType="Text"
                      >{`support@elmna.com`}</Text>
                      <Row
                        className="items-center justify-center lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[832px] ml-[925px] w-[10%]"
                        compId="1040"
                        comWidth={194}
                        comHeight={30}
                        compLeft={925}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="cursor-pointer hover:font-bold font-normal not-italic text-bluegray_50 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[41%]"
                          compId="25:2954"
                          comWidth={79}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Help Center`}</Text>
                        <Text
                          className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic text-bluegray_50 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[16%]"
                          compId="25:2966"
                          comWidth={31}
                          comHeight={30}
                          compLeft={20}
                          compRight={0}
                          compType="Text"
                        >{`Blog`}</Text>
                        <Text
                          className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic text-bluegray_50 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[23%]"
                          compId="25:2967"
                          comWidth={44}
                          comHeight={30}
                          compLeft={20}
                          compRight={0}
                          compType="Text"
                        >{`Career`}</Text>
                      </Row>
                      <Text
                        className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[68px] text-bluegray_50 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[1%]"
                        compId="25:2968"
                        comWidth={20}
                        comHeight={30}
                        compLeft={68}
                        compRight={0}
                        compType="Text"
                      >{`EN`}</Text>
                      <Image
                        src={"images/img_chevron1_12.svg"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        compId="25:2969"
                        comWidth={16}
                        comHeight={16}
                        compLeft={12}
                        compRight={0}
                        compType="Image"
                        alt="chevron1"
                      />
                    </Row>
                    <Line
                      className="bg-bluegray_600 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                      compId="25:2971"
                      comWidth={1920}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                  </Column>
                  <Column
                    className="w-[100%]"
                    compId="931"
                    comWidth={1920}
                    comHeight={130}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                      compId="930"
                      comWidth={1920}
                      comHeight={72}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_logo_10.svg"}
                        className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] object-contain w-[10%]"
                        compId="25:2944"
                        comWidth={198}
                        comHeight={72}
                        compLeft={150}
                        compRight={0}
                        compType="Image"
                        alt="logo"
                      />
                      <Row
                        className="items-center justify-center 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] w-[32%]"
                        compId="1041"
                        comWidth={610}
                        comHeight={34}
                        compLeft={117}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[8%]"
                          compId="25:2937"
                          comWidth={47}
                          comHeight={34}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`About`}</Text>
                        <Row
                          className="items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] w-[27%]"
                          compId="25:2938"
                          comWidth={165}
                          comHeight={34}
                          compLeft={49}
                          compRight={0}
                          compType="Row"
                        >
                          <Text
                            className="font-bold text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[85%]"
                            compId="25:2939"
                            comWidth={141}
                            comHeight={34}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Program & Events`}</Text>
                          <Image
                            src={"images/img_chevron1_13.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            compId="25:2940"
                            comWidth={16}
                            comHeight={16}
                            compLeft={8}
                            compRight={0}
                            compType="Image"
                            alt="chevron1"
                          />
                        </Row>
                        <Text
                          className="font-bold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[17%]"
                          compId="25:2943"
                          comWidth={101}
                          comHeight={34}
                          compLeft={50}
                          compRight={0}
                          compType="Text"
                        >{`Alumni Story`}</Text>
                        <Text
                          className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] text-bluegray_50 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[25%]"
                          compId="25:2942"
                          comWidth={150}
                          comHeight={34}
                          compLeft={48}
                          compRight={0}
                          compType="Text"
                        >{`Career Oppurtunity`}</Text>
                      </Row>
                      <Image
                        src={"images/img_search91_6.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[204px] 3xl:ml-[245px] ml-[273px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="25:2934"
                        comWidth={24}
                        comHeight={24}
                        compLeft={273}
                        compRight={0}
                        compType="Image"
                        alt="search91"
                      />
                      <Button
                        className="border border-gray_300_33 border-solid font-bold lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-bluegray_50 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[9%]"
                        compId="25:2930"
                        comWidth={178}
                        comHeight={60}
                        compLeft={39}
                        compRight={0}
                        compType="Button"
                      >{`Sign In`}</Button>
                      <Button
                        className="bg-gray_300_33 font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[8%]"
                        compId="25:2927"
                        comWidth={163}
                        comHeight={60}
                        compLeft={18}
                        compRight={0}
                        compType="Button"
                      >{`Join Now`}</Button>
                    </Row>
                    <Line
                      className="bg-bluegray_600 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                      compId="25:2926"
                      comWidth={1920}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                  </Column>
                </Column>
              </header>
            </Stack>
            <Column
              className="absolute bottom-[25%] inset-x-[0] items-center justify-start mx-[auto] w-[34%]"
              compId="37:429"
              comWidth={658}
              comHeight={156}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold font-lora text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[100%]"
                compId="37:430"
                comWidth={658}
                comHeight={80}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Latest News`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] mx-[auto] not-italic text-center xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-white_A700 w-[81%]"
                compId="37:431"
                comWidth={531}
                comHeight={56}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            </Column>
          </Stack>
          <Column
            className="items-center justify-start w-[100%]"
            compId="37:201"
            comWidth={1920}
            comHeight={2160}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Stack
              className="lg:h-[1195px] xl:h-[1366px] 2xl:h-[1537px] 3xl:h-[1844px] h-[2047px] w-[100%]"
              compId="994"
              comWidth={1920}
              comHeight={2047}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[1195px] xl:h-[1366px] 2xl:h-[1537px] 3xl:h-[1844px] h-[2047px] inset-[0] w-[100%]"
                compId="996"
                comWidth={1920}
                comHeight={2047}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_18.svg"}
                  className="absolute lg:h-[498px] xl:h-[570px] 2xl:h-[641px] 3xl:h-[769px] h-[853px] object-cover top-[0] w-[100%]"
                  compId="37:202"
                  comWidth={1920}
                  comHeight={853}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Grid
                  className="absolute bottom-[0] lg:gap-[26px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[41px] gap-[46.00006px] grid grid-cols-3 inset-x-[0] mx-[auto] w-[84%]"
                  compId="1039"
                  comWidth={1619.98}
                  comHeight={1821}
                  compLeft={0}
                  compRight={0}
                  compType="Grid"
                >
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="998"
                    comWidth={509.32996}
                    comHeight={567}
                    compLeft={0}
                    compRight={1110.65}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1000"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="963"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="37:245"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="37:244"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Short disccusions about business in pandemic covid 19`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="37:246"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_18.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="37:247"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[31%]"
                      compId="37:252"
                      comWidth={159}
                      comHeight={45}
                      compLeft={30}
                      compRight={0}
                      compType="Button"
                    >{`ACCOUNTING`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1002"
                    comWidth={509.33002}
                    comHeight={567}
                    compLeft={555.33}
                    compRight={555.32}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1004"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 shadow-bs1 top-[1%] w-[100%]"
                        compId="965"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="37:456"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="37:455"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Spend weekend time with all elmna’s team members`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="37:457"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_19.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="37:458"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[27%]"
                      compId="37:463"
                      comWidth={138}
                      comHeight={45}
                      compLeft={29.67}
                      compRight={0}
                      compType="Button"
                    >{`WEEKEND`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1006"
                    comWidth={509.32996}
                    comHeight={567}
                    compLeft={1110.65}
                    compRight={0}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1008"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="967"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="37:469"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="37:468"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Learn how to increase business network in pandemic`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="37:470"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_20.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="37:471"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[29%]"
                      compId="37:476"
                      comWidth={146}
                      comHeight={45}
                      compLeft={30.35}
                      compRight={0}
                      compType="Button"
                    >{`EDUCATION`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1010"
                    comWidth={509.32996}
                    comHeight={567}
                    compLeft={0}
                    compRight={1110.65}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1012"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="969"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="39:78"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="39:77"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Learn how to increase business network in pandemic`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="39:79"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_21.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="39:80"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[29%]"
                      compId="39:85"
                      comWidth={146}
                      comHeight={45}
                      compLeft={30.35}
                      compRight={0}
                      compType="Button"
                    >{`EDUCATION`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1014"
                    comWidth={509.33002}
                    comHeight={567}
                    compLeft={555.33}
                    compRight={555.32}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1016"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="971"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="39:52"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="39:51"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Short disccusions about business in pandemic covid 19`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="39:53"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_22.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="39:54"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[31%]"
                      compId="39:59"
                      comWidth={159}
                      comHeight={45}
                      compLeft={30}
                      compRight={0}
                      compType="Button"
                    >{`ACCOUNTING`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1018"
                    comWidth={509.32996}
                    comHeight={567}
                    compLeft={1110.65}
                    compRight={0}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1020"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="973"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="39:65"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="39:64"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Spend weekend time with all elmna’s team members`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="39:66"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_23.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="39:67"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[27%]"
                      compId="39:72"
                      comWidth={138}
                      comHeight={45}
                      compLeft={29.68}
                      compRight={0}
                      compType="Button"
                    >{`WEEKEND`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1022"
                    comWidth={509.32996}
                    comHeight={567}
                    compLeft={0}
                    compRight={1110.65}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1024"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="975"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="39:104"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="39:103"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Spend weekend time with all elmna’s team members`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="39:105"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_24.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="39:106"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[27%]"
                      compId="39:111"
                      comWidth={138}
                      comHeight={45}
                      compLeft={29.67}
                      compRight={0}
                      compType="Button"
                    >{`WEEKEND`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1026"
                    comWidth={509.33002}
                    comHeight={567}
                    compLeft={555.33}
                    compRight={555.32}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1028"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="977"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="39:91"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="39:90"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Short disccusions about business in pandemic covid 19`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="39:92"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_25.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="39:93"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[31%]"
                      compId="39:98"
                      comWidth={159}
                      comHeight={45}
                      compLeft={30}
                      compRight={0}
                      compType="Button"
                    >{`ACCOUNTING`}</Button>
                  </Stack>
                  <Stack
                    className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                    compId="1030"
                    comWidth={509.32996}
                    comHeight={567}
                    compLeft={1110.65}
                    compRight={0}
                    compType="Stack"
                  >
                    <Stack
                      className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                      compId="1032"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Column
                        className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                        compId="979"
                        comWidth={509.33}
                        comHeight={559}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 text-left w-[48%]"
                          compId="39:117"
                          comWidth={244}
                          comHeight={28}
                          compLeft={30}
                          compRight={30}
                          compType="Text"
                        >{`by Admin, November 23th 2020`}</Text>
                        <Text
                          className="capitalize font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                          compId="39:116"
                          comWidth={450}
                          comHeight={54.01}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >{`Learn how to increase business network in pandemic`}</Text>
                        <Text
                          className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[16px] xl:mb-[19px] 2xl:mb-[21px] 3xl:mb-[26px] mb-[28.99px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                          compId="39:118"
                          comWidth={450}
                          comHeight={84}
                          compLeft={30}
                          compRight={29.33}
                          compType="Text"
                        >
                          <span className="text-gray_700">
                            <>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud `}</>
                          </span>
                          <span className="text-bluegray_700 font-bold">
                            <>{`Read More...`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src={"images/img_image_26.svg"}
                        className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                        compId="39:119"
                        comWidth={509.33}
                        comHeight={318}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="image"
                      />
                    </Stack>
                    <Button
                      className="absolute bg-bluegray_700 font-bold left-[6%] 2xl:pb-[10px] 3xl:pb-[12px] pb-[14px] lg:pb-[8px] xl:pb-[9px] 3xl:pt-[11px] pt-[13px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius68 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 top-[44%] w-[29%]"
                      compId="39:124"
                      comWidth={146}
                      comHeight={45}
                      compLeft={30.35}
                      compRight={0}
                      compType="Button"
                    >{`EDUCATION`}</Button>
                  </Stack>
                </Grid>
              </Stack>
              <Row
                className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[3%] w-[84%]"
                compId="948"
                comWidth={1620}
                comHeight={77}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-bold font-lora text-black_902 lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-left w-[10%]"
                  compId="37:395"
                  comWidth={155}
                  comHeight={77}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`News`}</Text>
                <Row
                  className="border border-bluegray_700 border-solid font-cairo items-center justify-center xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] ml-[1032px] lg:ml-[602px] xl:ml-[688px] 2xl:ml-[774px] 3xl:ml-[929px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] rounded-radius60 w-[16%]"
                  compId="932"
                  comWidth={254}
                  comHeight={62}
                  compLeft={1032}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_calendarsilhou_4.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] ml-[29px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="37:404"
                    comWidth={24}
                    comHeight={24}
                    compLeft={29}
                    compRight={0}
                    compType="Image"
                    alt="calendarsilhou"
                  />
                  <Text
                    className="font-bold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] text-bluegray_700 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[36%]"
                    compId="37:403"
                    comWidth={91}
                    comHeight={34}
                    compLeft={23}
                    compRight={0}
                    compType="Text"
                  >{`Filter Date`}</Text>
                  <Image
                    src={"images/img_chevron1_14.svg"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] my-[23px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                    compId="37:408"
                    comWidth={16}
                    comHeight={16}
                    compLeft={39}
                    compRight={32}
                    compType="Image"
                    alt="chevron1"
                  />
                </Row>
                <div className="2xl:mb-[5px] 2xl:ml-[13px] 2xl:mt-[6px] 3xl:mb-[6px] 3xl:ml-[16px] 3xl:mt-[7px] bg-transparent border-0 lg:ml-[10px] lg:my-[4px] mb-[7px] ml-[18px] mt-[8px] w-[10%] xl:mb-[4px] xl:ml-[12px] xl:mt-[5px] input-wrap">
                  <Image
                    src={"images/img_vector_11.svg"}
                    className="absolute right-[32.069946px] bg-transparent border-0 lg:right-[18px] xl:right-[21px] 2xl:right-[24px] 3xl:right-[28px] my-[auto] inset-y-[0]"
                    compId="37:400"
                    comWidth={15.87}
                    comHeight={9.08}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Input
                    className="placeholder:bg-transparent bg-transparent border border-bluegray_700 border-solid font-bold font-cairo lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] lg:pr-[55px] xl:pr-[63px] 2xl:pr-[71px] 3xl:pr-[86px] pr-[95.87994600000005px] lg:py-[12px] xl:py-[14px] 2xl:py-[15px] 3xl:py-[18px] py-[21px] rounded-radius60 placeholder:text-bluegray_700 text-bluegray_700 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                    compId="54"
                    comWidth={0}
                    comHeight={62}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group54"
                    placeholder={`Latest`}
                  ></Input>
                </div>
              </Row>
            </Stack>
            <Row
              className="items-center justify-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] mx-[auto] w-[28%]"
              compId="37:375"
              comWidth={536}
              comHeight={53}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Row
                className="bg-white_A700 items-center justify-center rounded-radius61 w-[30%]"
                compId="946"
                comWidth={162}
                comHeight={53}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_vector_12.svg"}
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[12px] h-[15.87px] 3xl:h-[15px] lg:mb-[11px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19.07px] lg:mt-[10px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18.06px] xl:my-[12px] object-contain w-[6%]"
                  compId="37:392"
                  comWidth={9.08}
                  comHeight={15.87}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Text
                  className="font-bold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] ml-[17.46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[42%]"
                  compId="37:393"
                  comWidth={68}
                  comHeight={34}
                  compLeft={17.46}
                  compRight={0}
                  compType="Text"
                >{`Previous`}</Text>
              </Row>
              <Row
                className="bg-teal_50 items-center justify-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] rounded-radius61 w-[42%]"
                compId="947"
                comWidth={225}
                comHeight={53}
                compLeft={17}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-start justify-center lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] w-[62%]"
                  compId="1042"
                  comWidth={139}
                  comHeight={53}
                  compLeft={28}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[8%]"
                    compId="37:380"
                    comWidth={11}
                    comHeight={34}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`1`}</Text>
                  <Text
                    className="font-bold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[8%]"
                    compId="37:381"
                    comWidth={11}
                    comHeight={34}
                    compLeft={27}
                    compRight={0}
                    compType="Text"
                  >{`2`}</Text>
                  <Button
                    className="bg-bluegray_700 font-bold lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] 3xl:pb-[11px] pb-[12.545px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] pt-[9.545px] rounded-radius61 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_50 w-[45%]"
                    compId="51"
                    comWidth={62}
                    comHeight={53}
                    compLeft={28}
                    compRight={0}
                    compType="Button"
                  >{`3`}</Button>
                </Row>
                <Text
                  className="font-bold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] lg:mr-[16px] xl:mr-[18px] 2xl:mr-[21px] 3xl:mr-[25px] mr-[28px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[5%]"
                  compId="37:383"
                  comWidth={11}
                  comHeight={34}
                  compLeft={19}
                  compRight={28}
                  compType="Text"
                >{`4`}</Text>
              </Row>
              <div className="2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] ml-[17px] w-[21%] xl:ml-[11px] input-wrap">
                <Image
                  src={"images/img_vector_13.svg"}
                  className="absolute right-[27.460083px] lg:right-[16px] xl:right-[18px] 2xl:right-[20px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                  compId="37:388"
                  comWidth={9.08}
                  comHeight={15.87}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Vector"
                />
                <Button
                  className="bg-white_A700 font-bold 3xl:pb-[11px] pb-[12.545px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[21px] lg:pr-[42px] xl:pr-[48px] 2xl:pr-[54px] 3xl:pr-[65px] pr-[73.08008299999996px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] pt-[9.545px] rounded-radius61 text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                  compId="55"
                  comWidth={0}
                  comHeight={53}
                  compLeft={0}
                  compRight={0}
                  compType="Button"
                >{`Next`}</Button>
              </div>
            </Row>
          </Column>
          <Column
            className="bg-white_A700 font-lora items-center justify-start 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
            compId="982"
            comWidth={1920}
            comHeight={359}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Text
              className="font-bold lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] text-black_902 text-center lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 w-[12%]"
              compId="25:2667"
              comWidth={236}
              comHeight={38}
              compLeft={10}
              compRight={10}
              compType="Text"
            >{`Our Partnership`}</Text>
            <Image
              src={"images/img_clientlogo_4.svg"}
              className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60.94px] lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84.06px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] mt-[95px] mx-[auto] object-contain w-[68%]"
              compId="25:2649"
              comWidth={1308.32}
              comHeight={60.94}
              compLeft={10}
              compRight={10}
              compType="Image"
              alt="clientLogo"
            />
          </Column>
          <Stack
            className="font-lora lg:h-[515px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[795px] h-[882px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
            compId="1034"
            comWidth={1920}
            comHeight={882}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <Stack
              className="absolute lg:h-[515px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[795px] h-[882px] inset-[0] w-[100%]"
              compId="1036"
              comWidth={1920}
              comHeight={882}
              compLeft={0}
              compRight={0}
              compType="Stack"
            >
              <Image
                src={"images/img_background_19.svg"}
                className="absolute bottom-[0] lg:h-[394px] xl:h-[450px] 2xl:h-[506px] 3xl:h-[607px] h-[674px] object-cover w-[100%]"
                compId="37:558"
                comWidth={1920}
                comHeight={674}
                compLeft={0}
                compRight={0}
                compType="Image"
                alt="background"
              />
              <Row
                className="absolute bg-bluegray_700 inset-x-[0] items-center justify-center mx-[auto] rounded-radius6 top-[0] w-[84%]"
                compId="949"
                comWidth={1620}
                comHeight={366}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Text
                  className="font-normal lg:leading-lh44 xl:leading-lh50 2xl:leading-lh57 3xl:leading-lh68 leading-lh7600 my-[107px] lg:my-[62px] xl:my-[71px] 2xl:my-[80px] 3xl:my-[96px] not-italic lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-left text-white_A700 w-[39%]"
                  compId="37:590"
                  comWidth={639}
                  comHeight={152}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                <Stack
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:my-[107px] 3xl:my-[128px] my-[143px] lg:my-[83px] xl:my-[95px] w-[34%]"
                  compId="1038"
                  comWidth={546}
                  comHeight={80}
                  compLeft={163}
                  compRight={0}
                  compType="Stack"
                >
                  <Input
                    className="absolute placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-normal font-opensans inset-[0] not-italic lg:pb-[16px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.545px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] lg:pt-[17px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[29.545px] xl:py-[19px] rounded-radius60 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                    compId="57"
                    comWidth={546}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="EditText"
                    name="Group57"
                    placeholder={`Enter your email address...`}
                  ></Input>
                  <Button
                    className="absolute bg-gray_300 font-bold font-cairo h-[max-content] inset-y-[0] my-[auto] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] right-[2%] rounded-radius37 shadow-bs2 text-black_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[36%]"
                    compId="37:587"
                    comWidth={196.79}
                    comHeight={60}
                    compLeft={0}
                    compRight={10.21}
                    compType="Button"
                  >{`SUBSCRIBE`}</Button>
                </Stack>
              </Row>
            </Stack>
            <Column
              className="absolute bottom-[12%] inset-x-[0] items-center justify-start mx-[auto] w-[42%]"
              compId="951"
              comWidth={805}
              comHeight={332}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-lora font-normal mx-[auto] not-italic text-center lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-white_A700 w-[98%]"
                compId="37:569"
                comWidth={789}
                comHeight={76}
                compLeft={8}
                compRight={8}
                compType="Text"
              >{`Get our mobile apps now free`}</Text>
              <Text
                className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[100%]"
                compId="37:570"
                comWidth={805}
                comHeight={96}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`}</Text>
              <List
                className="font-lato lg:gap-[18px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] gap-[31px] grid grid-cols-2 min-h-[auto] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] mx-[auto] w-[61%]"
                compId="950"
                comWidth={493}
                comHeight={76}
                compLeft={10}
                compRight={10}
                compType="List"
                orientation="horizontal"
              >
                <Row
                  className="bg-gray_300 items-start justify-start rounded-radius6 w-[100%]"
                  compId="984"
                  comWidth={231}
                  comHeight={76}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_14.svg"}
                    className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] object-contain w-[13%]"
                    compId="37:575"
                    comWidth={30}
                    comHeight={38}
                    compLeft={24}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                    compId="983"
                    comWidth={107}
                    comHeight={49}
                    compLeft={22}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal not-italic text-black_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[100%]"
                      compId="37:574"
                      comWidth={107}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Download on the`}</Text>
                    <Text
                      className="font-black mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[1px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[84%]"
                      compId="37:573"
                      comWidth={90}
                      comHeight={24}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`App Store`}</Text>
                  </Column>
                </Row>
                <Row
                  className="bg-gray_300 items-end justify-center rounded-radius6 w-[100%]"
                  compId="986"
                  comWidth={231}
                  comHeight={76}
                  compLeft={31}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_vector_15.svg"}
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[11%]"
                    compId="37:580"
                    comWidth={26}
                    comHeight={32}
                    compLeft={25}
                    compRight={0}
                    compType="Image"
                    alt="Vector"
                  />
                  <Column
                    className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[44px] mr-[49px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                    compId="985"
                    comWidth={107}
                    comHeight={49}
                    compLeft={24}
                    compRight={49}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-black_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[63%]"
                      compId="37:579"
                      comWidth={67}
                      comHeight={24}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`GET IT ON`}</Text>
                    <Text
                      className="font-black mt-[1px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                      compId="37:578"
                      comWidth={107}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Google Play`}</Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Stack>
        </Column>
        <footer
          className="font-opensans w-[100%]"
          compId="37:591"
          comWidth={1920}
          comHeight={583}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Column
            className="bg-black_900 items-center justify-start w-[100%]"
            compId="37:593"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Line
              className="bg-gray_100_14 h-[1px] w-[100%]"
              compId="37:601"
              comWidth={1920}
              comHeight={1}
              compLeft={0}
              compRight={0}
              compType="Line"
            />
            <Row
              className="items-start justify-start 2xl:mt-[100px] 3xl:mt-[120px] mt-[134px] lg:mt-[78px] xl:mt-[89px] mx-[auto] w-[84%]"
              compId="37:605"
              comWidth={1610}
              comHeight={303}
              compLeft={10}
              compRight={10}
              compType="Row"
            >
              <Column
                className="items-start justify-start w-[33%]"
                compId="37:606"
                comWidth={530}
                comHeight={303}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Image
                  src={"images/img_logo_11.svg"}
                  className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                  compId="37:607"
                  comWidth={198}
                  comHeight={72}
                  compLeft={0}
                  compRight={10}
                  compType="Image"
                  alt="logo"
                />
                <Text
                  className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[100%]"
                  compId="37:615"
                  comWidth={530}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                <Column
                  className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                  compId="1044"
                  comWidth={530}
                  comHeight={99}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-start justify-start w-[100%]"
                    compId="960"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[14%]"
                      compId="37:629"
                      comWidth={72}
                      comHeight={22}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Follow Us`}</Text>
                    <Column
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]"
                      compId="1045"
                      comWidth={530}
                      comHeight={51}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="959"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_social01_4.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                          compId="37:618"
                          comWidth={12.08}
                          comHeight={22.15}
                          compLeft={5}
                          compRight={0}
                          compType="Image"
                          alt="social01"
                        />
                        <Image
                          src={"images/img_social03_4.svg"}
                          className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                          compId="37:622"
                          comWidth={51}
                          comHeight={51}
                          compLeft={48.92}
                          compRight={0}
                          compType="Image"
                          alt="social03"
                        />
                        <Image
                          src={"images/img_social02_4.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                          compId="37:620"
                          comWidth={31.47}
                          comHeight={22.66}
                          compLeft={40.29}
                          compRight={0}
                          compType="Image"
                          alt="social02"
                        />
                        <Image
                          src={"images/img_social04_4.svg"}
                          className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.6px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                          compId="37:625"
                          comWidth={24.17}
                          comHeight={23.16}
                          compLeft={51.6}
                          compRight={0}
                          compType="Image"
                          alt="social04"
                        />
                        <Image
                          src={"images/img_social05_4.svg"}
                          className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                          compId="37:627"
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
                className="font-cairo items-start justify-start lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[6%]"
                compId="37:665"
                comWidth={99}
                comHeight={216}
                compLeft={104}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                  compId="37:666"
                  comWidth={99}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Why Elmna`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="37:667"
                  comWidth={88}
                  comHeight={162}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[1px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[99%]"
                    compId="37:668"
                    comWidth={87}
                    comHeight={30}
                    compLeft={0}
                    compRight={1}
                    compType="Text"
                  >{`About elmna`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[81%]"
                    compId="37:669"
                    comWidth={71}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Enterprise`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                    compId="37:670"
                    comWidth={88}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Alumni Story`}</Text>
                  <Text
                    className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[90%]"
                    compId="37:671"
                    comWidth={79}
                    comHeight={30}
                    compLeft={0}
                    compRight={9}
                    compType="Text"
                  >{`Community`}</Text>
                </Column>
              </Column>
              <Column
                className="font-cairo items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] ml-[164px] lg:ml-[95px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[6%]"
                compId="37:657"
                comWidth={90}
                comHeight={260}
                compLeft={164}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                  compId="37:664"
                  comWidth={90}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Resources`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                  compId="37:658"
                  comWidth={80}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[86%]"
                    compId="37:659"
                    comWidth={69}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Download`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                    compId="37:660"
                    comWidth={80}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Help Center`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[59%]"
                    compId="37:661"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Events`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[59%]"
                    compId="37:662"
                    comWidth={47}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Guides`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[65%]"
                    compId="37:663"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Partner`}</Text>
                </Column>
              </Column>
              <Column
                className="font-cairo items-start justify-start lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[6%]"
                compId="37:649"
                comWidth={100}
                comHeight={260}
                compLeft={124}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                  compId="37:656"
                  comWidth={100}
                  comHeight={37}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Community`}</Text>
                <Column
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                  compId="37:650"
                  comWidth={72}
                  comHeight={206}
                  compLeft={0}
                  compRight={10}
                  compType="Column"
                >
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[85%]"
                    compId="37:651"
                    comWidth={61}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`About us`}</Text>
                  <Text
                    className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                    compId="37:652"
                    comWidth={72}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact us`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[51%]"
                    compId="37:653"
                    comWidth={37}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Login`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[72%]"
                    compId="37:654"
                    comWidth={52}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Sign Up`}</Text>
                  <Text
                    className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[39%]"
                    compId="37:655"
                    comWidth={28}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`FAQ`}</Text>
                </Column>
              </Column>
              <Column
                className="font-cairo items-start justify-start lg:mb-[43px] xl:mb-[49px] 2xl:mb-[55px] 3xl:mb-[66px] mb-[74px] 3xl:ml-[102px] ml-[114px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[85px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[18%]"
                compId="37:630"
                comWidth={285}
                comHeight={226}
                compLeft={114}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[62%]"
                  compId="37:631"
                  comWidth={176}
                  comHeight={37}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >{`Get in Touch with Us`}</Text>
                <Column
                  className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                  compId="1046"
                  comWidth={285}
                  comHeight={60}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start w-[100%]"
                    compId="37:632"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_pin51_6.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="37:634"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="pin51"
                    />
                    <Text
                      className="font-semibold leading-lh xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[86%]"
                      compId="37:633"
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
                  compId="37:637"
                  comWidth={163}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_telephonecall_9.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="37:639"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="telephonecall"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[76%]"
                    compId="37:638"
                    comWidth={124}
                    comHeight={30}
                    compLeft={15}
                    compRight={0}
                    compType="Text"
                  >{`+123 345123 556`}</Text>
                </Row>
                <Row
                  className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[64%]"
                  compId="37:643"
                  comWidth={183}
                  comHeight={30}
                  compLeft={0}
                  compRight={10}
                  compType="Row"
                >
                  <Image
                    src={"images/img_inbox21_8.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="37:645"
                    comWidth={24}
                    comHeight={24}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="inbox21"
                  />
                  <Text
                    className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[79%]"
                    compId="37:644"
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
              className="bg-black_900 font-cairo items-center justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
              compId="961"
              comWidth={1920}
              comHeight={84}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-gray_100_14 h-[1px] w-[100%]"
                compId="37:600"
                comWidth={1920}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Row
                className="items-center justify-start xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] mx-[auto] lg:my-[15px] w-[84%]"
                compId="37:595"
                comWidth={1620}
                comHeight={30}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-semibold xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[23%]"
                  compId="37:602"
                  comWidth={372}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                <Row
                  className="items-center justify-center lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[227px] ml-[253px] w-[23%]"
                  compId="1043"
                  comWidth={367}
                  comHeight={30}
                  compLeft={253}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[11%]"
                    compId="37:598"
                    comWidth={41}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[8%]"
                    compId="37:597"
                    comWidth={28}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`FAQ`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[25%]"
                    compId="37:596"
                    comWidth={92}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Privacy Policy`}</Text>
                  <Text
                    className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[15%]"
                    compId="37:599"
                    comWidth={56}
                    comHeight={30}
                    compLeft={50}
                    compRight={0}
                    compType="Text"
                  >{`Sitemap`}</Text>
                </Row>
                <Text
                  className="font-semibold lg:ml-[257px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[398px] ml-[442px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-right text-white_A700 w-[11%]"
                  compId="37:604"
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

export default LatestNewsPage;
