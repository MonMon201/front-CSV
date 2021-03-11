import React from 'react';
import { Wrap, StyledInputFile, StyledIcon, StyledButtonText, StyledButtonContainer } from './Input.file.styles';
// import { InputFile } from './Input.file';
import DarkUpload from '../assets/Upload.svg';

interface InputFileProps {}

export const InputFile: React.FC<InputFileProps> = () => {
    return (
        <Wrap>
            <StyledInputFile type="file" />
            <StyledButtonContainer>
                <StyledIcon src={DarkUpload} />
                <StyledButtonText>Upload</StyledButtonText>
            </StyledButtonContainer>
        </Wrap>
        //    <input name="file" type="file" name="file" id="input__file" class="input input__file" multiple>
        //    <label for="input__file" class="input__file-button">
        //       <span class="input__file-icon-wrapper"><img class="input__file-icon" src="./img/add.svg" alt="Выбрать файл" width="25"></span>
        //       <span class="input__file-button-text">Выберите файл</span>
        //    </label>
    );
};
