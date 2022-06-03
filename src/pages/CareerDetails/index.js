import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { List } from "components/List";
import { Stack } from "components/Stack";
import { Input } from "components/Input";

const CareerDetailsPage = () => {
  return (
    <>
      <Column
        className="bg-white_A700 font-cairo mx-[auto] w-[100%]"
        compId="25:4301"
        comWidth={1920}
        comHeight={3674}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="w-[100%]"
          compId="1370"
          comWidth={1920}
          comHeight={191}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <header
            className="w-[100%]"
            compId="78"
            comWidth={1920}
            comHeight={191}
            compLeft={0}
            compRight={0}
            compType="Header"
          >
            <Column
              className="w-[100%]"
              compId="44:724"
              comWidth={1920}
              comHeight={191}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Column
                className="bg-white_A700 w-[100%]"
                compId="1286"
                comWidth={1920}
                comHeight={61}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-start justify-start 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]"
                  compId="1285"
                  comWidth={1920}
                  comHeight={30}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_telephonecall_16.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="44:758"
                    comWidth={24}
                    comHeight={24}
                    compLeft={150}
                    compRight={0}
                    compType="Image"
                    alt="telephonecall"
                  />
                  <Text
                    className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[5%]"
                    compId="44:757"
                    comWidth={97}
                    comHeight={30}
                    compLeft={21}
                    compRight={0}
                    compType="Text"
                  >{`+12 345 6789`}</Text>
                  <Image
                    src={"images/img_inbox21_15.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] ml-[56px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="44:764"
                    comWidth={24}
                    comHeight={24}
                    compLeft={56}
                    compRight={0}
                    compType="Image"
                    alt="inbox21"
                  />
                  <Text
                    className="cursor-pointer hover:font-bold font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[21px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[7%]"
                    compId="44:763"
                    comWidth={142}
                    comHeight={30}
                    compLeft={21}
                    compRight={0}
                    compType="Text"
                  >{`support@elmna.com`}</Text>
                  <Row
                    className="items-center justify-center lg:ml-[539px] xl:ml-[617px] 2xl:ml-[694px] 3xl:ml-[832px] ml-[925px] w-[10%]"
                    compId="1367"
                    comWidth={194}
                    comHeight={30}
                    compLeft={925}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="cursor-pointer hover:font-bold font-normal not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[41%]"
                      compId="44:755"
                      comWidth={79}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[16%]"
                      compId="44:767"
                      comWidth={31}
                      comHeight={30}
                      compLeft={20}
                      compRight={0}
                      compType="Text"
                    >{`Blog`}</Text>
                    <Text
                      className="cursor-pointer hover:font-bold font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] not-italic text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[23%]"
                      compId="44:768"
                      comWidth={44}
                      comHeight={30}
                      compLeft={20}
                      compRight={0}
                      compType="Text"
                    >{`Career`}</Text>
                  </Row>
                  <Text
                    className="cursor-pointer hover:font-bold font-bold lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] ml-[68px] text-black_900 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[1%]"
                    compId="44:769"
                    comWidth={20}
                    comHeight={30}
                    compLeft={68}
                    compRight={0}
                    compType="Text"
                  >{`EN`}</Text>
                  <Image
                    src={"images/img_chevron1_21.svg"}
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[10px] ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                    compId="44:770"
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
                  compId="44:772"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
              <Column
                className="w-[100%]"
                compId="1289"
                comWidth={1920}
                comHeight={130}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-start lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] mt-[29px] w-[100%]"
                  compId="1288"
                  comWidth={1920}
                  comHeight={72}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Image
                    src={"images/img_logo_18.svg"}
                    className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] object-contain w-[10%]"
                    compId="44:745"
                    comWidth={198}
                    comHeight={72}
                    compLeft={150}
                    compRight={0}
                    compType="Image"
                    alt="logo"
                  />
                  <Row
                    className="items-center justify-center 3xl:ml-[105px] ml-[117px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] my-[19px] w-[32%]"
                    compId="1368"
                    comWidth={610}
                    comHeight={34}
                    compLeft={117}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-bold text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[8%]"
                      compId="44:738"
                      comWidth={47}
                      comHeight={34}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Row
                      className="items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[49px] w-[27%]"
                      compId="44:739"
                      comWidth={165}
                      comHeight={34}
                      compLeft={49}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[85%]"
                        compId="44:740"
                        comWidth={141}
                        comHeight={34}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Program & Events`}</Text>
                      <Image
                        src={"images/img_chevron1_22.svg"}
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] xl:mb-[4px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        compId="44:741"
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
                      compId="44:744"
                      comWidth={101}
                      comHeight={34}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Alumni Story`}</Text>
                    <Text
                      className="font-bold lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] text-black_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[25%]"
                      compId="44:743"
                      comWidth={150}
                      comHeight={34}
                      compLeft={48}
                      compRight={0}
                      compType="Text"
                    >{`Career Oppurtunity`}</Text>
                  </Row>
                  <Image
                    src={"images/img_search91_10.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[204px] 3xl:ml-[245px] ml-[273px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] my-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    compId="44:735"
                    comWidth={24}
                    comHeight={24}
                    compLeft={273}
                    compRight={0}
                    compType="Image"
                    alt="search91"
                  />
                  <Button
                    className="border border-gray_300 border-solid font-bold lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-black_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[9%]"
                    compId="44:731"
                    comWidth={178}
                    comHeight={60}
                    compLeft={39}
                    compRight={0}
                    compType="Button"
                  >{`Sign In`}</Button>
                  <Button
                    className="bg-bluegray_700 font-bold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] ml-[18px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius58 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[8%]"
                    compId="44:728"
                    comWidth={163}
                    comHeight={60}
                    compLeft={18}
                    compRight={0}
                    compType="Button"
                  >{`Join Now`}</Button>
                </Row>
                <Line
                  className="bg-gray_300 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] w-[100%]"
                  compId="44:727"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
              </Column>
            </Column>
          </header>
        </Column>
        <Column
          className="items-end lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] overflow-auto w-[100%]"
          compId="1371"
          comWidth={1920}
          comHeight={2840}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="items-start justify-start w-[100%]"
            compId="1331"
            comWidth={2528}
            comHeight={2840}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Column
              className="w-[100%]"
              compId="1373"
              comWidth={2528}
              comHeight={906}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-start justify-start w-[100%]"
                compId="1328"
                comWidth={2528}
                comHeight={906}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Column
                  className="bg-white_A700 border border-gray_300 border-solid items-start justify-start lg:mb-[30px] xl:mb-[35px] 2xl:mb-[39px] 3xl:mb-[47px] mb-[53px] xl:ml-[100px] 2xl:ml-[112px] 3xl:ml-[135px] ml-[150px] lg:ml-[87px] rounded-radius6 w-[16%]"
                  compId="44:932"
                  comWidth={398}
                  comHeight={853}
                  compLeft={150}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] mt-[49px] w-[100%]"
                    compId="1375"
                    comWidth={398}
                    comHeight={391}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Image
                      src={"images/img_companylogo_14.svg"}
                      className="3xl:h-[117px] h-[129px] lg:h-[76px] xl:h-[87px] 2xl:h-[97px] mx-[auto] object-contain 3xl:w-[116px] w-[129px] lg:w-[75px] xl:w-[86px] 2xl:w-[96px]"
                      compId="44:990"
                      comWidth={129}
                      comHeight={129}
                      compLeft={10}
                      compRight={10}
                      compType="Image"
                      alt="companyLogo"
                    />
                    <Column
                      className="items-center justify-start lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] mx-[auto] w-[49%]"
                      compId="44:976"
                      comWidth={197}
                      comHeight={68}
                      compLeft={10}
                      compRight={10}
                      compType="Column"
                    >
                      <Text
                        className="font-bold font-lora text-black_900 lg:text-fs12 xl:text-fs14 2xl:text-fs16 3xl:text-fs19 text-fs22 text-left w-[100%]"
                        compId="44:977"
                        comWidth={197}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Highspeed Studios`}</Text>
                      <Text
                        className="font-cairo font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] mr-[16px] lg:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[80%]"
                        compId="44:978"
                        comWidth={157}
                        comHeight={30}
                        compLeft={24}
                        compRight={16}
                        compType="Text"
                      >{`Creative Design Agency`}</Text>
                    </Column>
                    <Button
                      className="bg-bluegray_100 font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] mx-[auto] 2xl:pb-[6px] 3xl:pb-[7px] pb-[8.545px] 2xl:pt-[5px] 3xl:pt-[6px] pt-[7.545px] lg:py-[4px] xl:py-[5px] rounded-radius60 text-bluegray_700 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[54%]"
                      compId="44:979"
                      comWidth={214}
                      comHeight={47}
                      compLeft={10}
                      compRight={10}
                      compType="Button"
                    >{`+ Follow`}</Button>
                    <Row
                      className="font-lora items-start justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
                      compId="1338"
                      comWidth={398}
                      comHeight={57}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Text
                        className="font-bold lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] ml-[44px] text-black_901 lg:text-fs22 xl:text-fs25 2xl:text-fs28 3xl:text-fs34 text-fs38 text-left w-[13%]"
                        compId="47:16"
                        comWidth={52}
                        comHeight={49}
                        compLeft={44}
                        compRight={0}
                        compType="Text"
                      >{`4.8`}</Text>
                      <Column
                        className="font-cairo items-start justify-start lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] mt-[1px] w-[40%]"
                        compId="1337"
                        comWidth={160}
                        comHeight={56}
                        compLeft={0}
                        compRight={40}
                        compType="Column"
                      >
                        <Column
                          className="w-[100%]"
                          compId="1378"
                          comWidth={160}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Image
                            src={"images/img_stars.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-cover w-[100%]"
                            compId="47:14"
                            comWidth={160}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="stars"
                          />
                        </Column>
                        <Text
                          className="font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_402 text-left w-[52%]"
                          compId="44:969"
                          comWidth={83}
                          comHeight={26}
                          compLeft={10}
                          compRight={0}
                          compType="Text"
                        >{`346k Reviews`}</Text>
                      </Column>
                    </Row>
                  </Column>
                  <List
                    className="font-lora gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] w-[52%]"
                    compId="1366"
                    comWidth={205}
                    comHeight={141}
                    compLeft={44}
                    compRight={44}
                    compType="List"
                    orientation="vertical"
                  >
                    <Column
                      className="items-start justify-start 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[100%]"
                      compId="1297"
                      comWidth={205}
                      comHeight={58}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="font-lora w-[100%]"
                        compId="1379"
                        comWidth={205}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-end justify-start w-[100%]"
                          compId="1296"
                          comWidth={205}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_icon_22.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            compId="44:945"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="icon"
                          />
                          <Text
                            className="font-bold lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] ml-[29px] text-black_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[78%]"
                            compId="44:951"
                            comWidth={160}
                            comHeight={26}
                            compLeft={29}
                            compRight={0}
                            compType="Text"
                          >{`London, England`}</Text>
                        </Row>
                      </Column>
                      <Text
                        className="font-cairo font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_402 text-left w-[24%]"
                        compId="44:952"
                        comWidth={50}
                        comHeight={26}
                        compLeft={45}
                        compRight={45}
                        compType="Text"
                      >{`Location`}</Text>
                    </Column>
                    <Line
                      className="self-center w-[18%] h-[1px] bg-gray_200 rounded-radius20"
                      compId="44:970"
                      comWidth={339}
                      comHeight={1}
                      compLeft={0}
                      compRight={0}
                      compType="Line"
                    />
                    <Column
                      className="lg:mr-[47px] xl:mr-[54px] 2xl:mr-[61px] 3xl:mr-[73px] mr-[82px] 3xl:my-[11px] my-[12.5px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] w-[60%]"
                      compId="1299"
                      comWidth={123}
                      comHeight={58}
                      compLeft={0}
                      compRight={82}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="1380"
                        comWidth={123}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-end justify-start w-[100%]"
                          compId="1298"
                          comWidth={123}
                          comHeight={26}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_icon_23.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            compId="44:954"
                            comWidth={16}
                            comHeight={16}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="icon"
                          />
                          <Text
                            className="font-bold lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] ml-[29px] text-black_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[63%]"
                            compId="44:959"
                            comWidth={78}
                            comHeight={26}
                            compLeft={29}
                            compRight={0}
                            compType="Text"
                          >{`80 - 100`}</Text>
                        </Row>
                      </Column>
                      <Column
                        className="font-cairo items-end lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[100%]"
                        compId="1381"
                        comWidth={123}
                        comHeight={26}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-normal lg:mx-[11px] xl:mx-[12px] 2xl:mx-[14px] 3xl:mx-[17px] mx-[19px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_402 text-left w-[48%]"
                          compId="44:960"
                          comWidth={59}
                          comHeight={26}
                          compLeft={19}
                          compRight={19}
                          compType="Text"
                        >{`Employee`}</Text>
                      </Column>
                    </Column>
                  </List>
                  <Column
                    className="lg:mb-[22px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] mb-[38px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] mt-[69px] w-[100%]"
                    compId="1376"
                    comWidth={398}
                    comHeight={128}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1339"
                      comWidth={398}
                      comHeight={128}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-lora font-medium lg:mx-[16px] xl:mx-[19px] 2xl:mx-[21px] 3xl:mx-[26px] mx-[29px] text-bluegray_800 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[38%]"
                        compId="44:941"
                        comWidth={150}
                        comHeight={26}
                        compLeft={29}
                        compRight={29}
                        compType="Text"
                      >{`About Company`}</Text>
                      <Text
                        className="font-cairo font-normal lg:leading-lh15 xl:leading-lh17 2xl:leading-lh19 3xl:leading-lh23 leading-lh2600 lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[17px] xl:mx-[20px] 2xl:mx-[22px] 3xl:mx-[27px] mx-[30px] not-italic text-bluegray_902 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[81%]"
                        compId="44:942"
                        comWidth={323}
                        comHeight={78}
                        compLeft={30}
                        compRight={30}
                        compType="Text"
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column
                  className="bg-white_A700 border border-gray_300 border-solid items-start justify-start lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] rounded-radius6 w-[47%]"
                  compId="1347"
                  comWidth={1189}
                  comHeight={906}
                  compLeft={30}
                  compRight={0}
                  compType="Column"
                >
                  <Column
                    className="font-cairo lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[100%]"
                    compId="1382"
                    comWidth={1189}
                    comHeight={89}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-center justify-start w-[100%]"
                      compId="1290"
                      comWidth={1189}
                      comHeight={89}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="items-start lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] ml-[60px] w-[36%]"
                        compId="1291"
                        comWidth={430}
                        comHeight={89}
                        compLeft={60}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold font-lora text-black_900 lg:text-fs22 xl:text-fs25 2xl:text-fs28 3xl:text-fs34 text-fs38 text-left w-[100%]"
                          compId="44:919"
                          comWidth={430}
                          comHeight={49}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Senior Branch Manager`}</Text>
                        <Text
                          className="font-cairo font-normal ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] not-italic text-bluegray_800 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[67%]"
                          compId="44:929"
                          comWidth={287}
                          comHeight={30}
                          compLeft={1}
                          compRight={10}
                          compType="Text"
                        >{`Posted by Admin on November 12th, 2020`}</Text>
                      </Column>
                      <Button
                        className="bg-teal_50 font-bold 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[226px] xl:ml-[258px] 2xl:ml-[291px] 3xl:ml-[349px] ml-[388px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius60 text-bluegray_700 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[12%]"
                        compId="44:982"
                        comWidth={143}
                        comHeight={60}
                        compLeft={388}
                        compRight={0}
                        compType="Button"
                      >{`Apply Now`}</Button>
                      <Image
                        src={"images/img_btnbookmark_14.svg"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] 3xl:mb-[11px] mb-[13px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        compId="44:985"
                        comWidth={60}
                        comHeight={60}
                        compLeft={23}
                        compRight={0}
                        compType="Image"
                        alt="btnBookmark"
                      />
                    </Row>
                  </Column>
                  <List
                    className="font-poppins lg:gap-[55px] xl:gap-[63px] 2xl:gap-[71px] 3xl:gap-[85px] gap-[95px] grid grid-cols-3 min-h-[auto] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] w-[70%]"
                    compId="44:895"
                    comWidth={828}
                    comHeight={61}
                    compLeft={60}
                    compRight={60}
                    compType="List"
                    orientation="horizontal"
                  >
                    <Row
                      className="items-center justify-between w-[100%]"
                      compId="1341"
                      comWidth={245}
                      comHeight={61}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icsalary_14.svg"}
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px] w-[28px]"
                        compId="44:899"
                        comWidth={28}
                        comHeight={28}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icSalary"
                      />
                      <Column
                        className="items-start w-[73%]"
                        compId="1340"
                        comWidth={179}
                        comHeight={61}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                          compId="44:897"
                          comWidth={179}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`$14,000 - $25,000`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic text-bluegray_400 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[66%]"
                          compId="44:898"
                          comWidth={118}
                          comHeight={24}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Monthly Salary`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="items-center justify-center w-[100%]"
                      compId="1343"
                      comWidth={162}
                      comHeight={61}
                      compLeft={95}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_icsalary_15.svg"}
                        className="lg:h-[16px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] h-[27px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain lg:w-[15px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] w-[27px]"
                        compId="44:906"
                        comWidth={27}
                        comHeight={27}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icSalary"
                      />
                      <Column
                        className="items-start lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] w-[60%]"
                        compId="1342"
                        comWidth={97}
                        comHeight={61}
                        compLeft={38}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                          compId="44:904"
                          comWidth={97}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`2-3 Years`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic text-bluegray_400 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[90%]"
                          compId="44:905"
                          comWidth={87}
                          comHeight={24}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Experience`}</Text>
                      </Column>
                    </Row>
                    <Row
                      className="items-center justify-between w-[100%]"
                      compId="1345"
                      comWidth={231}
                      comHeight={61}
                      compLeft={95}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_iclocation_14.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="44:912"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="icLocation"
                      />
                      <Column
                        className="items-start w-[72%]"
                        compId="1344"
                        comWidth={167}
                        comHeight={61}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                          compId="44:910"
                          comWidth={167}
                          comHeight={30}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`London, England`}</Text>
                        <Text
                          className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] mt-[7px] not-italic text-bluegray_400 xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left w-[41%]"
                          compId="44:911"
                          comWidth={68}
                          comHeight={24}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Location`}</Text>
                      </Column>
                    </Row>
                  </List>
                  <Text
                    className="font-bold font-lora lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[13%]"
                    compId="44:872"
                    comWidth={150}
                    comHeight={26}
                    compLeft={60}
                    compRight={60}
                    compType="Text"
                  >{`Job Description`}</Text>
                  <Text
                    className="font-cairo font-normal lg:leading-lh16 xl:leading-lh18 2xl:leading-lh21 3xl:leading-lh25 leading-lh2800 lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] mt-[19px] lg:mx-[33px] xl:mx-[38px] 2xl:mx-[42px] 3xl:mx-[51px] mx-[57px] not-italic text-bluegray_800 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[87%]"
                    compId="44:871"
                    comWidth={1036}
                    comHeight={252}
                    compLeft={57}
                    compRight={57}
                    compType="Text"
                  >
                    {
                      <>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
                        <br />
                        {``}
                        <br />
                        {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, s`}
                      </>
                    }
                  </Text>
                  <Column
                    className="font-lora lg:mb-[37px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] mb-[64.21px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] mt-[54px] w-[100%]"
                    compId="1383"
                    comWidth={1189}
                    comHeight={172.79004}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1295"
                      comWidth={1189}
                      comHeight={172.79}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-bold lg:mx-[35px] xl:mx-[40px] 2xl:mx-[45px] 3xl:mx-[54px] mx-[60px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[5%]"
                        compId="44:874"
                        comWidth={64}
                        comHeight={26}
                        compLeft={60}
                        compRight={60}
                        compType="Text"
                      >{`Galery`}</Text>
                      <Column
                        className="lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[100%]"
                        compId="1384"
                        comWidth={1189}
                        comHeight={123.79004}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[19px] 3xl:gap-[23px] gap-[25.610031px] grid grid-cols-4 items-center justify-start lg:pl-[35px] xl:pl-[40px] 2xl:pl-[45px] 3xl:pl-[54px] pl-[60px] w-[100%]"
                          compId="1294"
                          comWidth={1189}
                          comHeight={123.79004}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_image_35.svg"}
                            className="3xl:h-[112px] h-[123.79px] lg:h-[73px] xl:h-[83px] 2xl:h-[93px] object-contain w-[100%]"
                            compId="44:875"
                            comWidth={239.04}
                            comHeight={123.79}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Image
                            src={"images/img_image_36.svg"}
                            className="3xl:h-[112px] h-[123.79px] lg:h-[73px] xl:h-[83px] 2xl:h-[93px] object-contain w-[100%]"
                            compId="44:885"
                            comWidth={239.04}
                            comHeight={123.79}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Image
                            src={"images/img_image_37.svg"}
                            className="3xl:h-[112px] h-[123.79px] lg:h-[73px] xl:h-[83px] 2xl:h-[93px] object-contain w-[100%]"
                            compId="44:880"
                            comWidth={239.04}
                            comHeight={123.79}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                          <Image
                            src={"images/img_image_38.svg"}
                            className="3xl:h-[112px] h-[123.79px] lg:h-[73px] xl:h-[83px] 2xl:h-[93px] object-contain w-[100%]"
                            compId="44:890"
                            comWidth={239.04}
                            comHeight={123.79}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="image"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Row
              className="font-lora items-end justify-start 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] xl:mx-[100px] 2xl:mx-[112px] 3xl:mx-[135px] mx-[150px] lg:mx-[87px] w-[64%]"
              compId="202:2"
              comWidth={1620}
              comHeight={51}
              compLeft={150}
              compRight={150}
              compType="Row"
            >
              <Text
                className="font-bold text-black_902 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left w-[19%]"
                compId="47:133"
                comWidth={310}
                comHeight={51}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Others Vacanies`}</Text>
              <Row
                className="font-cairo items-center justify-start ml-[1080px] lg:ml-[630px] xl:ml-[720px] 2xl:ml-[810px] 3xl:ml-[972px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[14%]"
                compId="47:224"
                comWidth={230}
                comHeight={34}
                compLeft={1080}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_rightarrow1_4.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="47:229"
                  comWidth={24}
                  comHeight={24}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="rightarrow1"
                />
                <Text
                  className="font-normal lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] ml-[19px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_400 text-left w-[15%]"
                  compId="47:228"
                  comWidth={35}
                  comHeight={34}
                  compLeft={19}
                  compRight={0}
                  compType="Text"
                >{`Prev`}</Text>
                <Text
                  className="font-bold lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] text-bluegray_700 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[16%]"
                  compId="47:227"
                  comWidth={37}
                  comHeight={34}
                  compLeft={67}
                  compRight={0}
                  compType="Text"
                >{`Next`}</Text>
                <Image
                  src={"images/img_rightarrow1_5.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  compId="47:225"
                  comWidth={24}
                  comHeight={24}
                  compLeft={24}
                  compRight={0}
                  compType="Image"
                  alt="rightarrow1"
                />
              </Row>
            </Row>
            <Column
              className="font-cairo items-end lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] mt-[60px] w-[100%]"
              compId="1374"
              comWidth={2528}
              comHeight={222}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <List
                className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] gap-[40px] grid grid-cols-3 min-h-[auto] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] w-[94%]"
                compId="202:3"
                comWidth={2378}
                comHeight={222}
                compLeft={10}
                compRight={0}
                compType="List"
                orientation="horizontal"
              >
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="1308"
                  comWidth={766}
                  comHeight={222}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-evenly lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                    compId="1306"
                    comWidth={766}
                    comHeight={83}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_companylogo_15.svg"}
                      className="lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] h-[83px] object-contain lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px] w-[83px]"
                      compId="47:136"
                      comWidth={83}
                      comHeight={83}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="companyLogo"
                    />
                    <Row
                      className="items-center justify-start mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[78%]"
                      compId="1300"
                      comWidth={596}
                      comHeight={70}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="items-start w-[32%]"
                        compId="1301"
                        comWidth={190}
                        comHeight={70}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold font-lora text-black_901 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[100%]"
                          compId="47:154"
                          comWidth={190}
                          comHeight={31}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Branch Manager`}</Text>
                        <Text
                          className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[75%]"
                          compId="47:163"
                          comWidth={142}
                          comHeight={34}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`Highspeed Studios`}</Text>
                      </Column>
                      <Button
                        className="bg-teal_50 font-bold lg:ml-[105px] xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] ml-[180px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius60 text-bluegray_700 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[24%]"
                        compId="47:155"
                        comWidth={143}
                        comHeight={60}
                        compLeft={180}
                        compRight={0}
                        compType="Button"
                      >{`Apply Now`}</Button>
                      <Image
                        src={"images/img_btnbookmark_15.svg"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        compId="47:158"
                        comWidth={60}
                        comHeight={60}
                        compLeft={23}
                        compRight={0}
                        compType="Image"
                        alt="btnBookmark"
                      />
                    </Row>
                  </Row>
                  <Row
                    className="items-center justify-center lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                    compId="1307"
                    comWidth={766}
                    comHeight={68}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-start mt-[1px] w-[27%]"
                      compId="1305"
                      comWidth={206}
                      comHeight={67}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="1385"
                        comWidth={206}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-end justify-start w-[100%]"
                          compId="1304"
                          comWidth={206}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_icsalary_16.svg"}
                            className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] object-contain lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px] w-[28px]"
                            compId="47:142"
                            comWidth={28}
                            comHeight={28}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="icSalary"
                          />
                          <Text
                            className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[78%]"
                            compId="47:140"
                            comWidth={161}
                            comHeight={37}
                            compLeft={17}
                            compRight={0}
                            compType="Text"
                          >{`$14,000 - $25,000`}</Text>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[50%]"
                        compId="47:141"
                        comWidth={102}
                        comHeight={30}
                        compLeft={45}
                        compRight={45}
                        compType="Text"
                      >{`Monthly Salary`}</Text>
                    </Column>
                    <Column
                      className="items-start mb-[1px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] w-[24%]"
                      compId="1303"
                      comWidth={186}
                      comHeight={67}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="1386"
                        comWidth={186}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="1302"
                          comWidth={186}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_iclocation_15.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="47:148"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="icLocation"
                          />
                          <Text
                            className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[76%]"
                            compId="47:146"
                            comWidth={142}
                            comHeight={37}
                            compLeft={20}
                            compRight={0}
                            compType="Text"
                          >{`London, England`}</Text>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[31%]"
                        compId="47:147"
                        comWidth={58}
                        comHeight={30}
                        compLeft={44}
                        compRight={44}
                        compType="Text"
                      >{`Location`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Column
                  className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer rounded-radius20 hover:shadow-bs1 w-[100%]"
                  compId="1317"
                  comWidth={766}
                  comHeight={222}
                  compLeft={40}
                  compRight={0}
                  compType="Column"
                >
                  <Row
                    className="items-start justify-evenly lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                    compId="1315"
                    comWidth={766}
                    comHeight={83}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_companylogo_16.svg"}
                      className="lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] h-[83px] object-contain lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px] w-[83px]"
                      compId="47:196"
                      comWidth={83}
                      comHeight={83}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="companyLogo"
                    />
                    <Row
                      className="items-center justify-start mb-[10px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[78%]"
                      compId="1309"
                      comWidth={596}
                      comHeight={70}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Column
                        className="items-start w-[34%]"
                        compId="1310"
                        comWidth={202}
                        comHeight={70}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Text
                          className="font-bold font-lora text-black_901 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[100%]"
                          compId="47:214"
                          comWidth={202}
                          comHeight={31}
                          compLeft={0}
                          compRight={0}
                          compType="Text"
                        >{`Graphic Designer`}</Text>
                        <Text
                          className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[62%]"
                          compId="47:223"
                          comWidth={125}
                          comHeight={34}
                          compLeft={0}
                          compRight={10}
                          compType="Text"
                        >{`UD. Madju Djaya`}</Text>
                      </Column>
                      <Button
                        className="bg-bluegray_700 font-bold xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] ml-[168px] lg:ml-[98px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius60 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[24%]"
                        compId="47:215"
                        comWidth={143}
                        comHeight={60}
                        compLeft={168}
                        compRight={0}
                        compType="Button"
                      >{`Apply Now`}</Button>
                      <Image
                        src={"images/img_btnbookmark_16.svg"}
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        compId="47:218"
                        comWidth={60}
                        comHeight={60}
                        compLeft={23}
                        compRight={0}
                        compType="Image"
                        alt="btnBookmark"
                      />
                    </Row>
                  </Row>
                  <Row
                    className="items-center justify-center lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[100%]"
                    compId="1316"
                    comWidth={766}
                    comHeight={68}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Column
                      className="items-start mt-[1px] w-[27%]"
                      compId="1314"
                      comWidth={206}
                      comHeight={67}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="1387"
                        comWidth={206}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-end justify-start w-[100%]"
                          compId="1313"
                          comWidth={206}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_icsalary_17.svg"}
                            className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] object-contain lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px] w-[28px]"
                            compId="47:202"
                            comWidth={28}
                            comHeight={28}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="icSalary"
                          />
                          <Text
                            className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[78%]"
                            compId="47:200"
                            comWidth={161}
                            comHeight={37}
                            compLeft={17}
                            compRight={0}
                            compType="Text"
                          >{`$14,000 - $25,000`}</Text>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[50%]"
                        compId="47:201"
                        comWidth={102}
                        comHeight={30}
                        compLeft={45}
                        compRight={45}
                        compType="Text"
                      >{`Monthly Salary`}</Text>
                    </Column>
                    <Column
                      className="items-start mb-[1px] lg:ml-[39px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] ml-[67px] w-[24%]"
                      compId="1312"
                      comWidth={186}
                      comHeight={67}
                      compLeft={67}
                      compRight={0}
                      compType="Column"
                    >
                      <Column
                        className="w-[100%]"
                        compId="1388"
                        comWidth={186}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="1311"
                          comWidth={186}
                          comHeight={37}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_iclocation_16.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            compId="47:208"
                            comWidth={24}
                            comHeight={24}
                            compLeft={0}
                            compRight={0}
                            compType="Image"
                            alt="icLocation"
                          />
                          <Text
                            className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[76%]"
                            compId="47:206"
                            comWidth={142}
                            comHeight={37}
                            compLeft={20}
                            compRight={0}
                            compType="Text"
                          >{`London, England`}</Text>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[31%]"
                        compId="47:207"
                        comWidth={58}
                        comHeight={30}
                        compLeft={44}
                        compRight={44}
                        compType="Text"
                      >{`Location`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Stack
                  className="hover:border-0 hover:cursor-pointer lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[200px] h-[222px] hover:shadow-bs1 w-[100%]"
                  compId="1357"
                  comWidth={766}
                  comHeight={222}
                  compLeft={40}
                  compRight={0}
                  compType="Stack"
                >
                  <Stack
                    className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[200px] h-[222px] inset-[0] w-[100%]"
                    compId="1359"
                    comWidth={766}
                    comHeight={222}
                    compLeft={0}
                    compRight={0}
                    compType="Stack"
                  >
                    <div
                      className="absolute bg-white_A700 border border-gray_300 border-solid lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[200px] h-[222px] inset-[0] rounded-radius20 w-[100%]"
                      compId="47:165"
                      comWidth={766}
                      comHeight={222}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Row
                      className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[93%]"
                      compId="1349"
                      comWidth={709}
                      comHeight={165}
                      compLeft={30}
                      compRight={27}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_companylogo_17.svg"}
                        className="lg:h-[49px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] h-[83px] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] mb-[82px] object-contain lg:w-[48px] xl:w-[55px] 2xl:w-[62px] 3xl:w-[74px] w-[83px]"
                        compId="47:166"
                        comWidth={83}
                        comHeight={83}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="companyLogo"
                      />
                      <Column
                        className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[85%]"
                        compId="1348"
                        comWidth={603}
                        comHeight={162}
                        compLeft={23}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-end w-[100%]"
                          compId="1320"
                          comWidth={603}
                          comHeight={70}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Column
                            className="items-start w-[49%]"
                            compId="1321"
                            comWidth={293}
                            comHeight={70}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Text
                              className="font-bold font-lora text-black_901 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[100%]"
                              compId="47:184"
                              comWidth={293}
                              comHeight={31}
                              compLeft={0}
                              compRight={0}
                              compType="Text"
                            >{`Sales Marketing Manager`}</Text>
                            <Text
                              className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic text-bluegray_700 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[53%]"
                              compId="47:193"
                              comWidth={155}
                              comHeight={34}
                              compLeft={0}
                              compRight={10}
                              compType="Text"
                            >{`Oliver Group London`}</Text>
                          </Column>
                          <Button
                            className="bg-teal_50 font-bold lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] ml-[77px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] rounded-radius60 text-bluegray_700 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[24%]"
                            compId="47:185"
                            comWidth={143}
                            comHeight={60}
                            compLeft={77}
                            compRight={0}
                            compType="Button"
                          >{`Apply Now`}</Button>
                          <Image
                            src={"images/img_btnbookmark_17.svg"}
                            className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] my-[5px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                            compId="47:188"
                            comWidth={60}
                            comHeight={60}
                            compLeft={23}
                            compRight={0}
                            compType="Image"
                            alt="btnBookmark"
                          />
                        </Row>
                        <Column
                          className="items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] w-[100%]"
                          compId="1319"
                          comWidth={603}
                          comHeight={67}
                          compLeft={0}
                          compRight={0}
                          compType="Column"
                        >
                          <Column
                            className="w-[100%]"
                            compId="1389"
                            comWidth={603}
                            comHeight={37}
                            compLeft={0}
                            compRight={0}
                            compType="Column"
                          >
                            <Row
                              className="items-end justify-start w-[100%]"
                              compId="1318"
                              comWidth={603}
                              comHeight={37}
                              compLeft={0}
                              compRight={0}
                              compType="Row"
                            >
                              <Image
                                src={"images/img_icsalary_18.svg"}
                                className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] h-[28px] mb-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] object-contain lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px] w-[28px]"
                                compId="47:172"
                                comWidth={28}
                                comHeight={28}
                                compLeft={0}
                                compRight={0}
                                compType="Image"
                                alt="icSalary"
                              />
                              <Text
                                className="font-semibold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:ml-[9px] text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[27%]"
                                compId="47:170"
                                comWidth={161}
                                comHeight={37}
                                compLeft={17}
                                compRight={0}
                                compType="Text"
                              >{`$14,000 - $25,000`}</Text>
                            </Row>
                          </Column>
                          <Text
                            className="font-normal lg:mx-[26px] xl:mx-[30px] 2xl:mx-[33px] 3xl:mx-[40px] mx-[45px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[17%]"
                            compId="47:171"
                            comWidth={102}
                            comHeight={30}
                            compLeft={45}
                            compRight={45}
                            compType="Text"
                          >{`Monthly Salary`}</Text>
                        </Column>
                      </Column>
                    </Row>
                  </Stack>
                  <Column
                    className="absolute bottom-[13%] items-start justify-start right-[22%] w-[24%]"
                    compId="1323"
                    comWidth={186}
                    comHeight={67}
                    compLeft={0}
                    compRight={171}
                    compType="Column"
                  >
                    <Column
                      className="w-[100%]"
                      compId="1390"
                      comWidth={186}
                      comHeight={37}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Row
                        className="items-center justify-start w-[100%]"
                        compId="1322"
                        comWidth={186}
                        comHeight={37}
                        compLeft={0}
                        compRight={0}
                        compType="Row"
                      >
                        <Image
                          src={"images/img_iclocation_17.svg"}
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] mt-[6px] xl:my-[4px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          compId="47:178"
                          comWidth={24}
                          comHeight={24}
                          compLeft={0}
                          compRight={0}
                          compType="Image"
                          alt="icLocation"
                        />
                        <Text
                          className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] ml-[20px] text-bluegray_901 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[76%]"
                          compId="47:176"
                          comWidth={142}
                          comHeight={37}
                          compLeft={20}
                          compRight={0}
                          compType="Text"
                        >{`London, England`}</Text>
                      </Row>
                    </Column>
                    <Text
                      className="font-normal lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] mx-[44px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_700 text-left w-[31%]"
                      compId="47:177"
                      comWidth={58}
                      comHeight={30}
                      compLeft={44}
                      compRight={44}
                      compType="Text"
                    >{`Location`}</Text>
                  </Column>
                </Stack>
              </List>
            </Column>
            <Column
              className="bg-white_A700 font-lora items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[76%]"
              compId="1350"
              comWidth={1920}
              comHeight={359}
              compLeft={0}
              compRight={10}
              compType="Column"
            >
              <Text
                className="font-bold lg:mt-[47px] xl:mt-[54px] 2xl:mt-[60px] 3xl:mt-[72px] mt-[81px] mx-[auto] text-black_902 text-center lg:text-fs17 xl:text-fs20 2xl:text-fs22 3xl:text-fs27 text-fs30 w-[12%]"
                compId="47:256"
                comWidth={236}
                comHeight={38}
                compLeft={10}
                compRight={10}
                compType="Text"
              >{`Our Partnership`}</Text>
              <Image
                src={"images/img_clientlogo_5.svg"}
                className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60.94px] lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] mb-[84.06px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] mt-[95px] mx-[auto] object-contain w-[68%]"
                compId="47:238"
                comWidth={1308.32}
                comHeight={60.94}
                compLeft={10}
                compRight={10}
                compType="Image"
                alt="clientLogo"
              />
            </Column>
            <Stack
              className="font-lora lg:h-[515px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[795px] h-[882px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 3xl:mt-[108px] mt-[120px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[76%]"
              compId="1361"
              comWidth={1920}
              comHeight={882}
              compLeft={0}
              compRight={10}
              compType="Stack"
            >
              <Stack
                className="absolute lg:h-[515px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[795px] h-[882px] inset-[0] w-[100%]"
                compId="1363"
                comWidth={1920}
                comHeight={882}
                compLeft={0}
                compRight={0}
                compType="Stack"
              >
                <Image
                  src={"images/img_background_24.svg"}
                  className="absolute bottom-[0] lg:h-[394px] xl:h-[450px] 2xl:h-[506px] 3xl:h-[607px] h-[674px] object-cover w-[100%]"
                  compId="47:19"
                  comWidth={1920}
                  comHeight={674}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="background"
                />
                <Row
                  className="absolute bg-bluegray_700 inset-x-[0] items-center justify-center mx-[auto] rounded-radius6 top-[0] w-[84%]"
                  compId="1325"
                  comWidth={1620}
                  comHeight={366}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-normal lg:leading-lh44 xl:leading-lh50 2xl:leading-lh57 3xl:leading-lh68 leading-lh7600 my-[107px] lg:my-[62px] xl:my-[71px] 2xl:my-[80px] 3xl:my-[96px] not-italic lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-left text-white_A700 w-[39%]"
                    compId="47:51"
                    comWidth={639}
                    comHeight={152}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Don’t miss our weekly updates about elmna’s alumni story`}</Text>
                  <Stack
                    className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] ml-[163px] lg:ml-[95px] 2xl:my-[107px] 3xl:my-[128px] my-[143px] lg:my-[83px] xl:my-[95px] w-[34%]"
                    compId="1365"
                    comWidth={546}
                    comHeight={80}
                    compLeft={163}
                    compRight={0}
                    compType="Stack"
                  >
                    <Input
                      className="absolute placeholder:bg-transparent bg-transparent border border-gray_300 border-solid font-normal font-opensans inset-[0] not-italic lg:pb-[16px] 2xl:pb-[21px] 3xl:pb-[25px] pb-[28.545px] lg:pl-[20px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] pl-[35px] lg:pt-[17px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[29.545px] xl:py-[19px] rounded-radius60 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_300 text-gray_300 text-left w-[100%]"
                      compId="79"
                      comWidth={546}
                      comHeight={80}
                      compLeft={0}
                      compRight={0}
                      compType="EditText"
                      name="Group79"
                      placeholder={`Enter your email address...`}
                    ></Input>
                    <Button
                      className="absolute bg-gray_300 font-bold font-cairo h-[max-content] inset-y-[0] my-[auto] 2xl:py-[10px] 3xl:py-[13px] py-[14.545px] lg:py-[8px] xl:py-[9px] right-[2%] rounded-radius37 shadow-bs2 text-black_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[36%]"
                      compId="47:48"
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
                compId="1327"
                comWidth={805}
                comHeight={332}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-lora font-normal mx-[auto] not-italic text-center lg:text-fs25 xl:text-fs29 2xl:text-fs33 3xl:text-fs39 text-fs44 text-white_A700 w-[98%]"
                  compId="47:30"
                  comWidth={789}
                  comHeight={76}
                  compLeft={8}
                  compRight={8}
                  compType="Text"
                >{`Get our mobile apps now free`}</Text>
                <Text
                  className="font-cairo font-normal lg:leading-lh18 xl:leading-lh21 2xl:leading-lh24 3xl:leading-lh28 leading-lh3200 lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_300 w-[100%]"
                  compId="47:31"
                  comWidth={805}
                  comHeight={96}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate`}</Text>
                <List
                  className="font-lato lg:gap-[18px] xl:gap-[20px] 2xl:gap-[23px] 3xl:gap-[27px] gap-[31px] grid grid-cols-2 min-h-[auto] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] mx-[auto] w-[61%]"
                  compId="1326"
                  comWidth={493}
                  comHeight={76}
                  compLeft={10}
                  compRight={10}
                  compType="List"
                  orientation="horizontal"
                >
                  <Row
                    className="bg-gray_300 items-start justify-start rounded-radius6 w-[100%]"
                    compId="1352"
                    comWidth={231}
                    comHeight={76}
                    compLeft={0}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_19.svg"}
                      className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] mb-[22px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] object-contain w-[13%]"
                      compId="47:36"
                      comWidth={30}
                      comHeight={38}
                      compLeft={24}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Column
                      className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                      compId="1351"
                      comWidth={107}
                      comHeight={49}
                      compLeft={22}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal not-italic text-black_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[100%]"
                        compId="47:35"
                        comWidth={107}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Text"
                      >{`Download on the`}</Text>
                      <Text
                        className="font-black mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[1px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[84%]"
                        compId="47:34"
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
                    compId="1354"
                    comWidth={231}
                    comHeight={76}
                    compLeft={31}
                    compRight={0}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_vector_20.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] ml-[25px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] object-contain w-[11%]"
                      compId="47:41"
                      comWidth={26}
                      comHeight={32}
                      compLeft={25}
                      compRight={0}
                      compType="Image"
                      alt="Vector"
                    />
                    <Column
                      className="items-start justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] mb-[16px] lg:mb-[9px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[44px] mr-[49px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[46%]"
                      compId="1353"
                      comWidth={107}
                      comHeight={49}
                      compLeft={24}
                      compRight={49}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic text-black_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[63%]"
                        compId="47:40"
                        comWidth={67}
                        comHeight={24}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`GET IT ON`}</Text>
                      <Text
                        className="font-black mt-[1px] text-black_900 lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left w-[100%]"
                        compId="47:39"
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
        </Column>
        <Column
          className="font-opensans w-[100%]"
          compId="1372"
          comWidth={1920}
          comHeight={583}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <footer
            className="w-[100%]"
            compId="47:52"
            comWidth={1920}
            comHeight={583}
            compLeft={0}
            compRight={0}
            compType="Footer"
          >
            <Column
              className="bg-black_900 items-center justify-start w-[100%]"
              compId="47:54"
              comWidth={1920}
              comHeight={583}
              compLeft={0}
              compRight={0}
              compType="Column"
            >
              <Line
                className="bg-gray_100_14 h-[1px] w-[100%]"
                compId="47:62"
                comWidth={1920}
                comHeight={1}
                compLeft={0}
                compRight={0}
                compType="Line"
              />
              <Row
                className="items-start justify-start 2xl:mt-[100px] 3xl:mt-[120px] mt-[134px] lg:mt-[78px] xl:mt-[89px] mx-[auto] w-[84%]"
                compId="47:66"
                comWidth={1610}
                comHeight={303}
                compLeft={10}
                compRight={10}
                compType="Row"
              >
                <Column
                  className="items-start justify-start w-[33%]"
                  compId="47:67"
                  comWidth={530}
                  comHeight={303}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Image
                    src={"images/img_logo_19.svg"}
                    className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] object-contain w-[37%]"
                    compId="47:68"
                    comWidth={198}
                    comHeight={72}
                    compLeft={0}
                    compRight={10}
                    compType="Image"
                    alt="logo"
                  />
                  <Text
                    className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[100%]"
                    compId="47:76"
                    comWidth={530}
                    comHeight={72}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni is a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`}</Text>
                  <Column
                    className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] mt-[30px] w-[100%]"
                    compId="1391"
                    comWidth={530}
                    comHeight={99}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Column
                      className="items-start justify-start w-[100%]"
                      compId="1335"
                      comWidth={530}
                      comHeight={99}
                      compLeft={0}
                      compRight={0}
                      compType="Column"
                    >
                      <Text
                        className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[14%]"
                        compId="47:90"
                        comWidth={72}
                        comHeight={22}
                        compLeft={0}
                        compRight={10}
                        compType="Text"
                      >{`Follow Us`}</Text>
                      <Column
                        className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]"
                        compId="1392"
                        comWidth={530}
                        comHeight={51}
                        compLeft={0}
                        compRight={0}
                        compType="Column"
                      >
                        <Row
                          className="items-center justify-start w-[100%]"
                          compId="1334"
                          comWidth={530}
                          comHeight={51}
                          compLeft={0}
                          compRight={0}
                          compType="Row"
                        >
                          <Image
                            src={"images/img_social01_8.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] ml-[5px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[2%]"
                            compId="47:79"
                            comWidth={12.08}
                            comHeight={22.15}
                            compLeft={5}
                            compRight={0}
                            compType="Image"
                            alt="social01"
                          />
                          <Image
                            src={"images/img_social03_8.svg"}
                            className="lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] ml-[48.92px] object-contain lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]"
                            compId="47:83"
                            comWidth={51}
                            comHeight={51}
                            compLeft={48.92}
                            compRight={0}
                            compType="Image"
                            alt="social03"
                          />
                          <Image
                            src={"images/img_social02_8.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[22.66px] 3xl:mb-[12px] mb-[13.84px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.29px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain w-[6%]"
                            compId="47:81"
                            comWidth={31.46}
                            comHeight={22.66}
                            compLeft={40.29}
                            compRight={0}
                            compType="Image"
                            alt="social02"
                          />
                          <Image
                            src={"images/img_social04_8.svg"}
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] h-[23.16px] mb-[13.84px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[38px] 3xl:ml-[46px] ml-[51.61px] mt-[14px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] object-contain w-[5%]"
                            compId="47:86"
                            comWidth={24.17}
                            comHeight={23.16}
                            compLeft={51.61}
                            compRight={0}
                            compType="Image"
                            alt="social04"
                          />
                          <Image
                            src={"images/img_social05_8.svg"}
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] h-[22.15px] 3xl:mb-[12px] mb-[14.35px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57.64px] 3xl:mt-[13px] mt-[14.5px] 2xl:my-[10px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px] w-[22.15px]"
                            compId="47:88"
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
                  compId="47:126"
                  comWidth={99}
                  comHeight={216}
                  compLeft={104}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                    compId="47:127"
                    comWidth={99}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Why Elmna`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="47:128"
                    comWidth={88}
                    comHeight={162}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[1px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[99%]"
                      compId="47:129"
                      comWidth={87}
                      comHeight={30}
                      compLeft={0}
                      compRight={1}
                      compType="Text"
                    >{`About elmna`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[81%]"
                      compId="47:130"
                      comWidth={71}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Enterprise`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                      compId="47:131"
                      comWidth={88}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Alumni Story`}</Text>
                    <Text
                      className="font-semibold lg:mr-[5px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[90%]"
                      compId="47:132"
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
                  compId="47:118"
                  comWidth={90}
                  comHeight={260}
                  compLeft={164}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                    compId="47:125"
                    comWidth={90}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Resources`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[89%]"
                    compId="47:119"
                    comWidth={80}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[86%]"
                      compId="47:120"
                      comWidth={69}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Download`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                      compId="47:121"
                      comWidth={80}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Help Center`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[59%]"
                      compId="47:122"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Events`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[59%]"
                      compId="47:123"
                      comWidth={47}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Guides`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[65%]"
                      compId="47:124"
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
                  compId="47:110"
                  comWidth={100}
                  comHeight={260}
                  compLeft={124}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[100%]"
                    compId="47:117"
                    comWidth={100}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Community`}</Text>
                  <Column
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[72%]"
                    compId="47:111"
                    comWidth={72}
                    comHeight={206}
                    compLeft={0}
                    compRight={10}
                    compType="Column"
                  >
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[85%]"
                      compId="47:112"
                      comWidth={61}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`About us`}</Text>
                    <Text
                      className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[100%]"
                      compId="47:113"
                      comWidth={72}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`Contact us`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[51%]"
                      compId="47:114"
                      comWidth={37}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Login`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[72%]"
                      compId="47:115"
                      comWidth={52}
                      comHeight={30}
                      compLeft={0}
                      compRight={10}
                      compType="Text"
                    >{`Sign Up`}</Text>
                    <Text
                      className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[39%]"
                      compId="47:116"
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
                  compId="47:91"
                  comWidth={285}
                  comHeight={226}
                  compLeft={114}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs11 xl:text-fs13 2xl:text-fs15 3xl:text-fs18 text-fs20 text-left text-white_A700 w-[62%]"
                    compId="47:92"
                    comWidth={176}
                    comHeight={37}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Get in Touch with Us`}</Text>
                  <Column
                    className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]"
                    compId="1393"
                    comWidth={285}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Row
                      className="items-start justify-start w-[100%]"
                      compId="47:93"
                      comWidth={285}
                      comHeight={60}
                      compLeft={0}
                      compRight={0}
                      compType="Row"
                    >
                      <Image
                        src={"images/img_pin51_10.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[15px] xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] lg:mt-[5px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        compId="47:95"
                        comWidth={24}
                        comHeight={24}
                        compLeft={0}
                        compRight={0}
                        compType="Image"
                        alt="pin51"
                      />
                      <Text
                        className="font-semibold leading-lh xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[86%]"
                        compId="47:94"
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
                    compId="47:98"
                    comWidth={163}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_telephonecall_17.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="47:100"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="telephonecall"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[76%]"
                      compId="47:99"
                      comWidth={124}
                      comHeight={30}
                      compLeft={15}
                      compRight={0}
                      compType="Text"
                    >{`+123 345123 556`}</Text>
                  </Row>
                  <Row
                    className="items-start justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[64%]"
                    compId="47:104"
                    comWidth={183}
                    comHeight={30}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Image
                      src={"images/img_inbox21_16.svg"}
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      compId="47:106"
                      comWidth={24}
                      comHeight={24}
                      compLeft={0}
                      compRight={0}
                      compType="Image"
                      alt="inbox21"
                    />
                    <Text
                      className="font-semibold xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] ml-[15px] lg:ml-[8px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[79%]"
                      compId="47:105"
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
                compId="1336"
                comWidth={1920}
                comHeight={84}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Line
                  className="bg-gray_100_14 h-[1px] w-[100%]"
                  compId="47:61"
                  comWidth={1920}
                  comHeight={1}
                  compLeft={0}
                  compRight={0}
                  compType="Line"
                />
                <Row
                  className="items-center justify-start xl:mb-[18px] 2xl:mb-[20px] 3xl:mb-[24px] mb-[27px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] mx-[auto] lg:my-[15px] w-[84%]"
                  compId="47:56"
                  comWidth={1620}
                  comHeight={30}
                  compLeft={10}
                  compRight={10}
                  compType="Row"
                >
                  <Text
                    className="font-semibold xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-left text-white_A700 w-[23%]"
                    compId="47:63"
                    comWidth={372}
                    comHeight={30}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Elmna University Alumni -   © 2020 All Rights Reserved`}</Text>
                  <Row
                    className="items-center justify-center lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[227px] ml-[253px] w-[23%]"
                    compId="1369"
                    comWidth={367}
                    comHeight={30}
                    compLeft={253}
                    compRight={0}
                    compType="Row"
                  >
                    <Text
                      className="font-normal not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[11%]"
                      compId="47:59"
                      comWidth={41}
                      comHeight={30}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`About`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[8%]"
                      compId="47:58"
                      comWidth={28}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`FAQ`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[25%]"
                      compId="47:57"
                      comWidth={92}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Privacy Policy`}</Text>
                    <Text
                      className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] ml-[50px] not-italic xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-gray_300 text-left w-[15%]"
                      compId="47:60"
                      comWidth={56}
                      comHeight={30}
                      compLeft={50}
                      compRight={0}
                      compType="Text"
                    >{`Sitemap`}</Text>
                  </Row>
                  <Text
                    className="font-semibold lg:ml-[257px] xl:ml-[294px] 2xl:ml-[331px] 3xl:ml-[398px] ml-[442px] xl:text-fs10 2xl:text-fs12 3xl:text-fs14 text-fs16 lg:text-fs9 text-right text-white_A700 w-[11%]"
                    compId="47:65"
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

export default CareerDetailsPage;
