'use strict';

import { useContext } from 'react';
// import { Photo } from './types/Photo';
import { RestClientContext } from './restClient';
import { Recruit } from './types/recruit';

const apiEndpoints = {
    UPLOAD: () => `/upload`,
};

export const usePageRestClient = () => {
    const restClient = useContext(RestClientContext);
    return {
        upload: (formData: FormData): Promise<Recruit[]> =>
            restClient.post<Recruit[]>(apiEndpoints.UPLOAD(), formData).then((res) => res.data),
    };
};
