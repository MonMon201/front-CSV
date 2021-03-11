import React, { useRef } from 'react';
import {
    StyledHeader,
    StyledBar,
    StyledHeaderItemContainer,
    StyledUpload,
    StyledText,
    StyledInputFile,
} from './Header.styles';
import Logo from '../../assets/Logo.svg';
import Upload from '../../assets/Upload.svg';
import { usePageRestClient } from '../../pageRestClient';
import { useDispatch } from 'react-redux';
import { SET, UNSET } from '../../redux/types/root.actions';
import { useSnackbar } from 'react-simple-snackbar';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    const [openSnackbar] = useSnackbar();
    const restClient = usePageRestClient();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useDispatch();
    const submit = (file: File) => {
        if (file) {
            dispatch({ type: UNSET });
            const formData = new FormData();
            formData.append('file', file, file.name);
            restClient
                .upload(formData)
                .then((data) => {
                    dispatch({ type: SET, payload: data });
                    openSnackbar(`Successfully opened`);
                })
                .catch((e) => openSnackbar(`Error: ${e.response.data.message}`))
                .finally(() => {
                    fileInputRef.current!.value = '';
                });
        }
    };
    return (
        <>
            <StyledHeader>
                <StyledBar>
                    <StyledHeaderItemContainer>
                        <img src={Logo} />
                        <StyledText>CSV</StyledText>
                    </StyledHeaderItemContainer>
                    <StyledUpload>
                        <StyledInputFile
                            ref={fileInputRef}
                            type={'file'}
                            accept=".csv"
                            onChange={(e) => (e.target.files ? submit(e.target.files[0]) : null)}
                        />
                        <img src={Upload} />
                        <StyledText>Upload</StyledText>
                    </StyledUpload>
                </StyledBar>
            </StyledHeader>
        </>
    );
};
