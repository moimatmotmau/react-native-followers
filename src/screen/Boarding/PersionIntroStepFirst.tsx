import React from "react";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  ShareButton,
  ShareInput,
  SharePicker,
  ShareText,
} from "../../components";
import { StaticColors } from "../../theme";

import { BoardHeaderWrap } from "./BoardHeader";
import { FieldArray, FormikProvider, useFormik } from "formik";
import { AddressSchema } from "../../validation";
import { ArrowRight } from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../constaint";

type Props = {};

interface IValues {
  socialMedia: string;
  address: string;
  arrayAddress: { socialMedia: string; address: string }[];
}

export const PersionIntroStepFirst = () => {
  const navigation = useNavigation();

  const addressData = [
    { label: "Youtube", value: "youtube" },
    { label: "Facebook", value: "facebook" },
    { label: "Twitter", value: "twitter" },
    { label: "Instagram", value: "instagram" },
  ];
  const initialValues = {
    socialMedia: addressData[0].value,
    address: "dat123@gmail.com",
    arrayAddress: [],
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AddressSchema,
    onSubmit: (values: IValues) => {
      console.log(values);
      navigation.navigate(Routes.PERSION_INTRO_STEP_SECOND, values);
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = formik;

  const handleSocialChange = (value: string) => {
    setFieldValue("socialMedia", value);
  };

  const onChangeSubMedia = (value: string, i?: number) => {
    const selectedItem = values.arrayAddress.find(
      (item: any, index: number) => index === i
    );
    if (selectedItem) {
      const newItem = { ...selectedItem, socialMedia: value };
      const newArrayAddress = values.arrayAddress;
      if (i || i === 0) {
        newArrayAddress[i] = newItem;
        setFieldValue("arrayAddress", newArrayAddress);
      }
    }
  };

  return (
    <BoardHeaderWrap>
      <Style.View>
        <KeyboardAwareScrollView enableOnAndroid>
          <Style.TitleWrap>
            <Style.NumberStep>
              <ShareText label="1" color={StaticColors.white} />
            </Style.NumberStep>
            <Style.Title label="SNS accounts" />
            <ShareText
              label="(Up to 5 accounts)"
              color={StaticColors.label}
              fontSize="14px"
              fontWeight={400}
            />
          </Style.TitleWrap>
          <Style.FormGroup>
            <FormikProvider value={formik}>
              <Style.AddressWrap>
                <SharePicker
                  onValueChange={handleSocialChange}
                  selectValue={values?.socialMedia}
                  options={addressData}
                />
                <Style.Input
                  placehoder="Enter address"
                  touch={touched?.address}
                  error={errors?.address}
                  value={values.address}
                  onBlur={handleBlur("address")}
                  onChangeText={handleChange("address")}
                />
              </Style.AddressWrap>

              <FieldArray
                name="arrayAddress"
                render={(arrayHelpers) => (
                  <>
                    {formik.values?.arrayAddress.map(
                      (item: any, index: number) => (
                        <Style.FormGroup key={index}>
                          <Style.AddressWrap>
                            <SharePicker
                              onValueChange={onChangeSubMedia}
                              selectValue={item.socialMedia}
                              options={addressData}
                              index={index}
                            />

                            <Style.Input
                              value={item.address}
                              onChangeText={handleChange(
                                `arrayAddress[${index}].address`
                              )}
                              placehoder="Enter address"
                              error={
                                errors?.arrayAddress &&
                                errors?.arrayAddress.map((x: any, i: number) =>
                                  x ? (i === index ? x.address : null) : null
                                )
                              }
                              touch={!!touched.arrayAddress?.[index]?.address}
                              onBlur={handleBlur(
                                `arrayAddress[${index}].address`
                              )}
                            />
                          </Style.AddressWrap>
                        </Style.FormGroup>
                      )
                    )}
                    <Style.AddBtn
                      text="+ Add New Address"
                      textColor={StaticColors.label}
                      fontWeight={400}
                      onPress={() =>
                        arrayHelpers.push({
                          socialMedia: addressData[0].value,
                          address: "",
                        })
                      }
                    />
                  </>
                )}
              />
            </FormikProvider>
          </Style.FormGroup>
          <Style.NextBtn
            text="Next"
            textColor={StaticColors.primaryButton}
            suffixIcon={<ArrowRight color={StaticColors.primaryButton} />}
            onPress={handleSubmit}
          />
        </KeyboardAwareScrollView>
      </Style.View>
    </BoardHeaderWrap>
  );
};
const Style = {
  View: styled.View`
    flex: 1;
    margin-top: 35px;
  `,
  TitleWrap: styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,
  Title: styled(ShareText)`
    font-weight: 600;
    font-size: 18px;
    margin: 0 10px;
  `,
  NumberStep: styled.View`
    width: 36px;
    height: 36px;
    background-color: ${StaticColors.dark};
    border-radius: 18px;
    align-items: center;
    justify-content: center;
  `,
  FormGroup: styled.View`
    margin-top: 35px;
  `,
  AddressWrap: styled.View`
    flex-direction: row;
    align-items: flex-start;
  `,
  Input: styled(ShareInput)`
    flex: 1;
    margin-top: -5px;
    margin-left: 10px;
  `,
  AddBtn: styled(ShareButton)`
    background-color: ${StaticColors.white};
    color: ${StaticColors.label};
    border: 1px dashed ${StaticColors.label};
    height: 56px;
    font-weight: 400;
    margin: 40px 0;
  `,
  NextBtn: styled(ShareButton)`
    background-color: ${StaticColors.white};
    border: 1px solid ${StaticColors.primaryButton};
    height: 56px;
    margin-bottom: 40px;
  `,
};
