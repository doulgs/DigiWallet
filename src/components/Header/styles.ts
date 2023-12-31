import styled from "styled-components/native";

export const Container = styled.View`
  height: 184px;
`;
export const ContentIMG = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
`;
export const ContentText = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colorBase.white};
`;
export const SubTitle = styled.Text`
  color: ${(props) => props.theme.colorBase.white};
`;

export const ImageProfile = styled.Image`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backTwo};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
`;
