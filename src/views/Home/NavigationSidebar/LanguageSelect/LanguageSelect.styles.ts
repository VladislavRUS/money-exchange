import styled from 'styled-components';

const flagsMap: { [key: string]: string } = {
  ru: 'russia',
  en: 'united-kingdom',
};

export const Wrapper = styled.div`
  padding: 20px;
`;

export const CurrentLanguage = styled.div<{ language: string }>`
  display: inline-block;
  cursor: pointer;
  background-size: cover;
  width: 30px;
  height: 30px;

  background-image: url(${props =>
    `https://cdn.countryflags.com/thumbs/${flagsMap[props.language]}/flag-round-250.png`});
`;
