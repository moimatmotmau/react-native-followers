import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import { Constants } from "expo-constants";
import {
  ShareButton,
  ShareInput,
  SharePicker,
  ShareText,
} from "../../components";
import { StaticColors } from "../../theme";
import { BoardHeaderWrap } from "./BoardHeader";
import { Image, Platform, Text } from "react-native";
import { ArrowRight, DefaultImage } from "../../assets";
import { useFormik } from "formik";
import axios from "axios";

type Props = {
  route: any;
};

interface ISchemaValues {
  image: string;
  profession: string;
  gender: string;
  birthYear: string;
  introduction: string;
}

export const PersionIntroStepSecond = (props: Props) => {
  const { route } = props;

  let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dyhhp4v5r/image/upload";

  const [image, setImage] = useState<string | null>(null);

  const dataProfession = [
    { label: "Singer", value: "singer" },
    { label: "Doctor", value: "doctor" },
    { label: "Teacher", value: "teacher" },
    { label: "Other", value: "other" },
  ];

  const dataGender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  const dataBirthYear = [
    { label: "1999", value: "1999" },
    { label: "2000", value: "2000" },
    { label: "2001", value: "20001" },
    { label: "Other", value: "other" },
  ];

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permision denied");
        }
      }
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      // let newFile = {
      //   uri: result.uri,
      //   type: result.type,
      //   name: result.fileName,
      // };r

      let base64Img = `data:image/jpg;base64,${result.base64}`;
      let data = {
        file: base64Img,
        upload_preset: "RN_demo",
      };

      try {
        const res = await axios.post(CLOUDINARY_URL, data);
        setFieldValue("image", res.data?.url);
      } catch (error) {
        console.log(error);
      }

      setImage(result.uri);
    }
  };

  const handleSelectJob = (value: string) => {
    setFieldValue("profession", value);
  };

  const handleSelectGender = (value: string) => {
    setFieldValue("gender", value);
  };
  const handleSelectBirth = (value: string) => {
    setFieldValue("birthYear", value);
  };

  const initialValues = {
    image: "",
    profession: dataProfession[0].value,
    gender: dataGender[0].value,
    birthYear: dataBirthYear[0].value,
    introduction: "1234",
  };

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: null,
    onSubmit: (values: ISchemaValues) => {
      const { socialMedia, address, arrayAddress } = route.params;

      const data = {
        socialMedia,
        address,
        arrayAddress,
        image: values.image,
        profession: values.profession,
        gender: values.gender,
        birthYear: values.birthYear,
        introduction: values.introduction,
      };

      console.log(data);
    },
  });

  return (
    <BoardHeaderWrap>
      <Style.View>
        <Style.TitleWrap>
          <Style.NumberStep>
            <ShareText fontSize="18px" label="2" color={StaticColors.white} />
          </Style.NumberStep>
          <ShareText
            fontSize="18px"
            label="Profile picture"
            color={StaticColors.dark}
            fontWeight={400}
          />
        </Style.TitleWrap>
        <Style.ImageWrap>
          {image ? <Style.Image source={{ uri: image }} o /> : <DefaultImage />}
          <Style.AddBtn
            text="Choose picture"
            textColor={StaticColors.primaryButton}
            fontWeight={700}
            onPress={PickImage}
          />
        </Style.ImageWrap>
        <Style.TitleWrap>
          <Style.NumberStep>
            <ShareText fontSize="18px" label="3" color={StaticColors.white} />
          </Style.NumberStep>
          <ShareText
            fontSize="18px"
            label="Profile info"
            color={StaticColors.dark}
            fontWeight={400}
          />
        </Style.TitleWrap>
        <Style.Form>
          <SharePicker
            options={dataProfession}
            label="Profession"
            onValueChange={handleSelectJob}
            selectValue={values.profession}
          />

          <Style.PickerWrap>
            <SharePicker
              options={dataGender}
              onValueChange={handleSelectGender}
              selectValue={values.gender}
              label="Gender"
            />
            <SharePicker
              options={dataBirthYear}
              onValueChange={handleSelectBirth}
              selectValue={values.birthYear}
              label="Birth Year"
            />
          </Style.PickerWrap>
          <ShareInput
            value={values.introduction}
            error={errors.introduction}
            touch={touched.introduction}
            onBlur={handleBlur("introduction")}
            onChangeText={handleChange("introduction")}
            label="Introduction (optional)"
          />

          <Style.StartBtn
            text="Start"
            textColor={StaticColors.white}
            suffixIcon={<ArrowRight />}
            onPress={handleSubmit}
          />
        </Style.Form>
      </Style.View>
    </BoardHeaderWrap>
  );
};

const Style = {
  View: styled.View``,
  NumberStep: styled.View`
    width: 36px;
    height: 36px;
    background-color: ${StaticColors.dark};
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
  `,
  TitleWrap: styled.View`
    margin-top: 35px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 45px;
  `,
  ImageWrap: styled.View`
    justify-content: center;
    align-items: center;
  `,
  AddBtn: styled(ShareButton)`
    margin-top: 20px;
    height: 25px;
    background-color: transparent;
  `,
  Image: styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
  `,
  Form: styled.View`
    flex: 1;
    margin-bottom: 20px;
  `,

  PickerWrap: styled.View`
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
  `,
  StartBtn: styled(ShareButton)`
    height: 56px;
    margin-top: 40px;
  `,
};
