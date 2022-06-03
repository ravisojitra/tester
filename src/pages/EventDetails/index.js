import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Input } from "components/Input";

const EventDetailsPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="25:3415"
        comWidth={1920}
        comHeight={5185}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="1166"
          comWidth={1920}
          comHeight={5186}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="w-[100%]"
            compId="1188"
            comWidth={1920}
            comHeight={4603}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="69"
              comWidth={1920}
              comHeight={191}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Column
                className="w-[100%]"
                compId="25:3809"
                comWidth={1920}
                comHeight={191}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="bg-white_A700 w-[100%]"
                  compId="1136"
                  comWidth={1920}
                  comHeight={61}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                    compId="1135"
                    comWidth={1920}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall_12.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="44:709"
                      comWidth={24}
                      comHeight={24}
                      compLeft={150}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[5%]"
                      compId="44:708"
                      comWidth={97}
                      comHeight={30}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`+12 345 6789`}</Text>
                    <Image
                      src={"images/img_inbox21_11.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="44:715"
                      comWidth={24}
                      comHeight={24}
                      compLeft={56}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[7%]"
                      compId="44:714"
                      comWidth={142}
                      comHeight={30}
                      compLeft={21}
                      compRight={0}
                      compType="Text"
                    >{`support@elmna.com`}</Text>
                    <Row
                      className="items-center justify-center lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[832px] ml-[925px] w-[10%]"
                      compId="1213"
                      comWidth={194}
                      comHeight={30}
                      compLeft={925}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="cursor-pointer hover:font-bold font-normal not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[41%]"
                        compId="44:706"
                        comWidth={79}
                        comHeight={30}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Help Center`}</Text>
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[16%]"
                        compId="44:718"
                        comWidth={31}
                        comHeight={30}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >{`Blog`}</Text>
                      <Text
                        className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[23%]"
                        compId="44:719"
                        comWidth={44}
                        comHeight={30}
                        compLeft={20}
                        compRight={0}
                        compType="Text"
                      >{`Career`}</Text>
                    </Row>
                    <Text
                      className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[68px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[1%]"
                      compId="44:720"
                      comWidth={20}
                      comHeight={30}
                      compLeft={68}
                      compRight={0}
                      compType="Text"
                    >{`EN`}</Text>
                    <Image
                      src={"images/img_chevron1_17.svg"}
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      compId="44:721"
                      comWidth={16}
                      comHeight={16}
                      compLeft={12}
                      compRight={0}
                      compType="Image"
                      alt="chevron1"
                    />
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="44:723"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
                <Column
                  className="w-[100%]"
                  compId="1139"
                  comWidth={1920}
                  comHeight={130}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-center justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                    compId="1138"
                    comWidth={1920}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_logo_14.svg"}
                      className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] object-contain w-[10%]"
                      compId="25:3830"
                      comWidth={198}
                      comHeight={72}
                      compLeft={150}
                      compRight={0}
                      compType="Image"
                      alt="logo"
                    />
                    <Row
                      className="items-center justify-center 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] w-[32%]"
                      compId="1214"
                      comWidth={610}
                      comHeight={34}
                      compLeft={117}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[8%]"
                        compId="25:3823"
                        comWidth={47}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`About`}</Text>
                      <Row
                        className="items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] w-[27%]"
                        compId="25:3824"
                        comWidth={165}
                        comHeight={34}
                        compLeft={49}
                        compRight={0}
                        compType="Row"
                      >
                        <Text
                          className="font-bold text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[85%]"
                          compId="25:3825"
                          comWidth={141}
                          comHeight={34}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Program & Events`}</Text>
                        <Image
                          src={"images/img_chevron1_18.svg"}
                          className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                          compId="25:3826"
                          comWidth={16}
                          comHeight={16}
                          compLeft={8}
                          compRight={0}
                          compType="Image"
                          alt="chevron1"
                        />
                      </Row>
                      <Text
                        className="font-bold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[17%]"
                        compId="25:3829"
                        comWidth={101}
                        comHeight={34}
                        compLeft={50}
                        compRight={0}
                        compType="Text"
                      >{`Alumni Story`}</Text>
                      <Text
                        className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[25%]"
                        compId="25:3828"
                        comWidth={150}
                        comHeight={34}
                        compLeft={48}
                        compRight={0}
                        compType="Text"
                      >{`Career Oppurtunity`}</Text>
                    </Row>
                    <Image
                      src={"images/img_search91_8.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[204px] 3xl:ml-[245px] ml-[273px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:3820"
                      comWidth={24}
                      comHeight={24}
                      compLeft={273}
                      compRight={0}
                      compType="Image"
                      alt="search91"
                    />
                    <Button
                      className="border border-gray_300 border-solid font-bold lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-black_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[9%]"
                      compId="25:3816"
                      comWidth={178}
                      comHeight={60}
                      compLeft={39}
                      compRight={0}
                      compType="Button"
                    >{`Sign In`}</Button>
                    <Button
                      className="bg-bluegray_700 font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[8%]"
                      compId="25:3813"
                      comWidth={163}
                      comHeight={60}
                      compLeft={18}
                      compRight={0}
                      compType="Button"
                    >{`Join Now`}</Button>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                    compId="25:3812"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
              </Column>
            </header>
            <Column
              className="items-center justify-start w-[100%]"
              compId="25:3498"
              comWidth={1920}
              comHeight={4413}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Stack
                className="2xl:h-[1094px] 3xl:h-[1313px] h-[1457px] lg:h-[850px] xl:h-[973px] w-[100%]"
                compId="1190"
                comWidth={1920}
                comHeight={1457}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Stack
                  className="absolute 2xl:h-[1094px] 3xl:h-[1313px] h-[1457px] lg:h-[850px] xl:h-[973px] inset-[0] w-[100%]"
                  compId="1192"
                  comWidth={1920}
                  comHeight={1457}
                  compLeft={0}
                  compRight={0}
                  compType="Stack"
                >
                  <Image
                    src={"images/img_background_23.svg"}
                    className="absolute lg:h-[540px] xl:h-[618px] 2xl:h-[695px] 3xl:h-[833px] h-[925px] object-cover top-[0] w-[100%]"
                    compId="25:3663"
                    comWidth={1920}
                    comHeight={925}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="background"
                  />
                  <Image
                    src={"images/img_image_29.svg"}
                    className="absolute bottom-[16%] lg:h-[415px] xl:h-[475px] 2xl:h-[534px] 3xl:h-[641px] h-[711px] object-cover w-[100%]"
                    compId="25:3664"
                    comWidth={1920}
                    comHeight={711}
                    compLeft={0}
                    compRight={0}
                    compType="Image"
                    alt="image"
                  />
                  <Stack
                    className="absolute bottom-[0] lg:h-[227px] xl:h-[260px] 2xl:h-[292px] 3xl:h-[351px] h-[389px] inset-x-[0] mx-[auto] w-[56%]"
                    compId="1194"
                    comWidth={1077}
                    comHeight={389}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-bluegray_700 lg:h-[227px] xl:h-[260px] 2xl:h-[292px] 3xl:h-[351px] h-[389px] inset-x-[12%] inset-y-[0] rounded-radius16 shadow-bs w-[77%]"
                      compId="25:3701"
                      comWidth={825}
                      comHeight={389}
                      compLeft={126}
                      compRight={126}
                      compType="View"
                    ></div>
                    <Column
                      className="absolute bg-gradient2  inset-[0] items-center justify-end rounded-radius16 w-[100%]"
                      compId="1142"
                      comWidth={1077}
                      comHeight={389}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[49px] 3xl:mt-[59px] mt-[66px] mx-[auto] w-[67%]"
                        compId="25:3713"
                        comWidth={720}
                        comHeight={128}
                        compLeft={10}
                        compRight={10}
                        compType="Row"
                      >
                        <Column
                          className="items-center w-[10%]"
                          compId="25:3714"
                          comWidth={71}
                          comHeight={128}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[100%]"
                            compId="25:3715"
                            comWidth={71}
                            comHeight={77}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`02`}</Text>
                          <Text
                            className="font-cairo font-normal mx-[auto] not-italic text-center lg:text-fs15 xl:text-fs18 2xl:text-fs20 3xl:text-fs24 text-fs27 text-gray_300 w-[80%]"
                            compId="25:3716"
                            comWidth={57}
                            comHeight={51}
                            compLeft={7}
                            compRight={7}
                            compType="Text"
                          >{`Days`}</Text>
                        </Column>
                        <Column
                          className="items-center 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] w-[8%]"
                          compId="25:3717"
                          comWidth={58}
                          comHeight={128}
                          compLeft={138}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[100%]"
                            compId="25:3718"
                            comWidth={58}
                            comHeight={77}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`14`}</Text>
                          <Text
                            className="font-cairo font-normal ml-[1px] not-italic text-center lg:text-fs15 xl:text-fs18 2xl:text-fs20 3xl:text-fs24 text-fs27 text-gray_300 w-[98%]"
                            compId="25:3719"
                            comWidth={57}
                            comHeight={51}
                            compLeft={1}
                            compRight={0}
                            compType="Text"
                          >{`Hour`}</Text>
                        </Column>
                        <Column
                          className="items-center 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] w-[11%]"
                          compId="25:3720"
                          comWidth={81}
                          comHeight={128}
                          compLeft={138}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora mx-[auto] text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[85%]"
                            compId="25:3721"
                            comWidth={69}
                            comHeight={77}
                            compLeft={6}
                            compRight={6}
                            compType="Text"
                          >{`36`}</Text>
                          <Text
                            className="font-cairo font-normal not-italic text-center lg:text-fs15 xl:text-fs18 2xl:text-fs20 3xl:text-fs24 text-fs27 text-gray_300 w-[100%]"
                            compId="25:3722"
                            comWidth={81}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Minute`}</Text>
                        </Column>
                        <Column
                          className="items-center 2xl:ml-[103px] 3xl:ml-[124px] ml-[138px] lg:ml-[80px] xl:ml-[92px] w-[13%]"
                          compId="25:3723"
                          comWidth={96}
                          comHeight={128}
                          compLeft={138}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora mx-[auto] text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 text-white_A700 w-[69%]"
                            compId="25:3724"
                            comWidth={66}
                            comHeight={77}
                            compLeft={10}
                            compRight={10}
                            compType="Text"
                          >{`54`}</Text>
                          <Text
                            className="font-cairo font-normal not-italic text-center lg:text-fs15 xl:text-fs18 2xl:text-fs20 3xl:text-fs24 text-fs27 text-gray_300 w-[100%]"
                            compId="25:3725"
                            comWidth={96}
                            comHeight={51}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`Seconds`}</Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-bluegray_601 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] mx-[auto] rounded-radius16 w-[80%]"
                        compId="25:3703"
                        comWidth={859}
                        comHeight={1}
                        compLeft={10}
                        compRight={10}
                        compType="Line"
                      />
                      <Row
                        className="items-end justify-start lg:my-[29px] xl:my-[33px] 2xl:my-[37px] 3xl:my-[45px] my-[50px] w-[100%]"
                        compId="1141"
                        comWidth={1077}
                        comHeight={72}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start justify-start ml-[109px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[98px] w-[24%]"
                          compId="1143"
                          comWidth={262}
                          comHeight={72}
                          compLeft={109}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-semibold lg:text-fs16 xl:text-fs18 2xl:text-fs21 3xl:text-fs25 text-fs28 text-gray_300 text-left w-[100%]"
                            compId="25:3704"
                            comWidth={262}
                            comHeight={32}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`November 28th, 2020`}</Text>
                          <Text
                            className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[79%]"
                            compId="25:3705"
                            comWidth={207}
                            comHeight={32}
                            compLeft={0}
                            compRight={10}
                            compType="Text"
                          >{`Monday, 08:00 AM - 06:00 PM`}</Text>
                        </Column>
                        <Row
                          className="border border-gray_300 border-solid items-center justify-center lg:ml-[118px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] ml-[203px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius70 w-[21%]"
                          compId="1140"
                          comWidth={231}
                          comHeight={56}
                          compLeft={203}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_notificationbe.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="25:3711"
                            comWidth={24}
                            comHeight={24}
                            compLeft={46}
                            compRight={0}
                            compType="Image"
                            alt="notificationbe"
                          />
                          <Text
                            className="font-bold lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] lg:mr-[32px] xl:mr-[37px] 2xl:mr-[42px] 3xl:mr-[50px] mr-[56px] my-[11px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[42%]"
                            compId="44:22"
                            comWidth={96}
                            comHeight={34}
                            compLeft={9}
                            compRight={56}
                            compType="Text"
                          >{`REMIND ME`}</Text>
                        </Row>
                        <Button
                          className="bg-gray_300 font-bold lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 3xl:py-[11px] py-[12.545px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius70 text-black_901 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[14%]"
                          compId="25:3706"
                          comWidth={154}
                          comHeight={56}
                          compLeft={9}
                          compRight={0}
                          compType="Button"
                        >{`REGISTER`}</Button>
                      </Row>
                    </Column>
                  </Stack>
                </Stack>
                <Column
                  className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[7%] w-[71%]"
                  compId="1148"
                  comWidth={1369}
                  comHeight={350}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Stack
                    className="font-lora lg:h-[103px] xl:h-[118px] 2xl:h-[133px] 3xl:h-[159px] h-[176px] mx-[auto] w-[59%]"
                    compId="1196"
                    comWidth={804}
                    comHeight={176}
                    compLeft={10}
                    compRight={10}
                    compType="Stack"
                  >
                    <Image
                      src={"images/img_circleelement_4.svg"}
                      className="absolute lg:h-[34px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] h-[57.23px] left-[11%] object-contain top-[0] w-[9%]"
                      compId="25:3677"
                      comWidth={74.68}
                      comHeight={57.23}
                      compLeft={88}
                      compRight={0}
                      compType="Image"
                      alt="circleElement"
                    />
                    <Text
                      className="absolute bottom-[0] capitalize font-bold lg:leading-lh46 xl:leading-lh53 2xl:leading-lh60 3xl:leading-lh72 leading-lh8000 text-black_902 text-center lg:text-fs35 xl:text-fs40 2xl:text-fs45 3xl:text-fs54 text-fs60 w-[100%]"
                      compId="25:3699"
                      comWidth={804}
                      comHeight={160}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Annual Meetup & Scholarship Presentation`}</Text>
                  </Stack>
                  <Row
                    className="font-cairo items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[33%]"
                    compId="25:3671"
                    comWidth={454}
                    comHeight={30}
                    compLeft={10}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_mapmarker1_2.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:3673"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="mapmarker1"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[91%]"
                      compId="25:3672"
                      comWidth={415}
                      comHeight={30}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`832  Thompson Drive, San Fransisco CA 94107, United States`}</Text>
                  </Row>
                  <Text
                    className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_700 w-[100%]"
                    compId="25:3669"
                    comWidth={1369}
                    comHeight={96}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}</Text>
                </Column>
              </Stack>
              <Image
                src={"images/img_map_1.svg"}
                className="lg:h-[269px] xl:h-[307px] 2xl:h-[346px] 3xl:h-[415px] h-[460px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] object-contain w-[100%]"
                compId="44:41"
                comWidth={1919}
                comHeight={460}
                compLeft={1}
                compRight={0}
                compType="Image"
                alt="map"
              />
              <Column
                className="items-center justify-start 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] mx-[auto] w-[70%]"
                compId="44:23"
                comWidth={1348}
                comHeight={850}
                compLeft={10}
                compRight={10}
                compType="Column"
              >
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="44:29"
                  comWidth={1348}
                  comHeight={142}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-lora font-medium text-black_901 lg:text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-fs26 text-left w-[100%]"
                    compId="44:31"
                    comWidth={1345}
                    comHeight={38}
                    compLeft={0}
                    compRight={3}
                    compType="Text"
                  >{`The standard Lorem Ipsum passage, used since the 1500s`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic text-black_901 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                    compId="44:30"
                    comWidth={1348}
                    comHeight={84}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'`}</Text>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]"
                  compId="44:32"
                  comWidth={1348}
                  comHeight={236}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-lora font-medium lg:leading-lh22 xl:leading-lh25 2xl:leading-lh28 3xl:leading-lh34 leading-lh3800 text-black_901 lg:text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-fs26 text-left w-[100%]"
                    compId="44:34"
                    comWidth={1345}
                    comHeight={76}
                    compLeft={0}
                    compRight={3}
                    compType="Text"
                  >{`The standard Lorem Ipsum passageSection 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BCused since the 1500s`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic text-black_901 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                    compId="44:33"
                    comWidth={1348}
                    comHeight={140}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}</Text>
                </Column>
                <Column
                  className="items-start justify-start lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] mt-[68px] w-[100%]"
                  compId="44:35"
                  comWidth={1348}
                  comHeight={226}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-lora font-medium text-black_901 lg:text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-fs26 text-left w-[100%]"
                    compId="44:37"
                    comWidth={1345}
                    comHeight={38}
                    compLeft={0}
                    compRight={3}
                    compType="Text"
                  >{`1914 translation by H. Rackham`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic text-black_901 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                    compId="44:36"
                    comWidth={1348}
                    comHeight={168}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'`}</Text>
                </Column>
                <Button
                  className="bg-bluegray_700 font-bold lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] mt-[68px] mx-[auto] pb-[13.235px] pt-[12.235px] 3xl:py-[11px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius70 text-center lg:text-fs15 xl:text-fs17 2xl:text-fs19 3xl:text-fs23 text-fs26 text-gray_300 w-[19%]"
                  compId="44:52"
                  comWidth={262}
                  comHeight={70}
                  compLeft={10}
                  compRight={10}
                  compType="Button"
                >{`REGISTER NOW`}</Button>
              </Column>
              <Column
                className="font-lora items-start justify-start 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
                compId="1158"
                comWidth={1920}
                comHeight={800}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="w-[100%]"
                  compId="1216"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compId="44:114"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
                <Text
                  className="font-bold lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] text-black_902 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left w-[13%]"
                  compId="44:112"
                  comWidth={252}
                  comHeight={51}
                  compLeft={150}
                  compRight={150}
                  compType="Text"
                >{`Others Event`}</Text>
                <Column
                  className="items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[100%]"
                  compId="1217"
                  comWidth={1920}
                  comHeight={628}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <List
                    className="lg:gap-[26px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[41px] gap-[46.00003px] grid grid-cols-3 min-h-[auto] mx-[auto] w-[84%]"
                    compId="1155"
                    comWidth={1619.98}
                    comHeight={567}
                    compLeft={10}
                    compRight={10}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Stack
                      className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                      compId="1198"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={0}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                        compId="1200"
                        comWidth={509.33}
                        comHeight={567}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="1171"
                          comWidth={509.33}
                          comHeight={559}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left tracking-ls1 w-[30%]"
                            compId="44:77"
                            comWidth={152}
                            comHeight={28}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ART EXIBITHION`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] mt-[5.99px] 3xl:mt-[5px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                            compId="44:76"
                            comWidth={449.94}
                            comHeight={28.01}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Paris Designer Meetup with Elmna’s Partner`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[53px] mb-[59px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                            compId="44:78"
                            comWidth={450}
                            comHeight={84}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Image
                          src={"images/img_image_30.svg"}
                          className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                          compId="44:79"
                          comWidth={509.33}
                          comHeight={318}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="image"
                        />
                      </Stack>
                      <Row
                        className="absolute bg-black_900 items-center justify-between left-[0] rounded-radius6 top-[36%] w-[43%]"
                        compId="1174"
                        comWidth={220}
                        comHeight={113}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[18%]"
                          compId="1173"
                          comWidth={40}
                          comHeight={66}
                          compLeft={28.35}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora lg:text-fs19 xl:text-fs22 2xl:text-fs25 3xl:text-fs30 text-fs34 text-left text-white_A700 w-[100%]"
                            compId="44:91"
                            comWidth={40}
                            comHeight={28}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`05`}</Text>
                          <Text
                            className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700_70 w-[80%]"
                            compId="44:92"
                            comWidth={32}
                            comHeight={28}
                            compLeft={1.03}
                            compRight={10}
                            compType="Text"
                          >{`DEC`}</Text>
                        </Column>
                        <Image
                          src={"images/img_btnbook_12.svg"}
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[25px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                          compId="44:86"
                          comWidth={60}
                          comHeight={60}
                          compLeft={0}
                          compRight={39}
                          compType="Image"
                          alt="btnBook"
                        />
                      </Row>
                    </Stack>
                    <Stack
                      className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                      compId="1202"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={46}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                        compId="1204"
                        comWidth={509.33}
                        comHeight={567}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="1176"
                          comWidth={509.33}
                          comHeight={559}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left tracking-ls1 w-[25%]"
                            compId="44:58"
                            comWidth={125}
                            comHeight={27.22}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`MOBILE APP`}</Text>
                          <Text
                            className="font-bold font-lora xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.39px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] mt-[6.77px] 3xl:mt-[6px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                            compId="44:57"
                            comWidth={449.94}
                            comHeight={28.01}
                            compLeft={30}
                            compRight={29.39}
                            compType="Text"
                          >{`Global Android Programmer Meetup 2020`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[53px] mb-[59px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                            compId="44:59"
                            comWidth={450}
                            comHeight={84}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Image
                          src={"images/img_image_31.svg"}
                          className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                          compId="44:60"
                          comWidth={509.33}
                          comHeight={318}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="image"
                        />
                      </Stack>
                      <Row
                        className="absolute bg-black_900 items-center justify-between left-[0] rounded-radius6 top-[36%] w-[43%]"
                        compId="1179"
                        comWidth={220}
                        comHeight={113}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.34px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[16%]"
                          compId="1178"
                          comWidth={36}
                          comHeight={66}
                          compLeft={28.34}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora lg:text-fs19 xl:text-fs22 2xl:text-fs25 3xl:text-fs30 text-fs34 text-left text-white_A700 w-[100%]"
                            compId="44:72"
                            comWidth={36}
                            comHeight={28}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`01`}</Text>
                          <Text
                            className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700_70 w-[89%]"
                            compId="44:73"
                            comWidth={32}
                            comHeight={28}
                            compLeft={1.03}
                            compRight={10}
                            compType="Text"
                          >{`DEC`}</Text>
                        </Column>
                        <Image
                          src={"images/img_btnbook_13.svg"}
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[25px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                          compId="44:67"
                          comWidth={60}
                          comHeight={60}
                          compLeft={0}
                          compRight={39}
                          compType="Image"
                          alt="btnBook"
                        />
                      </Row>
                    </Stack>
                    <Stack
                      className="lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] w-[100%]"
                      compId="1206"
                      comWidth={509.33}
                      comHeight={567}
                      compLeft={45.99}
                      compRight={0}
                      compType="Stack"
                    >
                      <Stack
                        className="absolute lg:h-[331px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] h-[567px] inset-[0] w-[100%]"
                        compId="1208"
                        comWidth={509.33}
                        comHeight={567}
                        compLeft={0}
                        compRight={0}
                        compType="Stack"
                      >
                        <Column
                          className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] inset-x-[0] items-start justify-center rounded-radius20 top-[1%] w-[100%]"
                          compId="1181"
                          comWidth={509.33}
                          comHeight={559}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-cairo font-semibold lg:mt-[198px] xl:mt-[226px] 2xl:mt-[255px] 3xl:mt-[306px] mt-[340px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left tracking-ls1 w-[25%]"
                            compId="44:96"
                            comWidth={125}
                            comHeight={27.22}
                            compLeft={30}
                            compRight={30}
                            compType="Text"
                          >{`ACCOUNTING`}</Text>
                          <Text
                            className="font-bold font-lora leading-lh xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] mt-[6.77px] 3xl:mt-[6px] lg:mx-[17px] 2xl:mx-[22px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[88%]"
                            compId="44:95"
                            comWidth={450}
                            comHeight={54.01}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Bussiness Plan in Pandemic with Famous Native Speaker`}</Text>
                          <Text
                            className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mb-[19px] xl:mb-[22px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[33px] xl:ml-[20px] 3xl:ml-[27px] ml-[30px] xl:mr-[19px] 3xl:mr-[26px] mr-[29.33px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:mx-[17px] 2xl:mx-[22px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[88%]"
                            compId="44:97"
                            comWidth={450}
                            comHeight={84}
                            compLeft={30}
                            compRight={29.33}
                            compType="Text"
                          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ....`}</Text>
                        </Column>
                        <Image
                          src={"images/img_image_32.svg"}
                          className="absolute lg:h-[186px] xl:h-[213px] 2xl:h-[239px] 3xl:h-[287px] h-[318px] object-cover top-[0] w-[100%]"
                          compId="44:98"
                          comWidth={509.33}
                          comHeight={318}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="image"
                        />
                      </Stack>
                      <Row
                        className="absolute bg-black_900 items-center justify-between left-[0] rounded-radius6 top-[36%] w-[43%]"
                        compId="1184"
                        comWidth={220}
                        comHeight={113}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Column
                          className="items-start lg:mb-[11px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] mb-[19px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28.35px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[19%]"
                          compId="1183"
                          comWidth={42}
                          comHeight={66}
                          compLeft={28.35}
                          compRight={0}
                          compType="Column"
                        >
                          <Text
                            className="font-bold font-lora lg:text-fs19 xl:text-fs22 2xl:text-fs25 3xl:text-fs30 text-fs34 text-left text-white_A700 w-[100%]"
                            compId="44:110"
                            comWidth={42}
                            comHeight={28}
                            compLeft={0}
                            compRight={0}
                            compType="Text"
                          >{`08`}</Text>
                          <Text
                            className="font-cairo font-semibold ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700_70 w-[76%]"
                            compId="44:111"
                            comWidth={32}
                            comHeight={28}
                            compLeft={1.03}
                            compRight={10}
                            compType="Text"
                          >{`DEC`}</Text>
                        </Column>
                        <Image
                          src={"images/img_btnbook_14.svg"}
                          className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] mb-[25px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                          compId="44:105"
                          comWidth={60}
                          comHeight={60}
                          compLeft={0}
                          compRight={39}
                          compType="Image"
                          alt="btnBook"
                        />
                      </Row>
                    </Stack>
                  </List>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[100%]"
                    compId="44:115"
                    comWidth={1920}
                    comHeight={1}
                    compLeft={0}
                    compRight={0}
                    compType="Line"
                  />
                </Column>
              </Column>
              <Stack
                className="bg-black_900 font-lora lg:h-[214px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] h-[366px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
                compId="1210"
                comWidth={1920}
                comHeight={366}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_maskgroup_6.svg"}
                  className="absolute lg:h-[214px] xl:h-[245px] 2xl:h-[275px] 3xl:h-[330px] h-[366px] inset-[0] object-cover w-[100%]"
                  compId="25:3502"
                  comWidth={1920}
                  comHeight={366}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="MaskGroup"
                />
                <Row
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]"
                  compId="1159"
                  comWidth={1619}
                  comHeight={152}
                  compLeft={152}
                  compRight={149}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:leading-lh44 xl:leading-lh50 2xl:leading-lh57 3xl:leading-lh68 leading-lh7600 not-italic lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-left text-white_A700 w-[49%]"
                    compId="25:3517"
                    comWidth={789}
                    comHeight={152}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                  <Stack
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] w-[34%]"
                    compId="1212"
                    comWidth={546}
                    comHeight={80}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <Input
                      className="absolute bg-black_900 placeholder:bg-transparent border border-gray_300 border-solid font-normal font-opensans inset-[0] not-italic lg:pb-[16px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.545px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] lg:pt-[17px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[29.545px] xl:py-[19px] rounded-radius60 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_600 text-gray_600 text-left w-[100%]"
                      compId="70"
                      comWidth={546}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group70"
                      placeholder={`Enter your email address...`}
                    ></Input>
                    <Button
                      className="absolute bg-bluegray_700 font-bold font-cairo h-[max-content] inset-y-[0] my-[auto] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] right-[2%] rounded-radius37 shadow-bs2 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[36%]"
                      compId="25:3514"
                      comWidth={196.79}
                      comHeight={60}
                      compLeft={0}
                      compRight={10.21}
                      compType="Button"
                    >{`SUBSCRIBE`}</Button>
                  </Stack>
                </Row>
              </Stack>
            </Column>
          </Column>
          <footer
            className="font-opensans w-[100%]"
            compId="25:3418"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-white_A700 items-center justify-end w-[100%]"
              compId="1187"
              comWidth={1920}
              comHeight={583}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start 2xl:mt-[101px] 3xl:mt-[121px] mt-[135px] lg:mt-[78px] xl:mt-[90px] mx-[auto] w-[84%]"
                compId="25:3431"
                comWidth={1610}
                comHeight={303}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[33%]"
                  compId="25:3432"
                  comWidth={530}
                  comHeight={303}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_logo_15.svg"}
                    className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                    compId="25:3433"
                    comWidth={198}
                    comHeight={72}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="logo"
                  />
                  <Text
                    className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[100%]"
                    compId="25:3441"
                    comWidth={530}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                  <Column
                    className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                    compId="1218"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1163"
                      comWidth={530}
                      comHeight={99}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[14%]"
                        compId="25:3455"
                        comWidth={72}
                        comHeight={22}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Follow Us`}</Text>
                      <Column
                        className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]"
                        compId="1219"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="1162"
                          comWidth={530}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_social01_6.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                            compId="25:3444"
                            comWidth={12.08}
                            comHeight={22.15}
                            compLeft={5}
                            compRight={0}
                            compType="Image"
                            alt="social01"
                          />
                          <Image
                            src={"images/img_social03_6.svg"}
                            className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                            compId="25:3448"
                            comWidth={51}
                            comHeight={51}
                            compLeft={48.92}
                            compRight={0}
                            compType="Image"
                            alt="social03"
                          />
                          <Image
                            src={"images/img_social02_6.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                            compId="25:3446"
                            comWidth={31.47}
                            comHeight={22.66}
                            compLeft={40.29}
                            compRight={0}
                            compType="Image"
                            alt="social02"
                          />
                          <Image
                            src={"images/img_social04_6.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.6px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                            compId="25:3451"
                            comWidth={24.17}
                            comHeight={23.16}
                            compLeft={51.6}
                            compRight={0}
                            compType="Image"
                            alt="social04"
                          />
                          <Image
                            src={"images/img_social05_6.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                            compId="25:3453"
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
                  compId="25:3491"
                  comWidth={99}
                  comHeight={216}
                  compLeft={104}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                    compId="25:3492"
                    comWidth={99}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Why Elmna`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="25:3493"
                    comWidth={88}
                    comHeight={162}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[1px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[99%]"
                      compId="25:3494"
                      comWidth={87}
                      comHeight={30}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`About elmna`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[81%]"
                      compId="25:3495"
                      comWidth={71}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Enterprise`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[100%]"
                      compId="25:3496"
                      comWidth={88}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Alumni Story`}</Text>
                    <Text
                      className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[90%]"
                      compId="25:3497"
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
                  compId="25:3483"
                  comWidth={90}
                  comHeight={260}
                  compLeft={164}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                    compId="25:3490"
                    comWidth={90}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Resources`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="25:3484"
                    comWidth={80}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[86%]"
                      compId="25:3485"
                      comWidth={69}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Download`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[100%]"
                      compId="25:3486"
                      comWidth={80}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[59%]"
                      compId="25:3487"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Events`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[59%]"
                      compId="25:3488"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Guides`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[65%]"
                      compId="25:3489"
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
                  compId="25:3475"
                  comWidth={100}
                  comHeight={260}
                  compLeft={124}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                    compId="25:3482"
                    comWidth={100}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Community`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                    compId="25:3476"
                    comWidth={72}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[85%]"
                      compId="25:3477"
                      comWidth={61}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About us`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[100%]"
                      compId="25:3478"
                      comWidth={72}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Contact us`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[51%]"
                      compId="25:3479"
                      comWidth={37}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Login`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[72%]"
                      compId="25:3480"
                      comWidth={52}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sign Up`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[39%]"
                      compId="25:3481"
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
                  compId="25:3456"
                  comWidth={285}
                  comHeight={226}
                  compLeft={114}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[62%]"
                    compId="25:3457"
                    comWidth={176}
                    comHeight={37}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Get in Touch with Us`}</Text>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="1220"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-start w-[100%]"
                      compId="25:3458"
                      comWidth={285}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_pin51_8.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="25:3460"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="pin51"
                      />
                      <Text
                        className="font-semibold leading-lh xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[86%]"
                        compId="25:3459"
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
                    compId="25:3463"
                    comWidth={163}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall_13.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:3465"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[76%]"
                      compId="25:3464"
                      comWidth={124}
                      comHeight={30}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`+123 345123 556`}</Text>
                  </Row>
                  <Row
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[64%]"
                    compId="25:3469"
                    comWidth={183}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_inbox21_12.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="25:3471"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[79%]"
                      compId="25:3470"
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
                className="bg-white_A700 font-cairo items-center justify-start lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[61px] w-[100%]"
                compId="1164"
                comWidth={1920}
                comHeight={84}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_100_14 h-[1px] w-[100%]"
                  compId="25:3427"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-start xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] mx-[auto] lg:my-[15px] w-[84%]"
                  compId="25:3422"
                  comWidth={1620}
                  comHeight={30}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-semibold text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[23%]"
                    compId="25:3428"
                    comWidth={372}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                  <Row
                    className="items-center justify-center lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[227px] ml-[253px] w-[23%]"
                    compId="1215"
                    comWidth={367}
                    comHeight={30}
                    compLeft={253}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[11%]"
                      compId="25:3425"
                      comWidth={41}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[8%]"
                      compId="25:3424"
                      comWidth={28}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`FAQ`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[25%]"
                      compId="25:3423"
                      comWidth={92}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[15%]"
                      compId="25:3426"
                      comWidth={56}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Sitemap`}</Text>
                  </Row>
                  <Text
                    className="font-semibold lg:ml-[257px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[398px] ml-[442px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-right w-[11%]"
                    compId="25:3430"
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
      </Column>
    </>
  );
};

export default EventDetailsPage;
