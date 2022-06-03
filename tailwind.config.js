module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_900_35: "#02342435",
        gray_51: "#fbfbfb",
        bluegray_50: "#ebecf0",
        gray_300_59: "#ebe5db59",
        white_A700_70: "#ffffff70",
        gray_50: "#fcfcfc",
        gray_300_33: "#ebe5db33",
        gray_100_14: "#f3f3f314",
        yellow_600: "#e5d32e",
        black_900: "#0d0e0c",
        teal_800: "#1b5f4a",
        black_902: "#080a12",
        black_901: "#000000",
        indigo_800_23: "#3e357823",
        gray_600: "#72737c",
        gray_402: "#aeaeae",
        gray_700: "#5a524c",
        gray_601: "#667966",
        gray_400: "#b2b2b2",
        black_900_0a: "#0000000a",
        gray_401: "#c4c4c4",
        gray_800: "#3c3c3c",
        indigo_50: "#d3ddf5",
        gray_900: "#232521",
        white_A700_2d: "#ffffff2d",
        bluegray_100: "#d1e5df",
        yellow_50: "#fff9f0",
        teal_51: "#e4f0f6",
        light_blue_50: "#d8f0ff",
        teal_50: "#e2f1ed",
        gray_200: "#eaeaea",
        gray_300: "#ebe5db",
        bluegray_900: "#204d3f",
        bluegray_701: "#30715d",
        bluegray_800: "#363848",
        bluegray_602: "#357f68",
        deep_purple_50: "#e9e6fe",
        bluegray_700: "#2b6956",
        bluegray_601: "#3b7e69",
        bluegray_600: "#408972",
        black_900_99: "#00000099",
        bluegray_400: "#8a8a8a",
        white_A700: "#ffffff",
        bluegray_902: "#303030",
        bluegray_901: "#2d2d2d",
      },
      fontFamily: {
        cairo: "Cairo",
        lora: "Lora",
        lato: "Lato",
        opensans: "Open Sans",
        poppins: "Poppins",
      },
      fontSize: {
        fs8: "8px",
        fs9: "9px",
        fs10: "10px",
        fs11: "11px",
        fs12: "12px",
        fs13: "13px",
        fs14: "14px",
        fs15: "15px",
        fs16: "16px",
        fs17: "17px",
        fs18: "18px",
        fs19: "19px",
        fs20: "20px",
        fs21: "21px",
        fs22: "22px",
        fs23: "23px",
        fs24: "24px",
        fs25: "25px",
        fs26: "26px",
        fs27: "27px",
        fs28: "28px",
        fs29: "29px",
        fs30: "30px",
        fs33: "33px",
        fs34: "34px",
        fs35: "35px",
        fs36: "36px",
        fs38: "38px",
        fs39: "39px",
        fs40: "40px",
        fs44: "44px",
        fs45: "45px",
        fs54: "54px",
        fs60: "60px",
      },
      borderRadius: {
        radius2: "2px",
        radius4: "4px",
        radius6: "6px",
        radius8: "8px",
        radius16: "16px",
        radius20: "20px",
        radius37: "37px",
        radius38: "38px",
        radius50: "50px",
        radius501: "50%",
        radius57: "57px",
        radius58: "58px",
        radius60: "60px",
        radius61: "61px",
        radius66: "66px",
        radius68: "68px",
        radius70: "70px",
        radius95: "95px",
      },
      lineHeight: {
        lh: "normal",
        lh14: "14px",
        lh15: "15px",
        lh16: "16px",
        lh17: "17px",
        lh18: "18px",
        lh19: "19px",
        lh21: "21px",
        lh22: "22px",
        lh23: "23px",
        lh24: "24px",
        lh25: "25px",
        lh26: "26px",
        lh28: "28px",
        lh29: "29px",
        lh30: "30px",
        lh33: "33px",
        lh34: "34px",
        lh36: "36px",
        lh37: "37px",
        lh44: "44px",
        lh45: "45px",
        lh46: "46px",
        lh50: "50px",
        lh52: "52px",
        lh53: "53px",
        lh57: "57px",
        lh60: "60px",
        lh67: "67px",
        lh68: "68px",
        lh72: "72px",
        lh81: "81px",
        lh2400: "24.00px",
        lh2600: "26.00px",
        lh2800: "28.00px",
        lh3200: "32.00px",
        lh3400: "34.00px",
        lh3800: "38.00px",
        lh4000: "40.00px",
        lh5000: "50.00px",
        lh7600: "76.00px",
        lh8000: "80.00px",
        lh9000: "90.00px",
      },
      boxShadow: {
        bs2: "0px 19px  29px 0px #3e357823",
        bs1: "0px 23px  49px 0px #0000000a",
        bs: "0px 32px  50px 0px #02342435",
      },
      backgroundImage: {
        gradient: "linear-gradient(206.57373deg ,#30715d,#1b5f4a)",
        gradient1: "linear-gradient(206.05374deg ,#30715d,#1b5f4a)",
        gradient2: "linear-gradient(197.47386deg ,#30715d,#1b5f4a)",
      },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
