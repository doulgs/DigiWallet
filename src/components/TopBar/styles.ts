import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  max-height: 80px;
  margin-left: 25px;
  margin-right: 25px;
  background-color: ${(props) => props.theme.colors.backTwo};
  border-radius: 16px;
  margin-top: -40px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Area = styled.View`
  flex: 1;
`;
export const Separator = styled.View`
  width: 1px;
  height: 60%;
  background-color: ${(props) => props.theme.colors.background[500]};
`;

export const Title = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.background[200]};
  margin-bottom: ${(props) => props.theme.spaces.defaultSpace};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.background[400]};
`;

//Top-Header-Tasks

export const ContentTask = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
`;

export const AreaTask = styled.View`
  flex: 1;
  margin-left: 24px;
  align-items: center;
  justify-content: center;
`;
